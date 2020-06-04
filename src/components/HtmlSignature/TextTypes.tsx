import React, {CSSProperties, ReactNode} from "react"

const baseTxtStyles: CSSProperties = {
	fontFamily: "Arial",
	fontSize: "12px",
	textDecoration: "none",
	lineHeight: "150%",
	color: "#455156"
}
type TextProps = {
	content: ReactNode
}

export const NormalText = ({content}: TextProps) => <span style={baseTxtStyles}>{content}</span>

export const EmphasisText = ({content}: TextProps) => <span style={{
	...baseTxtStyles,
	fontWeight: "bold"
}}>{content}</span>

export const LowEmphasisText = ({content}: TextProps) => <span
	style={{...baseTxtStyles, fontSize: "8px"}}>{content}</span>

type LinkProps = { children: ReactNode, href: string }
export const Link = ({children, href}: LinkProps) => <a style={{
	...baseTxtStyles,
	fontWeight: "bold",
	textDecoration: "none",
	cursor: "pointer"
}} href={href}>{children}</a>

export const Separator = () => <span style={{
	...baseTxtStyles,
	color: "#00FFC8"
}}> | </span>
