import React from "react";
import Topbar from "../../Components/Topbar";
import MainSection from "./MainSection";
import Bottombar from "../../Components/Bottombar";

export default function index() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <Topbar />
      <MainSection/>
      <Bottombar/>
    </div>
  );
}
