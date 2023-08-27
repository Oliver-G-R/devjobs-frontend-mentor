import './index.css'

interface ButtonProps {
  bgColor: string
  colorText : string
  text: string       
  onClick?: () => void                               
}

export const Button = ({ bgColor, colorText, text, onClick  }:ButtonProps) => {
  return (
    <button 
      onClick={() => onClick && onClick()}
      style={{
        backgroundColor: bgColor,
        color: colorText
      }}
      className='general-button'>
      {text}
    </button> 
  )
}
