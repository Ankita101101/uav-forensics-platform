import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import InfoCard from "../Components/InfoCard";

const Home = () => {
  return (
    <div className="bg-[#07111f] min-h-screen">

      <Navbar />

      <Hero />

      <section className="px-6 pb-20">
        <h1 className="text-red-500 text-6xl">
  TEST
</h1>

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-white mb-10">
            Intelligence Modules
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <InfoCard
              title="Telemetry Analysis"
              description="Analyze drone flight logs, GPS traces, altitude records, and sensor telemetry."
            />

            <InfoCard
              title="Drone Hardware"
              description="Study UAV internal architecture, controllers, firmware chips, and embedded systems."
            />

            <InfoCard
              title="Forensic Labs"
              description="Perform cyber-forensic investigation simulations and UAV evidence analysis."
            />

          </div>

        </div>

      </section>

    </div>
  );
};

export default Home;
