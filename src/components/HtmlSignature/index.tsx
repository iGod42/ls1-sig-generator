import React, { useEffect, useState } from "react"
import { SignatureData } from "../../interface/SignatureData"
import SeparatedItems from "./SeparatedItems"
import ImageToBase64 from "../../tools/ImageToBase64"
import ls1Logo from "../../assets/ls1_logo.png"
import linkedInLogo from "../../assets/linkedin.png"
import mailIcon from "../../assets/mail.png"
import { EmphasisText, Link, LowEmphasisText, NormalText, Separator } from "./TextTypes"
import Td from "./Td"
import Table from "./Table"

type Props = {
	data: SignatureData
}

const HtmlSignature = ({ data }: Props) => {
	const [defaultImage, seTdefaultImage] = useState("")

	useEffect(() => {
		ImageToBase64(ls1Logo).then(seTdefaultImage)
	}, [])

	return <table>
		<tr><td>
			<table>
				<tr><td><img
					height={16}
					src="http://localhost:3000/ls1_logo.png"
					alt="LS1 Logo"
					style={{ borderRadius: "0", display: "block" }}
				/>
				</td></tr>
<tr><td>
					<img
						height={16}
						src="http://localhost:3000/mail.png"
						alt="Email Me"
						style={{ borderRadius: "0", display: "block" }}
					/></td></tr>
					<tr><td>
					<img
						height={16}
						src="http://localhost:3000/linkedin.png"
						alt="LinkedIN"
						style={{ borderRadius: "0", display: "block" }}
					/></td></tr>
			</table>
		</td></tr>
	</table>

	return <Table>
		<tbody>
			<tr>
				<Td style={{
					//borderRight: "3px solid #00FFC8",
					paddingRight: "9px"
				}}>
					<img
						height={16}
						width={26}
						src={ls1Logo}
						alt="LS1 Logo"
						style={{ width: 26, height: 16 }}
					/>

					<img
						height={16}
						src={mailIcon}
						alt="Email Me"
						style={{ borderRadius: "0", display: "block" }}
					/>
					<img
						height={16}
						src={linkedInLogo}
						alt="LinkedIN"
						style={{ borderRadius: "0", display: "block" }}
					/>
				</Td>
				<Td style={{ paddingLeft: "8px" }}>
					<Table>
						<tbody>
							<SeparatedItems separator={<NormalText content={" "} />}>
								{data.titleBeforeName && <LowEmphasisText content={data.titleBeforeName} />}
								<EmphasisText content={data.firstName} />
								<NormalText content={data.lastName} />
								{data.titleAfterName && <LowEmphasisText content={data.titleAfterName} />}
							</SeparatedItems>

							<SeparatedItems separator={<Separator />}>
								{data.jobTitle && <NormalText content={data.jobTitle} />}
								<EmphasisText content={"Leftshift One"} />
							</SeparatedItems>

							<SeparatedItems separator={<Separator />}>
								{data.mobile && <NormalText content={data.mobile} />}
								{data.landLine && <NormalText content={data.landLine} />}
								{data.email && <NormalText content={data.email} />}
								<Link href={"https://www.leftshift.one"}>www.leftshift.one</Link>
							</SeparatedItems>
						</tbody>
					</Table>
				</Td>
			</tr>
		</tbody>
	</Table>
}

export default HtmlSignature