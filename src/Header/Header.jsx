"use client"
import React, { useEffect, useState } from 'react'
import styles from './Header.module.css'

const Tabs = ({ items, children }) => {

    const [activeTabIndex, setActiveTabIndex] = useState(0) // 0 is index of items array 0th element
    const handleClick = (index) => {
        setActiveTabIndex(index)
    }
    return (<>
        <div className={`${styles.tabs}`}>
            {
                items?.map((item, index) => {
                    return <span className={activeTabIndex === index ? `${styles.activeTabClass}` : ""} onClick={() => handleClick(index)} >{item}</span>
                })
            }

        </div>
        {children[activeTabIndex]}
    </>
    )
}

const ListView = () => {

    const [data, setData] = useState([])

    async function fnGetProduct() {
        try {
            const apiRes = await axios.get("https://fakestoreapi.com/products")
            // console.log(apiRes)
            // const { products } = apiRes?.data
            setData(apiRes?.data)
        }
        catch (e) {
            setData([])
        }
        finally {

        }
    }
    useEffect(() => {
        fnGetProduct()
    }, [])

    return (
        <div className='container-fluid'>
            {
                data?.map?.(({ category, description, image, title, price }, index) => {
                    return <div className='row m-4 border p-4' key={`div_${index}`}>
                        
                        <div className='col-2 text-center '>
                            <img className='text-center' src={image} alt="" height={100} width={100} />
                        </div>
                        <div  className='col-2 text-center'>
                            {category}
                        </div>
                        <div className='col-2 text-center'>
                            {title}
                        </div>
                        <div className='col-4 text-center'>
                            {description}
                        </div>
                        <div className='col-2 text-center'>
                            {price}
                        </div>
                    </div>
                })
            }
        </div>
    )
}

const GridView = () =>{

    const [data, setData] = useState([])

    function fnGetProduct(){
    const httpObj = new XMLHttpRequest()
    httpObj.open('get', 'https://dummyjson.com/product')  // if u want to send a req to the server first you have a request in your hand and with u so prepare the request first with open method we use to send the request to the server
    httpObj.send()
    httpObj.onload = function () {
        const res = httpObj.responseText; // internal it is string and outer it is json
        // console.log(11, res);
        // console.log(12, JSON.parse(res))
        // console.log(13, JSON.stringify(res));  
        const {products} = JSON.parse(res)
        setData(products)      
    }
    httpObj.onerror = function(){
        setData([])
    }
}   
    useEffect(()=>{
       fnGetProduct();
    },[])

    return <div className='row container-fluid'>
        {
            data?.map(({thumbnail, images, reviews, brand, tags, rating, description, title},index)=>{
              return  <div className='col-3 py-3' key={`div_${index}`} height={500}>
                <div className='card'>
                    <img height={250} src={thumbnail} alt="" />
                    <div className='card-body'>
                        <p className='card-text text-center'>
                            {description}
                        </p>
                    </div>
                    <div className='card-title px-3'>
                    {title}
                    </div>

                </div>
              
              </div>
            })
        }
    </div>
}

const TableView = () =>{

    // const [data, setData] = useState("")
    // const [data, setData] = useState([])
    const [data, setData] = useState([""])

    const fnGetProduct = async () =>{
        const response = await fetch("https://fakestoreapi.com/products", {method: 'get', headers: {}})
        // console.log(response) // response having method json() this will also give you promise so await response.json()
        const result = await response.json()
        // console.log(result) //  [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
        setData(result)
    }

    useEffect(()=>{
        fnGetProduct();
    },[])

    return (
        <div>
            <table className='table table-dark'>
                <thead>
                    <tr>
                        {
                            Object.keys(data[0])?.map((key, ind)=>{
                                return <th key={`th_${ind}`} className='text-center py-3'>{key.toUpperCase()}</th>

                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((obj,ind)=>{
                            return <tr className={`row_${ind}`}>
                                {
                                    Object.values(obj)?.map((prd, ind)=>{
                                        return <td key={`prd_${ind}`}>{prd}</td>
                                    })
                                }
                            </tr>
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}
const Header = () => {

    return (
        <div>
            <Tabs items={["List", "Grid", "Table", "Cards"]} >
                <ListView />
                <GridView />
                {/* <div>Table </div> */}
                <TableView />
                <div>Cards </div>
            </ Tabs>
        </div>
    )
}

export default Header

// "use client"
// import React,{useState}from 'react'
// import config from './configuration.json'
// import styles from './Header.module.css'

// const Header = () => {
//     const [activeTabIndex, setActiveTabIndex] = useState(config[0])
//     const [tabItems, setTabItems] = useState(config)

//   return (
//     <div className={`${styles.header}`}>
//      {
//         tabItems?.map((tab,index)=>{
//             return <span >{tab['name']}</span>
//         })
//      }
//     </div>
//   )
// }

// export default Header
