import React, { useState } from 'react'

const Sentence = () => {
    const [sentence, setSentence] = useState()
    const handleChange = (eve) =>{
    // let inputSentence = (eve.target.value).replace // without (/\s+/g, " ") it is also working
    let inputSentence = (eve.target.value).replace(/\s+/g," ")
        // console.log(inputSentence)
       let finalResult = inputSentence.split(" ")                                  
                                    .map(word => word.charAt(0).toUpperCase()+word.slice(1).toLowerCase())
                                    .join(" ")
    setSentence(finalResult)
    //    console.log(finalResult)

    //    function capitalizeFirstLetter(string) {
    //     return string.charAt(0).toUpperCase() + string.slice(1);
    //   }
      
    //   function titleCase(sentence) {
    //     return sentence
    //       .split(' ')
    //       .map(capitalizeFirstLetter)
    //       .join(' ');
    //   }








    // let capInputSentence = inputSentence.toUpperCase()
    // let lowerInputSentence = inputSentence.toLowerCase()
    // let arrInput = inputSentence.split(" ")
    // arrInput.forEach(element => {
    //     let firstLetter = element.slice(0,1).toUpperCase()
    //     let remainingLetter = element.slice(1,element.length).toLowerCase()
    //     let concate = `${firstLetter}${remainingLetter}`
    //     setSentence([...concate])
    // });
    // setSentence(eve.target.value)
    }
  return (
    <div className='my-3 p-4'>
      Sentence
      <input className='mx-3' type="text" onChange={handleChange} />
      <p className='my-3' >{sentence}</p>
    </div>
  )
}

export default Sentence
