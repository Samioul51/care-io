import About from "@/Components/Home/About/About";
import Banner from "@/Components/Home/Banner/Banner";
import FAQ from "@/Components/Home/FAQ/FAQ";
import Featured from "@/Components/Home/Featured/Featured";
import Services from "@/Components/Home/Services/Services";
import Testimonials from "@/Components/Home/Testimonials/Testimonials";

const Home=()=> {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Featured></Featured>
      <Testimonials></Testimonials>
      <FAQ></FAQ>
    </div>
  );
}

export default Home;
