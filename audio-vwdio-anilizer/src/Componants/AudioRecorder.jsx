import { useContext, useState } from "react";
import { ReactMediaRecorder } from "c";
import { AudioAndVedioContext } from "../Context/AudioAndVedioContext";

export const AudioRecord = () => {
  const [checkvideo, setCheckVedio] = useState(false);
  const { AudioData, setAudioData } = useContext(AudioAndVedioContext);

  const handleStart = (startRecording) => {
    setCheckVedio(true);
    startRecording();
  };
  const handleStop = (stopRecording, mediaBlobUrl) => {
    stopRecording();
    if (mediaBlobUrl) {
      setAudioData((prev) => [...prev, mediaBlobUrl]);
    }
    setCheckVedio(false);
  };
  return (
    <div>
      <ReactMediaRecorder
        audio
        render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
          <div>
            <p>{status !== "idle" ? status : ""}</p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "180px",
                margin: "auto",
                justifyContent: "space-between",
                gap: "1rem",
                padding: "1rem",
              }}
            >
              {!checkvideo ? (
                <button
                  style={{
                    background: "#039BE5",
                    padding: "10px 1rem",
                    cursor: "pointer",
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "500",
                  }}
                  onClick={() => handleStart(startRecording)}
                >
                  Start Recording
                </button>
              ) : (
                <button
                  style={{
                    background: "#039BE5",
                    padding: "10px 1rem",
                    cursor: "pointer",
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "500",
                  }}
                  onClick={() => handleStop(stopRecording, mediaBlobUrl)}
                >
                  Stop Recording
                </button>
              )}
            </div>
            <div style={{ width: "50%", margin: "auto", height: "500px" }}>
              {checkvideo && (
                <video
                  style={{ width: "50%", height: "50%" }}
                  src={undefined}
                  controls
                  autoPlay
                  loop
                />
              )}
            </div>
          </div>
        )}
      />
    </div>
  );
};
