const Sidebar = ({ activeSection, setActiveSection }) => {

  return (

    <div className="w-72 min-h-screen border-r border-cyan-500/20 bg-black/30 backdrop-blur-md p-6 flex flex-col">

      {/* HEADER */}

      <div className="mb-10">

        <h1 className="text-cyan-400 text-3xl font-bold leading-tight">
          UAV Forensics
        </h1>

        <h2 className="text-white text-2xl font-semibold mt-1">
          DBFS
        </h2>

        <p className="text-gray-400 text-sm mt-2">
          by Ankita Kumari
        </p>

      </div>



      {/* MENU */}

      <div className="space-y-4 overflow-y-auto">

        {/* UNIT 1 */}

        <div
          onClick={() => setActiveSection("unit1")}
          className={`p-4 rounded-2xl cursor-pointer transition border ${
            activeSection === "unit1"
              ? "bg-cyan-500/20 border-cyan-400"
              : "bg-white/5 border-cyan-500/20 hover:bg-cyan-500/10"
          }`}
        >

          <h3 className="text-lg font-semibold text-white">
            Unit 1
          </h3>

          <p className="text-sm text-gray-400 mt-1">
            Introduction to Drone Forensics
          </p>

        </div>



        {/* UNIT 2 */}

        <div
          onClick={() => setActiveSection("unit2")}
          className={`p-4 rounded-2xl cursor-pointer transition border ${
            activeSection === "unit2"
              ? "bg-cyan-500/20 border-cyan-400"
              : "bg-white/5 border-cyan-500/20 hover:bg-cyan-500/10"
          }`}
        >

          <h3 className="text-lg font-semibold text-white">
            Unit 2
          </h3>

          <p className="text-sm text-gray-400 mt-1">
            Data Acquisition & Analysis
          </p>

        </div>



        {/* PDF UNIT 1 */}

        <div
          onClick={() => setActiveSection("pdf1")}
          className={`p-4 rounded-2xl cursor-pointer transition border ${
            activeSection === "pdf1"
              ? "bg-cyan-500/20 border-cyan-400"
              : "bg-white/5 border-cyan-500/20 hover:bg-cyan-500/10"
          }`}
        >

          <h3 className="text-lg font-semibold text-white">
            PDF Unit 1
          </h3>

          <p className="text-sm text-gray-400 mt-1">
            Unit 1 Study Materials
          </p>

        </div>



        {/* PDF UNIT 2 */}

        <div
          onClick={() => setActiveSection("pdf2")}
          className={`p-4 rounded-2xl cursor-pointer transition border ${
            activeSection === "pdf2"
              ? "bg-cyan-500/20 border-cyan-400"
              : "bg-white/5 border-cyan-500/20 hover:bg-cyan-500/10"
          }`}
        >

          <h3 className="text-lg font-semibold text-white">
            PDF Unit 2
          </h3>

          <p className="text-sm text-gray-400 mt-1">
            Unit 2 Study Materials
          </p>

        </div>



        {/* PRACTICAL 1 */}

        <div
          onClick={() => setActiveSection("practical1")}
          className={`p-4 rounded-2xl cursor-pointer transition border ${
            activeSection === "practical1"
              ? "bg-cyan-500/20 border-cyan-400"
              : "bg-white/5 border-cyan-500/20 hover:bg-cyan-500/10"
          }`}
        >

          <h3 className="text-lg font-semibold text-white">
            Practical 1
          </h3>

          <p className="text-sm text-gray-400 mt-1">
            UAV Identification
          </p>

        </div>



        {/* PRACTICAL 2 */}

        <div
          onClick={() => setActiveSection("practical2")}
          className={`p-4 rounded-2xl cursor-pointer transition border ${
            activeSection === "practical2"
              ? "bg-cyan-500/20 border-cyan-400"
              : "bg-white/5 border-cyan-500/20 hover:bg-cyan-500/10"
          }`}
        >

          <h3 className="text-lg font-semibold text-white">
            Practical 2
          </h3>

          <p className="text-sm text-gray-400 mt-1">
            Flight Log Extraction
          </p>

        </div>



        {/* PRACTICAL 3 */}

        <div
          onClick={() => setActiveSection("practical3")}
          className={`p-4 rounded-2xl cursor-pointer transition border ${
            activeSection === "practical3"
              ? "bg-cyan-500/20 border-cyan-400"
              : "bg-white/5 border-cyan-500/20 hover:bg-cyan-500/10"
          }`}
        >

          <h3 className="text-lg font-semibold text-white">
            Practical 3
          </h3>

          <p className="text-sm text-gray-400 mt-1">
            Metadata Analysis
          </p>

        </div>



        {/* PRACTICAL 4 */}

        <div
          onClick={() => setActiveSection("practical4")}
          className={`p-4 rounded-2xl cursor-pointer transition border ${
            activeSection === "practical4"
              ? "bg-cyan-500/20 border-cyan-400"
              : "bg-white/5 border-cyan-500/20 hover:bg-cyan-500/10"
          }`}
        >

          <h3 className="text-lg font-semibold text-white">
            Practical 4
          </h3>

          <p className="text-sm text-gray-400 mt-1">
            GPS Trace Recovery
          </p>

        </div>



        {/* PRACTICAL 5 */}

        <div
          onClick={() => setActiveSection("practical5")}
          className={`p-4 rounded-2xl cursor-pointer transition border ${
            activeSection === "practical5"
              ? "bg-cyan-500/20 border-cyan-400"
              : "bg-white/5 border-cyan-500/20 hover:bg-cyan-500/10"
          }`}
        >

          <h3 className="text-lg font-semibold text-white">
            Practical 5
          </h3>

          <p className="text-sm text-gray-400 mt-1">
            Firmware Investigation
          </p>

        </div>

      </div>

    </div>

  );
};

export default Sidebar;