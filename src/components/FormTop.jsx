import React from 'react'

export default function FormTop(props) {
    return (
            <div className="text-left p-0 font-sans">
              <h1 className=" text-gray-800 text-3xl font-medium">
                {props.heading}
              </h1>
              <h3 className="p-1 text-gray-700">
                {props.desc}
              </h3>
            </div> 
       
    )
}
