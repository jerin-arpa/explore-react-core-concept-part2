import { useState } from "react"

export default function Count() {
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }


    const handleReduce = () => {
        const newCount = count - 1;
        setCount(newCount);
    }


    return (
        <div style={{ border: '2px solid yellow', margin: '10px', padding: '10px', borderRadius: '15px' }}>
            <h3>Counter: {count}</h3>

            <button className="buttons" onClick={handleAdd}>Add</button>

            <button className="buttons" onClick={handleReduce}>Reduce</button>
        </div>
    )
}