const InfoCard = ({ title, description }) => {
  return (
    <div className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6 backdrop-blur-md hover:border-cyan-400 hover:-translate-y-2 transition duration-300">

      <h3 className="text-cyan-400 text-xl font-semibold mb-3">
        {title}
      </h3>

      <p className="text-gray-400 leading-relaxed">
        {description}
      </p>

    </div>
  );
};

export default InfoCard;
