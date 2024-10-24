import React, { useState } from "react";
import "./Checkbox.css";

const config = [
  {
    level: 1,
    name: "Courses",
    isChecked: false,
    items: [
      {
        level: 2,
        name: "UI",
        isChecked: false,
        items: [
          {
            level: 3,
            name: "forntEnd",
            isChecked: false,
          },
          {
            level: 3,
            name: "backEnd",
            isChecked: false,
          },
        ],
      },
      {
        level: 2,
        name: "JAVA",
        isChecked: false,
      },
      {
        level: 2,
        name: "Node",
        isChecked: false,
      },
    ],
  },
  {
    level: 1,
    name: "Movies",
    isChecked: false,
    items: [
      {
        level: 2,
        name: "RRR",
        isChecked: false,
      },
      {
        level: 2,
        name: "Kalki",
        isChecked: false,
      },
    ],
  },
];
const Checkbox = () => {
  const [data, setData] = useState(config);

  const handleChange = (eve, parentObj, levelOneIndex) => {
    const clonedData = JSON.parse(JSON.stringify(data)); // entire data objects like courses, movies, countries etc as an objects in any array [{},{},{},{}]
    const clonedCurrentParentObj = JSON.parse(JSON.stringify(parentObj)); // this is currentSelected Checkbox parent

    const { name, dataset, checked } = eve.target; // selected checkbox information

    console.log(name, dataset.level, checked); // courses 2 true or
    console.log(1, parentObj); // selected item parent Information {level: 1, name: 'Courses', isChecked: false, items: Array(3)}
    clonedData.splice(levelOneIndex, 1, parentObj);
    console.log(2, clonedData); // [{…}, {…}] i.e. how many parent checkbox there
    setData(clonedData);
    // console.log(eve.target)
    // console.log(clonedObj);
    // setData()
    let siblings = [];
    let currObj = {};
    for (let i = 1; i < dataset.level; i++) {
      console.log(clonedCurrentParentObj); // parent object
      const siblings = parentObj.items;
      console.log(3, siblings); // items list how many siblings there
      const childObj = siblings.find(
        (sibObj) => sibObj.name === name && sibObj.level === dataset.level
      ); /// particular child is selected and want to check it true or false accordingly
      console.log(4, childObj); // particular item object
    }
    if (checked) {
      currObj.isChecked = true;
     const isAllChecked = siblings.every( (obj)=> obj.isChecked )
     if(isAllChecked){
      clonedCurrentParentObj.isChecked = true
     }
    } else {
      clonedCurrentParentObj.isChecked = false
    }
    clonedData.splice(levelOneIndex, 1, clonedCurrentParentObj)
    setData(clonedData)

    // console.log(clonedData);
    // console.log(siblings);
    // console.log(currObj);
    
  };
  return (
    <div>
      <h1>Checkbox Assignment</h1>
      <div>
        {data?.map((parentObj, levelOneIndex) => {
          const { level, name, isChecked, items } = parentObj;
          return (
            <div key={`level-${levelOneIndex + 1}`}>
              <input
                name={name}
                data-level={level}
                onChange={(eve) => handleChange(eve, parentObj, levelOneIndex)}
                type="checkbox"
              />
              {name}
              {items?.map(({ level, name, isChecked }, ind) => {
                return (
                  <div className="pl-30" key={`level-${ind + 1}`}>
                    <input
                      data-level={level}
                      name={name}
                      type="checkbox"
                      onChange={(eve) =>
                        handleChange(eve, parentObj, levelOneIndex)
                      }
                    />
                    {name}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkbox;
