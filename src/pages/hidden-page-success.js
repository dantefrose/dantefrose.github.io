import React from "react"
import "./mystyles.scss"
export default function HiddenPageSuccess() {
  return (
    <div className="container">
      <div className="title is-1">CONGRATS YOU CONQUERED THE WORLD OF TASTE</div>
      <div className="subtitle is-3">Here is some exclusive content for you. Enjoy.</div>
      <div className="columns">
        <div className="column">
          <div className="title is-4">Streaming here soon...</div>
        </div>
        <form className="column" method="post" action="https://getform.io/f/02ea562f-db67-4bf6-a056-c19418125566">

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
              Input your ethereum wallet address to receive a limited edition minted NFT.
              We recommend Metamask.
              </label>
            <label htmlFor="" className="label is-5 has-text-bold">
              PLEASE DOUBLE CHECK THE ADDRESS AS THIS CANNOT BE UNDONE ONCE SENT.
              </label>

            <input className="input" type="text" name="message" />
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link is-light" type="submit">Send</button>
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