import { SearchBar } from '../SearchBar/SearchBar'
import './index.css'

export const HeaderJob = () => {
  return (
    <header className="header-container">
     <div className='global-container header-content'>
        <div className='header-container__content-logo'>
          <img src="../../../public/assets/desktop/logo.svg" alt="" />
          {/* searc toggle */}
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
