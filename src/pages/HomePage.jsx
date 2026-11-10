import Hero from "../components/layout/Hero";
import About from "../components/layout/About";
import Skills from "../components/layout/Skills";
import ProjectGallery from "../components/projects/ProjectGallery";
import Thesis from "../components/layout/Thesis";
import CertificateGallery from "../components/certificates/CertificateGallery";
import Contact from "../components/layout/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <ProjectGallery />
      <Thesis />
      <CertificateGallery />
      <Contact />
    </>
  );
}