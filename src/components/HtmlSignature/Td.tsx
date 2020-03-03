import React, { CSSProperties, ReactNode } from 'react'

type Props = {
    style: CSSProperties,
    children: ReactNode
}

const Td = ({ style, children, ...props }: Props) => (
    <td style={{
        whiteSpace: "nowrap",
        padding: "1px",
        fontSize: "0pt",
        ...style
    }} {...props}>{children}</td>)

Td.defaultProps = {
    style: {}
}

export default Td