import './index.css'

interface ButtonProps {
  bgColor: string
  colorText : string
  text: string      
  className?: string 
  onClick?: () => void                               
}

export const Button = ({ bgColor, colorText, text, onClick, className  }:ButtonProps) => {
  return (
    <button 
      onClick={() => onClick && onClick()}
      style={{
        backgroundColor: bgColor,
        color: colorText
      }}
      className={`general-button ${className}`}
      >
      {text}
    </button> 
  )
}
