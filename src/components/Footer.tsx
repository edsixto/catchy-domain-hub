
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
        
        {/* Alternative Acquisition Options Card */}
        <div className="mt-10 mb-10">
          <Card className="bg-costa-blue/60 border-costa-coral shadow-lg backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-white">Alternative Acquisition Options</h3>
                  <p className="text-white mb-4">
                    If you'd like to acquire this domain through GoDaddy or another platform, reach out to us, and we'll make it happen.
                  </p>
                  
                  <div className="flex items-center mt-4 mb-6">
                    <div className="bg-white p-2 rounded mr-3">
                      <img 
                        src="https://companieslogo.com/img/orig/GDDY-c88e1201.png?t=1633218319"
                        alt="GoDaddy Logo" 
                        className="h-6"
                      />
                    </div>
                    <span className="text-white text-sm italic">
                      All trademarks, logos, and brand names are the property of their respective owners. 
                      Use of these does not imply endorsement or affiliation.
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-center p-3 bg-costa-blue/80 rounded-lg shadow-md">
                    <Check className="mr-3 h-6 w-6 text-costa-coral flex-shrink-0" />
                    <p className="text-white font-medium">Free transfer</p>
                  </div>
                  <div className="flex items-center p-3 bg-costa-blue/80 rounded-lg shadow-md">
                    <ShieldCheck className="mr-3 h-6 w-6 text-costa-coral flex-shrink-0" />
                    <p className="text-white font-medium">Free support</p>
                  </div>
                  <div className="flex items-center p-3 bg-costa-blue/80 rounded-lg shadow-md">
                    <CreditCard className="mr-3 h-6 w-6 text-costa-coral flex-shrink-0" />
                    <p className="text-white font-medium">Secure payments</p>
                  </div>
                  <div className="flex items-center p-3 bg-costa-blue/80 rounded-lg shadow-md">
                    <Zap className="mr-3 h-6 w-6 text-costa-coral flex-shrink-0" />
                    <p className="text-white font-medium">Fast delivery</p>
                  </div>
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
