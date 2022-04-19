import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img 
                src="./images/walter.png" 
                className="header--image"
                alt=""
            />
            <h2 className="header--title">Meme Generator</h2>
        </header>
    )
}