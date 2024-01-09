import About from "@/components/Main/About";
import BookAnAppointment from "@/components/Main/BookAnAppointment";
import Hero from "@/components/Main/Hero";
import Navbar from "@/components/Main/Navbar";
import Services from "@/components/Main/Services";
import Socials from "@/components/Main/Socials";
import Testimonials from "@/components/Main/Testimonials";
import './landing.css'
export default function Home() {
  return (
    <main className="bg-bprimary">

      <Navbar />
      <div className="mainsection bg-bsecondary">
        <Hero />
      </div>
      <div className="mainsection nothero">
        <About />
      </div>
      <div className="mainsection nothero bg-bsecondary">
        <Services />
      </div>
      <div className="mainsection nothero">
        <Testimonials />
      </div>
      <div className="mainsection nothero bg-bsecondary py-4 my-5">
        <BookAnAppointment />
      </div>
      <div className="mainsection nothero ">
        <Socials />
      </div>




    </main>
  )
}
