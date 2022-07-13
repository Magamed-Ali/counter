import React, {useState, useEffect, useRef} from 'react';

function setDefaultValue() {
        const userCount = localStorage.getItem('count');
        return userCount ? +userCount : 0
}

export default function Timer() {
    const [count, setCount] = useState(setDefaultValue());
    const [isCounting, setIsCount] = useState(false)
    const timerIdRef = useRef(null)

    const handleReset = () => {
        setCount(0)
        setIsCount(false)
    };

    const handleStart = () => {
            setIsCount(true)

        timerIdRef.current = setInterval(() => {
            setCount(count + 1);
        }, 1000);
    };

    const handleStop = () => {
        clearInterval(timerIdRef.current);
        setIsCount(false)
    };

    useEffect(() => {

        localStorage.setItem('count', count);

        return () => {
            clearInterval(timerIdRef.current)
        }
    }, [count]);

    /*componentDidUpdate()
    {
        localStorage.setItem('count', this.state.count);
    }

    componentWillUnmount()
    {
        clearInterval(this.counterId);
        this.handleStop();
    }*/
    return (
        <div className="App">
            <h1>React Timer</h1>
            <h3>{count}</h3>
            {!isCounting ? (
                <button onClick={handleStart}>Start</button>
            ) : (
                <button onClick={handleStop}>Stop</button>
            )}
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}

