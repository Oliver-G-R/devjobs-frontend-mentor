import './index.css'
import { CardCompany } from '../CardCompany'
import { useContext, useState } from 'react';
import { FilterContext } from '../../context/FilterContext';
import { Button } from '../Button';

export const GridCardCompany = () => {

  const {filter: EmploymentDataFiltered, loading} = useContext(FilterContext)
  const itemsPerPage = 12;

  const [nextEmployment, setNextEmployment] = useState(itemsPerPage);
  
  if(loading) return <h3>Loading...</h3>
  if(!EmploymentDataFiltered) return <h3>No Employment </h3>


  return (
    <div className='global-container'>
      <div className='gridCardCompany '>
        {
          EmploymentDataFiltered.length > 0 
            ? EmploymentDataFiltered.slice(0, nextEmployment).map(item => (
              <CardCompany
                key={item.id}
                contract={item.contract}
                nameComapany={item.company}
                location={item.location}
                postedAt={item.postedAt}
                id={item.id}
                logo={item.logo}
                position={item.position}
                logoBackground={item.logoBackground}
              />
            ))
            : <h3>No Employment</h3>
        }
      </div>

      <div style={{
        display: 'grid',
        placeContent: 'center',
        marginTop: '50px', 
        marginBottom: '50px'
      }}>
        {nextEmployment < EmploymentDataFiltered.length && 
          <Button
            colorText='#fff'
            onClick={() => setNextEmployment(nextEmployment + itemsPerPage)}
            bgColor='var(--violet)'
            text='Load More'
        />}
      </div>
    </div>
  )
}
