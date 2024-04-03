import {useEffect, useState} from "react";
import {clear} from "@testing-library/user-event/dist/clear";

export default function Timer() {
    let [timer, setTimer] = useState(10);
    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prevTimer => {
                if (prevTimer === 0) {
                    clearInterval(interval);
                    alert("Time's up");
                    return 0;
                } else {
                    return prevTimer - 1;
                }
            })
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div>
            <h1>CountDown Timer: {timer}</h1>
        </div>
    )
}