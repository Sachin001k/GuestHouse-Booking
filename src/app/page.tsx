import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-gray-100 min-h-screen">

        <Hero />

        <Services />
        <Gallery />
        <Testimonials />
        <Contact />
       
      </main>
      <Footer />
    </>
  );
}