import React from "react"
import "./mystyles.scss"
import HiddenTracksPlayer from "../components/hidden-tracks-player"
export default function HiddenPageSuccess() {
  return (
    <div className="container">
      <div className="title is-2">CONGRATS YOU CONQUERED THE WORLD OF TASTE</div>
      <div className="subtitle is-3">Here is some exclusive content for you. Enjoy.</div>
      <div className="columns">
        <div className="column">
          <HiddenTracksPlayer></HiddenTracksPlayer>
        </div>
        <form className="column light-border" method="post" action="https://getform.io/f/02ea562f-db67-4bf6-a056-c19418125566">
          <div className="title is-4">Contact us to receive a limited edition minted NFT</div>
          <div className="field">

            <label className="label">
              Email
              </label>
            <input className="input" type="email" name="email" />

          </div>
          <div className="field">

            <label className="label">
              Name
              </label>
            <input className="input" type="text" name="name" />

          </div>
          <div className="field">

            <label className="label">
              Input your ethereum wallet address (We recommend Metamask).
              </label>
            <label htmlFor="" className="label is-5 has-text-bold">
              PLEASE DOUBLE CHECK THE ADDRESS AS THIS CANNOT BE UNDONE ONCE SENT.
              </label>

            <input className="input" type="text" name="message" />
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link is-primary" type="submit">Send</button>
            </div>
            <div className="control">
              <input className="button is-link is-light" type="reset" value="Clear" />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}