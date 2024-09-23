import {useEffect, useState} from "react";

function App() {

 let countValue = JSON.parse(localStorage.getItem('count'))


let [counter, setCounter] = useState(countValue);
  
  function Addcounts(){ 
    setCounter(counter+2)
  }

  useEffect(()=>{
    localStorage.setItem('count',JSON.stringify(counter));
  },[counter]);


  // useEffect(()=>{
  //   const storedCount = localStorage.getItem('count');
  //   if(storedCount){
  //     setCounter(JSON.parse(storedCount));
  //     }
  //     },[]);

  function removeCounts() { 
    setCounter(counter-1)
   }

  return (
    <>

<div className="flex h-screen items-center justify-center bg-gradient-to-r from-blue-400 via-orange-700 border-t-violet-700">
  <div className="text-center p-8 rounded-lg shadow-lg bg-white/30 backdrop-blur-md">
    <h1 className="w-96 rounded-xl bg-gradient-to-r from-green-600 to-green-400 text-white font-bold p-6 text-center shadow-lg">
      Counter {counter}
    </h1>

    <div className="flex justify-center mt-6 space-x-4">
      <button
        className="w-1/2 p-3 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
        onClick={Addcounts}
      >
        Add Counts
      </button>

      <button
        className="w-1/2 p-3 rounded-full bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
        onClick={removeCounts}
      >
        Remove Counts
      </button>
    </div>
  </div>
</div>
f
       
    </>
  )
}

export default App
