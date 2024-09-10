import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import { Projects } from "@/components/projects/Projects";
import { ContactForm } from "@/components/contact-form/ContactForm";

export default function Home() {
  return (
    <main className="relative">
      <Hero/>
      <About/>
      <Projects/>
      <ContactForm/>
    </main>
  );
}
