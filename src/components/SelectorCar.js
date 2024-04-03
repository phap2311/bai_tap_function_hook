import {useEffect, useState} from "react";

export default function SelectorCar() {
// eslint-disable-next-line react-hooks/rules-of-hooks
    let [selected, setSelected] = useState(0);
    let [selectedCo, setSelectedCo] = useState(4);
// eslint-disable-next-line react-hooks/rules-of-hooks
    let [valueSelect, setValueSelect] = useState("");
// eslint-disable-next-line react-hooks/rules-of-hooks
    let [valueColor, setValueColor] = useState("");
    const choice = e => {
        setSelected(e.target.value)
        setSelectedCo(e.target.value)
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        switch (selected) {
            case "0":
                setValueSelect("honda");
                break;
            case "1":
                setValueSelect("yamaha");
                break
            case "2":
                setValueSelect("toyota");
                break;
            case "3":
                setValueSelect("suzuki");
                break;
            default:

        }
    }, [selected]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        switch (selectedCo) {
            case "4":
                setValueColor("blue");
                break;
            case "5":
                setValueColor("red");
                break
            case "6":
                setValueColor("yellow");
                break;
            case "7":
                setValueColor("pink");
                break;
            default:

        }
    }, [selectedCo]);
    return (
        <>
            <div>
                Select a car
                <select onChange={event => {
                    choice(event)
                }}>
                    <option value={"0"}>honda</option>
                    <option value={"1"}>yamaha</option>
                    <option value={"2"}>toyota</option>
                    <option value={"3"}>suzuki</option>
                </select>
            </div>

            <div>
                Select a color
                <select onChange={event => {
                    choice(event)
                }}>
                    <option value={"4"}>blue</option>
                    <option value={"5"}>red</option>
                    <option value={"6"}>yellow</option>
                    <option value={"7"}>pink</option>
                </select>
            </div>
            <div>
                <h2>your select: {valueSelect} - {valueColor}</h2>

            </div>

        </>
    )
}