import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import { BiArrowBack } from "react-icons/bi";
import "./country.css"

const Country = () => {
  const[country, setCountry] = useState([])
  const {name} = useParams()

  useEffect(()=>{
    const fetchCountryData = async()=>{
      const response = await fetch(`https://restcountries.com/v2/name/${name}`)
      const country = await response.json()       
      setCountry(country)
      console.log(country[0].borders)
    }
    fetchCountryData()
  }, [])

  return (
    <>
    <section className="country">  
      <div className="btn-link">
        <Link to="/" className="btn btn-light">
          <span className="fas fa-arrow-left"><BiArrowBack /> Back Home</span>
        </Link>
      </div>

      {country.map((c)=>{
        const {numericCode, flag, name, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages, borders} = c
        return(
          <article key={numericCode}>

            <div className="flag">
              <img src={flag} alt={name} />
            </div>

            <div className="data-block">
              <h2>{name}</h2>

              <div className="country-inner">
                <div className="country-details">
                  <div className="main-details">
                    
                    <h5>Native Name: <span>{nativeName}</span></h5>
                    <h5>Population: <span>{population}</span></h5>
                    <h5>Region: <span>{region}</span></h5>
                    <h5>Sub Region: <span>{subregion}</span></h5>
                    <h5>Capital: <span>{capital}</span></h5>
                  </div>

                  <div className="bottom-details">
                      <h5>Top Level Domain: <span>{topLevelDomain}</span></h5>
                      <h5>Currencies: <span>{currencies[0].name}</span></h5>
                      <h5>Languages: <span>{languages[0].name}</span></h5>
                  </div>
                </div>

                <div className="borders">
                    <h3>Border Countries: </h3>
                    <ul>
                      {borders && borders.map((border)=>{return(                      
                            <li key={border} className="border-li">{border} </li>)
                      })}
                    </ul>
                  </div>
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
