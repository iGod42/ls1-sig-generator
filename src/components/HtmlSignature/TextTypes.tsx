import React, {CSSProperties, ReactNode} from "react"

const baseTxtStyles: CSSProperties = {
	fontFamily: "Verdana",
	fontSize: "9pt",
	textDecoration: "none"
}
type TextProps = {
	content: ReactNode
}

export const NormalText = ({content}: TextProps) => <span style={baseTxtStyles}>{content}</span>

export const EmphasisText = ({content}: TextProps) => <span style={{
	...baseTxtStyles,
	color: "#233246",
	fontWeight: "bold"
}}>{content}</span>

export const LowEmphasisText = ({content}: TextProps) => <span
	style={{...baseTxtStyles, fontSize: "6pt"}}>{content}</span>

type LinkProps = { children: ReactNode, href: string }
export const Link = ({children, href}: LinkProps) => <a style={{
	...baseTxtStyles,
	color: "#233246",
	fontWeight: "bold",
	cursor: "pointer"
}} href={href}
ref={(node) => node?.style?.setProperty("text-decoration", "none", "important") }
>{children}</a>

export const Separator = () => <span style={{
	...baseTxtStyles,
	color: "#00FFC8",
	fontWeight: "bold"
}}> | </span>
