import React from "react";

const TemplateOne = () => {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", alignContent: "center", height: "100vh", boxSizing: "border-box" }}>
                <div style={{ width: "80vw", height: "80vh", marginTop: "5rem", display: "flex", flexDirection: "row" }}>
                    <div style={{ width: "40vw", display: "flex", justifyContent: "center", alignContent: "center", alignSelf: "center" }}>
                        <span
                            style={{
                                borderRadius: "50%",
                                height: "450px",
                                width: "450px",
                                backgroundColor: "hotpink",
                                display: "inline-block",
                                margin: "1rem",
                                backgroundImage: "url('https://wallpaperaccess.com/full/1507645.jpg')",
                                backgroundSize: "cover",
                                backgroundPosition: "center"
                            }}
                        ></span>


                    </div>
                    <div style={{ width: "40vw", }}>
                        <h1 style={{ fontSize: "90px" }}>Hello</h1>
                        <h2>A Bit About Me</h2>
                        <p>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                        <div style={{ margin: "1rem", width: "auto", display:"flex",flexDirection:"row"}}>
                            {/* <span style={{ borderRadius: "50%", height: "20vh", width: "9vw", backgroundColor: "red", border: "1px solid black", display: "inline-block", margin: "1rem" }}></span>
                            <span style={{ borderRadius: "50%", height: "20vh", width: "9vw", backgroundColor: "red", border: "1px solid black", display: "inline-block", margin: "1rem" }}></span> */}
                            <span
                                style={{
                                    borderRadius: "50%",
                                    height: "20vh",
                                    width: "9vw",
                                    backgroundColor: "red",
                                    border: "1px solid black",
                                    display: "grid",
                                    placeItems: "center",
                                    textAlign: "center",
                                    margin: "1rem",
                                    color: "white",
                                    fontSize: "1rem",
                                    fontWeight: "bold"
                                }}
                            >
                                Resume
                            </span>
                            <span
                                style={{
                                    borderRadius: "50%",
                                    height: "20vh",
                                    width: "9vw",
                                    backgroundColor: "red",
                                    border: "1px solid black",
                                    display: "grid",
                                    placeItems: "center",
                                    textAlign: "center",
                                    margin: "1rem",
                                    color: "white",
                                    fontSize: "1rem",
                                    fontWeight: "bold"
                                }}
                            >
                                Project
                            </span>
                            <span
                                style={{
                                    borderRadius: "50%",
                                    height: "20vh",
                                    width: "9vw",
                                    backgroundColor: "red",
                                    border: "1px solid black",
                                    display: "grid",
                                    placeItems: "center",
                                    textAlign: "center",
                                    margin: "1rem",
                                    color: "white",
                                    fontSize: "1rem",
                                    fontWeight: "bold"
                                }}
                            >
                                Contact
                            </span>


                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default TemplateOne;
// height: 25px;
//   width: 25px;
//   background-color: #bbb;
//   border-radius: 50%;
//   display: inline-block;