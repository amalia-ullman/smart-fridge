import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Item from './components/Item';


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
    <div className="bg-[#dadee0] w-[100vw] h-[100vh]">
      <header className="App-header">
        <div className="flex item-center w-[100vw] h-[3vw] bg-[#c3efff] mb-[9px]">
          <img src="https://source.unsplash.com/random/?dog" className="mx-[14px] my-auto justify-center rounded-full bg-contain w-[37px] h-[35px] border-[2px] border-[#678f9e]"/>
          <h1 className="font-['Orbitron'] text-2xl text-[#8b8eb3] my-auto">Super Smart Fridge</h1>
          <FontAwesomeIcon icon="fa-sharp fa-solid fa-info" />
        </div>
      </header>
        <div className="flex p-3">
          <div className='flex flex-wrap justify-left bg-[#7d949d] w-[59vw] shadow-inner shadow-[#07394d] rounded-md p-3'>
            <Item text="Egg" image="https://source.unsplash.com/random/700x700/?egg"/>
            <Item text="Milk" image="https://source.unsplash.com/random/700x700/?milk"/>
            <Item text="Avocado" image="https://source.unsplash.com/random/700x700/?avocado"/>
            <Item text="Basil" image="https://source.unsplash.com/random/700x700/?basil"/>
            <Item text="Tomato" image="https://source.unsplash.com/random/700x700/?tomato"/>
            <Item text="Pasta" image="https://source.unsplash.com/random/700x700/?pasta"/>
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
        <div className="w-7/12">
          <button className="border-[#c3efff] bg-[#678f9e] ml-auto mr-auto border-[5px] rounded-sm  hover:shadow-[#678f9e] hover:shadow-lg text-[#faf8f5] block pr-10 pl-10 pt-5 pb-4 font-['Orbitron']" onClick={() => findrecipes(localStorage)}>Pressme</button>
        </div>
      
    </div>
  );
}

export default App;
