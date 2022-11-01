import React, {useState} from "react";



function App() {
  const clock = new Date().toLocaleTimeString();
  const [time, setTime] = useState(clock)

  function getTimeHandler() {
    const newTime = new Date().toLocaleTimeString()
    setTime(newTime)
    setInterval(getTimeHandler, 1000)
  }
  
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTimeHandler}>Get Time</button>
    </div>
  );
}

export default App;
