import React, { useState } from 'react'

const Assignmt_13 = () => {

    const [formData, setFormData] = useState()

    const handleClick = () =>{
        console.log(formData)
    }

    const handleChange = (eve) =>{
        const {type, name, value} = eve.target;
        setFormData({...formData, [name]:value})

        if(type==="checkbox"){
            const selectedCheckbox = formData.hobbies ? formData.hobbies.split(",") : []
        }
    }

  return (

    <div>
        <p>
            Name: <input type="text" name="name" id="" onChange={handleChange}  />
        </p>
        <p>
            Gender: 
            <input onChange={handleChange} type="radio" name="gen" value="M" id="" />Male
            <input onChange={handleChange} type="radio" name="gen" value="F" id="" />Female
        </p>
        <p>
            Hobbies: 
            <input onChange={handleChange} type="checkbox" name="hobbies" id="" value="Cr" />Cricket
            <input onChange={handleChange} type="checkbox" name="hobbies" id="" value="Ft" />Football
            <input onChange={handleChange} type="checkbox" name="hobbies" id="" value="Hc" />Hockey
        </p>
        <p>
            Contact: <input onChange={handleChange} type="number" name="contact" id="" />
        </p>
        <p>
            Address: <textarea onChange={handleChange} name="address" id=""></textarea>
        </p>
        <p>
            Country: <select name="country" id="" onChange={handleChange}>
                <option value="Ch">China</option>
                <option value="Ind">India</option>
                <option value="Bn">Bangladesh</option>
            </select>
        </p>

        <button onClick={handleClick}>Submit</button>
    </div>































    // <div>
    //   <p>
    //     Name: <input type="text" name="" id="name" />
    //   </p>
    //   <p>
    //     Gender: <input type="radio" name="gen" id="" /> Male
    //             <input type="radio" name="gen" id="" />Female
    //   </p>
    //   <p>
    //     Hobbies: <input type="checkbox" name="hobbies" id="" /> Cricket
    //    <input type="checkbox" name="hobbies" id="" /> Football
    //   <input type="checkbox" name="hobbies" id="" /> Hockey
    //   </p>
    //   <p>
    //     Country: <select>
    //         <option value="C"></option>
    //         <option value="I"></option>           
    //     </select>
    //   </p>
    //   <p>
    //     Name: <textarea />
    //   </p>
    // </div>
  )
}

export default Assignmt_13
