import React, {CSSProperties, ReactNode, useEffect, useState} from "react"
import {SignatureData} from "../../interface/SignatureData"
import SeparatedItems from "./SeparatedItems"
import ImageToBase64 from "./tools/ImageToBase64"
import LS1Image from "./Casual.jpg"

const baseTxtStyles: CSSProperties = {
	fontFamily: "Verdana",
	fontSize: "9pt",
	textDecoration: "none"
}

const Separator = () => <span style={{
	...baseTxtStyles,
	fontWeight: "bold",
	color: "#00FFC8"
}}> | </span>

type TextProps = {
	content: ReactNode
}

const NormalText = ({content}: TextProps) => <span style={baseTxtStyles}>{content}</span>

const EmphasisText = ({content}: TextProps) => <span style={{
	...baseTxtStyles,
	color: "#233246",
	fontWeight: "bold"
}}>{content}</span>

const LowEmphasisText = ({content}: TextProps) => <span style={{...baseTxtStyles, fontSize: "7pt"}}>{content}</span>

type LinkProps = { children: ReactNode, href: string }
const Link = ({children, href}: LinkProps) => <a style={{
	...baseTxtStyles,
	color: "#233246",
	fontWeight: "bold",
	textDecoration: "none",
	cursor: "pointer"
}} href={href}>{children}</a>

type Props = {
	data: SignatureData
}
const HtmlSignature = ({data}: Props) => {
	const [img, setImg] = useState<string>()
	useEffect(() => {
		ImageToBase64(LS1Image).then(setImg)
	}, [])
	return <table style={{
		borderCollapse: "collapse"
	}}>
		<tbody>
		<tr>
			<td style={{
				borderRight: "2px solid #00FFC8",
				paddingRight: "9px"
			}}><img
				height={35}
				src={img}
				alt="Logo"/>
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