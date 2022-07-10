import React from "react";
import { ReactComponent as VercelImg } from "../Assets/vercel.svg";
import { ReactComponent as Aws } from "../Assets/aws.svg";
import { ReactComponent as Paypal } from "../Assets/paypal.svg";
import { ReactComponent as Shopify } from "../Assets/shopify.svg";
import { ReactComponent as Twilio } from "../Assets/twilio.svg";
import { ReactComponent as Washingtonpost } from "../Assets/washingtonpost.svg";

function Teams() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-5xl">
        <p className="text-gray-500 uppercase font-semibold text-sm text-center">
          Trusted by teams from around the world
        </p>
        <div className="grid grid-cols-2 gap-8 mt-6 md:grid-cols-6">
          <div className="flex justify-center col-span-1 filter contrast-50 grayscale dark:opacity-50 md:col-span-2 lg:col-span-1 ">
            <VercelImg className="h-6" />
          </div>
          <div className="flex justify-center col-span-1 filter contrast-50 grayscale dark:opacity-50 md:col-span-2 lg:col-span-1 ">
            <Aws className="h-6" />
          </div>
          <div className="flex justify-center col-span-1 filter contrast-50 grayscale dark:opacity-50 md:col-span-2 lg:col-span-1 ">
            <Paypal className="h-6" />
          </div>
          <div className="flex justify-center col-span-1 filter contrast-50 grayscale dark:opacity-50 md:col-span-2 lg:col-span-1 ">
            <Shopify className="h-6" />
          </div>
          <div className="flex justify-center col-span-1 filter contrast-50 grayscale dark:opacity-50 md:col-span-2 lg:col-span-1 ">
            <Twilio className="h-6" />
          </div>
          <div className="flex justify-center col-span-1 filter contrast-50 grayscale dark:opacity-50 md:col-span-2 lg:col-span-1 ">
            <Washingtonpost className="h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teams;
