"use client";
import React from "react";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  SiGit,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiCss3,
  SiHtml5,
} from "react-icons/si";
import Title from "./Title";
export default function Skills() {
  const skills = [
    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "Tailwind",
      Icon: SiTailwindcss,
    },
    {
      text: "Laravel",

      Icon: SiLaravel,
    },
    {
      text: "Next.js",
      Icon: SiNextdotjs,
    },
    {
      text: "Javascript",

      Icon: SiJavascript,
    },
    {
      text: "CSS",
      Icon: SiCss3,
    },
    {
      text: "PHP",

      Icon: SiPhp,
    },
    {
      text: "MySQL",

      Icon: SiMysql,
    },
    {
      text: "HTML",
      Icon: SiHtml5,
    },
    {
      text: "Git",
      Icon: SiGit,
    },
  ];

  return (
    <div className=" max-w-5xl mx-auto px-8">
      <Title
        text="Skills 🔪"
        className="flex flex-col items-center justify-center -rotate-6"
      />
      <HoverEffect items={skills} />
    </div>
  );
}
