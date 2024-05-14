import CTA from "@/components/CTA";
import { Bento } from "@/components/Bento";
import { Hero } from "@/components/Hero";
import { Testimonials } from "@/components/Testimonial";

export default function Home() {
  return (
    <main className="bg-neutral-200 dark:bg-neutral-950">
      <Hero />
      <h2 className="flex justify-center items-center text-3xl sm:text-4xl mb-5 dark:text-neutral-300 text-neutral-700">Features</h2>
      <Bento />
      
      <Testimonials />
      <CTA />
    </main>
  );
}
