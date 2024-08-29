import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TbCheck } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";

const PricingPlan = () => {
  return (
    <>
      <div className="dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
        <div className="hidden h-full lg:flex absolute pointer-events-none inset-0 items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>
        <h2 className="text-3xl sm:text-7xl font-semibold text-center text-neutral-800 dark:text-neutral-200 py-4 sm:py-8">
          Pricing Plans
        </h2>
        <p className="text-center text-lg sm:text-2xl text-neutral-600 dark:text-neutral-400">
          Get the most of your needs
        </p>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-y-8 lg:gap-x-8 max-w-7xl mx-6 sm:mx-auto py-8">
          <Card className="w-full md:w-1/2 bg-white dark:bg-neutral-950 p-6 border-[1px] border-neutral-300 dark:border-neutral-600 rounded-xl">
            <CardHeader>
              <p className="text-2xl font-bold mb-2 text-neutral-600 dark:text-neutral-300">
                Free
              </p>
              <p className="text-lg mb-6 text-neutral-600 dark:text-neutral-300">
                Everything to start
              </p>
              <CardTitle>
                {" "}
                <p className="text-6xl font-bold mb-8">
                  $0<span className="font-normal text-xl">/month</span>
                </p>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <span className="flex items-center gap-2 mb-2 text-base">
                <TbCheck className="w-4 h-4 text-green-500" />
                5,000 requests/month
              </span>

              <span className="flex items-center gap-2 mb-2 text-base">
                <TbCheck className="w-4 h-4 text-green-500" />
                Basic Image Generation
              </span>

              <span className="flex items-center gap-2 mb-2 text-base">
                <TbCheck className="w-4 h-4 text-green-500" />
                Basic in app support
              </span>

              <span className="flex items-center gap-2 mb-2 text-base">
                <RxCross2 className="w-4 h-4 text-red-500" />
                Downloading Images
              </span>
            </CardContent>
            <CardFooter>
              <button className="w-full py-4 mt-8 font-semibold bg-black dark:bg-white text-white dark:text-black rounded-lg uppercase">
                Sign up free
              </button>
            </CardFooter>
          </Card>
          <Card className="w-full md:w-1/2 bg-white dark:bg-neutral-950 p-6 border-[1px] border-neutral-300 dark:border-neutral-600 rounded-xl">
            <CardHeader>
              <p className="text-2xl font-bold mb-2 text-neutral-600 dark:text-neutral-300">
                Professional
              </p>
              <p className="text-lg mb-6 text-neutral-600 dark:text-neutral-300">
                Everything to start
              </p>
              <CardTitle>
                {" "}
                <p className="text-6xl font-bold mb-8 text-indigo-500 dark:text-indigo-400">
                  $2.99<span className="font-normal text-xl">/month</span>
                </p>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <span className="flex items-center gap-2 mb-2 text-base">
                <TbCheck className="w-4 h-4 text-green-500" />
                10,000 requests/month
              </span>

              <span className="flex items-center gap-2 mb-2 text-base">
                <TbCheck className="w-4 h-4 text-green-500" />
                HD Image Generation
              </span>

              <span className="flex items-center gap-2 mb-2 text-base">
                <TbCheck className="w-4 h-4 text-green-500" />
                HD Video Generation
              </span>

              <span className="flex items-center gap-2 mb-2 text-base">
                <RxCross2 className="w-4 h-4 text-red-500" />
                Downloading Images
              </span>
            </CardContent>
            <CardFooter>
              <button className="w-full py-4 mt-8 font-semibold bg-indigo-500 dark:bg-indigo-400 text-white dark:text-black rounded-lg uppercase">
                Sign up Professional
              </button>
            </CardFooter>
          </Card>
          <Card className="w-full md:w-1/2 bg-white dark:bg-neutral-950 p-6 border-[1px] border-neutral-300 dark:border-neutral-600 rounded-xl">
            <CardHeader>
              <p className="text-2xl font-bold mb-2 text-neutral-600 dark:text-neutral-300">
                Enterprise
              </p>
              <p className="text-lg mb-6 text-neutral-600 dark:text-neutral-300">
                Everything to start
              </p>
              <CardTitle>
                <p className="text-6xl font-bold mb-8">
                  $5.99<span className="font-normal text-xl">/month</span>
                </p>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <span className="flex items-center gap-2 mb-2 text-base">
                <TbCheck className="w-4 h-4 text-green-500" />
                30,000 requests/month
              </span>

              <span className="flex items-center gap-2 mb-2 text-base">
                <TbCheck className="w-4 h-4 text-green-500" />
                HD Image and Video Generation
              </span>

              <span className="flex items-center gap-2 mb-2 text-base">
                <TbCheck className="w-4 h-4 text-green-500" />
                Download Images
              </span>

              <span className="flex items-center gap-2 mb-2 text-base">
                <TbCheck className="w-4 h-4 text-green-500" />
                Priority Support
              </span>
            </CardContent>
            <CardFooter>
              <button className="w-full py-4 mt-8 font-semibold bg-black dark:bg-white text-white dark:text-black rounded-lg uppercase">
                Sign up Enterprise
              </button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};

export default PricingPlan;
