import React, { useState } from 'react'

const countries = [
    {
      name: "Bangla",
      value: "Bg",
      cities: ["Dhaka", "Mohali"],
    },
    {
      name: "India",
      value: "In",
      cities: ["Delhi", "Mumbai"],
    },
    {
      name: "Pak",
      value: "Pak",
      cities: ["Lahore", "Karachi"],
    },
    {
      name: "UK",
      value: "UK",
      cities: ["Durbishair", "London"],
    },
  ];
  

const CountryList = () => {

    const [selectedCountry, setSelectedCountry] = useState('')
    const [selectedCity, setSelectedCity] = useState('')

    // 4. onchange in the selected item make a handler and create a state variable to store updated selected country name
    const handleCountry = (eve) =>{
        // 5. setSelected country 
        setSelectedCountry(eve.target.value)
        setSelectedCity('');
    }

    // 6. According to selected country display selected country city name
    // 7. so for that we will find the selectedcountry which city there in it

    const findCity = countries.find(({name})=> name === selectedCountry)
 
  return (
    <div>
        {/* make a dropdown */}
      <select name="country" id="" onChange={handleCountry}>
        {/* 2. default value  */}
        <option value="">Select Country</option>
        {/* 3. make a dynamic option of each object in country list */}
        {
            countries?.map(({name},index)=>{
                return <option value={name}>{name}</option>
            })
        }
      </select>
      {
        selectedCountry &&
       ( <select name="" id="">
        <option value="">select city</option>
        {/* {console.log(findCity)} */}
        {
            findCity.cities?.map((city)=>{
                return <option value="">{city}</option>
            })
        }
      </select>)
      }
      
    </div>
  )
}

export default CountryList
