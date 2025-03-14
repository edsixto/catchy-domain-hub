
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ShoppingCart, ExternalLink } from 'lucide-react';

const SalesBox = () => {
  return (
    <Card className="border-costa-blue/30 shadow-xl bg-gradient-to-br from-white to-costa-beige">
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl md:text-3xl text-costa-blue">
          CostaHouses.com is Available – Own It for Just $995 Down
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start">
          <Check className="mr-3 h-5 w-5 text-costa-coral mt-1 flex-shrink-0" />
          <p className="text-gray-700 text-lg">
            Finance the final 9 payments for just $1,000/month.
          </p>
        </div>
        <div className="flex items-start">
          <Check className="mr-3 h-5 w-5 text-costa-coral mt-1 flex-shrink-0" />
          <p className="text-gray-700 text-lg">
            Or secure it with a one-time payment of $9,995.
          </p>
        </div>
        <div className="flex items-start">
          <Check className="mr-3 h-5 w-5 text-costa-coral mt-1 flex-shrink-0" />
          <p className="text-gray-700 text-lg">
            Includes free domain transfer and escrow service.
          </p>
        </div>
        <div className="flex items-start">
          <Check className="mr-3 h-5 w-5 text-costa-coral mt-1 flex-shrink-0" />
          <p className="text-gray-700 text-lg">
            Start building your real estate empire today.
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-costa-blue hover:bg-costa-blue/90 text-white py-6 text-lg">
          <ShoppingCart className="mr-2 h-5 w-5" />
          Purchase Domain Now
          <ExternalLink className="ml-2 h-5 w-5" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SalesBox;
