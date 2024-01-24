import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { AudioAndVedioContext } from "../Context/AudioAndVedioContext";
import { ReactMediaRecorder } from "react-media-recorder";
import { Link } from "react-router-dom";
import WaveSurfer from "wavesurfer.js";
export const Home = () => {
  const { AudioData, VedioData, ScreenData } = useContext(AudioAndVedioContext);

  const [Audiurl, setAudiurl] = useState("");
  const [zoomLevel, setZoomLevel] = useState(3);
  const [regions, setregions] = useState([]);
  const wavesurfer = useRef(null);
  const Data = useRef(null);
  console.log(wavesurfer);
  useEffect(() => {
    wavesurfer.current = WaveSurfer.create({
      container: "#waveform",
      waveColor: "#4F4A85",
      progressColor: "#383351",
      url: Audiurl && Audiurl,
      barWidth: 3,
      barRadius: 3,
      height: 200,
      barGap: 3,
    });
    return () => {
      if (wavesurfer.current) {
        wavesurfer.current.destroy();
      }
    };
  }, []);
  // console.log(wavesurfer);
  const hadlePlay = (url) => {
    if (!url) return;
    setAudiurl(url);
    wavesurfer.current.load(url);
    wavesurfer.current.play();
  };

  return (
    <DIV>
      <div id="waveform"></div>
      {AudioData.length == 0 &&
      VedioData.length == 0 &&
      ScreenData.length == 0 ? (
        <div>
          <h1>Here you can see the visualization of you Audio & Vedio</h1>
          <Link
            style={{
              textDecoration: "none",
              padding: "10px 20px",
              backgroundColor: "#1976d2",
              fontSize: "bold",
              color: "white",
              borderRadius: "4px",
            }}
            to={"/audio"}
          >
            Recored Audio
          </Link>
        </div>
      ) : (
        <div className="main-container">
          {AudioData?.map((el, i) => {
            return (
              <div key={i} className="box">
                {" "}
                <ReactMediaRecorder
                  video
                  render={({
                    status,
                    startRecording,
                    stopRecording,
                    mediaBlobUrl,
                  }) => (
                    <video
                      onPlay={() => hadlePlay(el)}
                      style={{ width: "100%", height: "100%" }}
                      src={el}
                      controls
                    />
                  )}
                />
              </div>
            );
          })}
          {VedioData?.map((el, i) => {
            return (
              <div key={i} className="box">
                {" "}
                <ReactMediaRecorder
                  video
                  render={({
                    status,
                    startRecording,
                    stopRecording,
                    mediaBlobUrl,
                  }) => (
                    <video
                      onPlay={() => hadlePlay(el)}
                      style={{ width: "100%", height: "100%" }}
                      src={el}
                      controls
                    />
                  )}
                />
              </div>
            );
          })}
          {ScreenData?.map((el, i) => {
            return (
              <div key={i} className="box">
                {" "}
                <ReactMediaRecorder
                  video
                  render={({
                    status,
                    startRecording,
                    stopRecording,
                    mediaBlobUrl,
                  }) => (
                    <video
                      onPlay={() => hadlePlay(el)}
                      style={{ width: "100%", height: "100%" }}
                      src={el}
                      controls
                    />
                  )}
                />
              </div>
            );
          })}
        </div>
      )}
    </DIV>
  );
};

const DIV = styled.div`
  margin: 1rem auto;
  width: 98%;

  gap: 1rem;
  .main-container {
    display: flex;
    margin: 1rem auto;
    width: 98%;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .box {
    width: 350px;
    height: 350px;
  }
`;
