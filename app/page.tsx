import About from "@/components/About";
import { Bento } from "@/components/Bento";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main className="bg-neutral-200 dark:bg-neutral-950">
      <Hero />
      <About />
      <Bento />
    </main>
  );
}
