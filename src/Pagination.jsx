import React from 'react'



const Page = () => {

}

const Pagination = () => {
    const data = [
        {
            id: 1,
            name: "Sachin",
            loc: "Mumbai"
        },
        {
            id: 2,
            name: "Dhoni",
            loc: "Ranchi"
        },
        {
            id: 3,
            name: "Kohli",
            loc: "Delhi"
        },
        {
            id: 4,
            name: "Dravid",
            loc: "Banglore"
        },
        {
            id: 5,
            name: "Ganguly",
            loc: "Kolkata"
        },
        {
            id: 6,
            name: "Rayudu",
            loc: "Andhra"
        },
        {
            id: 7,
            name: "Azhar",
            loc: "Hyderabad"
        },
        {
            id: 8,
            name: "VVS",
            loc: "Hyderabad"
        },
        {
            id: 9,
            name: "Lara",
            loc: "WestIndies"
        }
    ]

    return (
        <div>
            {/* <ul>
                {
                    data.map(({ id, name, loc }, index) => {
                        return <>
                            <li key={`list_${index}`}>
                                {` ${id}. ${name} ${loc}`}
                            </li>
                        </>
                    })
                }
            </ul> */}
            <table>
                <thead>
                    <tr>
                        {
                            Object.keys(data[0]).map((key, ind)=>{
                                // const {id} = key
                                return <th key={`th_${ind}`}>{key}</th>
                                // console.log(key)
                            })
                        }
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
            <div className='containerPage'>
                <div>
                    <span>Go To:</span><input type="text" /><button>Go</button>
                </div>
                <div>
                    <button>Prev</button><span>1</span><button>Next</button>
                </div>
                <div>
                    <span>Total Pages: 20</span>
                </div>
            </div>
        </div>
    )
}

export default Pagination
