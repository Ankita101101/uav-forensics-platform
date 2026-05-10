import { useState } from "react";

import Sidebar from "../Components/Sidebar";

import dronefs1 from "../assets/DRONE FS -01.pdf";
import dronefs2 from "../assets/DRONE FS -02.pdf";
import dronefs3 from "../assets/DRONE FS -03.pdf";
import droneforensics from "../assets/droneforensics.pdf";

import { unit1Cards } from "../data/unit1";
import { unit2Cards } from "../data/unit2";

const Academy = () => {
  const [activeSection, setActiveSection] = useState("unit1");

  const [expandedCard, setExpandedCard] = useState(null);

  const renderCards = (cards, prefix = "") => {
    return cards.map((card, index) => {
      const cardId = `${prefix}${index}`;

      return (
        <div
          key={cardId}
          onClick={() =>
            setExpandedCard(
              expandedCard === cardId ? null : cardId
            )
          }
          className="
            bg-white/5
            backdrop-blur-xl
            border border-cyan-500/20
            rounded-3xl
            p-8
            cursor-pointer
            transition-all
            duration-300
            hover:bg-cyan-500/10
            hover:border-cyan-400
            hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
            hover:-translate-y-1
          "
        >
          <h2 className="text-cyan-300 text-4xl font-bold tracking-wide mb-6">
            {card.title}
          </h2>

          <p className="text-gray-400 text-xl">
            {card.short}
          </p>

          {expandedCard === cardId && (
            <div className="mt-10 border-t border-cyan-500/20 pt-10">

              <div className="space-y-6">

                <h2 className="text-red-400 text-4xl font-bold">
                  {card.title}
                </h2>

                {card.subtopics ? (

                  <div className="space-y-10">

                    {card.subtopics.map((topic, index) => (

                      <div
  key={index}
  className="
  bg-[#071529]
  border-2
  border-cyan-500/30
  rounded-3xl
  p-10
  mb-10
  backdrop-blur-xl
  shadow-[0_0_25px_rgba(0,255,255,0.10)]
  hover:shadow-[0_0_35px_rgba(0,255,255,0.20)]
  transition-all
  duration-300
  "
>

                        <div
  className="
  text-gray-200
  text-[22px]
  leading-[1.8]
  whitespace-pre-line
  font-light
  text-center
  w-full
  flex
  flex-col
  items-center
  justify-center
  "
>

                          <h3
                            className="
                            text-red-400
                            text-4xl
                            leading-[1.6rem]
                            font-extrabold
                            tracking-wide
                            "
                          >
                            {topic.heading}
                          </h3>

                        </div>

                        <div
                          className="
                          text-gray-200
                          text-2xl
                          leading-loose
                          whitespace-pre-line
                          "
                        >
                          {topic.notes}
                        </div>

                      </div>

                    ))}

                  </div>

                ) : (

                  <div
                    className="
                    text-gray-300
                    text-xl
                    leading-loose
                    whitespace-pre-line
                    "
                  >
                    {card.content}
                  </div>

                )}

              </div>

            </div>
          )}

        </div>
      );
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020817] via-[#071129] to-[#020817] text-white flex">

      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <div className="flex-1 overflow-y-auto p-10">

        {activeSection === "unit1" && (
          <div>

            <h1 className="text-5xl font-bold text-cyan-400 mb-4">
              Unit 1 — Introduction to Drone Forensics
            </h1>

            <p className="text-gray-400 text-lg mb-12 max-w-4xl">
              Study the foundations of UAV forensic investigation,
              evidence acquisition,
              telemetry analysis,
              forensic preservation,
              drone intelligence,
              and investigation workflows.
            </p>

            <div className="space-y-8">
              {renderCards(unit1Cards, "u1-")}
            </div>

          </div>
        )}

        {activeSection === "unit2" && (
          <div>

            <h1 className="text-5xl font-bold text-cyan-400 mb-4">
              Unit 2 — Data Acquisition & Analysis
            </h1>

            <p className="text-gray-400 text-lg mb-12 max-w-4xl">
              Study forensic acquisition techniques,
              telemetry intelligence,
              firmware analysis,
              metadata investigation,
              GPS reconstruction,
              and advanced UAV forensic workflows.
            </p>

            <div className="space-y-8">
              {renderCards(unit2Cards, "u2-")}
            </div>

          </div>
        )}

        {activeSection === "pdf1" && (
          <div>

            <h1 className="text-5xl font-bold text-cyan-400 mb-10">
              PDF Unit 1
            </h1>

            <div className="space-y-12">

              <iframe
                src={dronefs1}
                title="Drone FS 1"
                className="w-full h-[900px] rounded-3xl border border-cyan-500/20"
              />

              <iframe
                src={dronefs2}
                title="Drone FS 2"
                className="w-full h-[900px] rounded-3xl border border-cyan-500/20"
              />

            </div>

          </div>
        )}

        {activeSection === "pdf2" && (
          <div>

            <h1 className="text-5xl font-bold text-cyan-400 mb-10">
              PDF Unit 2
            </h1>

            <iframe
              src={dronefs3}
              title="Drone FS 3"
              className="w-full h-[900px] rounded-3xl border border-cyan-500/20"
            />

          </div>
        )}

        {activeSection.includes("practical") && (
          <div>

            <h1 className="text-5xl font-bold text-cyan-400 mb-10">
              UAV Forensic Practicals
            </h1>

            <iframe
              src={droneforensics}
              title="Drone Forensics"
              className="w-full h-[900px] rounded-3xl border border-cyan-500/20"
            />

          </div>
        )}

      </div>
    </div>
  );
};

export default Academy;