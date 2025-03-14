
import React from 'react';
import { ShoppingCart, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";
import SalesBox from './SalesBox';

const Hero = () => {
  return (
    <div className="relative pt-24 min-h-screen bg-costa-gradient">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] 
                      bg-cover bg-center opacity-10 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center md:items-start mb-10 animate-fade-in">
          <Button 
            size="lg" 
            className="bg-costa-blue hover:bg-costa-blue/90 text-white rounded-full shadow-lg mb-4"
          >
            <ShoppingCart className="mr-2 h-4 w-4" /> 
            Own CostaHouses.com for Just $435 Down
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
          
          {/* Add the GoDaddy and Atom.com logos */}
          <div className="flex items-center justify-center mb-8 bg-white/90 px-6 py-3 rounded-lg shadow-md">
            <p className="text-gray-700 font-medium mr-4">Available on:</p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <img 
                  src="/lovable-uploads/f3224bf9-0c45-4b33-9db3-8fae246b048e.png"
                  alt="Atom.com Logo" 
                  className="h-7 w-auto"
                />
              </div>
              <div className="flex items-center">
                <img 
                  src="https://companieslogo.com/img/orig/GDDY-c88e1201.png?t=1633218319"
                  alt="GoDaddy Logo" 
                  className="h-7 w-auto"
                />
              </div>
            </div>
          </div>
          
          <h1 className="text-center md:text-left mb-6 font-bold text-costa-blue text-4xl md:text-5xl lg:text-6xl">
            Stand Out in the Real Estate Industry!
          </h1>
          
          <h2 className="text-center md:text-left text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 max-w-3xl">
            CostaHouses.com can give you an instantly recognizable brand to attract and engage your target audience.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <SalesBox />
          </div>
          
          <div className="order-1 md:order-2 relative animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-costa-light-blue rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-costa-sand rounded-full opacity-30"></div>
            
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
                alt="Luxury coastal house" 
                className="w-full h-auto object-cover"
              />
              
              <div className="absolute top-4 right-4 bg-costa-coral text-white px-4 py-2 rounded-full font-bold shadow-lg rotate-12">
                Domain For Sale
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
