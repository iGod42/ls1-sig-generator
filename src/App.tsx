import React, {useEffect, useRef, useState} from "react"
import HtmlSignature from "./components/HtmlSignature"
import PopupBubble from "./components/PopupBubble"
import ImageEditor from "./components/ImageEditor"
import FileInput from "./components/FileInput"
import SigDataInput from "./components/SigDataInput"
import {SignatureData} from "./interface/SignatureData"

function App() {
	const signature = useRef<HTMLDivElement>(null)
	const [imgPath, setImgPath] = useState<string>("")
	const [showPopup, setShowPopup] = useState<boolean>(false)
	const [data, setData] = useState<SignatureData>({
		titleBeforeName: "Dr.",
		jobTitle: "The Batman",
		mobile: "+1 1234 4567",
		titleAfterName: "MMSc",
		email: "bruce.wayne@leftshift.one",
		firstName: "Bruce",
		lastName: "Wayne",
		image: "",
		mapLink: "https://www.google.at/maps/place/Leftshift+One/@47.0420042,15.4368234,17z/data=!4m12!1m6!3m5!1s0x476e357f4d7aaaab:0xb67d764572d5c121!2sLeftshift+One!8m2!3d47.0420006!4d15.4390174!3m4!1s0x476e357f4d7aaaab:0xb67d764572d5c121!8m2!3d47.0420006!4d15.4390174",
		facebookLink: "https://www.facebook.com/leftshiftone/",
		linkedInLink: "https://www.linkedin.com/company/leftshift-one"
	})
	
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
				<HtmlSignature data={data}
				/>
			</div>
			<button onClick={doCopy}>Copy</button>
			
			<div>
				<SigDataInput data={data} dataChanged={setData}/>
			</div>
			
			{showPopup && <PopupBubble text="Copied" onTimeout={() => setShowPopup(false)}/>}
			
			<FileInput onFileSelected={(dataUrl) => setImgPath(dataUrl)}/>
			<ImageEditor image={imgPath} imageSaved={(newImg) => setData({...data, image: newImg})}/>
		</div>
	)
}

export default App
