import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const hero = ["Akshay","Sharukh","Sourav"];
  const products = [
    {name:"Sourav ", work:"Student"},
    {name:"Subash ", work:"Businessman"},
    {name:"Mala ", work:"Housewife"}
  ];

 

  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul>
         {
          hero.map(name=>  <li> {name} </li>)
         }
         {
          products.map(product=> <li> {product.name} </li>)
         }
        </ul>
        <h1>My App</h1>
        
          <div>
           { products.map(product=> <Person product={product}></Person>)}
          </div>
        
        
        {/* <Person product={products[0]}></Person>
        <Person product={products[1]}></Person>
        <Person product={products[2]}></Person> */}
      </header>
    </div>
  );
}

function Users(){
  const [user , setUser]= useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUser(data))
  },[])

  return (
    <div>
      <h2>Dinamics Effect: {user.length}</h2>
      <ul>
      {
        user.map(user=><li>{user.name}</li>)
      }
      </ul>
    </div>
  )
}



function Counter() {
    const [count,setCount] = useState(0);
  return (<div>
      <h1>Count: {count}</h1>
      <button onClick={()=> setCount(count + 1)}>Increase</button>
      <button onClick={()=> setCount(count - 1)}>Decrease</button>
    </div>)
}


function Person(props) {

  const personStyle ={
    backgroundColor: 'salmon',
    margin:"20px",
    height: "250px",
    width: "200px",
    color: 'black',
    borderRadius: ' 10px',
    boxShadow: '3px 3px 2px cyan , -3px -3px 2px white',
    float:"left",
    display:"block",
    
  }
  const {name,work} = props.product;
  return (
    <div style={personStyle}>
      <h2>{name}</h2>
      <h5>{work}</h5>
      <button>Buy now</button>
    </div>
  )
}


export default App;
