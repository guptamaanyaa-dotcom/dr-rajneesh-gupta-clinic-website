import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Stethoscope, Heart, Award, Activity, Microscope, ClipboardCheck } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-medical-blue/10 to-medical-green/10">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Welcome to Dr. Rajneesh Gupta Clinic – Expert Care in Respiratory & General Health
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Compassionate, personalized care backed by decades of clinical experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="text-base">
                <Link to="/appointment">Book Appointment</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Highlights</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Excellence in healthcare with a patient-first approach
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-medical-blue/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-medical-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-medical-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Experienced Pulmonologist & General Physician</h3>
                  <p className="text-sm text-muted-foreground">
                    Over 20+ years of clinical expertise in respiratory health and general medicine
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-medical-green/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-medical-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="h-6 w-6 text-medical-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Trusted Patient-Centric Healthcare</h3>
                  <p className="text-sm text-muted-foreground">
                    Compassionate care focused on your individual health needs and wellbeing
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-medical-blue/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-medical-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <ClipboardCheck className="h-6 w-6 text-medical-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Professional Diagnostics & Follow-Up Care</h3>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive testing and continuous monitoring for optimal health outcomes
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
              <p className="text-lg text-muted-foreground">
                Dedicated to providing exceptional healthcare with a focus on respiratory health and overall wellness
              </p>
            </div>
            <div className="flex justify-center">
              <Card className="border-medical-blue/20 hover:shadow-md transition-shadow max-w-md w-full">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-medical-blue/10 rounded-full flex items-center justify-center mb-4">
                    <Microscope className="h-6 w-6 text-medical-blue" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Evidence-Based Treatment</h3>
                  <p className="text-sm text-muted-foreground">
                    All treatments grounded in the latest medical research and proven clinical practices
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive healthcare services tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-medical-blue/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-medical-blue/10 rounded-full flex items-center justify-center mb-4">
                  <Activity className="h-6 w-6 text-medical-blue" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Asthma & COPD Management</h3>
                <p className="text-sm text-muted-foreground">
                  Expert diagnosis and personalized treatment plans for chronic respiratory conditions
                </p>
              </CardContent>
            </Card>

            <Card className="border-medical-green/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-medical-green/10 rounded-full flex items-center justify-center mb-4">
                  <Microscope className="h-6 w-6 text-medical-green" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Tuberculosis & Chest Disease Diagnosis</h3>
                <p className="text-sm text-muted-foreground">
                  Specialized care for TB and other chest diseases with comprehensive testing
                </p>
              </CardContent>
            </Card>

            <Card className="border-medical-blue/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-medical-blue/10 rounded-full flex items-center justify-center mb-4">
                  <ClipboardCheck className="h-6 w-6 text-medical-blue" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Lung Function Tests & Follow-Up Care</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced pulmonary function testing with ongoing monitoring and support
                </p>
              </CardContent>
            </Card>

            <Card className="border-medical-green/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-medical-green/10 rounded-full flex items-center justify-center mb-4">
                  <Stethoscope className="h-6 w-6 text-medical-green" />
                </div>
                <h3 className="font-semibold text-lg mb-2">General Health Consultation</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive primary care for all your general health concerns and preventive care
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Meet Dr. Rajneesh Gupta</h2>
            <p className="text-lg text-muted-foreground">
              Dr. Rajneesh Gupta is a highly experienced Pulmonologist and General Physician with over 20+ years 
              of clinical experience. He specializes in respiratory health, chest diseases, asthma, COPD, 
              tuberculosis care, and patient-centered treatment.
            </p>
            <p className="text-lg text-muted-foreground">
              With qualifications including MBBS and a Diploma in Tuberculosis & Chest Diseases, Dr. Gupta 
              is committed to providing thorough, empathetic care with clear communication and evidence-based treatment.
            </p>
            <div className="pt-4">
              <Button asChild variant="outline" size="lg">
                <Link to="/about">Learn More About Dr. Gupta</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-medical-blue/10 to-medical-green/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Take Care of Your Health?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule an appointment today and experience compassionate, expert healthcare
          </p>
          <Button asChild size="lg" className="text-base">
            <Link to="/appointment">Book Your Appointment</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
