import React from 'react'

interface Props extends IProps {
    style?: React.CSSProperties
}

const Grid: React.FC<Props> = ({children, style, className}: Props) => {
    return (
        <>
            <section
                role="contentinfo"
                className={`grid${className ? ' ' + className : ''}`}
                style={style ? style : {}}
            >
                {children}
            </section>
        </>
    )
}

export default Grid
