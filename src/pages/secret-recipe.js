import React from "react"
import { useState } from "react"
import { navigate, Navigate } from "gatsby"

function SecretRecipe() {
  const [tablespoon, setTablespon] = useState("")
  const [cups, setCups] = useState("")
  const [diced, setDiced] = useState("")
  const [pinch, setPinch] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const input = `${tablespoon}${cups}${diced}${pinch}`
    console.log(input)
    // should this be case sensitive?
    if (input === "JeremiahJohnJoshuaJames") {
      navigate('/hidden-page/')
    }
  }
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">

          <div className="title is-1">Secret Recipe</div>
          <form onSubmit={e => {handleSubmit(e)}}>
            <div className="field">
              <label className="label">1 tablespoon</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="tablespoon"
                  value={tablespoon}
                  onChange={e => setTablespon(e.target.value)}
                  />
              </div>
            </div>
            <div className="field">
              <label className="label">2 cups</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="cups"
                  value={cups}
                  onChange={e => setCups(e.target.value)}
                  />
              </div>
            </div>
            <div className="field">
              <label className="label">diced</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="diced"
                  value={diced}
                  onChange={e => setDiced(e.target.value)}
                  />
              </div>
            </div>
            <div className="field">
              <label className="label">pinch of</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="pinch"
                  value={pinch}
                  onChange={e => setPinch(e.target.value)}
                  />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button type="submit" className="button is-link is-light">STIR</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default SecretRecipe