import React, {useState} from "react"
import {Download} from "lucide-react"
import {Document, Page, pdfjs} from "react-pdf"
import "react-pdf/dist/Page/AnnotationLayer.css"
import "react-pdf/dist/Page/TextLayer.css"

import WindowWrapper from "#hoc/WindowWrapper.jsx"
import {WindowControls} from "#components/index.js"

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url,
).toString()

const Resume = () => {
    const [numPages, setNumPages] = useState(null)

    const onDocumentLoadSuccess = ({numPages}) => {
        setNumPages(numPages)
    }

    return (
        <>
            <div id="window-header">
                <WindowControls target="resume"/>
                <h2>Resume.pdf</h2>
                <a href="/files/richard-mbingi-resume.pdf" download className="cursor-pointer"
                   title="Download resume">
                    <Download className="icon"/>
                </a>
            </div>

            <Document
                file="/files/richard-mbingi-resume.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={(error) => console.error("Error loading PDF:", error)}
            >
                <Page
                    pageNumber={1}
                    renderTextLayer
                    renderAnnotationLayer
                />
            </Document>

            {numPages && <p className="text-center">Page 1 of {numPages}</p>}
        </>
    )
}

const ResumeWindow = WindowWrapper(Resume, "resume")

export default ResumeWindow
