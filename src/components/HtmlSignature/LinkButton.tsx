import React from "react"
import fb from "../../assets/facebook_16.png"
import linked_in from "../../assets/Linked_in_16.png"
import map from "../../assets/Map_16.png"

type LinkProps = {
	link: string
}

type Props = {
	image: string,
	alt: string
} & LinkProps

export const LinkButton = ({ link, image, alt }: Props) =>
	<a style={{ padding: "1px" }} href={link} target="_blank" rel="noopener noreferrer">
		<img
			src={image} alt={alt}
			style={{ display: "block" }} /> </a>

export const FacebookButton = ({ link }: LinkProps) => <LinkButton image={fb} alt="FB" link={link} />
export const LinkedInButton = ({ link }: LinkProps) => <LinkButton image={linked_in} alt="IN" link={link} />
export const MapButton = ({ link }: LinkProps) => <LinkButton image={map} alt="Map" link={link} />