import React,{useState} from 'react';

function App() {
  const [name,setName]=useState('');
  const [marks,setMarks]=useState('');
  const[result,setResult]=useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted Name:", name);
    console.log("Submitted Marks:", marks);
    setResult([...result, { name, marks }]);
    setName('');
    setMarks('');
    alert(`Name: ${name}, Marks: ${marks}`);
  }
  console.log("Result:", result);
  
  return (
    <div className="App">
     <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
        <br/>
        <br/>
        <input type="text" placeholder="Enter Marks" value={marks} onChange={(e)=>setMarks(e.target.value)}/>
        <br/> 
        <br/>
        <button type="submit">Submit</button>
     </form>
    </div>
  );
}

export default App;
