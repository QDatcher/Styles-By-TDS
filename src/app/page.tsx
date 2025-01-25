// pages/index.js
import Hero from '../components/Hero';
import Services from '../components/sections/services/Services';
import Gallery from '../components/sections/gallery/Gallery';

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Gallery />
    </div>
  );
}