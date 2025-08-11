import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import './App.css';

function App() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="clock-container">
      <p className="time-display">
        {format(now, 'MMMM do yyyy, h:mm:ss a')}
      </p>
    </div>
  );
}

export default App;
