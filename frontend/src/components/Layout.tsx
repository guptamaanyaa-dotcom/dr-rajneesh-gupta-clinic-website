import { Outlet, Link, useRouterState } from '@tanstack/react-router';
import { Menu, X, Heart, MapPin, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Appointment', path: '/appointment' },
  ];

  const isActive = (path: string) => currentPath === path;

  // Ensure scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [currentPath]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo/Clinic Name */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-primary">Dr. Rajneesh Gupta Clinic</span>
                <span className="text-xs text-muted-foreground hidden sm:block">Respiratory & General Health Care</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive(item.path)
                      ? 'bg-accent text-accent-foreground'
                      : 'text-muted-foreground hover:bg-accent/50 hover:text-foreground'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 space-y-1 border-t">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive(item.path)
                      ? 'bg-accent text-accent-foreground'
                      : 'text-muted-foreground hover:bg-accent/50 hover:text-foreground'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Clinic Info */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Dr. Rajneesh Gupta Clinic</h3>
              <p className="text-sm text-muted-foreground">
                Expert Care in Respiratory & General Health
              </p>
            </div>

            {/* Clinic Locations */}
            <div>
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-medical-blue" />
                Clinic Locations
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div>
                  <p className="font-medium text-foreground">Bhim Nagar</p>
                  <a
                    href="https://maps.app.goo.gl/NmXaEhn2wbVmN9eW6?g_st=ic"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View on Google Maps"
                    className="hover:text-foreground transition-colors inline-block"
                  >
                    <p>Opposite Dusshera Ground</p>
                    <p>Near Aryan Hospital</p>
                    <p>Gurgaon, Haryana – 122001</p>
                  </a>
                </div>
                <div>
                  <p className="font-medium text-foreground">Sector 66</p>
                  <a
                    href="https://maps.app.goo.gl/YQELak2VW9zmqHnU6?g_st=ic"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View on Google Maps"
                    className="hover:text-foreground transition-colors inline-block"
                  >
                    <p>Teekli Road, Badshahpur</p>
                    <p>Gurugram, Haryana – 122101</p>
                  </a>
                </div>
              </div>
            </div>

            {/* Working Hours & Quick Links */}
            <div>
              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-medical-blue" />
                  Working Hours
                </h3>
                <div className="text-sm text-muted-foreground space-y-3">
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
              <div>
                <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/reviews" className="text-muted-foreground hover:text-foreground transition-colors">
                      Patient Reviews
                    </Link>
                  </li>
                  <li>
                    <Link to="/appointment" className="text-muted-foreground hover:text-foreground transition-colors">
                      Book Appointment
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
            <p className="flex items-center justify-center gap-1 flex-wrap">
              © 2025. Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using{' '}
              <a href="https://caffeine.ai" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
