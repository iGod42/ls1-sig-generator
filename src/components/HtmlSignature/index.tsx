import React, { useEffect, useState, ReactNode, CSSProperties } from "react"
import { SignatureData } from "../../interface/SignatureData"
import SeparatedItems from "./SeparatedItems"
import ImageToBase64 from "../../tools/ImageToBase64"
import ls1Logo from "../../assets/ls1_logo.png"
import linkedInLogo from "../../assets/linkedin.png"
import mailIcon from "../../assets/mail.png"
import { EmphasisText, Link, LowEmphasisText, NormalText, Separator } from "./TextTypes"
import Td from "./Td"
import Table from "./Table"	
import { getAddress } from "../../Addresses"

type Props = {
	data: SignatureData
}

const HtmlSignature = ({ data }: Props) => {
	const [defaultImage, seTdefaultImage] = useState("")

	useEffect(() => {
		ImageToBase64(ls1Logo).then(seTdefaultImage)
	}, [])


	const LinkButton = ({ link, src, alt, style }: { link: string, style?: CSSProperties, src: string, alt: string }) =>
		<tr>
			<Td align="right" style={{/* lineHeight: 0,*/ paddingBottom: 12, ...style }}>
				<a style={{ padding: "1px" }} href={link} target="_blank" rel="noopener noreferrer">
					<img
						height={13}
						src={src}
						alt={alt}
						
					/>
					</a>
			</Td>
		</tr>

	const Text = ({ children, style }: { children: ReactNode, style?: CSSProperties }) => <tr><td style={{ paddingBottom: 2, ...style }}>{children}</td></tr>
	
	const addr = getAddress(data.addressKey)
	if(!addr) throw new Error('invalid address')
	
	return <Table>
		<tbody>
			<tr>
				<Td style={{
					borderRight: "solid #d6d6d6 1px",
					paddingRight: "12px",
					verticalAlign: "top",
				}}>
					<Table style={{ paddingTop: "1px" }}>
						<tbody>
							<LinkButton style={{ paddingTop: 2, paddingBottom: 11 }}
								link="https://www.leftshiftone.com/"
								src="https://resource.leftshift.one/ls1_logo.png"
								alt="LS1 Logo"
							/>
							<LinkButton
								link={`mailto:${data.email}`}
								style={{ paddingBottom: 10 }}
								src="https://resource.leftshift.one/mail.png"
								alt="Email Me" />
							<LinkButton style={{ paddingBottom: 0 }}
								link={data.linkedInLink}
								src="https://resource.leftshift.one/linkedin.png"
								alt="LinkedIN"
							/>
						</tbody>
					</Table>
				</Td>
				<Td style={{ padding: 0, paddingLeft: 12 }}>
					<Table style={{ paddingTop: "0px" }}>
						<tbody>
							<Text><EmphasisText content={[[data.titleBeforeName, data.firstName, data.lastName].filter(a => a).join(" "), data.titleAfterName].filter(a => a).join(", ")} /></Text>
							{data.jobTitle && <Text><EmphasisText content={data.jobTitle} /></Text>}
							{data.mobile && <Text><NormalText content={data.mobile} /></Text>}
							<Text><NormalText content={"Leftshift One Software GmbH"} /></Text>
							<Text><NormalText content={addr.address} /></Text>
							<Text style={{ paddingTop: 8 }}><LowEmphasisText content={"FN: 475594d FB-Gericht: Graz"} /></Text>
						</tbody>
					</Table>
				</Td>
			</tr>
		</tbody>
	</Table>

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