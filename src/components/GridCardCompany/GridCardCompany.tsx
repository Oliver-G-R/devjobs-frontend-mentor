import './index.css'
import { CardCompany } from '../CardCompany/CardCompany'
import { useContext } from 'react';
import { FilterContext } from '../../context/FilterContext';

export const GridCardCompany = () => {

  const {filter: EmploymentDataFiltered} = useContext(FilterContext)
  return (
    <div className='global-container'>
      <div className='gridCardCompany '>
        {
          EmploymentDataFiltered.map(item => (
            <CardCompany
              key={item.id}
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
