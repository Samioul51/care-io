import About from "@/Components/Home/About/About";
import Banner from "@/Components/Home/Banner/Banner";
import Services from "@/Components/Home/Services/Services";
import Testimonials from "@/Components/Home/Testimonials/Testimonials";

const Home=()=> {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Testimonials></Testimonials>
    </div>
  );
}

export default Home;
