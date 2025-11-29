import React from "react"

import WindowWrapper from "#hoc/WindowWrapper.jsx"
import {WindowControls} from "#components/index.js"
import useWindowStore from "#store/window.js"

const Image = () => {
    const {windows} = useWindowStore()
    const data = windows?.imgfile?.data

    if (!data) return null

    const {name, imageUrl} = data

    return (
        <>
            <div id="window-header">
                <WindowControls target="imgfile"/>
                <h2>{name}</h2>
            </div>

            <div className="p-4 bg-white">
                {imageUrl && (
                    <img src={imageUrl} alt={name} className="max-w-full h-auto rounded shadow"/>
                )}
            </div>
        </>
    )
}

const ImageWindow = WindowWrapper(Image, "imgfile")

export default ImageWindow
