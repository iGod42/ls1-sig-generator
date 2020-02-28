import React, {useEffect, useRef, useState} from "react"
import HtmlSignature from "./components/HtmlSignature"
import PopupBubble from "./components/PopupBubble"
import ImageEditor from "./components/ImageEditor"
import FileInput from "./components/FileInput"

function App() {
	const signature = useRef<HTMLDivElement>(null)
	const [img, setImg] = useState<string>("")
	const [imgPath, setImgPath] = useState<string>("")
	const [showPopup, setShowPopup] = useState<boolean>(false)
	
	const copyShit = (e: any) => {
		console.log(signature?.current?.innerHTML)
		e.clipboardData.setData("text/html", signature?.current?.innerHTML)
		e.preventDefault() // default behaviour is to copy any selected content
		
	}
	
	const doCopy = () => {
		document.execCommand("copy")
		setShowPopup(true)
	}
	
	useEffect(() => {
		document.addEventListener("copy", copyShit)
		document.addEventListener("paste", copyShit)
		return () => document.removeEventListener("copy", copyShit)
	})
	
	return (
		<div>
			<div ref={signature}>
				<HtmlSignature data={{
					titleBeforeName: "DI",
					jobTitle: "Senior Technology Consultant",
					mobile: "+43 676 9022868",
					titleAfterName: "BSc",
					email: "robert.spari@gmail.com",
					firstName: "Robert",
					lastName: "Spari",
					image: img
				}}
				/>
			</div>
			<button onClick={doCopy}>Copy</button>
			{showPopup && <PopupBubble text="Copied" onTimeout={() => setShowPopup(false)}/>}
			
			<FileInput onFileSelected={(dataUrl) => setImgPath(dataUrl)}/>
			<ImageEditor image={imgPath} imageSaved={setImg}/>
		</div>
	)
}

export default App
