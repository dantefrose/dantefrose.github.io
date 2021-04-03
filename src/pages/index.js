import React from "react"
import { Link } from "gatsby"
import "./mystyles.scss"
import poster2 from "../images/poster2.png"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "@fortawesome/fontawesome-svg-core/styles.css"
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false; /* eslint-disable import/first */

library.add(fab);

const Index = () => (
  <div className="container">
    <div className="columns">
      <div className="left-menu column is-narrow">
        <div className="subtitle is-3">
          <Link to="/ingredients">Ingredients</Link>
        </div>
        <div className="subtitle is-3">
          <a href="https://onlydfr.creator-spring.com/" >Take Home Plate</a>
        </div>
        <div className="subtitle is-3">
          <Link to="/secret-recipe">Secret Recipe</Link>
        </div>
      </div>
      <div className="cast-photo column">
        <img className="image is-fullwidth" src={poster2} />
      </div>
      <div className="right-menu column is-narrow">
          <div className="right-icon">
            <a href="https://www.facebook.com/curatedbyDFR/" target="_blank">
              <FontAwesomeIcon size="2x" icon={["fab", "facebook"]}/>
              </a>
          </div>
          <div className="right-icon">
            <a href="https://www.instagram.com/taste_dfr/" target="_blank">
              <FontAwesomeIcon size="2x" icon={["fab", "instagram"]}/>
              </a>
          </div>
          <div className="right-icon">
            <a href="https://www.tiktok.com/@taste_dfr?lang=en" target="_blank">
              <FontAwesomeIcon size="2x" icon={["fab", "tiktok"]}/>
              </a>
          </div>
      </div>
    </div>
  </div>
)
export default Index