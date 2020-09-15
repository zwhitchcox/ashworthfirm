import React from 'react'
import "./Inquiry.scss"

const Inquiry = () => {
  const handleSubmit = e => {
    e.preventDefault()
    console.log("submitted")
  }
  return (
    <div>
      <form className="inquiry" onSubmit={handleSubmit}>
        <label>Name
          <input type="text" name="name" />
        </label>
      </form>
    </div>
  )
}

export default Inquiry