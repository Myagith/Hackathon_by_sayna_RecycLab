import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';

const videoConstraints = {
    width: 40,
    height: 40,
    facingMode: "user"
  };

const WebcamCapture = ({ onCapture }) => {
  const webcamRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);
    onCapture(imageSrc); // Passe l'image capturée au composant parent
  };

  return (
    <>
      <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      />
      <button onClick={capture}>Capture photo</button>
    </>
  );
};

export default WebcamCapture;
