import React from 'react'

function Questions({status}) {
    return (
        <div className={` ${status === "Questions" ? "block" : "hidden"} `}>
            <h2> پرسش ها </h2>
        </div>
    )
}

export default Questions
