import React from 'react'

function Course({course}) {
    return (
        <h3>{course.name} price: {course.price} rate: {course.rate}</h3>
    )
}

export default Course