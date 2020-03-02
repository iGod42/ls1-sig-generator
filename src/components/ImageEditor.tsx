import React, {useRef, useState} from "react"
import AvatarEditor from "react-avatar-editor"

import "./ImageEditor.css"

const DEF_SCALE = 100
const DEF_ROTATE = 180

type Props = {
	image: string,
	imageSaved: (dataUrl: string) => void
}

const ImageEditor = ({image, imageSaved}: Props) => {
	const editor = useRef(null)
	
	const [scale, setScale] = useState<number>(DEF_SCALE)
	const [rotate, setRotate] = useState<number>(DEF_ROTATE)
	
	const reset = () => {
		setScale(DEF_SCALE)
		setRotate(DEF_ROTATE)
	}
	
	const save = () => {
		const canvas = (editor?.current as any)?.getImageScaledToCanvas()
		if (!canvas) return
		
		const ctx = canvas.getContext("2d")
		
		// desaturate
		ctx.globalCompositeOperation = "saturation"
		ctx.fillStyle = "hsl(0," +7 + "%, 50%)"
		ctx.fillRect(0, 0, canvas.width, canvas.height)
		
		// give a light blue tint
		ctx.globalCompositeOperation = "hue";
		ctx.fillStyle = "hsl(" + 210 + ",1%, 50%)";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		
		//reset settings
		ctx.globalCompositeOperation = "source-over";
		
		imageSaved(canvas.toDataURL())
		
		//imageSaved((editor?.current as any)?.getImageScaledToCanvas().toDataURL())
	}
	
	return <div className="imageEditorWrapper">
		<AvatarEditor
			image={image}
			width={200}
			height={200}
			border={10}
			scale={scale / 100}
			rotate={rotate - 180}
			borderRadius={150}
			ref={editor}
		/>
		<div>
			<div>
				<label>Zoom</label>
				<input type="range" min="10" max="500" value={scale} className="slider" id="myRange"
					   onChange={(e) => setScale(Number.parseInt(e.target.value))}/>
				<label>{scale / 100}x</label>
			</div>
			<div>
				<label>Rotate</label>
				<input type="range" min="90" max="270" value={rotate} className="slider" id="myRange"
					   onChange={(e) => setRotate(Number.parseInt(e.target.value))}/>
				<label>{rotate - 180}°</label>
			</div>
			<button onClick={reset}>Reset</button>
			<button onClick={save}>Use Image</button>
		</div>
	
	</div>
}

export default ImageEditor