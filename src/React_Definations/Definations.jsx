import React, { useState } from 'react';

const Definations = () => {
    const [data, setData] = useState('map');
    return (
        <>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ border: "1px solid black", width: "10%" }}>
                    <div style={{ border: "1px solid black", padding: "1rem" }} onClick={() => setData('jsx')}>JSX</div>
                    <div style={{ border: "1px solid black", padding: "1rem" }} onClick={() => setData('Components')}>Components</div>
                    <div style={{ border: "1px solid black", padding: "1rem" }}>Bro</div>
                    <div style={{ border: "1px solid black", padding: "1rem" }}>fd</div>
                    <div style={{ border: "1px solid black", padding: "1rem" }}>fdd</div>
                </div>
                <div style={{ border: "1px solid black", width: "90%" }}>
                    <div style={{ border: "1px solid black", width: "80%", margin: "3rem", fontSize: "3vw" }}>{data === 'jsx' && <div>'JSX serves as a syntax extension to JavaScript, facilitating the combination of HTML structures with JavaScript code within Reactfiles.'</div>}</div>
                    <div style={{ border: "1px solid black", width: "80%", margin: "3rem", fontSize: "3vw" }}>{data === 'Components' && <div>JSX serves as a syntax extension to JavaScript, facilitating the
                        combination of HTML structures with JavaScript code within
                        React files.</div>}</div>

                </div>
            </div>
        </>
    )
}
export default Definations;