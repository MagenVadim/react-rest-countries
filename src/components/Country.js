import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import { BiArrowBack } from "react-icons/bi";

const Country = () => {
  const[country, setCountry] = useState([])
  const {name} = useParams()

  useEffect(()=>{
    const fetchCountryData = async()=>{
      const response = await fetch(`https://restcountries.com/v2/name/${name}`)
      const country = await response.json()       
      setCountry(country)
      console.log(country)
    }
    fetchCountryData()
  }, [])



  return (
    <>
    <Link to="/" className="btn btn-light">
      <span className="fas fa-arrow-left"><BiArrowBack /> Back Home</span>
    </Link>
    <section className="country">
      {country.map((c)=>{
        const {numericCode, flag, name, nativeName, population, region, subRegion, capital, topLevelDomain, currencies, languages, borders} = c
        return(
          <article key={numericCode}>
            <div className="flag">
              <img src={flag} alt={name} />
              <div className="country-details">
               <h2>{name}</h2>
               <h5>Native Name: <span>{nativeName}</span></h5>
               <h5>Population: <span>{population}</span></h5>
               <h5>Region: <span>{region}</span></h5>
               <h5>Sub Region: <span>{subRegion}</span></h5>
               <h5>Capital: <span>{capital}</span></h5>
               <h5>Top Level Domain: <span>{topLevelDomain}</span></h5>
               <h5>Currencies: <span>{currencies[0].name}</span></h5>
               <h5>Languages: <span>{languages[0].name}</span></h5>
              </div>
            </div>
          </article>
        )
      })}
    </section>
    </>
  )
}

export default Country
