import React from "react"
import castphoto from "../images/castphoto.png"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

library.add(fab);

export default function Ingredients() {
  return (
    <div className="container">
      <div className="container">
        <img className="image" src={castphoto} />
      </div>
      <div className="container credits-container has-text-align-centered">
        <div className="columns is-centered is-mobile">
          <h4 className="column is-uppercase">Rose</h4>
          <h4 className="column  has-text-weight-bold">Romina Valenti</h4>
          <a className="column" href="https://www.instagram.com/romivalenti/?igshid=g737xyfk7gge" target="_blank">
            <FontAwesomeIcon size="lg" icon={["fab", "instagram"]} />
          </a>
        </div>
        <div className="columns is-centered is-mobile">
          <h4 className="column is-uppercase">Canela</h4>
          <h4 className="column has-text-weight-bold">Rhea Mallari</h4>
          <a className="column" href="https://instagram.com/rheamallari_?igshid=1q8h4tkfxx2s8" target="_blank">
            <FontAwesomeIcon size="lg" icon={["fab", "instagram"]} />
          </a>
        </div>
        <div className="columns is-centered is-mobile">
          <h4 className="column is-uppercase">Saul</h4>
          <h4 className="column has-text-weight-bold">G'bari "GQ" Gilliam</h4>
          <a className="column" href="https://instagram.com/gbaridenzel?igshid=nh65jo8r4abi" target="_blank">
            <FontAwesomeIcon size="lg" icon={["fab", "instagram"]} />
          </a>
        </div>
        <div className="columns is-centered is-mobile">
          <h4 className="column is-uppercase">Egg</h4>
          <h4 className="column has-text-weight-bold">Tori Cristina</h4>
          <a className="column" href="https://instagram.com/tori.cristi?igshid=q7i8wxba4n6w" target="_blank">
            <FontAwesomeIcon size="lg" icon={["fab", "instagram"]} />
          </a>
        </div>
        <div className="columns is-centered is-mobile">
          <h4 className="column is-uppercase">Grim</h4>
          <h4 className="column has-text-weight-bold">Jesse Smith</h4>
          <a className="column" href="https://instagram.com/justjess_e?igshid=1i91595scbsym" target="_blank">
            <FontAwesomeIcon size="lg" icon={["fab", "instagram"]} />
          </a>
        </div>
        <div className="columns is-centered is-mobile">
          <h4 className="column is-uppercase">Ferm</h4>
          <h4 className="column has-text-weight-bold">Patrick "Patches" Viloria</h4>
          <a className="column" href="https://instagram.com/siktrik?igshid=tms7fdea8mho" target="_blank">
            <FontAwesomeIcon size="lg" icon={["fab", "instagram"]} />
          </a>
        </div>
        <div className="columns is-centered is-mobile">
          <h4 className="column is-uppercase">Mask</h4>
          <h4 className="column has-text-weight-bold">Tyler Singletary</h4>
          <a className="column" href="https://instagram.com/creator_d_tyler?igshid=1hqw6ewdsttdl" target="_blank">
            <FontAwesomeIcon size="lg" icon={["fab", "instagram"]} />
          </a>
        </div>
        <div className="columns is-centered is-mobile">
          <h4 className="column is-uppercase">Creative Director</h4>
          <h4 className="column has-text-weight-bold">Randi Fleckenstine</h4>
          <a className="column" href="https://instagram.com/rascalrandi?igshid=spdxipivsyto" target="_blank">
            <FontAwesomeIcon size="lg" icon={["fab", "instagram"]} />
          </a>
        </div>
        <div className="columns is-centered is-mobile">
          <h4 className="column is-uppercase">Assisstant Director</h4>
          <h4 className="column has-text-weight-bold">Elizabeth Rodriguez</h4>
          <a className="column" href="https://instagram.com/eastlos_liz?igshid=1a1iqtx6w91k8" target="_blank">
            <FontAwesomeIcon size="lg" icon={["fab", "instagram"]} />
          </a>
        </div>
        <div className="columns is-centered is-mobile">
          <h4 className="column is-uppercase">Associate Producer</h4>
          <h4 className="column has-text-weight-bold">Jeffrey Baucom</h4>
          <a className="column" href="https://www.instagram.com/j_kishi_/" target="_blank">
            <FontAwesomeIcon size="lg" icon={["fab", "instagram"]} />
          </a>
        </div>
        <div className="columns is-centered is-mobile">
          <h4 className="column is-uppercase">Associate Producer</h4>
          <h4 className="column has-text-weight-bold">Joscelyn Baez</h4>
          <a className="column" href="https://instagram.com/jozzybaila?igshid=omvhwf3cyfiw" target="_blank">
            <FontAwesomeIcon size="lg" icon={["fab", "instagram"]} />
          </a>
        </div>
        <div className="columns is-centered is-mobile">
          <h4 className="column is-uppercase">Associate Producer</h4>
          <h4 className="column has-text-weight-bold">Leo Ramirez</h4>
          <a className="column" href="https://www.instagram.com/patrickfuego/" target="_blank">
            <FontAwesomeIcon size="lg" icon={["fab", "instagram"]} />
          </a>
        </div>
      </div>
    </div>
  )
}