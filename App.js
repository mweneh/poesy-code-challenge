import React, { useEffect, useState } from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

function App() {
  const [poems, setPoems]= useState([])
  const [showForm, setShowForm]= useState(false)
  
    useEffect(() => {
      fetch("http://localhost:8004/poems")
      .then(r => r.json())
      .then(poems =>setPoems(poems))
      
        
    },[])
function handleShowform(){
  setShowForm(showForm => showForm = !showForm)
}  
function handleNewPoem(newPoem){
  // post poem to server & update list via state
  const serverOPtions = {
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(newPoem)
  }

fetch('http://localhost:8004/poems', serverOPtions)
.then(r=>r.json())
.then(myPoem => setPoems(poems =>[...poems, myPoem]))
.catch(error=>console.log(error))
}
  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={handleShowform}> {showForm ? 'Hide': 'Show'} new poem form</button>
        {showForm ? <NewPoemForm onSubmission={handleNewPoem}/> : null}
      </div>
      <PoemsContainer poems={poems} />
    </div>
  );
}

export default App;
