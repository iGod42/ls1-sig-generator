import React, { ReactNode, ReactElement } from "react"

type Props = {
	children: ReactNode[] | ReactNode,
	separator: ReactElement
}

const SeparatedItems = ({ children, separator }: Props) => {
	const theSeparator = React.cloneElement(separator, { ...separator.props, style: { ...separator.props.style, height: 1 } })
	return <p style={{ margin: 0, borderSpacing: 0, marginBlockStart: 0, marginBlockEnd: 0, padding: 0, lineHeight: 0 }}>
		{(children instanceof Array) ? <span>
			{(children as ReactNode[])
				.filter(a => a)
				.map((node, index, array) => <React.Fragment key={index}>
					{node}
					{index < array.length - 1 ? theSeparator : null}
				</React.Fragment>)}
		</span> : children}
	</p>
}

export default SeparatedItems