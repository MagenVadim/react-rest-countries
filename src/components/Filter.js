import React from 'react'

const Filter = () => {
  
  const inputChangeHandlrt = (e)=>{
    const {value} = e.target
    const countryName = document.querySelectorAll('.country-name')

    countryName.forEach((name)=>{
      console.log(name.innerText)
    })
  } 
  

  return (
    <section className="filter">
        <form className="form-control">
            <input className="input" type="search" name="search" id="search" placeholder='Search for a country' onChange={inputChangeHandlrt}/>
        </form>
        <div className="region-filter">
            <select name="select" id="select" className="select">
                <option value="Filter by region">Filter by region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    </section>
  )
}

export default Filter
