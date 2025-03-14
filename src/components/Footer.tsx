
import React from 'react';
import { Check, ShieldCheck, CreditCard, Zap } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const Footer = () => {
  return (
    <footer className="bg-costa-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CostaHouses.com</h3>
            <p className="text-white/80">
              This website is designed and built to showcase what your website could look like. Premium domain name for coastal real estate businesses, available for purchase now.
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
        
        {/* Two separate boxes for acquisition options and benefits */}
        <div className="mt-10 mb-10 grid md:grid-cols-2 gap-6">
          {/* Alternative Acquisition Options Card */}
          <Card className="bg-costa-blue shadow-lg border-2 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 flex flex-col space-y-4">
                  <div className="bg-white p-2 rounded shadow-md">
                    <a href="https://www.atom.com/name/CostaHouses" target="_blank" rel="noopener noreferrer">
                      <img 
                        src="/lovable-uploads/96ed968b-33ea-4b21-9f26-df356e71ee6d.png"
                        alt="GoDaddy Logo" 
                        className="h-8 w-auto"
                      />
                    </a>
                  </div>
                  <div className="bg-white p-2 rounded shadow-md">
                    <a href="https://www.atom.com/name/CostaHouses" target="_blank" rel="noopener noreferrer">
                      <img 
                        src="/lovable-uploads/562bfb97-b35a-45d6-8115-bb08ea2db704.png"
                        alt="Escrow.com Logo" 
                        className="h-8 w-auto"
                      />
                    </a>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2 text-white">Alternative Acquisition Options</h3>
                  <p className="text-white font-medium mb-4">
                    If you'd like to acquire this domain through GoDaddy or another platform, reach out to us, and we'll make it happen.
                  </p>
                  <p className="text-white/90 text-sm italic">
                    All trademarks, logos, and brand names are the property of their respective owners. 
                    Use of these does not imply endorsement or affiliation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Benefits Card */}
          <Card className="bg-costa-blue shadow-lg border-2 border-gray-700">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-white">Our Guarantees</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center p-3 bg-white/10 rounded-lg shadow-md border border-white/20">
                  <Check className="mr-3 h-7 w-7 text-costa-coral bg-white/10 p-1 rounded-full flex-shrink-0" />
                  <p className="text-white font-semibold">Free transfer</p>
                </div>
                <div className="flex items-center p-3 bg-white/10 rounded-lg shadow-md border border-white/20">
                  <ShieldCheck className="mr-3 h-7 w-7 text-costa-coral bg-white/10 p-1 rounded-full flex-shrink-0" />
                  <p className="text-white font-semibold">Free support</p>
                </div>
                <div className="flex items-center p-3 bg-white/10 rounded-lg shadow-md border border-white/20">
                  <CreditCard className="mr-3 h-7 w-7 text-costa-coral bg-white/10 p-1 rounded-full flex-shrink-0" />
                  <p className="text-white font-semibold">Secure payments</p>
                </div>
                <div className="flex items-center p-3 bg-white/10 rounded-lg shadow-md border border-white/20">
                  <Zap className="mr-3 h-7 w-7 text-costa-coral bg-white/10 p-1 rounded-full flex-shrink-0" />
                  <p className="text-white font-semibold">Fast delivery</p>
                </div>
              </div>
            </CardContent>
          </Card>
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
