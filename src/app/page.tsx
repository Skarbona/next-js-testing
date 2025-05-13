import Hero from '@/components/hero';
import homeImg from 'public/home.jpg';

export default function Home() {
  return (
    <Hero image={homeImg} alt="Home Image" title="Welcome to Our Site" />
  );
}
