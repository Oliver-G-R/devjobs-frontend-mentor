import './index.css'
import companyEmploymentData from '../../data.json'
import { CardCompany } from '../CardCompany/CardCompany'

export const GridCardCompany = () => {
  
  return (
    <div className='global-container'>
      <div className='gridCardCompany '>
        {
          companyEmploymentData.map(item => (
            <CardCompany
              contract={item.contract}
              nameComapany={item.company}
              location={item.location}
              postedAt={item.postedAt}
              logo={item.logo}
              position={item.position}
              logoBackground={item.logoBackground}
            />
          ))
        }
      </div>
    </div>
  )
}
