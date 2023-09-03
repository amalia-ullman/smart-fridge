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
    <div className="bg-[#8e9192]">
      <header className="App-header">
        <div className="w-[100vw] h-[3vw] bg-[#00d5ff] mb-[9px]">
          <img src="https://source.unsplash.com/random/?dog" className="mx-[14px] mt-auto mb-auto justify-center rounded-full bg-contain w-[37px] h-[37px] border-2"/>

        </div>
        <div className='flex flex-wrap justify-left bg-yellow-300 w-[70vw]'>
          <Item text="Egg" image="https://source.unsplash.com/random/700x700/?egg"/>
          <Item text="Milk" image="https://source.unsplash.com/random/700x700/?milk"/>
          <Item text="Avocado" image="https://source.unsplash.com/random/700x700/?avocado"/>
          <Item text="Basil" image="https://source.unsplash.com/random/700x700/?basil"/>
          <Item text="Tomato" image="https://source.unsplash.com/random/700x700/?tomato"/>
          <Item text="Pasta" image="https://source.unsplash.com/random/700x700/?pasta"/>
        </div>
        <button className='border-dashed border-emerald-700 bg-fuchsia-300 ml-auto mr-auto border-4 text-lime-500 block pr-10 pl-10 pt-5 pb-4 font-extrabold font-serif' onClick={() => findrecipes(localStorage)}>Pressme</button>
        {recipes && <div id="recipes" className="bg-pink-700 w-[30vw]">
          {Object.keys(recipes).map((key,index) => (
              <div key={index}>
                <img className="w-[100px]" src={`https://source.unsplash.com/random/700x700/?${key}`}/>
                <h2>{key}</h2>
                <p>{recipes[key][0]} of {recipes[key][1]}</p>
              </div>
          ))}
        </div>
        }
      </header>
    </div>
  );
}

export default App;
