import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const url = "https://restcountries.com/v2/all"

const Countries = () => {  
  const [countries, setCountries] = useState([])

  const fetchCountryData = async()=>{
    const response = await fetch(url)
    const countries = await response.json() 
    setCountries(countries)
  }  

  useEffect(()=>{   
    fetchCountryData()  
  },[])

  const removeCountry = (numericCode) =>{
    const newCountry = countries.filter((country)=>country.numericCode !== numericCode)
    setCountries(newCountry)
  }

  return (
    <>
      <section className="grid">
        {countries.map((country)=>{ 
            const{numericCode, name, population, region, capital, flag} = country
              return(
                <article key={numericCode}>
                  <div className="country-wrap">
                    <img src={flag }alt={name} />
                    <div className="details">
                      <h3>{name}</h3>
                      <h4>Population: <span>{population}</span> </h4>
                      <h4>Region: <span>{region}</span></h4>
                      <h4>Capital: <span>{capital}</span> </h4>  
                      <Link to={`/countries/${name}`} className='btn'>Learn More</Link>
                      <button className="btn" onClick={()=>removeCountry(numericCode)}>Remove Country</button>
                    </div>
                  </div>
                </article>
                
              )
            })            
          }
      </section>
    </>
  )
}

export default Countries