import React from 'react'

function Comments({status}) {
    return (
        <div className={` ${status === "Comments" ? "block" : "hidden"} `}>
            <h2> نظرات </h2>
        </div>
    )
}

export default Comments
