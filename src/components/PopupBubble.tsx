import React, {useEffect} from "react"

type Props = {
	text: string,
	onTimeout: () => void
}
const PopupBubble = ({text, onTimeout}: Props) => {
	useEffect(() => {
		const timer = setTimeout(onTimeout, 1000)
		return () => clearTimeout(timer)
	}, [onTimeout])
	
	return <div style={{zIndex: 1000, position: "absolute", backgroundColor:"lightgrey"}}>{text}</div>
}

export default PopupBubble