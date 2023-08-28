import './index.css'

interface CardDetailProps {
  logo: string
  bgColor: string
  nameCompany: string
  webCompany: string
}

export const CardDetail = ({logo, bgColor, nameCompany, webCompany}:CardDetailProps) => {
  return (
    <div
      className='card-detail container-detail'
    >
      <div 
      className='card-detail__logo-container'
      style={{
        backgroundColor: bgColor
      }}>
        <img 
          src={logo} 
          alt={nameCompany} 
          title={nameCompany} 
        />
      </div>

      <div className='card-detail__company-info'>
        <h2 className='card-detail__company-title'>
            {nameCompany}
        </h2>
        <p className='card-detail__company-webpage'>
          {webCompany}
        </p>
      </div>

      <a 
        className='general-button card-detail__site' 
        target='_blank' 
        href={webCompany}>
        Company Site
      </a>
    </div>
  )
}
