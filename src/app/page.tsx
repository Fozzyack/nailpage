import About from "@/components/Main/About";
import BookAnAppointment from "@/components/Main/BookAnAppointment";
import Hero from "@/components/Main/Hero";
import Navbar from "@/components/Main/Navbar";
import Services from "@/components/Main/Services";
import Testimonials from "@/components/Main/Testimonials";

export default function Home() {
  return (
    <main className="">

      <Navbar />
      <div className="lg:px-48 px-12 ">
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <BookAnAppointment />
      </div>

    </main>
  )
}
