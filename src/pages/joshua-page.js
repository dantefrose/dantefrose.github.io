import React from "react"
import "./mystyles.scss"
import joshua from "../images/joshua.png"
export default function JoshuaPage() {
  return (
      <div className="secret-image-container">
        <img className="image secret-image" src={joshua} />
      </div>
  )
}