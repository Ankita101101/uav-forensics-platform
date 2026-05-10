import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020817]">

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10"></div>

      <div className="relative z-10 text-center px-6">

        <p className="text-cyan-400 tracking-[10px] text-sm mb-6 uppercase">
          Drone Forensics Intelligence Platform
        </p>

        <h1 className="text-7xl md:text-8xl font-black text-white leading-tight mb-8">
          UAV Cyber{" "}
          <span className="text-cyan-400">
            Forensics
          </span>
        </h1>

        <p className="text-gray-400 text-xl max-w-4xl mx-auto leading-relaxed mb-12">
          Analyze drone systems, telemetry logs, forensic evidence,
          hardware intelligence, and UAV investigation workflows
          inside a futuristic learning environment.
        </p>

        <button
          onClick={() => navigate("/academy")}
          className="bg-cyan-400 hover:bg-cyan-300 text-black font-bold px-10 py-4 rounded-2xl transition duration-300 shadow-[0_0_30px_rgba(34,211,238,0.6)]"
        >
          Enter Platform
        </button>

      </div>

    </section>
  );
};

export default Hero;