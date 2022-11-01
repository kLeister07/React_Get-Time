import React, {useState} from "react";


let clock = new Date().toLocaleTimeString([], {timeStyle: 'short'});

function App() {
const [time, setTime] = useState(clock)

const getTimeHandler = (event) => {
  
}

  return (
    <div className="container">
      <h1>{time}</h1>
      <button>Get Time</button>
    </div>
  );
}

export default App;
