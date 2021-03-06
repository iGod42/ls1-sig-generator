import { Address } from "../Addresses";

export interface SignatureData {
	titleBeforeName?: string
	firstName: string,
	lastName: string,
	titleAfterName?: string,
	jobTitle?: string,
	email: string,
	mobile?: string,
	landLine?: string,
	image?: string,
	mapLink?: string,
	facebookLink?: string,
	linkedInLink: string,
	addressKey: string
}