"use client";

interface HeadingProps {
  title: string;
  subtitle: string;
}
import { Head } from "next/document";
import React from "react";

const Heading: React.FC<HeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="text-start">
      <div className="text-2xl font-bold">{title}</div>
      <div className="font-light text-neutral-500 mt-2">{subtitle}</div>
    </div>
  );
};

export default Heading;
