import { useState } from "react";

export default function Header({theme}) {
  const [isDark, setIsDark] = theme

  if(isDark){
    document.body.classList.toggle('dark')
  }else{
    document.body.classList.remove('dark')
  }

  return (
    <div>
      <header className={`header-container ${isDark ? 'dark' : ''}`}>
        <div className="header-content">
          <h2 className="title">
            <a href="/">Where in the world? </a>
          </h2>
          <p className="theme-changer" onClick={()=>{
            setIsDark(!isDark)
            localStorage.setItem('isDarkMode', !isDark)
          }} >
            <i className={`fa-regular fa-${isDark ? 'sun' : 'moon' }`} />
            &nbsp;&nbsp; {`${isDark ? 'Light' : 'Dark'} Mode`}
          </p>
        </div>
      </header>
    </div>
  );
}
