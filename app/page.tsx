import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex h-full justify-center items-center">
      <h1 className={montserrat.className}>Welcome to HorizonAI</h1>
    </main>
  );
}
