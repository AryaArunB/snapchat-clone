import React, { useRef,useCallback, useState} from 'react';
import Webcam from "react-webcam";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { setCameraImage } from './features/cameraSlice';
import { useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import "./WebcamCapture.css";
const videoConstraints ={
    width:800,
    height:700,
    facingMode: "user",
};


function WebcamCapture() {
    const webcamRef=useRef(null);
   const history=useHistory();
    const dispatch = useDispatch();
    const capture = useCallback(
        () => {
            const imageSrc =webcamRef.current.getScreenshot();
            dispatch(setCameraImage(imageSrc));
            history.push('/preview');
        },
        [webcamRef])
    

    return (
        <div className='webcamCapture'>
            <Webcam
                audio={false}
                height={videoConstraints.height}
                ref={webcamRef}
                width={videoConstraints.width}
                videoConstraints={videoConstraints}
            />
            <RadioButtonUncheckedIcon
            className="webcamCapture_button" 
            onClick={capture}
            fontSize="large"
            />

        </div>
        );
    
}

export default WebcamCapture;

