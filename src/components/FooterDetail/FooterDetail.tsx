import './index.css'
interface FooterDetailProps {
  position: string
  company: string
  applyUrl: string
}

export const FooterDetail = ({position, company, applyUrl}:FooterDetailProps) => {
  return (
    <footer className="footer-detail">
        <div className='container-detail footer-detail__content'>
          <div className='footer-detail__info'>
            <h2>
              { position }
            </h2>
            <p>
              { company }
            </p>
          </div>
          <a 
              target='_blank' 
              className='general-button general-button--primary-color footer-detail__button-apply'
              href={applyUrl}> Apply Now
          </a>
        </div>
    </footer>
  )
}
