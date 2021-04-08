import React from "react"
import "./mystyles.scss"
import jeremiah from "../images/jeremiah.png"
export default function JeremiahPage() {
  return (
      <div className="secret-image-container">
        <img className="image secret-image" src={jeremiah} />
      </div>
  )
}