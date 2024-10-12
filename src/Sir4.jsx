import React from 'react'
const A = (props) => {
    return <div>
        <h1>A:{props.dataA.name}</h1>
        <B dataB={props.dataA} />
    </div>
}
const B = (props) => {
    return <div>
        <h1>B:{props.dataB.loc}</h1>
    </div>
}
const Sir4 = () => {
    
    const [data, setData] = React.useState({})
    const ref = React.useRef({})

    const handleClick = () => {
        console.log(ref.current)
        setData(ref.current)
    }
      
    const handleChange = (eve) => {
        const { id, value } = eve.target
        ref.current[id] = value;
    }
  return (
    <div>      

            <h1>App </h1>
            <p>
                Name:<input id="name" onChange={handleChange} />
            </p>
            <p>
                Location:<input id="loc" onChange={handleChange} />
            </p>
            <p>
                <button onClick={handleClick}>Submit</button>
            </p>
            <A dataA={data} />
        </div>
  
  )
}

export default Sir4
