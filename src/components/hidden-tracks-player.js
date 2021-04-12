import React from "react"
export default function HiddenTracksPlayer() {
    return (
        <div>
            <iframe 
                style={{border: "0", width: "100%", height: "120px"}}
                src="https://bandcamp.com/EmbeddedPlayer/album=1814927080/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
                seamless>
                <a href="https://jkishi.bandcamp.com/album/kishi-tape-vol-1">Kishi Tape vol. 1 by J Kishi
                </a>
            </iframe>
        </div>
    )
}