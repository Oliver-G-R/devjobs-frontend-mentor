import './index.css'
import { Link } from 'wouter'
interface CardCompanyProps{
  id: number
  nameComapany: string
  logo: string
  postedAt: string
  contract: string
  location: string
  position: string
  logoBackground: string
}

export const CardCompany = (props:CardCompanyProps) => {
  const {
    id,
    nameComapany,
    logo,
    postedAt,
    contract,
    location,
    position,
    logoBackground
  } = props
          
  return (
    <Link  
      href={`/detail/${id}`}
      className="card-comapany">
      <div 
        className="card-comapany__logo-container"
        style={{
        backgroundColor: logoBackground
      }}>
        <img 
          src={logo} 
          alt="logo" 
          title={nameComapany} />
      </div>
      
      <div className="card-comapany__info">
        <div className="card-comapany__time">
          <p>{ postedAt } </p>
          <p>{ contract }</p>
        </div>
        <h2 className="card-comapany__position">
          { position }
        </h2>
        <p className="card-comapany__name-company">
          {nameComapany}
        </p>
      </div>
      <footer className="card-comapany__location">
        <p>
          {location}
        </p>
      </footer>
    </Link>
  )
}
