import React, { useContext, useEffect, useState } from "react";


import '../front/front.css'


import {switchCardContext} from '../../../context/CardContext'


const BtnArray = document.getElementsByClassName("number");

function numberSelected(number) {
  
  for (let i = 0; i < BtnArray.length; i ++ ) {
    BtnArray[i].style.backgroundColor = "hsl(216, 12%, 8%)"
    BtnArray[i].style.color = "hsl(216, 12%, 54%)"
    
  }
  
  number.style.color = "hsl(0, 0%, 100%)"
  number.style.backgroundColor = "hsl(25, 97%, 53%)"
  
}





function Front(props) {
  const[feedback, setfeedback] = useState(false)
  const[fBValue,setFBValue] = useState(0)
  const[canTurn, setCanTurn,feedBackValue,setFeedBackValue] = useContext(switchCardContext)
 
  
  
  function NumberValue(value) {
    setFBValue(value);
  }
  
  useEffect(() => {
    console.log(fBValue);
    setFeedBackValue(fBValue);
  }, [fBValue]);


  
  

  return (
    <div className="front">
      <div className="startSvg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 20">
          <path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="#FC7614"/>
        </svg>
      </div>
      <h1 className="title" >How did we do?</h1>
      <h3 className="question">Please let us know how we did with your support request. 
          All feedback is appreciated 
          to help us improve our offering!
      </h3>
      <ul className="NumbersList">
        <li className="number" 
          onClick={(event) => {
            numberSelected(event.target);
            setfeedback(true)
             NumberValue(event.target.textContent)
            }}>1</li>
        <li className="number" 
          onClick={(event) => {
            numberSelected(event.target);
            setfeedback(true)
             NumberValue(event.target.textContent)
            }}>2</li>
        <li className="number" 
          onClick={(event) => {
            numberSelected(event.target);
            setfeedback(true)
             NumberValue(event.target.textContent)
            }}>3</li>
        <li className="number" 
          onClick={(event) => {
            numberSelected(event.target);
            setfeedback(true)
             NumberValue(event.target.textContent)
            }}>4</li>
        <li className="number" 
          onClick={(event) => {
            numberSelected(event.target);
            setfeedback(true)
             NumberValue(event.target.textContent)
            }}>5</li>
      </ul>


      <button className="submitBTN" onClick={() => 
        {feedback === true ? setCanTurn(true): setCanTurn(false)}}>Submit</button>
    </div>
  );
}


export default Front