
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-costa-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CostaHouses.com</h3>
            <p className="text-white/80">
              Premium domain name for coastal real estate businesses, available for purchase now.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#benefits" className="text-white/80 hover:text-white transition-colors">Benefits</a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-white/80">
                <span className="font-medium">Email:</span> info@costahouses.com
              </li>
              <li className="text-white/80">
                <span className="font-medium">Support:</span> support@costahouses.com
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/80">
            &copy; {new Date().getFullYear()} CostaHouses.com. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-white/80 hover:text-white transition-colors mr-4">
              Privacy Policy
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
