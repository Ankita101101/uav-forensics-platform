const InvestigationCard = ({ item }) => {
  return (
    <div className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6 backdrop-blur-md hover:scale-105 hover:border-cyan-400 transition duration-300">

      <div className="flex items-center justify-between mb-4">

        <h3 className="text-2xl font-bold text-white">
          {item.drone}
        </h3>

        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold
          ${
            item.status === "Critical"
              ? "bg-red-500/20 text-red-300"

              : item.status === "Medium"
              ? "bg-yellow-500/20 text-yellow-300"

              : "bg-green-500/20 text-green-300"
          }`}
        >
          {item.status}
        </span>

      </div>

      <p className="text-gray-400">
        Investigation Zone:
      </p>

      <p className="text-cyan-300 mt-2">
        {item.location}
      </p>

    </div>
  );
};

export default InvestigationCard;