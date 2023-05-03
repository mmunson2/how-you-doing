import React from 'react';
import './App.css';
import {ReactComponent as VeryHappyFace} from "./assets/very_happy.svg"
import {ReactComponent as HappyFace} from "./assets/happy.svg"
import {ReactComponent as NeutralFace} from "./assets/neutral.svg"
import {ReactComponent as UnhappyFace} from "./assets/unhappy.svg"
import {ReactComponent as VeryUnhappyFace} from "./assets/very_unhappy.svg"

function handleFaceClick(event: any, currentState: any) {
  currentState.submitted = true;
  console.log("We here!")
}

function showSubmitted(currentState: any): JSX.Element {
  return (
    <h1>Thanks for sharing how you feel!</h1>
  )
}

function showEmotionScale(currentState: any): JSX.Element {
  return(
  <div className="how-you-doing">
    <h1>How you doing?</h1>
    <VeryHappyFace className="very_happy_face" onClick={(event) => handleFaceClick(event, currentState)}/>
    <HappyFace className="happy_face" onClick={(event) => handleFaceClick(event, currentState)}/>
    <NeutralFace className="neutral_face" onClick={(event) => handleFaceClick(event, currentState)}/>
    <UnhappyFace className="unhappy_face" onClick={(event) => handleFaceClick(event, currentState)}/>
    <VeryUnhappyFace className="very_unhappy_face" onClick={(event) => handleFaceClick(event, currentState)}/>
  </div>)
}

function App() {

  const [currentState, setState] = React.useState({submitted: false})

  if(currentState.submitted) {
    return showSubmitted(currentState);
  }
  else {
    return showEmotionScale(currentState);
  }

}

export default App;
