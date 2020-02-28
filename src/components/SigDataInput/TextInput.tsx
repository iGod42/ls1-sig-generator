import React from "react"

type TextInputProps = {
	value: string | undefined,
	valueChanged: (newValue: string) => void,
	label: string,
	note?: string,
	disabled?: boolean
}

const TextInput = ({value, label, valueChanged, note, disabled}: TextInputProps) => {
	return <div className="sigDataInput">
		<label>{label}: </label>
		<input type="text" value={value} onChange={(e) => valueChanged(e.target.value)} disabled={disabled}/>
		{note && <span className="note">{note}</span>}
	</div>
}

export default React.memo(TextInput)