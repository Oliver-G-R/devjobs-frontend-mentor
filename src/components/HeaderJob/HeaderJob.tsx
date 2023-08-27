import Logo from '../../assets/desktop/logo.svg'
import './index.css'

interface HeaderJobProps {
  children?: JSX.Element
}

export const HeaderJob = ({ children }:HeaderJobProps) => {
  return (
    <header className="header-container">
     <div className='global-container header-content'>
        <div className='header-container__content-logo'>
          <img  src={Logo} alt="" />
          {/* search toggle */}
        </div>
       <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'          
        }}
       > 
        { children }
       </div>
     </div>
    </header>
  )
}
