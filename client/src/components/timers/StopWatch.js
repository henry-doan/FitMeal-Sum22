import React, { useState } from "react";
import { Button, ModalTitle } from "react-bootstrap";
import { Modal } from "react-bootstrap";

export function Timer(props) {
  return (
    <div className="timer">
      <span className="digits">
        {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
      </span>
      <span className="digits">
        {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}.
      </span>
      <span className="digits mili-sec">
        {("0" + ((props.time / 10) % 100)).slice(-2)}
      </span>
    </div>
  );
} 

function ControlButtons(props) {
  const StartButton = (
    <div className="btn btn-one btn-start"
         onClick={props.handleStart}>
      Start
    </div>
  );
  const ActiveButtons = (
    <div className="btn-grp">
      <div className="btn btn-two" 
           onClick={props.handleReset}>
        Reset
      </div>
      <div className="btn btn-one" 
           onClick={props.handlePauseResume}>
        {props.isPaused ? "Resume" : "Pause"}
      </div>
    </div>
  );
  const CompleteButton = (
    <div className="btn btn-three btn-stop"
      onClick={props.handleStop}>
      Complete Workout!
    </div>
  );
  return (
    <div className="Control-Buttons">
      <div>{props.active ? ActiveButtons : StartButton}{CompleteButton}</div>
    </div>
  );
}

function StopWatch({ time, setTime }) {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  // const [time, setTime] = useState(0);
    
  React.useEffect(() => {
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
      <Button variant="primary" onClick={handleShow}>
        Launch Stopwatch
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Stopwatch</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="stop-watch">
          <Timer time={time} />
          <ControlButtons
        active={isActive}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePauseResume={handlePauseResume}
        handleReset={handleReset}
        handleStop={handleStop}
          />
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
  
export default StopWatch;