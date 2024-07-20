import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Statistics from '../components/Statistics';
import PostTemplate from '../components/PostTemplate';
import Footer from '../components/Footer';


function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Statistics/>
      <PostTemplate/>
      <Footer/>
    </div>
  );
}

export default Home;