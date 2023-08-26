import { SearchBar } from '../SearchBar/SearchBar'
import Logo from '../../assets/desktop/logo.svg'
import './index.css'

export const HeaderJob = () => {
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
       > <SearchBar/></div>
     </div>
    </header>
  )
}
