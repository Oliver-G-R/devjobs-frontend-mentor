import './index.css'
import { CardDetail } from "../../components/CardDetail/CardDetail";
import { HeaderJob } from "../../components/HeaderJob/HeaderJob"
import { useFetchJobById } from "../../hook/useFetchJobById";
import { useRoute } from 'wouter'
import { FooterDetail } from '../../components/FooterDetail/FooterDetail';
export const Detail = () => {
  const [_, params] = useRoute("/detail/:id")
  
  const { companyEmploymentDetail, loading } = useFetchJobById(Number(params?.id))

  if( loading ) {
    return <div>loading...</div>
  }else if( !companyEmploymentDetail ) {
    return <div>Not found</div>
  }

  return (
    <>
      <HeaderJob/>
      <div className="container-detail content-card-detail">
        <CardDetail
          bgColor={companyEmploymentDetail.logoBackground}
          logo={companyEmploymentDetail.logo}
          nameCompany={companyEmploymentDetail.company}
          webCompany={companyEmploymentDetail.website}
        />
      </div>
      <main className="container-detail">
        <div className='detail-main-container '>
          <section className='detail-main-container__section'>
            <header className='detail-main-container__header-info-base'>
              <div className='detail-main-container__info-post-container'>
                <span>
                  {companyEmploymentDetail.postedAt}
                </span>
                <span className='separator'></span>
                <span>
                  {companyEmploymentDetail.contract}
                </span>
              </div>
              <div className='detail-main-container__info-base-container'>
                <div>
                  <h1 className='detail-main-container__position'>
                    {companyEmploymentDetail.position}
                  </h1>
                  <p className='detail-main-container__location'>
                    {companyEmploymentDetail.location}
                  </p>
                </div>
                <a 
                  target='_blank' 
                  className='general-button general-button--primary-color detail-main-container__button-apply'
                  href={companyEmploymentDetail.apply}> Apply Now
                </a>
              </div>
            </header>

            <p className='detail-main-container__descriptionb'>
              {companyEmploymentDetail.description}
            </p>
          </section>

          <section className='detail-main-container__section'>
            <h2>
              Requirements
            </h2>

            <p className='detail-main-container__description'>
              {companyEmploymentDetail.requirements.content}
            </p>

            <ul className='detail-main-container__list'>
              {companyEmploymentDetail.requirements.items.map((item, index) => (
                <li key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className='detail-main-container__section'>
            <h3>
              What you will do
            </h3>

            <p className='detail-main-container__description'>
              {companyEmploymentDetail.role.content}
            </p>

            <ol className='detail-main-container__list detail-main-container__list--order'>
              {companyEmploymentDetail.role.items.map((item, index) => (
                <li key={index}>
                  {item}
                </li>
              ))}
            </ol>
          </section>
        </div>
      </main>

      <FooterDetail 
        position={companyEmploymentDetail.position} 
        company={companyEmploymentDetail.company} 
        applyUrl={companyEmploymentDetail.apply}
      />
    </>
  )
}
