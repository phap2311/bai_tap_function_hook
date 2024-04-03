import {useState} from "react";

export default function Counter() {
    let [count1, setCount1] = useState(0);
    let [count2, setCount2] = useState(0);
    const handleClick1 = () => {
        const newCount1 = count1 + 1;
        setCount1(newCount1);
    }
    const handleClick2 = () => {
        const newCount2 = count2 + 2;
        setCount2(newCount2);
    }
    return(
        <>
            <div>
                Count 1: {count1}
                <div>
                    <button onClick={handleClick1}>add 1</button>
                </div>
            </div>

            <div>
                Count 2: {count2}
                <div>
                    <button onClick={handleClick2}>add 2</button>
                </div>
            </div>
        </>
    )
}