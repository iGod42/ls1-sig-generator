import React, { ReactNode, CSSProperties } from 'react'

interface TableProps {
    children: ReactNode,
    style?: CSSProperties
}

export const Table = ({ children, style, ...props }: TableProps) => <table {...props} style={{
    borderCollapse: "collapse",
    borderSpacing: 0,
    ...style,
}} cellPadding={0} cellSpacing={0}>
    <tbody>
        {children}
    </tbody>
</table>