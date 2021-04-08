import React from "react"
import john from "../images/john.png"
export default function JohnPage() {
  return (
      <div className="secret-image-container">
        <img className="image secret-image" src={john} />
      </div>
  )
}