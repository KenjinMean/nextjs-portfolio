import React from "react";
import {
  SiPhp,
  SiReactquery,
  SiTailwindcss,
  SiReact,
  SiLaravel,
  SiMysql,
  SiJavascript,
  SiReactrouter,
} from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export default function Projects() {
  const projects = [
    {
      title: "Job Finder React Frontend",
      tech: [SiJavascript, SiReact, SiReactquery, SiReactrouter, SiTailwindcss],
      link: "https://job-finder.cloud",
      code: "https://github.com/KenjinMean/job-finder-react-frontend",
      cover: "/assets/images/home.PNG",
      background: "bg-indigo-500",
    },
    {
      title: "Job Finder Laravel Api",
      tech: [SiPhp, SiLaravel, SiMysql],
      link: "https://documenter.getpostman.com/view/28237666/2sA3JM71e7#intro",
      code: "https://github.com/KenjinMean/job-finder-laravel-api",
      cover: "/assets/images/jobFinderApiDocs.PNG",
      background: "bg-green-500",
    },
  ];

  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projects 🎨"
        className="flex flex-col items-center justify-center rotate-6"
      />
      <div className=" grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, index) => {
          return (
            <div key={index}>
              <div className={cn("p-5 rounded-md", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full space-y-5"
                >
                  <div className=" space-y-5">
                    <h1 className="text-2xl font-bold">{project.title}</h1>
                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, index) => {
                        return <Icon className="w-8 h-8" key={index} />;
                      })}
                    </div>
                    <div className="flex flex-col">
                      <Link
                        className="hover:underline w-fit"
                        href={project.link}
                      >
                        Open Project
                      </Link>
                      <Link
                        className="hover:underline w-fit"
                        href={project.code}
                      >
                        Open Code
                      </Link>
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
