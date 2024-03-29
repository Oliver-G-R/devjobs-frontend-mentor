
export interface CompanyEmployment {
  id:             number;
  company:        string;
  logo:           string;
  logoBackground: string;
  position:       string;
  postedAt:       string;
  contract:       string;
  location:       string;
  website:        string;
  apply:          string;
  description:    string;
  requirements:   Requirements;
  role:           Requirements;
}

export interface Requirements {
  content: string;
  items:   string[];
}

export interface IFilterElements {
  location: string,
  general: string,
  fullTime: boolean
}