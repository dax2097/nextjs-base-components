import MainLayout from '@/layouts/MainLayout';
import HomeHeroSection from './home/HomeHeroSection';
import SolutionsSection from './home/SolutionsSection';

const HomePage = () => {
  return (
    <MainLayout>
      <div className="mx-auto">
        {/* Incluir las secciones del Home */}
        <HomeHeroSection  />
        <SolutionsSection />
      </div>
    </MainLayout>
  );
};

export default HomePage;