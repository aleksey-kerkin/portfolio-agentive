import Header from './components/Header';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Stats from './components/Stats';
import Features from './components/Features';
import LivePanel from './components/LivePanel';
import UseCases from './components/UseCases';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Cta from './components/Cta';
import Footer from './components/Footer';

export default function App() {
  return (
    <div id="top">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-[100] focus:rounded focus:bg-ink focus:px-3 focus:py-2 focus:text-white">
        Перейти к содержимому
      </a>
      <Header />
      <main id="main">
        <Hero />
        <TrustedBy />
        <Stats />
        <Features />
        <LivePanel />
        <UseCases />
        <Testimonials />
        <Pricing />
      </main>
      <Cta />
      <Footer />
    </div>
  );
}
