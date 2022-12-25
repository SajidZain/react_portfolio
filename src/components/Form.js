import "./FormStyles.css"
import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form action="">
            <label htmlFor="">Your Name</label>
            <input type="text" />
            <label htmlFor="">Your Email</label>
            <input type="email" />
            <label htmlFor="">Subject</label>
            <input type="text" />
            <label htmlFor="">Message</label>
            <textarea cols="" rows="6" placeholder="Type Your Message here"></textarea>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form