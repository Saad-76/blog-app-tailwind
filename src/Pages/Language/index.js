import React from 'react'

const Language = ({onChange}) => {
    const handleLanguageChange = (event) => {
        localStorage.setItem('lang',event.target.value)
        onChange(event.target.value);
      };
  return (
    <div> <select onChange={handleLanguageChange} style={{background:"#000"}}>
    <option value="en">English</option>
    <option value="ar">Arabic</option>
    {/* ... */}
  </select></div>
  )
}

export default Language