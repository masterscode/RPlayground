import { useState } from "react";
import * as Yup from 'yup';
import "./App.css";



function App() {
  const formSchema = Yup.object().shape({
  name: Yup.string().max(4)
  });

  const [name, setName] = useState("");
  const [error, setError] = useState("default error message");

  const handleFieldChange = (e: React.FormEvent<HTMLInputElement>) => {
    const val: string = e.currentTarget.value;
    formSchema.validateAt(e.currentTarget.name, val)
    .then(v =>{
      console.log('received value', v.name);
      
    })
    .catch(er=>{
      console.log(er);
      
    })
    setName((name) => val);
  };
  return (
    <section className="App">
      <div>
        <img src="/vite.svg" className="logo" alt="Vite logo" />
      </div>
      <h1>React Playground</h1>
      <form>
        <div>
          <input type="text" name="name" onChange={handleFieldChange} />
          <small className="error">{error}</small>
        </div>
        <button type="submit" >submit</button>
      </form>
    </section>
  );
}

export default App;
