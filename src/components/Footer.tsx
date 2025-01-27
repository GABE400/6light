import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-red-900 text-white relative z-10">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">6 Light Media</h3>
            <p className="text-gray-400">
              We are a Creative Driven, Brand Focused and Design Led Large
              Format Printing and Signage company with a pioneering history in
              large format printing, 3D signage and laser cutting.
            </p>
            <div className="flex space-x-4">
              <SocialIcon
                href="https://www.facebook.com/sixlightmedia/reviews"
                icon={<Facebook size={20} />}
                label="Facebook"
              />

              <SocialIcon
                href="https://instagram.com"
                icon={<Instagram size={20} />}
                label="Instagram"
              />
              <SocialIcon
                href="https://linkedin.com"
                icon={<Linkedin size={20} />}
                label="LinkedIn"
              />
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink href="#home">Home</FooterLink>
              <FooterLink href="#services">Services</FooterLink>
              <FooterLink href="#portfolio">Portfolio</FooterLink>
              <FooterLink href="#about">About</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <FooterLink href="/services/printing">Super Sized 3D</FooterLink>
              <FooterLink href="/services/billboards">3D Signage</FooterLink>
              <FooterLink href="/services/3d-signs">3D Signs</FooterLink>
              <FooterLink href="/services/custom-solutions">
                Large Format Printing
              </FooterLink>
              <FooterLink href="/services/custom-solutions">
                Acrylics Laser Cutting
              </FooterLink>
              <FooterLink href="/services/custom-solutions">
                Steel Laser Cutting
              </FooterLink>
              <FooterLink href="/services/custom-solutions">
                CNC Routing
              </FooterLink>
              <FooterLink href="/services/custom-solutions">
                Fabrication
              </FooterLink>
              <FooterLink href="/services/custom-solutions">
                Vehicle Branding
              </FooterLink>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a
                  href="mailto:info@6lightmedia.com"
                  className="hover:text-primary transition duration-300"
                >
                  marketing@sixlightmedia.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <a
                  href="tel:+11234567890"
                  className="hover:text-primary transition duration-300"
                >
                  +260 971 782 375
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1" />
                <p>Shop No. 91, EastPark Mall</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-100">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} Maintained by{" "}
            <Link href="https://www.techado.dev/" className="text-sky-300">
              Techado Tech Limited
            </Link>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <li>
    <Link
      href={href}
      className="text-gray-400 hover:text-primary transition duration-300"
    >
      {children}
    </Link>
  </li>
);

const SocialIcon = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-primary transition duration-300"
    aria-label={label}
  >
    {icon}
  </a>
);

export default Footer;
