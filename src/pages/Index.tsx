import Header from '@/components/Header';
import ChatWidget from '@/components/ChatWidget';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import SolutionsSection from '@/components/sections/SolutionsSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import FAQSection from '@/components/sections/FAQSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <ChatWidget />
      <Header />
      <HeroSection />
      <SolutionsSection />
      <BenefitsSection />
      <FAQSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
