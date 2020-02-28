import React, {useEffect, useState} from "react"
import {SignatureData} from "../../interface/SignatureData"
import SeparatedItems from "./SeparatedItems"
import ImageToBase64 from "../../tools/ImageToBase64"
import ls1 from "../../assets/LS1.png"
import {EmphasisText, Link, LowEmphasisText, NormalText, Separator} from "./TextTypes"

type Props = {
	data: SignatureData
}

const HtmlSignature = ({data}: Props) => {
	const [defaultImage, setDefaultImage] = useState("")
	
	useEffect(() => {
		ImageToBase64(ls1).then(setDefaultImage)
	}, [])
	
	return <table style={{
		borderCollapse: "collapse"
	}}>
		<tbody>
		<tr>
			<td style={{
				borderRight: "2px solid #00FFC8",
				paddingRight: "9px"
			}}>
				{data.image ?
					<img
						height={64}
						src={data.image}
						alt="Portrait"
						style={{borderRadius: "50%"}}
					
					/> :
					<img
						height={40}
						src={defaultImage}
						alt="LS1 Logo"
						style={{borderRadius: "0"}}
					/>
				}
			</td>
			<td style={{paddingLeft: "8px"}}>
				<table>
					<tbody>
					<SeparatedItems separator={<span> </span>}>
						{data.titleBeforeName && <LowEmphasisText content={data.titleBeforeName}/>}
						<EmphasisText content={data.firstName}/>
						<EmphasisText content={data.lastName}/>
						{data.titleAfterName && <LowEmphasisText content={data.titleAfterName}/>}
					</SeparatedItems>
					
					<SeparatedItems separator={<Separator/>}>
						{data.jobTitle && <NormalText content={data.jobTitle}/>}
						<EmphasisText content={"Leftshift One"}/>
					</SeparatedItems>
					
					<SeparatedItems separator={<Separator/>}>
						{data.mobile && <NormalText content={data.mobile}/>}
						{data.landLine && <NormalText content={data.landLine}/>}
						<NormalText content={data.email}/>
						<Link href={"https://www.leftshift.one"}>www.leftshift.one</Link>
					</SeparatedItems>
					</tbody>
				</table>
			</td>
		</tr>
		</tbody>
	</table>
}

export default HtmlSignature