import React from 'react'
import Course from './Course'

function CouseRender() {
    let courses = [
        {
        id:1,
        name: "HTML CSS Fundamental",
        price: "20$",
        rate: "4.5/5"
        },
        {
            id:2,
            name: "JavaScript Advanced",
            price: "25$",
            rate: "4.6/5"
        },
        {
            id:3,
            name: "React AtoZ",
            price: "20$",
            rate: "5/5"
        },
    ]
    const courseList = courses.map(course=><Course key={course.id} course = {course}/>)
return (
    <div>
        {courseList}
    </div>
)
}

export default CouseRender
