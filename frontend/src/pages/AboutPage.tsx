import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Heart, Target, CheckCircle, Eye, Compass, Shield } from 'lucide-react';
import { SiLinkedin } from 'react-icons/si';

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-medical-blue/10 to-medical-green/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Dr. Rajneesh Gupta</h1>
            <p className="text-lg text-muted-foreground">
              Dedicated to providing exceptional respiratory and general healthcare with compassion and expertise
            </p>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Professional Biography</h2>
                <a
                  href="https://www.linkedin.com/in/dr-rajneesh-gupta-aa0807274/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-medical-blue hover:text-medical-blue/80 transition-colors"
                  aria-label="Dr. Rajneesh Gupta LinkedIn Profile"
                >
                  <SiLinkedin className="h-8 w-8" />
                </a>
              </div>
              <div className="bg-gradient-to-br from-medical-blue/5 to-medical-green/5 rounded-lg p-8 space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Dr. Rajneesh Gupta is a distinguished Pulmonologist and General Physician with over 20+ years 
                  of clinical experience. He specializes in respiratory health, chest diseases, asthma, COPD, 
                  tuberculosis care, and patient-centered treatment.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Throughout his career, Dr. Gupta has been committed to providing personalized, thorough, and 
                  empathetic care to each patient. His approach combines evidence-based medicine with a deep 
                  understanding of individual patient needs, ensuring the best possible outcomes.
                </p>
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-4">Areas of Expertise</h3>
                <ul className="space-y-2">
                  {[
                    'Respiratory Health & Chest Diseases',
                    'Asthma Management',
                    'COPD Treatment',
                    'Tuberculosis Care',
                    'General Medicine',
                    'Preventive Healthcare',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-medical-green" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <GraduationCap className="h-12 w-12 text-medical-blue mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Education & Qualifications</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-medical-blue/20">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">MBBS</h3>
                  <p className="text-muted-foreground">
                    Bachelor of Medicine, Bachelor of Surgery - Foundation in medical science and clinical practice
                  </p>
                </CardContent>
              </Card>
              <Card className="border-medical-green/20">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Diploma in Tuberculosis & Chest Diseases</h3>
                  <p className="text-muted-foreground">
                    Specialized training in respiratory medicine and chest diseases
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Treatment Approach</h2>
              <p className="text-lg text-muted-foreground">
                Dr. Gupta's philosophy centers on personalized, thorough, and empathetic care
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center border-medical-blue/20">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-medical-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-6 w-6 text-medical-blue" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Personalized Care</h3>
                  <p className="text-sm text-muted-foreground">
                    Every patient receives individualized attention and treatment plans tailored to their specific needs
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-medical-green/20">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-medical-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-6 w-6 text-medical-green" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Thorough Examination</h3>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive assessments to accurately diagnose and effectively treat health conditions
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-medical-blue/20">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-medical-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-6 w-6 text-medical-blue" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Empathetic Care</h3>
                  <p className="text-sm text-muted-foreground">
                    Compassionate approach that prioritizes patient comfort and understanding
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Philosophy Section */}
      <section className="py-16 bg-gradient-to-br from-medical-blue/10 to-medical-green/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Mission, Vision & Clinic Philosophy</h2>
              <p className="text-lg text-muted-foreground">
                Our commitment to excellence in healthcare
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-medical-blue/20">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                    <Compass className="h-8 w-8 text-medical-blue" />
                  </div>
                  <h3 className="font-semibold text-xl mb-4">Mission</h3>
                  <p className="text-muted-foreground">
                    To provide compassionate, evidence-based healthcare that prioritizes patient wellbeing, 
                    clear communication, and long-term health outcomes through personalized treatment plans.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-medical-green/20">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                    <Eye className="h-8 w-8 text-medical-green" />
                  </div>
                  <h3 className="font-semibold text-xl mb-4">Vision</h3>
                  <p className="text-muted-foreground">
                    To be the trusted healthcare partner for our community, recognized for excellence in 
                    respiratory care and general medicine, where every patient feels valued and receives 
                    the highest standard of care.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-medical-blue/20">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                    <Shield className="h-8 w-8 text-medical-blue" />
                  </div>
                  <h3 className="font-semibold text-xl mb-4">Philosophy</h3>
                  <p className="text-muted-foreground">
                    We believe in treating the whole person, not just symptoms. Our philosophy emphasizes 
                    empathy, safety, and long-term follow-ups to ensure sustained health and wellness for 
                    every patient.
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
