import React, {useEffect, useRef, useState} from "react"
import HtmlSignature from "./components/HtmlSignature"
import PopupBubble from "./components/PopupBubble"
import ImageEditor from "./components/ImageEditor"
import FileInput from "./components/FileInput"
import SigDataInput from "./components/SigDataInput"
import {SignatureData} from "./interface/SignatureData"
import defaultData from "./DefaultData"
import {HTMLGenerator} from './service/HTMLGenerator'
import "./App.css"

function App() {
	const signature = useRef<HTMLDivElement>(null)
	const [imgPath, setImgPath] = useState<string>("")
	const [showPopup, setShowPopup] = useState<boolean>(false)
	const [data, setData] = useState<SignatureData>(defaultData)
	
	const copyShit = (e: any) => {
		const html = HTMLGenerator.getHtml(signature?.current?.innerHTML)
		console.log(html)
		e.clipboardData.setData("text/html", html)
		e.preventDefault() // default behaviour is to copy any selected content
	}
	
	const doCopy = () => {
		document.execCommand("copy")
		setShowPopup(true)
	}
	
	useEffect(() => {
		document.addEventListener("copy", copyShit)
		return () => document.removeEventListener("copy", copyShit)
	})
	
	return (
		<div>
			<div className="inputSection">
				<div>
					<h1>Your Data</h1>
					<SigDataInput data={data} dataChanged={setData}/>
				</div>
				{/* <div>
					<h1>Choose an image</h1>
					<FileInput onFileSelected={(dataUrl) => setImgPath(dataUrl)}/>
					{imgPath &&
										<ImageEditor image={imgPath} imageSaved={(newImg) => setData({...data, image: newImg})}/>}
				</div> */}
			</div>
			
			<div>
				<h1>Here's your signature</h1>
				<div className="copyControl">
					<button onClick={doCopy}>Copy to Clipbaord</button>
					{showPopup && <PopupBubble text="Copied" onTimeout={() => setShowPopup(false)}/>}
				</div>
				<div className="sigDisplay">
					<div ref={signature}>
						<HtmlSignature data={data}/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
