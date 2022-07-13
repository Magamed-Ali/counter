import React, {useEffect, useState} from 'react';

function Refact1(props) {
    const [count, setCount] = useState(0);
    const [isCounting, setIsCounting] = useState(false);
    const [counterId, setCounterId] = useState()

    useEffect(() => {
        const userCount = localStorage.getItem('count');
        if (userCount) setCount(+userCount);

        localStorage.setItem('count', count);

    })

    const handleReset = () => {
        setCount(0)
        setIsCounting(false)
    };

    const handleStart = () => {

        setIsCounting(true)

        setCounterId(setInterval(() =>
            setCount(count + 1), 1000))
    };

    const handleStop = () => {
        clearInterval(counterId)
        setIsCounting(false)

    };

    componentWillUnmount() {
        clearInterval(this.counterId);
        this.handleStop();
    }

    return (
        <div></div>
    );
}

export default Refact1;