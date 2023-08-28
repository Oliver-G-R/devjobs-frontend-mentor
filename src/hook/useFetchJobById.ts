import { useEffect, useState } from "react"
import { CompanyEmployment } from "../models/Company"

export const useFetchJobById = (id?: number) => {
  const [companyEmploymentDetail, setCompanyEmploymentDetail] = useState<CompanyEmployment>()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then((data:CompanyEmployment[]) => {
        const filterById = data.find((item: CompanyEmployment) => item.id === id)
        setCompanyEmploymentDetail(filterById)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
      })
  }, [id])

  return { companyEmploymentDetail, loading }
}
