import Logo from '../../assets/desktop/logo.svg'
import { ToggleTheme } from '../ToggleTheme'
import './index.css'
import { Link } from 'wouter'
interface HeaderJobProps {
  children?: JSX.Element
}

export const HeaderJob = ({ children }:HeaderJobProps) => {
  return (
    <header className="header-container">
     <div className='global-container header-content'>
        <div className='header-container__content-logo'>
          <Link href='/'>
            <img  src={Logo} alt="" />
          </Link>
          <ToggleTheme/>
        </div>
        
       
        <div 
         style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'          
          }}
        >{ children }
        </div>
     </div>
    </header>
  )
}
