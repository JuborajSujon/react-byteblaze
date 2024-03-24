import Hero from "../components/Hero";
import Wave from "../assets/wave.svg";

const Home = () => {
  return (
    <div className="relative min-h-[calc(100vh-116px)] flex flex-col justify-center items-center">
      <Hero />
      <img src={Wave} alt="wave" className="absolute bottom-0 w-full" />
    </div>
  );
};

export default Home;
