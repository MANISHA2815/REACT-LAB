import React,{useState} from  "react"
export default function counter(){
    const [count,setCount]=useState()
    function increment(){
        setCount(count+1)
    }
    function decrement(){
        setCount(count-1)
    }
    return(
        <>
        <h1>{count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        
        
        
        </>
    )
    
}