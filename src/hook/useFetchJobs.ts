import { CompanyEmployment } from "../models/Company"
import { useState, useEffect } from 'react';

export const useFetchJobs = () => {
  const [companyEmploymentData, setCompanyEmploymentData] = useState<CompanyEmployment[]>()

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => {
        setCompanyEmploymentData(data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return { companyEmploymentData }
}
