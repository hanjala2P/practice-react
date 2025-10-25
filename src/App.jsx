import './App.css';
import Todo from './ToDo';
import {Result} from './ToDo';
function App() {
    return (
    <>
   <h1 className="nee">!React</h1>
      {/* <Person ></Person >
      <Sports></Sports>
      <New>   </New>  */}
      <Sports name="hanjala " tech="js"></Sports>  
      <Sports name="rajon " tech="py"> </Sports>  
      <Player name="Tamim Iqbal" runs='5000'></Player>  
      <Player name="Sakib" runs='7000'></Player>  
      <Player name="mahmudullah" runs='4000'></Player>  
      <Salami name="hajala" event="Eid Ul Fitr" amount="10tk"></Salami>
      <Salami name="hajala" event="Eid Ul Adzha" amount="20tk"></Salami>
      <Todo task="Learn Some Thing New"></Todo>
      <Result point="4.56"></Result>
    </>
    
  )
}
function Person(){
  const age=21;
  const name="i am Hanjala";
  return(
    <>
      <h2 className="nee">Hello World!{name} {age}</h2>
    </>
  )
}
function New(){
  return(
    <>
    <p style={{
      color:' rgb(212, 1, 114)',
      fontSize:"24px"
    }
     
    }> Hellow & welcme brother </p>
    <ul className='nav'>
      <li>Home</li>
      <li>Menu</li>
      <li>Contact</li>
    </ul>
    </>
  )
}
function Sports(props){
  // console.log(props);
  return(
    <>
      <div className="card">
        <h3>Cricket</h3>
        <p>{props.name}playing and lossing {props.tech}</p>
        <button className="btn">See more</button>
      </div>

    </>
  )
}
  // const (name,tech)={name:'hanjala', tech:'js', runs:4500}

function Player({name,runs}){
  return(
    <>
      <div className="card">
          <h3>Name :{name} </h3>
           <h3>Runs :{runs}</h3>
      </div>
    </>
  )
}
function Salami({name, event,amount}){
  return(
    <>
      <div className="card">
        <h3>Event :{event} .name: {name} bouns:{amount}</h3>
      </div>
    </>
  )
}
export default App



