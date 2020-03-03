import React, {ReactNode} from "react"
import {SignatureData} from "../../interface/SignatureData"
import {FacebookButton, MapButton, LinkedInButton} from "./LinkButton"
import Td from "./Td"
import Table from "./Table"

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
	return <React.Fragment>{!!buttons.length && <Table>
		{horizontal ?
			<tbody>
			<tr>
				{buttons.map(button => <Td key={button[0]}>{button[1]}</Td>)}
			</tr>
			</tbody>
			: <tbody>
			{buttons.map(button => <tr key={button[0]}>
				<Td style={{padding:"1px"}}>{button[1]}</Td>
			</tr>)}
			</tbody>
		}
		</Table>}
	</React.Fragment>
}

export default SocialButtons