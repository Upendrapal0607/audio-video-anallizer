import React from "react";
import { Routes, Route } from "react-router-dom";
import { AudioRecord } from "../Componants/AudioRecorder";
import { VedioRecored } from "../Componants/VedioRecared";
import { ScreenRecarder } from "../Componants/ScreenRecarder";
import { Home } from "../Componants/Home";
export const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/audio" element={<AudioRecord />} />
        <Route path="/vedio" element={<VedioRecored />} />
        <Route path="/screen" element={<ScreenRecarder />} />
        <Route />
        <Route />
      </Routes>
    </div>
  );
};
