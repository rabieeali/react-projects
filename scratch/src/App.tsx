import React, { useState } from "react";

const App = () => {

    const [counter, setCounter] = useState(0)
    const [input, setInput] = useState('')

    return (
        <>
            <h1>Hello React</h1>
            <button onClick={() => setCounter(pre => pre + 1)}>add - {counter}</button>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <p>{input}</p>
        </>
    );
};

export default App;