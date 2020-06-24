import React, { CSSProperties, ReactNode } from "react"

const baseTxtStyles: CSSProperties = {
	display: "inline-block",
	padding: 0,
	fontFamily: "Arial",
	fontSize: "10pt",
	textDecoration: "none",
	color: "#333333"
}
type TextProps = {
	content: ReactNode,
	style?: CSSProperties
}

export const NormalText = ({ content, style }: TextProps) => <span style={{ ...baseTxtStyles, ...style }}>{content}</span>

export const EmphasisText = ({ content, style }: TextProps) => <span style={{
	...baseTxtStyles,
	fontWeight: "bold",
	...style
}}>{content}</span>

export const LowEmphasisText = ({ content, style }: TextProps) => <span
	style={{
		...baseTxtStyles, fontSize: "7pt",
		...style
	}}>{content}</span>

type LinkProps = { children: ReactNode, href: string }
export const Link = ({ children, href }: LinkProps) => <a style={{
	...baseTxtStyles,
	fontWeight: "bold",
	cursor: "pointer"
}} href={href}
	ref={(node) => node?.style?.setProperty("text-decoration", "none", "important")}
>{children}</a>

export const Separator = () => <span style={{
	...baseTxtStyles,
	color: "#00FFC8",
	fontWeight: "bold"
}}> | </span>
