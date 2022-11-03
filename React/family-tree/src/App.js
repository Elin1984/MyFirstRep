import Family from "./Family";


function App() {
  const Dad = "Salomon";
  const Mom = "Clarice";
  const Brother = "Daniel";


  return (
    <div className="app">
      <Family Dad={Dad} Mom={Mom} Brother={Brother}/>
    </div>
  );
}

export default App;