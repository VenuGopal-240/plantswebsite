import React,{useMemo,useState} from "react";


const UseMemo = () => {

    const [count,setCount] = useState(0);

    function squareNum(count){
        console.log("every time calling because call in return count");
        return count * count
    }

    const greeting = useMemo(() =>{
        console.log("hello");
        return squareNum(count);
        // return count * count
    },[count]);

    const normal = useMemo(()=>{
        console.log("OnlyOnce")
        return "Hello Bro"
    },[]);

    const once = ()=>{
        console.log("Bro");
    }

    return(
        <>
        <div>
            fact:"{squareNum(2)}"<br/>
            <button onClick={()=>{setCount(count + 1)}}>Increment</button>
            <div>{count}</div>
            <div>Hello,{greeting}</div>
            <div>{normal}</div>
            <div>{once()}</div>
        </div>
       
        </>
    )
}

export default UseMemo;