import React from 'react'



function Item({text, image}) {
    const [ingredient, setingredient] = React.useState(null)
    const [ingredientbool, setingredientbool] = React.useState(JSON.parse(localStorage.getItem(text)))
    function checkItem(){
        localStorage.setItem(text, !JSON.parse(localStorage.getItem(text)))
        setingredient(localStorage.getItem(text))
        setingredientbool(!ingredientbool)
        
    }
    React.useEffect(() => {
      checkItem();
    }, [])
  return (
    <div>
    { !ingredientbool && 
      <div className="item border-4 border-green-800 text-center text-slate-950 w-[125px] m-[2px]" onClick={checkItem} >
          <img className="w-[100px] h-[100px] block ml-auto mr-auto" src={image}/>
          <p>{text}</p>
      </div> }
    { ingredientbool && 
        <div className="item border-4 border-red-800 text-center text-slate-950 w-[125px] m-[2px] bg-slate-600" onClick={checkItem} >
          <img className="w-[100px] h-[100px] block ml-auto mr-auto" src={image}/>
          <p>{text}</p>
        </div>
    }
    </div>
    
  )
}

export default Item