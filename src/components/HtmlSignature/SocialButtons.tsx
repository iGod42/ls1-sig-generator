import React, {ReactNode} from "react"
import {SignatureData} from "../../interface/SignatureData"
import {FacebookButton, MapButton, LinkedInButton} from "./LinkButton"

type Props = {
	sigData: SignatureData,
	horizontal?: boolean
}

const SocialButtons = ({sigData, horizontal}: Props) => {
	const buttons = [
		(sigData.mapLink && ["mapButton", <MapButton link={sigData.mapLink}/>]),
		(sigData.facebookLink && ["facebookButton", <FacebookButton link={sigData.facebookLink}/>]),
		(sigData.linkedInLink && ["linkedInButton", <LinkedInButton link={sigData.linkedInLink}/>])
	].filter(a => a) as [string, ReactNode][]
	return <React.Fragment>{!!buttons.length && <table style={{borderCollapse: "collapse"}}>
		{horizontal ?
			<tbody>
			<tr>
				{buttons.map(button => <td key={button[0]}>{button[1]}</td>)}
			</tr>
			</tbody>
			: <tbody>
			{buttons.map(button => <tr key={button[0]}>
				<td>{button[1]}</td>
			</tr>)}
			</tbody>
		}
		</table>}
	</React.Fragment>
}

export default SocialButtons