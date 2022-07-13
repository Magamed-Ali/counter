import React, {useEffect, useRef, useState} from 'react';

function Ref(props) {

    /**const inputEL = useRef(null);
    console.log(inputEL.current);*/
    const numRef = useRef(0);
    const [count, setCount] = useState(0)

    const handleClick = () => {
        /**numRef.current =+ 1*/

        setCount((prevCount) => prevCount + 1)
        setCount((prevCount) => prevCount + 1)
        setCount((prevCount) => prevCount + 1)
    }

    useEffect(()=> {
        /**console.log(inputEL.current)*/
    })
    return (
        <div>
            {/**<input type="text" placeholder='name' ref={inputEL}/>*/}

            <button onClick={handleClick}>{numRef.current}</button>
            <button onClick={handleClick}>{count}</button>

        </div>
    );
}

export default Ref;