import { ReactNode } from "react";
import { useThemeContext } from "../hooks/useTheme";
import { biografia } from "./Biografia";
import { LightButton } from "./LightButton";
import { DarkButton } from "./DarkButton";

import avatar from "../assets/avatar.jpg";

interface ProfileProps {
  name: string,
  job: string,
  gitProfile: ReactNode,
}

export function Profile({name, job, gitProfile}:ProfileProps) {
  const { theme } = useThemeContext();

  return (
    <ul className={`w-full shadow-lg lg:w-[50%] flex flex-col  transition-all rounded-lg ${theme === 'light' ? 'bg-white':'bg-zinc-900'}`}>
      <li className="w-full flex flex-col gap-10 items-center justify-center ">
        <header className="w-full flex gap-6 items-center py-8 px-10">
          <img
            src={avatar}
            alt="avatar"
            className={`w-[6rem] h-[6rem] rounded-full border-2 border-emerald-500`}
          />
          <div className={`flex flex-col ${theme === 'light' ? 'text-black':' text-white'}`}>
            <strong className="font-bold text-[1.9rem] text-form_title">
              {name}
            </strong>
            <span className="text-[1.5rem]">
              {job}
            </span>
          </div>
        </header>
        <div className={`w-full text-justify px-10 ${theme === 'light' ? 'text-black':' text-white'}`}>
          <p className="text-[1.5rem]">
            {biografia}
          </p>
        </div>
        <footer className={`w-full flex rounded-b-[.5rem] gap-8 px-12 py-10 items-center justify-center lg:py-10 lg:px-10 lg:gap-0 lg:flex-row lg:justify-between ${theme === 'light' ? 'bg-zinc-100':'bg-zinc-800 text-white'}`}>
          <div className="w-full flex gap-4 justify-start ">
            {gitProfile}
          </div>
          {theme === 'light' ? <DarkButton />:<LightButton />}             
        </footer>
      </li>
    </ul>
  );
}
