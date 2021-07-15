import React, { useState } from "react"
import "./index.css"
import { SignatureData } from "../../interface/SignatureData"
import TextInput from "./TextInput"
import { Addresses } from '../../Addresses'
import data from "../../DefaultData"

type InputByKeyProps = { disabled?: boolean, note?: string, objKey: keyof SignatureData, label: string } & Props
const InputByKey = ({ data, dataChanged, objKey, label, note, disabled }: InputByKeyProps) =>
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

	const addressChanged = (addressKey: string) => {
		props.dataChanged({
			...props.data,
			addressKey: addressKey
		})
	}

	return <div className="sigDataInputContainer">
		<InputByKey {...props} objKey={"titleBeforeName"} label="Title before name" />
		<InputByKey {...props} objKey={"firstName"} label="First name" />
		<InputByKey {...props} objKey={"lastName"} label="Last name" />
		<InputByKey {...props} objKey={"titleAfterName"} label="Title after name" />
		<InputByKey {...props} objKey={"jobTitle"} label="Job Title" />
		<InputByKey {...props} objKey={"mobile"} label="Phone number" />
		<InputByKey {...props} objKey={"email"} label="Email" />
		{/* <InputByKey {...props} objKey={"mapLink"} label={"Map link"} disabled/> */}
		{/* <InputByKey {...props} objKey={"facebookLink"} label={"Facebook link"} disabled/> */}
		<InputByKey {...props} objKey={"linkedInLink"} label={"LinkedIn link"} note="Use your own if you want to." />
		<div className="sigDataInput">
			<label>Address: </label>
			<span>
				{Addresses.map((a) => (<React.Fragment key={a.id}><input type="radio" value={a.id} name="addr" checked={a.id === props.data.addressKey} onChange={() => addressChanged(a.id)} /> {a.name}</React.Fragment>))}
			</span>
		</div>

	</div>
}

export default React.memo(SigDataInput)