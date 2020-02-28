import React, {ReactNode} from "react"

type Props = {
	children: ReactNode[] | ReactNode,
	separator: ReactNode
}

const SeparatedItems = ({children, separator}: Props) => {
	return <tr>
		<td style={{padding: "0"}}>
			{(children instanceof Array) ? <span>
			{(children as ReactNode[])
				.filter(a => a)
				.map((node, index, array) => <React.Fragment key={index}>
					{node}
					{index < array.length - 1 ? separator : null}
				</React.Fragment>)}
			</span> : children}
		</td>
	</tr>
}

export default SeparatedItems