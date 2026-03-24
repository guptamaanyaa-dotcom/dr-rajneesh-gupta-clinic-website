import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-medical-blue/10 to-medical-green/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-muted-foreground">
              Get in touch with us for appointments, inquiries, or any questions
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">
                We're here to help! Reach out to us through any of the following methods.
              </p>
            </div>

            {/* Contact Section */}
            <Card className="border-medical-blue/20">
              <CardHeader>
                <CardTitle className="text-2xl">Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-lg font-semibold mb-2">Dr. Rajneesh Gupta</p>
                  <a 
                    href="tel:9811590851" 
                    className="flex items-center gap-2 text-lg text-medical-blue hover:text-medical-blue/80 transition-colors font-medium"
                  >
                    <Phone className="h-5 w-5" />
                    9811590851
                  </a>
                </div>
              </CardContent>
            </Card>

            <Separator className="my-6" />

            {/* Appointment Booking Section */}
            <Card className="border-medical-green/20">
              <CardHeader>
                <CardTitle className="text-2xl">Appointment Booking</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Gurugram Clinic */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">Gurugram Clinic</h3>
                  <p className="text-muted-foreground mb-2">For booking appointments, please call:</p>
                  <a 
                    href="tel:7290879591" 
                    className="flex items-center gap-2 text-lg text-medical-green hover:text-medical-green/80 transition-colors font-medium"
                  >
                    <Phone className="h-5 w-5" />
                    Dinesh – 72908 79591
                  </a>
                </div>

                <Separator />

                {/* Badshahpur Clinic */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">Badshahpur Clinic</h3>
                  <p className="text-muted-foreground mb-2">For booking appointments, please call:</p>
                  <a 
                    href="tel:8950991164" 
                    className="flex items-center gap-2 text-lg text-medical-green hover:text-medical-green/80 transition-colors font-medium"
                  >
                    <Phone className="h-5 w-5" />
                    Aman – 89509 91164
                  </a>
                </div>
              </CardContent>
            </Card>

            <Separator className="my-6" />

            {/* Clinic Locations */}
            <Card className="border-medical-blue/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-medical-blue" />
                  Clinic 1 - Bhim Nagar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="https://maps.app.goo.gl/NmXaEhn2wbVmN9eW6?g_st=ic"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View on Google Maps"
                  className="text-muted-foreground hover:text-medical-blue transition-colors inline-block"
                >
                  C/O Dr. Rajneesh Gupta Clinic<br />
                  Opposite Dusshera Ground<br />
                  Near Aryan Hospital<br />
                  Bhim Nagar, Gurgaon<br />
                  Haryana – 122001
                </a>
              </CardContent>
            </Card>

            <Card className="border-medical-green/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-medical-green" />
                  Clinic 2 - Sector 66
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="https://maps.app.goo.gl/YQELak2VW9zmqHnU6?g_st=ic"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View on Google Maps"
                  className="text-muted-foreground hover:text-medical-green transition-colors inline-block"
                >
                  Teekli Road<br />
                  Sector 66, Badshahpur<br />
                  Gurugram, Haryana – 122101
                </a>
              </CardContent>
            </Card>

            {/* Additional Contact Details */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-medical-green mt-1" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a 
                    href="mailto:drrgupta51@gmail.com" 
                    className="text-medical-green hover:text-medical-green/80 transition-colors"
                  >
                    drrgupta51@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-medical-blue mt-1" />
                <div>
                  <p className="font-semibold">Working Hours</p>
                  <div className="text-muted-foreground space-y-2">
                    <div>
                      <p className="font-medium text-foreground">Gurugram Clinic Timings</p>
                      <p>Monday to Saturday: 9:30 AM – 11:00 AM | 6:00 PM – 8:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Badshahpur Clinic Timings</p>
                      <p>Monday to Saturday: 11:30 AM – 2:30 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
