import MainLayout from '@/components/layout/MainLayout';
import HomeSection from './Home';

const Home = () => {
  return (
    <MainLayout>
      <div className="container mx-auto">
        <HomeSection/>
      </div>
    </MainLayout>
  );
};

export default Home;