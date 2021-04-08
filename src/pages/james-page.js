import React from "react"
import "./mystyles.scss"
import james from "../images/james.png"
export default function JamesPage() {
  return (
      <div className="secret-image-container">
        <img className="image secret-image" src={james} />
      </div>
  )
}