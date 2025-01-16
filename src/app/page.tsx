import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Roadmap from '@/components/Roadmap';
import GetInvolved from '@/components/GetInvolved';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <Navbar />
      <Hero />
      <Features />
      <Roadmap />
      <GetInvolved />
      <Footer />
    </main>
  );
}
