import React from "react"
import "./index.css"
import {SignatureData} from "../../interface/SignatureData"
import TextInput from "./TextInput"

type InputByKeyProps = { disabled?: boolean, note?: string, objKey: keyof SignatureData, label: string } & Props
const InputByKey = ({data, dataChanged, objKey, label, note, disabled}: InputByKeyProps) =>
	<TextInput
		key={objKey} label={label} value={data[objKey]}
		note={note} disabled={disabled}
		valueChanged={(newValue => dataChanged({
			...data,
			[objKey]: newValue
		}))}
	/>

type Props = {
	data: SignatureData,
	dataChanged: (newData: SignatureData) => void
}
const SigDataInput = (props: Props) => {
	
	return <div className="sigDataInputContainer">
		<InputByKey {...props} objKey={"titleBeforeName"} label="Title before name"/>
		<InputByKey {...props} objKey={"firstName"} label="First name"/>
		<InputByKey {...props} objKey={"lastName"} label="Last name"/>
		<InputByKey {...props} objKey={"titleAfterName"} label="Title after name"/>
		<InputByKey {...props} objKey={"jobTitle"} label="Job Title"/>
		<InputByKey {...props} objKey={"mobile"} label="Phone number"/>
		<InputByKey {...props} objKey={"email"} label="Email"/>
		<InputByKey {...props} objKey={"mapLink"} label={"Map link"} disabled/>
		<InputByKey {...props} objKey={"facebookLink"} label={"Facebook link"} disabled/>
		<InputByKey {...props} objKey={"linkedInLink"} label={"LinkedIn link"} note="Use your own if you want to."/>
	</div>
}

export default React.memo(SigDataInput)