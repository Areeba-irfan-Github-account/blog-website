import HeroSection from "./components/HeroSection";
import Posts from './posts/page'
import About from "./components/About";

export default function Home() {
  return (
   <>
     <HeroSection />
      <Posts />
      <About />
   </>
  );
}
