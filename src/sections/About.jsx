import React, { useState } from "react";
import Button from "../components/Button";
import { ContactModal } from "../components/WorkTogether";

function About() {
  const [hasCopied, setHasCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("reevasnp123@gmail.com");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space relative top-6">
      <div className="flex  gap-6">
        <div className=" w-[400px] bg-zinc-900 rounded-lg overflow-hidden">
          <img
            src="/assets/grid1.jpeg"
            alt="Profile"
            className="w-full h-[400px] object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-white mb-2">Hi I'm Avash</h2>
            <p className="text-gray-300">
              With 1 year of experience, I have honed my skills in frontend,
              UI/UX and CI/CD
            </p>
          </div>
        </div>

        <div className="flex-1 h-[300px]  flex flex-col gap-6">
          <div className="flex-1 w-[400px]  bg-zinc-900 rounded-lg p-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                I work remotely across most timezones
              </h2>
              <p className="text-gray-300 mb-6">
                I'm based in Nepal with remote work available
              </p>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsModalOpen(true);
                }}
              >
                {" "}
                <Button name="Contact me" isBeam containerClass="w-full mt-4" />
              </a>

              <div
                className="flex items-center justify-center relative top-5 gap-3 p-3 bg-zinc-800 rounded-lg cursor-pointer hover:bg-zinc-700 transition-colors duration-200"
                onClick={handleCopy}
              >
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt={hasCopied ? "Copied" : "Copy"}
                  className="w-6 h-6"
                />
                <p className="text-xl text-white font-medium">
                  reevasnp123@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}

export default About;
