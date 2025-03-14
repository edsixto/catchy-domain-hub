
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-costa-beige/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-costa-blue mb-4">About This Premium Domain</h2>
            <p className="text-gray-600 text-lg md:text-xl">
              Discover why CostaHouses.com is the perfect foundation for your real estate business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Business meeting discussing real estate" 
                className="rounded-lg shadow-xl"
              />
            </div>
            
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div>
                <h3 className="text-costa-coral font-bold text-xl mb-2">Premium Real Estate Domain</h3>
                <p className="text-gray-700">
                  CostaHouses.com is a premium domain name that perfectly captures the essence of coastal real estate. The term "Costa" evokes images of beautiful coastlines around the world, from Costa Rica to the Costa del Sol.
                </p>
              </div>
              
              <div>
                <h3 className="text-costa-coral font-bold text-xl mb-2">Versatile Business Opportunities</h3>
                <p className="text-gray-700">
                  This domain is perfect for real estate agencies, property developers, vacation rental companies, or individual real estate agents looking to specialize in waterfront and coastal properties.
                </p>
              </div>
              
              <div>
                <h3 className="text-costa-coral font-bold text-xl mb-2">Memorable & Marketable</h3>
                <p className="text-gray-700">
                  Simple, clear, and instantly communicating your business focus, CostaHouses.com is easy to remember and share, making your marketing efforts more effective across all channels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
