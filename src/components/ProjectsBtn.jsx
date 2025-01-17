import React from "react";
import { ArrowRight } from "lucide-react";

function ProjectsBtn() {
  return (
    <div className="flex items-center justify-center">
      <a
        href="#projects"
        className="group relative flex items-center gap-4 transition-all"
      >
        <span className="text-white text-2xl font-medium animate-bounce group-hover:animate-none">
          Projects
        </span>
        <ArrowRight className="text-white w-6 h-6 animate-bounce group-hover:animate-none" />
      </a>
    </div>
  );
}

export default ProjectsBtn;
