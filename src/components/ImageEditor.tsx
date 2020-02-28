import React, {useRef, useState} from "react"
import AvatarEditor from "react-avatar-editor"

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
		console.log((editor?.current as any)?.getImageScaledToCanvas().toDataURL())
		imageSaved((editor?.current as any)?.getImageScaledToCanvas().toDataURL())
	}
	
	return <div>
		<AvatarEditor
			image={image}
			width={250}
			height={250}
			border={10}
			scale={scale / 100}
			rotate={rotate - 180}
			borderRadius={150}
			ref={editor}
		/>
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
		<button onClick={save}>Save</button>
	</div>
}

export default ImageEditor