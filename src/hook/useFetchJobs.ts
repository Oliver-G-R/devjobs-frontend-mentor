import { CompanyEmployment } from "../models/Company"
import { useState, useEffect } from 'react';

export const useFetchJobs = () => {
  const [companyEmploymentData, setCompanyEmploymentData] = useState<CompanyEmployment[]>()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => {
        setCompanyEmploymentData(data)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return { companyEmploymentData, loading }
}
