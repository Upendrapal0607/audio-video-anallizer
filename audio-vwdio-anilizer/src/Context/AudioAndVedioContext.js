import React, { createContext, useState } from 'react'
export const AudioAndVedioContext = createContext()
export const AudioAndVedioContextProvider = ({children}) => {
    const [AudioData,setAudioData] = useState([])
    const [VedioData,setVedioData] = useState([])
    const [ScreenData,setScreenData] = useState([])
    return (
        <AudioAndVedioContext.Provider
            value={{
                AudioData,setAudioData,VedioData,setVedioData,ScreenData,setScreenData
            }}
        >
            {children}
        </AudioAndVedioContext.Provider>
    );
}
