import React, { useState } from 'react'

const FileUpload = () => {

    const [selectedProfilePic, setSelectedProfilePic] = useState('')
    const pickImage = (eve) => {
        console.log(eve.target.files)// FileList {0: File, length: 1}
        console.log(eve.target.files['0']) //File {name: 'ResumeN.docx', size: , type: , lastModified: 1726766232267, lastModifiedDate: Thu Sep 19 2024 22:47:12 GMT+0530 (India Standard Time), webkitRelativePath: '', size: 16936, …}
        const choosenFile = eve.target.files['0']
        const { size, type } = choosenFile
        if(!type.includes('image')){
            setSelectedProfilePic("")
            alert("Please Select Image only")
        }
        if(size>20000){
            alert("File Should be within 20KB")
        }
        const reader = new FileReader()
        reader.readAsDataURL(choosenFile)
        reader.onload = () => {
            setSelectedProfilePic(reader.result)
        }
        reader.onerror = () =>{
            setSelectedProfilePic('')
            alert("Something Went Wrong")
        }
    }

    return (
        <div>
            <p className="text-center">
                File Upload
            </p>
            <ol>
                <li>Select File Size 30GB</li>
                <li>Select File in jpg formate</li>
                <li>Select File</li>
            </ol>
            <p>
                <b>Select Image</b>
                <input type="file" onChange={pickImage} />
            </p>
            <p>
                <div>
                    <img src={selectedProfilePic || "c.jpg" } alt="fileUpload" />
                </div>
            </p>
        </div>
    )
}

export default FileUpload
