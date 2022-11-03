import Person from "./Person";

function App() {
  const firstName = "Jane";
  const lastName = "Doe";
  const age = 32;
  const job = "Developer";

  return (
    <div className="app">
      <Person firstName={firstName} lastName={lastName} age={age} job={job} />
    </div>
  );
}

export default App;

