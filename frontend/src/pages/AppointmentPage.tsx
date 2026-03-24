import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { useBookAppointment } from '@/hooks/useQueries';
import { toast } from 'sonner';

export default function AppointmentPage() {
  const bookAppointmentMutation = useBookAppointment();
  const [formData, setFormData] = useState({
    patientName: '',
    email: '',
    phone: '',
    clinicLocation: '',
    preferredDate: '',
    preferredTime: '',
    reason: '',
  });

  const timeSlots = [
    '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
    '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.patientName.trim() || !formData.email.trim() || !formData.phone.trim() ||
        !formData.clinicLocation || !formData.preferredDate || !formData.preferredTime) {
      toast.error('Please fill in all required fields');
      return;
    }

    try {
      const dateTimestamp = BigInt(new Date(formData.preferredDate).getTime() * 1000000);
      
      await bookAppointmentMutation.mutateAsync({
        patientName: formData.patientName,
        email: formData.email,
        phone: formData.phone,
        clinicLocation: formData.clinicLocation,
        preferredDate: dateTimestamp,
        preferredTime: formData.preferredTime,
        reason: formData.reason,
      });
      
      setFormData({
        patientName: '',
        email: '',
        phone: '',
        clinicLocation: '',
        preferredDate: '',
        preferredTime: '',
        reason: '',
      });
      
      toast.success('Appointment request submitted successfully! We will contact you shortly to confirm.');
    } catch (error) {
      toast.error('Failed to book appointment. Please try again.');
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-medical-blue/10 to-medical-green/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Consultation with Dr. Rajneesh Gupta</h1>
            <p className="text-lg text-muted-foreground">
              Schedule your appointment and take the first step towards better health
            </p>
          </div>
        </div>
      </section>

      {/* Clinic Timings Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Clinic Timings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Gurgaon Clinic Timings */}
              <Card className="border-medical-blue/20">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-medical-blue" />
                    Gurgaon Clinic Timings
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">Bhim Nagar, Gurgaon</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">Monday</span>
                      <span className="text-muted-foreground">9:30 AM – 11:00 AM | 6:00 PM – 8:00 PM</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">Tuesday</span>
                      <span className="text-muted-foreground">9:30 AM – 11:00 AM | 6:00 PM – 8:00 PM</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">Wednesday</span>
                      <span className="text-muted-foreground">9:30 AM – 11:00 AM | 6:00 PM – 8:00 PM</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">Thursday</span>
                      <span className="text-muted-foreground">9:30 AM – 11:00 AM | 6:00 PM – 8:00 PM</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">Friday</span>
                      <span className="text-muted-foreground">9:30 AM – 11:00 AM | 6:00 PM – 8:00 PM</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">Saturday</span>
                      <span className="text-muted-foreground">9:30 AM – 11:00 AM | 6:00 PM – 8:00 PM</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="font-medium">Sunday</span>
                      <span className="text-muted-foreground/60 italic">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Badshahpur Clinic Timings */}
              <Card className="border-medical-green/20">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-medical-green" />
                    Badshahpur Clinic Timings
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">Teekli Road, Sector 66, Badshahpur</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">Monday</span>
                      <span className="text-muted-foreground">11:30 AM – 2:30 PM</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">Tuesday</span>
                      <span className="text-muted-foreground">11:30 AM – 2:30 PM</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">Wednesday</span>
                      <span className="text-muted-foreground">11:30 AM – 2:30 PM</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">Thursday</span>
                      <span className="text-muted-foreground">11:30 AM – 2:30 PM</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">Friday</span>
                      <span className="text-muted-foreground">11:30 AM – 2:30 PM</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">Saturday</span>
                      <span className="text-muted-foreground">11:30 AM – 2:30 PM</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="font-medium">Sunday</span>
                      <span className="text-muted-foreground/60 italic">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Appointment Request Form</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll contact you to confirm your appointment
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Patient Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Patient Information</h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="patientName">Full Name *</Label>
                      <Input
                        id="patientName"
                        value={formData.patientName}
                        onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 XXXXX XXXXX"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Appointment Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Appointment Details</h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="clinicLocation">Clinic Location *</Label>
                      <Select
                        value={formData.clinicLocation}
                        onValueChange={(value) => setFormData({ ...formData, clinicLocation: value })}
                      >
                        <SelectTrigger id="clinicLocation">
                          <SelectValue placeholder="Select clinic location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Bhim Nagar">
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              Bhim Nagar - Opposite Dusshera Ground
                            </div>
                          </SelectItem>
                          <SelectItem value="Badshahpur">
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              Badshahpur - Teekli Road, Sector 66
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="preferredDate">Select Date *</Label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                          <Input
                            id="preferredDate"
                            type="date"
                            value={formData.preferredDate}
                            onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                            className="pl-10"
                            min={new Date().toISOString().split('T')[0]}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="preferredTime">Select Time *</Label>
                        <Select
                          value={formData.preferredTime}
                          onValueChange={(value) => setFormData({ ...formData, preferredTime: value })}
                        >
                          <SelectTrigger id="preferredTime">
                            <SelectValue placeholder="Select time slot" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                <div className="flex items-center gap-2">
                                  <Clock className="h-4 w-4" />
                                  {time}
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="reason">Reason for Visit</Label>
                      <Textarea
                        id="reason"
                        value={formData.reason}
                        onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                        placeholder="Please describe your symptoms or reason for consultation..."
                        rows={4}
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={bookAppointmentMutation.isPending}
                  >
                    {bookAppointmentMutation.isPending ? 'Submitting...' : 'Submit Request'}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    * Required fields. We will contact you within 24 hours to confirm your appointment.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-medical-blue/20">
                <CardHeader>
                  <CardTitle className="text-lg">What to Bring</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Previous medical records (if any)</li>
                    <li>• List of current medications</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-medical-green/20">
                <CardHeader>
                  <CardTitle className="text-lg">Cancellation Policy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Please notify us at least 24 hours in advance if you need to reschedule 
                    or cancel your appointment. This helps us serve other patients better.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
