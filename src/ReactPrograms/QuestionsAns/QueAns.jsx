import React from "react";
import config from './question.json'

  const QueAns = () => {
  return (
    <div >
      <p style={{fontSize: 30}}>Questions</p>
      <div  style={{fontSize: 30}}>
        <ol>
            {
                config?.map((obj, index)=>{
                    const {id, question, options, correctAnswer, type, points } = obj
                    return <>
                        <p >{id}. {question}</p>
                        {
                            options?.map(({_, text})=>{
                                return <p>
                                <input name={index} type={type=== "single" ? "radio" : "checkbox"} />   {text}
                                </p>
                            })
                        }
                        {/* <p>
                        { 
                        type === "single" ? 
                        
                        options?.map(({id, text})=>{
                            return <><input type="radio" name="id" />{id}. {text}</>  
                        })                         
                        
                        : 

                        options?.map(({id, text})=>{
                            return <><input type="checkbox" />{id}. {text}
                            </>
                        })
                        
                        }
                        </p> */}
                        
                    </>
                })
            }
        </ol>

      </div>
    </div>
  );
};

export default QueAns;
