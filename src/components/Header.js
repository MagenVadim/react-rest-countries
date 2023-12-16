import React from 'react'
import { BsFillMoonFill } from "react-icons/bs";

const Header = () => {

  const changeTheme = ()=> {    
    const moon = document.querySelector('.fa-moon');
    const header = document.querySelector('.header');
    console.log(header.className)
    // const input = document.querySelector('#search');
    // const select = document.querySelector('.select');
    const details = document.querySelectorAll('.details');
    const button = document.querySelectorAll('.btn');
    const lis = document.querySelectorAll('.border-li');

    moon.addEventListener('click', ()=>{
      document.body.classList.toggle('light-theme');
      header.classList.toggle('light-theme');
      // input.classList.toggle('light-theme');
      // select.classList.toggle('light-theme');

      details.forEach((detail)=>{
        detail.classList.toggle('light-theme');
      })
      button.forEach((btn)=>{
        btn.classList.toggle('light-theme');
      })   
      lis.forEach((li)=>{        
        li.classList.toggle('light-theme');
      })  
      
    })
    
  }

  return (
    <>
      <header className="header">
        <div>
          <h1>Where in the world ?</h1>
        </div>
        <div>
          <div className="fas fa-moon" onClick={()=>changeTheme()}><BsFillMoonFill />Dark mode
          </div>  
        </div>
        
      </header>
    </>
  )
}

export default Header
