
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-costa-blue mb-4">Why Own CostaHouses.com?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl">
            Investing in the right domain name is crucial for establishing a strong online presence in the competitive real estate market.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-costa-sand/60 shadow-md hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
              <CardHeader>
                <div className="w-12 h-12 bg-costa-beige rounded-full flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <CardTitle className="text-costa-blue">{benefit.title}</CardTitle>
                <CardDescription>{benefit.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{benefit.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const benefits = [
  {
    title: "Brand Recognition",
    description: "Establish instant credibility",
    content: "CostaHouses.com instantly communicates your focus on coastal properties, making your brand memorable and relevant to your target audience.",
    icon: <svg className="w-6 h-6 text-costa-coral" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16V21M12 16L7 13.5V6.5M12 16L17 13.5V6.5M7 6.5L12 9L17 6.5M7 6.5L3 4.5L12 3L21 4.5L17 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
  },
  {
    title: "SEO Advantage",
    description: "Rank higher in search results",
    content: "A domain that includes 'Costa' and 'Houses' can help you rank better in search results for people looking for coastal properties and vacation homes.",
    icon: <svg className="w-6 h-6 text-costa-coral" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
  },
  {
    title: "Market Positioning",
    description: "Target the luxury coastal market",
    content: "Position your business perfectly for the high-value coastal real estate market, appealing to both buyers and sellers looking for beachfront properties.",
    icon: <svg className="w-6 h-6 text-costa-coral" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 5C13 3.89543 12.1046 3 11 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V11M13 5H5M13 5V3.12602C13 3.04233 13.0423 3 13.126 3C13.2336 3 13.3325 3.05268 13.3892 3.14683L14.4458 4.85317C14.5025 4.94732 14.6014 5 14.709 5H19C20.1046 5 21 5.89543 21 7V11M9 10H14M9 14H19M9 18H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
  },
  {
    title: "Global Appeal",
    description: "Attract international investors",
    content: "The term 'Costa' has international recognition and appeal, helping you reach global investors looking for coastal property investments.",
    icon: <svg className="w-6 h-6 text-costa-coral" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12H3M12 21C7.02944 21 3 16.9706 3 12M12 21C10.6868 21 9.38642 19.2091 8.8579 16.5M12 21C13.3132 21 14.6136 19.2091 15.1421 16.5M3 12C3 7.02944 7.02944 3 12 3M3 12C4.56635 12 6.01234 13.2494 7 15M12 3C14.4853 3 16.5 6.41015 16.5 10.5C16.5 14.5899 14.4853 18 12 18C9.51472 18 7.5 14.5899 7.5 10.5C7.5 6.41015 9.51472 3 12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
  },
  {
    title: "Marketing Potential",
    description: "Create compelling campaigns",
    content: "The name lends itself to attractive marketing campaigns centered around coastal living, vacation homes, and luxury real estate.",
    icon: <svg className="w-6 h-6 text-costa-coral" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 8.00001V3.00001M21 8.00001H11M21.4 20H12.6C12.2686 20 12 19.7314 12 19.4V11.6C12 11.2686 12.2686 11 12.6 11H21.4C21.7314 11 22 11.2686 22 11.6V19.4C22 19.7314 21.7314 20 21.4 20ZM7.9 20H2.6C2.26863 20 2 19.7314 2 19.4V4.6C2 4.26863 2.26863 4 2.6 4H7.9C8.23137 4 8.5 4.26863 8.5 4.6V19.4C8.5 19.7314 8.23137 20 7.9 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
  },
  {
    title: "Business Expansion",
    description: "Scale your real estate business",
    content: "Use this domain as the foundation for a specialized real estate business focusing on coastal properties, with room to grow into different markets.",
    icon: <svg className="w-6 h-6 text-costa-coral" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 3L15 9M15 9V4M15 9H20M10 4.5V6.5V4.5ZM10 18.5V20.5V18.5ZM4.5 15H6.5H4.5ZM4.5 10H6.5H4.5ZM18.5 15H20.5H18.5ZM4 21.5L21 4L4 21.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
  },
];

export default BenefitsSection;
