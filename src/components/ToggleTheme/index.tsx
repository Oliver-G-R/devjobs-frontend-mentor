import './index.css'
import {ReactComponent as IconMoon } from '../../assets/desktop/icon-moon.svg'
import {ReactComponent as IconSun } from '../../assets/desktop/icon-sun.svg'
import { useState, useEffect } from 'react';
import { Theme } from '../../models/Theme';

export const ToggleTheme = () => {
  const [isDark, setIsDark] = useState(() => {
    const currentTheme = window.localStorage.getItem('theme') as Theme
    return currentTheme === 'dark'
  })

  
  useEffect(() => {
    const currentTheme = window.localStorage.getItem('theme') as Theme
    
    if(currentTheme){
      window.document.documentElement.setAttribute('data-theme', currentTheme)
     
    }else{
      window.document.documentElement.setAttribute('data-theme', 'light')
      window.localStorage.setItem('theme', 'light')
    }
  }, [])

  const ToggleTheme = () => {
    let changedTheme:Theme = 'light'

    if(!isDark){
      changedTheme = 'dark'
    }
    
    window.document.documentElement.setAttribute('data-theme', changedTheme)
    window.localStorage.setItem('theme', changedTheme)
    setIsDark(!isDark)
  }

  return (
    <div className='toggle-container'>
      <IconSun/>       
      <input 
        type='checkbox' 
        checked={isDark}
        onChange={ToggleTheme}
        className='toggle-content'
      />
      <IconMoon/>                               
    </div>
  )
}
