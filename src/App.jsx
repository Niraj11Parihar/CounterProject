import { useEffect, useState } from "react";

function App() {
  let countValue = JSON.parse(localStorage.getItem('count')) || 0;
  
  let [counter, setCounter] = useState(countValue);
  let [show, setShow] = useState(true); // default to true so the counter is shown initially
  let [h1BgChanged, setH1BgChanged] = useState(false); // state to track background change

  function showbtn() {
    setShow(true);
  }

  function hidebtn() {
    setShow(false);
  }

  function togglebtn() {
    setShow(prevShow => !prevShow); // Toggles the value of 'show'
  }
  
  function Addcounts() { 
    setCounter(counter + 2);
  }

  function removeCounts() { 
    if(counter <= 0){
      return false;
    }else{
      setCounter(counter - 1)
    }
  }

  function toggleH1Bg() {
    setH1BgChanged(prevState => !prevState); // Toggle the background state
  }

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(counter));
  }, [counter]);

  return (
    <>
      <div className="flex h-screen items-center justify-center bg-gradient-to-r from-blue-400 via-orange-700 border-t-violet-700">
        <div>
          {show && ( // This conditionally renders the counter
            <div className="counter text-center p-8 rounded-lg shadow-lg bg-white/30 backdrop-blur-md">
              <h1
                className={`w-96 rounded-xl text-white font-bold p-6 text-center shadow-lg ${
                  h1BgChanged ? 'bg-gradient-to-r from-red-600 to-red-400' : 'bg-gradient-to-r from-green-600 to-green-400'
                }`}
                onClick={toggleH1Bg} // Change background on click
              >
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
          )}
          <div className="text-center flex justify-evenly mt-20 bg-gradient-to-b from-red-800 p-3 rounded shadow-md">
            <button className="hover:shadow-lg p-2 hover:scale-105 transition duration-300" onClick={hidebtn}>
              HIDE
            </button>
            <button className="hover:shadow-lg p-2 hover:scale-105 transition duration-300" onClick={showbtn}>
              SHOW
            </button>
            <button className="hover:shadow-lg p-2 hover:scale-105 transition duration-300" onClick={togglebtn}>
              TOGGLE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
