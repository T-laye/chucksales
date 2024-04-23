import About from "@/components/landingPage/About";
import Footer from "@/components/landingPage/Footer";
import Header from "@/components/landingPage/Header";
import Hero from "@/components/landingPage/Hero";
import Ready from "@/components/landingPage/Ready";
import How from "@/components/landingPage/How";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen ">
        <Hero />
        <About />
        <Ready />
        <How />
        <Footer />
      </main>
    </>
  );
}
