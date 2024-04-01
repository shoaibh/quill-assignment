import React from "react";
import Logo from "./logo.svg";
import Profile from "./profile.svg";
import DownArrow from "./down-arrow.svg";

export const Header = () => {
  return (
    <section className="bg-[#191D23] rounded flex gap-2 text-sm">
      <div className="flex cursor-pointer items-center gap-2 py-3 px-8 border-r border-solid border-white/10">
        <Logo />

        <h3 className="text-xl">QuillShield</h3>
      </div>

      <nav className="grow flex justify-end items-center text-[#5D677D] gap-10 py-3 px-8 border-r border-solid border-white/10">
        <div className="text-[#007AFF] border-b-2 cursor-pointer  border-[#007AFF] border-solid">AI Audit</div>
        <div className="hover:text-white cursor-pointer ">Manual Audit</div>
        <div className="hover:text-white cursor-pointer ">RedTeam</div>
        <div className="hover:text-white cursor-pointer ">Monitor</div>
        <div className="hover:text-white cursor-pointer ">Incident Response</div>
      </nav>

      <div className="flex items-center gap-4 py-3 px-8 cursor-pointer profile">
        <Profile />
        <span>Shoaib Hamza</span>
        <DownArrow className="arrow" />
      </div>
    </section>
  );
};
