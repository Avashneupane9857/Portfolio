import React from "react";
import { projects } from "../constants";

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-1/2 h-1/2" fill="white">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-1/2 h-1/2" fill="white">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.25 21.885A9.969 9.969 0 012.115 13.25h3.26c.116 3.042.94 5.817 2.376 8.635zM2.115 10.75A9.969 9.969 0 0110.75 2.115v3.26c-3.042.116-5.817.94-8.635 2.376zm13.77 0c-2.818-1.436-5.593-2.26-8.635-2.376v-3.26A9.969 9.969 0 0121.885 10.75h-3.26zm-8.635 10.77v-3.26c3.042-.116 5.817-.94 8.635-2.376h3.26a9.969 9.969 0 01-8.635 8.635z" />
  </svg>
);

const FigmaIcon = () => (
  <svg viewBox="0 0 38 57" className="w-1/2 h-1/2" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 28.5C19 24.0815 22.5815 20.5 27 20.5C31.4185 20.5 35 24.0815 35 28.5C35 32.9185 31.4185 36.5 27 36.5C22.5815 36.5 19 32.9185 19 28.5Z"
      fill="#1ABCFE"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 44.5C3 40.0815 6.58153 36.5 11 36.5H19V44.5C19 48.9185 15.4185 52.5 11 52.5C6.58153 52.5 3 48.9185 3 44.5Z"
      fill="#0ACF83"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 4.5V20.5H27C31.4185 20.5 35 16.9185 35 12.5C35 8.08153 31.4185 4.5 27 4.5H19Z"
      fill="#FF7262"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 12.5C3 16.9185 6.58153 20.5 11 20.5H19V4.5H11C6.58153 4.5 3 8.08153 3 12.5Z"
      fill="#F24E1E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 28.5C3 32.9185 6.58153 36.5 11 36.5H19V20.5H11C6.58153 20.5 3 24.0815 3 28.5Z"
      fill="#A259FF"
    />
  </svg>
);

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  website_link,
  figma_link,
}) => {
  return (
    <div className="project-card bg-zinc-900 rounded-lg overflow-hidden shadow-lg">
      <div className="relative group">
        <img
          src={image || "/api/placeholder/360/230"}
          alt={name}
          className="w-full h-48 object-cover"
        />

        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {figma_link && (
            <button
              onClick={() => window.open(figma_link, "_blank")}
              className="icon-button p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
              aria-label="View Figma design"
            >
              <FigmaIcon />
            </button>
          )}
          <button
            onClick={() => window.open(source_code_link, "_blank")}
            className="icon-button p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
            aria-label="View source code"
          >
            <GitHubIcon />
          </button>
          <button
            onClick={() => window.open(website_link, "_blank")}
            className="icon-button p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
            aria-label="Visit website"
          >
            <GlobeIcon />
          </button>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-gray-400 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              className={`px-2 py-1 rounded-full text-xs ${tag.color} text-white`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={`project-${index}`} {...project} />
      ))}
    </div>
  );
};

export default ProjectsContainer;
