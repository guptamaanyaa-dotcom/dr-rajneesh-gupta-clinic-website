import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Star } from 'lucide-react';
import { useGetAllReviews, useAddReview } from '@/hooks/useQueries';
import { toast } from 'sonner';

export default function ReviewsPage() {
  const { data: reviews = [], isLoading } = useGetAllReviews();
  const addReviewMutation = useAddReview();

  const [formData, setFormData] = useState({
    patientName: '',
    rating: 5,
    comment: '',
  });

  const averageRating =
    reviews.length > 0
      ? reviews.reduce((sum, review) => sum + Number(review.rating), 0) / reviews.length
      : 0;

  const formatDate = (timestamp: bigint) => {
    const date = new Date(Number(timestamp) / 1000000);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.patientName.trim() || !formData.comment.trim()) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      await addReviewMutation.mutateAsync({
        patientName: formData.patientName,
        rating: BigInt(formData.rating),
        comment: formData.comment,
      });
      
      setFormData({ patientName: '', rating: 5, comment: '' });
      toast.success('Thank you for your review!');
    } catch (error) {
      toast.error('Failed to submit review. Please try again.');
    }
  };

  const renderStars = (rating: number, interactive: boolean = false, onRate?: (rating: number) => void) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-5 w-5 ${
              star <= rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300'
            } ${interactive ? 'cursor-pointer hover:scale-110 transition-transform' : ''}`}
            onClick={() => interactive && onRate && onRate(star)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-medical-blue/10 to-medical-green/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Patient Reviews</h1>
            <p className="text-lg text-muted-foreground">
              Read what our patients have to say about their experience
            </p>
          </div>
        </div>
      </section>

      {/* Overall Rating Section */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-medical-blue/20">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-medical-blue mb-2">
                      {averageRating.toFixed(1)}
                    </div>
                    <div className="flex justify-center mb-2">
                      {renderStars(Math.round(averageRating))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Based on {reviews.length} {reviews.length === 1 ? 'review' : 'reviews'}
                    </p>
                  </div>
                  <div className="hidden md:block w-px h-24 bg-border" />
                  <div className="text-center md:text-left">
                    <p className="text-lg font-semibold mb-2">Excellent Care</p>
                    <p className="text-muted-foreground max-w-md">
                      Our patients consistently rate us highly for compassionate care, 
                      thorough examinations, and effective treatments.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Carousel */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Patient Testimonials</h2>
            {isLoading ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Loading reviews...</p>
              </div>
            ) : reviews.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No reviews yet. Be the first to share your experience!</p>
              </div>
            ) : (
              <Carousel className="w-full">
                <CarouselContent>
                  {reviews.map((review) => (
                    <CarouselItem key={Number(review.id)} className="md:basis-1/2 lg:basis-1/3">
                      <Card className="h-full hover:shadow-md transition-shadow">
                        <CardHeader>
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex-1">
                              <CardTitle className="text-lg">{review.patientName}</CardTitle>
                              <p className="text-sm text-muted-foreground mt-1">
                                {formatDate(review.dateSubmitted)}
                              </p>
                            </div>
                          </div>
                          {renderStars(Number(review.rating))}
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground line-clamp-4">{review.comment}</p>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            )}
          </div>
        </div>
      </section>

      {/* All Reviews List */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">All Reviews</h2>
            {reviews.length > 0 && (
              <div className="space-y-6">
                {reviews.map((review) => (
                  <Card key={Number(review.id)} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{review.patientName}</CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">
                            {formatDate(review.dateSubmitted)}
                          </p>
                        </div>
                        {renderStars(Number(review.rating))}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{review.comment}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Review Submission Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Share Your Experience</CardTitle>
                <p className="text-muted-foreground">
                  Your feedback helps us improve and helps others make informed decisions
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="patientName">Your Name</Label>
                    <Input
                      id="patientName"
                      value={formData.patientName}
                      onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Rating</Label>
                    {renderStars(formData.rating, true, (rating) =>
                      setFormData({ ...formData, rating })
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="comment">Your Review</Label>
                    <Textarea
                      id="comment"
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                      placeholder="Share your experience with Dr. Rajneesh Gupta Clinic..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={addReviewMutation.isPending}
                  >
                    {addReviewMutation.isPending ? 'Submitting...' : 'Submit Review'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
