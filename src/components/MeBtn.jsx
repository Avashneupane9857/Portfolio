import React from "react";
import { ArrowLeft } from "lucide-react";

function MeBtn({ onMeClick }) {
  return (
    <div className="flex items-center justify-center">
      <button
        onClick={onMeClick}
        className="group relative flex items-center gap-4 transition-all"
      >
        <ArrowLeft className="text-white w-6 h-6 animate-bounce group-hover:animate-none" />
        <span className="text-white text-2xl font-medium animate-bounce group-hover:animate-none">
          Me
        </span>
      </button>
    </div>
  );
}

export default MeBtn;
