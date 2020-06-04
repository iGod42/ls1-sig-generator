import React, { ReactNode, CSSProperties } from "react"
import { SignatureData } from "../../interface/SignatureData"
import SeparatedItems from "./SeparatedItems"
//import ImageToBase64 from "../../tools/ImageToBase64"
import { EmphasisText, LowEmphasisText, NormalText } from "./TextTypes"
//import SocialButtons from "./SocialButtons"
import { LS1Logo } from "./Images"
import { LinkedInLogo } from "./Images/LinkedInLogo"
import { EmailLogo } from "./Images/EmailLogo"
import { Table } from "./Table"

type Props = {
	data: SignatureData
}

const HtmlSignature = ({ data }: Props) => {
	/* 	const [defaultImage, setDefaultImage] = useState("")
	
		useEffect(() => {
			ImageToBase64(ls1).then(setDefaultImage)
		}, []) */

	const Image = ({ children }: { children: ReactNode }) => <tr><td style={{ lineHeight: 0, paddingBottom: "12px" }}>{children}</td></tr>

	const imgStyle = { display: "block", marginLeft: "auto", height: "14px" }

	const Td = ({ style, children }: { style?: CSSProperties, children: ReactNode }) => <td style={{ ...style }}>{children}</td>

	const SeparatorSpan = ({ children }: { children: ReactNode }) => <span style={{ lineHeight: 0, fontSize: "10pt" }}>{children}</span>
	return <Table>
		<tr>
			<Td style={{
				borderRight: "solid #d6d6d6 1.0pt",
				paddingRight: "12px",
				verticalAlign: "top",
			}}>
				<Table style={{ paddingTop: "0px" }}>
					<Image><a href="https://www.leftshift.one/"><LS1Logo style={{ ...imgStyle, paddingTop: 2 }} /></a></Image>
					<Image><a href={`mailto:${data.email}`}><EmailLogo style={imgStyle} /></a></Image>
					<Image><a href={data.linkedInLink}><LinkedInLogo style={imgStyle} /></a></Image>
				</Table>
			</Td>
			<Td style={{ paddingLeft: "12px" }}>
				<SeparatedItems separator={<SeparatorSpan> </SeparatorSpan>}>
					{data.titleBeforeName && <EmphasisText content={data.titleBeforeName} />}
					<EmphasisText content={data.firstName} />
					<EmphasisText content={data.lastName} />
					{data.titleAfterName && <EmphasisText content={data.titleAfterName} />}
				</SeparatedItems>
				<SeparatedItems separator={<SeparatorSpan> </SeparatorSpan>}>
					<EmphasisText content={data.jobTitle} />
				</SeparatedItems>
				<SeparatedItems separator={<div />}><NormalText content={data.mobile} /></SeparatedItems>
				<SeparatedItems separator={<div />}><NormalText content="Leftshift One Software GmbH" /></SeparatedItems>
				<SeparatedItems separator={<div />}><NormalText content="Am Innovationspark 10, A - 8020 Graz" /></SeparatedItems>
				<div style={{ height: "12px" }} />
				<SeparatedItems separator={<div />}><LowEmphasisText content="FN: 475594d FB-Gericht: Graz" /></SeparatedItems>

			</Td>
		</tr>
	</Table>
}

export default HtmlSignature