import React from "react"
import useWindowStore from "#store/window.js"

const WindowControls = ({target}) => {
    const {closeWindow} = useWindowStore()

    return (
        <div id="window-controls">
            <button
                type="button"
                className="close"
                onClick={() => closeWindow(target)}
            />
            <button
                type="button"
                className="minimize"
                disabled
                aria-label="Minimize window (not implemented)"
            />
            <button
                type="button"
                className="maximize"
                disabled
                aria-label="Maximize window (not implemented)"
            />
        </div>
    )
}

export default WindowControls