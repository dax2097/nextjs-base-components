import MainLayout from '@/layouts/MainLayout';
import HomeHeroSection from './home/HomeHeroSection';
import SolutionsSection from './home/SolutionsSection';
import StatsSection from './home/StatsSection';
import NeedsSection from './home/NeedsSection';

const HomePage = () => {
  return (
    <MainLayout>
      <div className="mx-auto">
        {/* Incluir las secciones del Home */}
        <HomeHeroSection  />
        <div className="flex flex-col px-layout pt-10 gap-10">
          <SolutionsSection />
          <StatsSection />                   
        </div>
          <NeedsSection />


      </div>
    </MainLayout>
  );
};

export default HomePage;