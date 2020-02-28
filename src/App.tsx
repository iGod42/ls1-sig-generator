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
					image: img,
					mapLink:"https://www.google.at/maps/place/Leftshift+One/@47.0420042,15.4368234,17z/data=!4m12!1m6!3m5!1s0x476e357f4d7aaaab:0xb67d764572d5c121!2sLeftshift+One!8m2!3d47.0420006!4d15.4390174!3m4!1s0x476e357f4d7aaaab:0xb67d764572d5c121!8m2!3d47.0420006!4d15.4390174",
					facebookLink:"https://facebook.com",
					linkedInLink:"https://linked.in"
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
