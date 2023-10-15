import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Item from './components/Item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInfo, faCopyright } from '@fortawesome/free-solid-svg-icons';
import  cloudsimg  from './Clouds-and-Stars.png';


function App() {
  const [recipes, setRecipes] = useState(null);
  const checkFunction = () => {
    axios({
        method: "GET",
        url: "http://127.0.0.1:5000/start"
    })
        .then((response) => {
            // setRecipes(response.data)
        })
        .catch((error) => {
            window.alert("There is an error!")
        })
    console.log("It's alive!")
  }
  const findrecipes = (localStorage) => {
    axios({
      method: "post",
      url: "http://127.0.0.1:5000/findrecipes",
      data: localStorage
    })
      .then((response) => {
        console.log("There maybe perhaps may not be probably may not be actually it just works jk")
        console.log(response.data)
        setRecipes(response.data)
      })
      .catch((error) => {
        window.alert("There perhaps may be an error may be present maybe perhaps")
      })
    console.log("working,working;working;working")
  }
  useEffect(() => {
    checkFunction();
  }, [])
  return (
    <div className="w-[100vw] h-[100vh] ">
      <div className='bg-gradient-to-b from-[#c3efff] to-[#c3efff] via-white w-[100vw] h-[93.5vh]'>
      <header className="App-header">
        <div className="flex item-center w-[100vw] h-[3vw] bg-[#c3efff] mb-[9px] opacity-[0.65]">
          <img src="https://source.unsplash.com/random/?dog" className="mx-[14px] my-auto justify-center rounded-full bg-contain w-[37px] h-[35px] border-[2px] border-[#678f9e]"/>
          <h1 className="font-['Orbitron'] text-2xl text-[#8b8eb3] my-auto">Super Smart Fridge</h1>
          <FontAwesomeIcon icon={faInfo} />
        </div>
      </header>
        <div className="flex p-3">
          <div className='flex flex-wrap justify-left bg-[#7d949d] w-[59vw] shadow-inner shadow-[#07394d] rounded-md p-3 z-50'>
            <Item text="Egg" image="https://source.unsplash.com/random/700x700/?egg"/>
            <Item text="Milk" image="https://source.unsplash.com/random/700x700/?milk"/>
            <Item text="Avocado" image="https://source.unsplash.com/random/700x700/?avocado"/>
            <Item text="Basil" image="https://source.unsplash.com/random/700x700/?basil"/>
            <Item text="Tomato" image="https://source.unsplash.com/random/700x700/?tomato"/>
            <Item text="Pasta" image="https://source.unsplash.com/random/700x700/?pasta"/>
          </div>
          <div className="absolute -right-10 top-2">
            <img src={cloudsimg}/>
          </div>
          <div className="absolute center-0 bottom-3">
            <img src={cloudsimg}/>
          </div>
          <div className="absolute -left-50 bottom-0">
            <img src={cloudsimg}/>
          </div>
          <div className="p-6">
            {recipes && <div id="recipes" className="bg-[#c7b7f7] w-[49vw] flex shadow-2xl shadow-[#8b8eb3] rounded-lg">
              {Object.keys(recipes).map((key,index) => (
                  <div key={index} className="p-4 font-['Orbitron']">
                    <img className="w-[150px]" src={`https://source.unsplash.com/random/700x700/?${key}`}/>
                    <h2 className="text-center">{key}</h2>
                    <p className="text-center">{recipes[key][0]} of {recipes[key][1]}</p>
                  </div>
              ))}
            </div> }
          </div>
        </div>
        <div className="w-[50vw]">
          <button className="border-[#c3efff]  bg-[#678f9e] ml-auto mr-auto place-content-center border-[5px] rounded-sm  hover:shadow-[#678f9e] hover:shadow-lg text-[#faf8f5] block pr-10 pl-10 pt-5 pb-4 font-['Orbitron']" onClick={() => findrecipes(localStorage)}>Generate Recipes</button>
        </div>
        </div>
        <div className='absolute bottom-1 w-[100vw] h-[4.5vh] bg-[#a5f0dd]'>
          <a href="https://github.com/amalia-ullman/smart-fridge" target="_blank" className='absolute left-1 bottom-0'>GitHub</a>
          <p className='text-s absolute right-20 bottom-1 text-slate-700'>Your fridge. Your data. Our servers. Our decisions.</p>
          <FontAwesomeIcon icon={faCopyright} className='absolute right-14 bottom-3'/>
          <FontAwesomeIcon icon={faGithub} className='absolute left-14 bottom-1'/>
        </div>
    </div>
  );
}

export default App;
