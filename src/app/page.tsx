import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Ready from "@/components/Ready";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen ">
        <Hero />
        <About />
        <Ready />
      </main>
    </>
  );
}
