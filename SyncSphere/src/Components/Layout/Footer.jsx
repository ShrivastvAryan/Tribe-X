import { Star, Twitter, Linkedin, Github, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-linear-to-br from-purple-900  to-slate-900 text-white overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-20 w-1 h-1 bg-white rounded-full opacity-60"></div>
        <div className="absolute top-32 right-32 w-1 h-1 bg-white rounded-full opacity-40"></div>
        <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-white rounded-full opacity-50"></div>
        <div className="absolute top-20 right-1/3 w-1 h-1 bg-white rounded-full opacity-30"></div>
        <div className="absolute bottom-40 right-20 w-1 h-1 bg-white rounded-full opacity-70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-2 rounded-lg mr-3">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">SyncSphere</h3>
            </div>
            <p className="text-purple-200 mb-6">
              The ultimate platform connecting teams and organizations with
              seamless collaboration tools. Transform your workflow with perfect
              synchronization.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-purple-800/50 p-2 rounded-lg hover:bg-purple-700/50 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-purple-800/50 p-2 rounded-lg hover:bg-purple-700/50 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-purple-800/50 p-2 rounded-lg hover:bg-purple-700/50 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-purple-800/50 p-2 rounded-lg hover:bg-purple-700/50 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 border-b-2 border-pink-500 pb-2 inline-block">
              Platform
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  Find Teams
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  Project Hosting
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  Team Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  Success Stories
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 border-b-2 border-pink-500 pb-2 inline-block">
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  API Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  Webinars
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 border-b-2 border-pink-500 pb-2 inline-block">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  Press Kit
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  Partners
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 border-b-2 border-pink-500 pb-2 inline-block">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  GDPR
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-purple-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-purple-200 text-sm mb-4 md:mb-0">
              © 2025 SyncSphere. All rights reserved. Made with ❤️ by SyncSphere
              organizers.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a
                href="#"
                className="text-purple-200 hover:text-white transition-colors"
              >
                Status
              </a>
              <a
                href="#"
                className="text-purple-200 hover:text-white transition-colors"
              >
                Security
              </a>
              <div className="flex items-center text-purple-200">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                Trusted by 10,000+ teams
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
