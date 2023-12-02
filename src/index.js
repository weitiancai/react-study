import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyToolBar from './Utils/others/button'
import MyToolBar2 from './Utils/others/passHandler'
import Messenger from './Utils/others/chatMessage'
import PoeList from './Utils/List/PoeList'
// error
// import otherButton from './Utils/others/others';
// fix
import OtherButton from './Utils/others/others';
import ComplexList from './Utils/List/ComplexPageList';

import Test from './Utils/test'
// import myAxios from './Utils/axios';
// React.axios = myAxios
const root = ReactDOM.createRoot(document.getElementById('root'));

function Header(props){
  return <h1>{props.title}</h1>
}



function HomePage(){
  const [likes, setLikes] = React.useState(0);
  const names = ['weimeng','handsom boy'];
  function handleClick(){
    // console.log("increment like count")
    setLikes(likes+1)
  }
  return (
    <div>
      <Header title="weimeng a talanted programmer!"></Header>
      <ul>
        {names.map((name) => <li key={name}>{name}</li>)}
      </ul>
      <button onClick={handleClick}>Like({likes})</button>
    </div>
  );
}

// error
// function Button({onClick,chilren}){
//   return (<Button onClick={onClick}>
//   {chilren}
//   </Button>)
// }

// fix
function Button({onClick,chilren}){
  return (
  <button onClick={onClick}>
    {chilren}
  </button>)
}

function Toolbar({oneParam, twoParam}){
  return (
    <>
    <div> 
      <Button onClick={oneParam}>one</Button>
      <Button onClick={twoParam}>two</Button>
    </div>
    
    </>
  )
}



root.render(
  <React.StrictMode>
    {/* <OtherButton>我是按钮，别给我消失了</OtherButton>
    <App></App> 
    <PoeList></PoeList>
    <HomePage></HomePage>
    <Toolbar
      oneParam={() => alert('Playing!')}
      twoParam={() => alert('Uploading!')}
    />
    <MyToolBar></MyToolBar>
    <MyToolBar2/>
    <Messenger></Messenger> */}
    {/* <ComplexList></ComplexList> */}
    <Test></Test>
  </React.StrictMode>

);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
