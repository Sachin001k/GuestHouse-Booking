import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-gray-100 min-h-screen">

        <Hero />

        <Services />

      </main>
    </>
  );
}