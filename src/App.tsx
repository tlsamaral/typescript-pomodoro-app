import React from 'react';
import { PomodoroTimer } from './components/pomodoro-timer';

function App(): JSX.Element {
  return (
    <div className="container">
      <PomodoroTimer
        pomodoroTime={60 * 25}
        shortRestTime={60 * 5}
        longRestTime={60 * 15}
        cycles={4}
      />
    </div>
  );
}

export default App;
