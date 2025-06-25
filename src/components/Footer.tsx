import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-red-900 text-white relative z-10">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          {/* <div className="w-full border-b border-gray-600 mb-6"></div> */}
          <div className="flex space-x-4">
            <SocialIcon
              href="https://www.facebook.com/share/r/1G5hHcr4YR/?mibextid=wwXIfr"
              icon={<Facebook size={20} />}
              label="Facebook"
            />
            <SocialIcon
              href="https://www.instagram.com/sixlightmedia/"
              icon={<Instagram size={20} />}
              label="Instagram"
            />
            <SocialIcon
              href="https://linkedin.com"
              icon={<Linkedin size={20} />}
              label="LinkedIn"
            />
          </div>
          <div className="text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Maintained by{" "}
              <Link href="https://www.techadotech.com/" className="text-sky-300">
                Techado Tech Limited
              </Link>
              . All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

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
