import React, { CSSProperties, ReactNode } from 'react'

type Props = {
    style: CSSProperties,
    children: ReactNode,
    align?: "center" | "left" | "right" | "justify" | "char"
}

const Td = ({ style, children, align, ...props }: Props) => (
    <td align={align || "left"} valign="top" style={{
        whiteSpace: "nowrap",
        padding: "0 1px",
        fontSize: "0pt",
        ...style
    }} {...props}>{children}</td>)

Td.defaultProps = {
    style: {}
}

export default Td