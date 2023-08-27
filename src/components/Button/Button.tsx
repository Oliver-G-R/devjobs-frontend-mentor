import './index.css'

interface ButtonProps {
  bgColor: string
  colorText : string
}

export const Button = ({ bgColor, colorText }:ButtonProps) => {
  return (
    <button 
      style={{
        backgroundColor: bgColor,
        color: colorText
      }}
     className='general-button'>
      Search
    </button> 
  )
}
