import React, {ReactNode} from "react"
import Td from "./Td"

type Props = {
	children: ReactNode[] | ReactNode,
	separator: ReactNode
}

const SeparatedItems = ({children, separator}: Props) => {
	return <tr>
		<Td>
			{(children instanceof Array) ? <span>
			{(children as ReactNode[])
				.filter(a => a)
				.map((node, index, array) => <React.Fragment key={index}>
					{node}
					{index < array.length - 1 ? separator : null}
				</React.Fragment>)}
			</span> : children}
		</Td>
	</tr>
}

export default SeparatedItems