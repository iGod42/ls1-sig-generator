import React, {FormEventHandler, useRef} from "react"

type Props = {
	labelText: string,
	submitText: string,
	onFileSelected: (urlData: string) => void
}

const FileInput = ({labelText, submitText, onFileSelected}: Props) => {
	
	const fileInput = useRef(null)
	
	const handleSubmit: FormEventHandler = (event) => {
		event.preventDefault()
		const file = (fileInput?.current as any)?.files[0] as File
		if (!file) return
		const reader = new FileReader()
		reader.onload = () => {
			onFileSelected(reader.result as string)
		}
		reader.readAsDataURL(file)
	}
	
	return <form onSubmit={handleSubmit}>
		<label>
			{labelText}
			<input type="file" ref={fileInput} accept={"image/jpeg, image/png"}/>
		</label>
		<button type="submit">{submitText}</button>
	</form>
}

FileInput.defaultProps = {
	labelText: "Choose File: ",
	submitText: "Open Selected"
}

export default FileInput