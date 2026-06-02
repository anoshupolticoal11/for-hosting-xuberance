"use client";

import React from "react";
import { Search } from "lucide-react";
import "./HaloSearch.css";

interface HaloSearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string;
}

export default function HaloSearch({
  containerClassName = "",
  placeholder = "Search...",
  ...props
}: HaloSearchProps) {
  return (
    <div id="halo-search" className={containerClassName}>
      <div className="aurora-glow" />
      <div className="outer-ring" />
      <div className="outer-ring" />
      <div className="outer-ring" />

      <div className="inner-glow" />

      <div className="main-border" />

      <div id="search-wrapper">
        <input
          placeholder={placeholder}
          type="text"
          name="text"
          className="search-field"
          {...props}
        />
        <div className="search-btn-border" />
        <span
          className="absolute top-2 right-2 isolate z-10 flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg border border-solid border-transparent"
          style={{ background: "linear-gradient(180deg, #161329, black, #1d1b4b)" }}
        >
          <Search size={22} className="text-cyan-400" />
        </span>
      </div>
    </div>
  );
}
