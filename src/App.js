import React, {useState} from 'react';
import Timer from './components/Task/Timer'

function App(props) {
    const [isTimer, setTimer] = useState(false);

    return (
        <div>
            <h2>React App</h2>
            <button onClick={() => setTimer(!isTimer)}>Togle Timer</button>
                {isTimer && <Timer />}
        </div>
    );
}

export default App;