import React from "react"

import WindowWrapper from "#hoc/WindowWrapper.jsx"
import {WindowControls} from "#components/index.js"
import useWindowStore from "#store/window.js"

const Text = () => {
    const {windows} = useWindowStore()
    const data = windows?.txtfile?.data

    if (!data) return null

    const {name, image, subtitle, description} = data

    return (
        <>
            <div id="window-header">
                <WindowControls target="txtfile"/>
                <h2>{name}</h2>
            </div>

            <div className="p-4 space-y-4 bg-white">
                {image && (
                    <img src={image} alt={name} className="w-full max-w-sm rounded"/>
                )}

                {subtitle && (
                    <h3 className="text-lg font-semibold">{subtitle}</h3>
                )}

                {Array.isArray(description) && description.length > 0 && (
                    <div className="space-y-3">
                        {description.map((para, idx) => (
                            <p key={idx} className="text-sm leading-relaxed text-gray-800">
                                {para}
                            </p>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

const TextWindow = WindowWrapper(Text, "txtfile")

export default TextWindow
