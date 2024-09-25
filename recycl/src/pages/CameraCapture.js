import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import '../styles/CameraCapture.css'; 

const videoConstraints = {
    width: 80,
    height: 50,
    facingMode: "user"
};

const CameraCapture = ({ onCapture }) => {
    const webcamRef = useRef(null);
    const [imageSrc, setImageSrc] = useState(null);

    const capture = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImageSrc(imageSrc);
        onCapture(imageSrc); 
    };

    const handleConfirm = () => {
        // Logique de confirmation (peut-être envoyer l'image à un parent ou une API)
        console.log("Image confirmée :", imageSrc);
    };

    const handleRetake = () => {
        setImageSrc(null); // Remettre l'image à null pour revenir à la capture
    };

    return (
        <div className="camera-container">
            <Webcam
                audio={false}
                height={500}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={400}
                videoConstraints={videoConstraints}
                className="webcam"
            />
            <button className="capture-button" onClick={capture}>Capture photo</button>

            {imageSrc && (
                <div className="captured-image-container">
                    <img src={imageSrc} alt="Captured" className="captured-image" />
                    <div className="button-container">
                        <button className="confirm-button" onClick={handleConfirm}>Confirmer</button>
                        <button className="retake-button" onClick={handleRetake}>Retour à la photo</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CameraCapture;
