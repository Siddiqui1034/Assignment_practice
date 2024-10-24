import React from 'react'

const PromiseAPI = () => {
    const p1 = new Promise((resolve, reject)=>{
        setTimeout(()=> resolve("P1 Resolved"), 3000)
    })

    const p2 = new Promise((resolve, reject)=>{
        setTimeout(()=> reject("p2 not Resolved"), 1000)
    })

    const p3 = new Promise((resolve, reject)=>{
        setTimeout(()=> resolve("p3 Resolved"), 2000)
    })

    Promise.all([p1, p2, p3]).then((res)=>{
        console.log(res)
    })
  return (
    <div>
      Promise API 
    </div>
  )
}

export default PromiseAPI
