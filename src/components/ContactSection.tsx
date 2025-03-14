
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-costa-blue mb-4">Interested in This Domain?</h2>
            <p className="text-gray-600 text-lg md:text-xl">
              Contact us for more information or to discuss purchasing options
            </p>
          </div>
          
          <Card className="shadow-lg border-costa-sand/40 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle className="text-costa-blue">Get in Touch</CardTitle>
              <CardDescription>
                Fill out the form below and we'll respond within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4 opacity-70">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Your Name
                    </label>
                    <Input id="name" placeholder="John Smith" disabled />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <Input id="email" type="email" placeholder="john@example.com" disabled />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <Input id="subject" placeholder="I'm interested in CostaHouses.com" disabled />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Please provide me with more information about purchasing this domain..." 
                    rows={5}
                    disabled
                  />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button 
                type="submit" 
                onClick={handleSubmit}
                className="w-full bg-costa-blue hover:bg-costa-blue/90 text-white"
                disabled
              >
                Send Message
              </Button>
            </CardFooter>
          </Card>
          
          <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-gray-600 mb-4">Prefer to talk directly?</p>
            <a href="mailto:info@costahouses.com" className="text-costa-blue font-semibold hover:underline text-lg">
              info@costahouses.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
