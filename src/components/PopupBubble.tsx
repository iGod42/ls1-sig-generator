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
	
	return <div>{text}</div>
}

export default PopupBubble