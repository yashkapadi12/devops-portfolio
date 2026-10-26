import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { FloatingOrbs } from "./components/FloatingOrbs";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { PipelineFlow } from "./components/PipelineFlow";
import { Projects } from "./components/Projects";
import { ScrollProgress } from "./components/ScrollProgress";
import { Skills } from "./components/Skills";

export default function App() {
  return (
    <>
      <ScrollProgress />
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
        <FloatingOrbs className="opacity-30" />
      </div>
      <div className="relative z-[1]">
        <Header />
        <main>
          <Hero />
          <About />
          <PipelineFlow />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
