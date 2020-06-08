import React, { ReactNode, CSSProperties } from 'react'

type Props = {
    children: ReactNode,
    style: CSSProperties
}

const Table = ({ style, children, ...props }: Props) => <table role="presentation" cellSpacing="0" cellPadding="0" style={{
    borderCollapse: "collapse",
    ...style
}} {...props}>{children}</table>

Table.defaultProps = {
    style: {}
}

export default Table