import { useState, useEffect } from "react";
import { Button, Form, ModalTitle } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import Timer from "./Timer";
import ControlButtons from "./ControlButtons";


const Watch = ({ time, setTime, isActive, setIsActive }) => {
  const [isPaused, setIsPaused] = useState(true);
    
  useEffect(() => {
    let interval = null;
  
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);
  
  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };
  
  const handlePauseResume = () => {
    setIsPaused(!isPaused);
    setIsActive(!isActive);
  };
  
  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  const handleStop = () => {
    setIsActive(false);
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);  
  
  return (
    <>
      <Timer time={time} />
      <ControlButtons
      active={isActive}
      isPaused={isPaused}
      handleStart={handleStart}
      handlePauseResume={handlePauseResume}
      handleReset={handleReset}
      handleStop={handleStop}
        />
    </>
  );
}
  
export default Watch;