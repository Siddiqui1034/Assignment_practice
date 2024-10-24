import React, { useState } from "react";

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

const DropDown = () => {
  const [country, setCountry] = useState([]);
  const handleCountryList = (eve) => {
    // console.log(eve.target.value)
    setCountry(eve.target.value);
  };
  const findCity = countries.find((obj)=>obj.value===country)
  console.log(findCity)
//   console.log(findCity[cities])
  return (
    <div>
      <h1> DropDown</h1>
      <select name="" id="" onChange={handleCountryList}>
        <option value="">Select Country</option>
        {countries?.map((obj, ind) => {
          return (
            <option key={`country_${ind}`} value={obj.value}>
              {obj.name}
            </option>
          );
        })}
      </select>
      
      {/* City dropdown */}
      {
        country &&
        <select name="" id="">
        <option value="">Select City</option>
        {
            findCity?.cities.map((city,ind)=>{
                return <option key={`city_${ind}`} value="">{city}</option>
            })
        }
      </select>
      }
      
    </div>
  );
};

export default DropDown;
