import React, {useState} from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(true)

function toggleButton(){
  setIsOn(!isOn)
}
console.log(isOn)

  return <button style={{background: isOn? "green":"red"}}onClick={toggleButton}>{isOn? "ON" : "OFF"}</button>;
}

export default Toggle;
