import React from 'react'

interface TitleProps extends IProps {
    center?: boolean
    level: 1 | 2 | 3 | 4 | 5 | 6
    major?: boolean
    children: React.ReactNode
    style?: {[key: string]: string}
}

const Title: React.FC<TitleProps> = (props: TitleProps) => {
    const {children, center, level, major, className, style} = props

    if (level === 1) {
        return (
            <h1
                className={`${center ? 'center ' : ''}${major ? 'major' : ''}${
                    className ? className : ''
                }`}
                style={style}
            >
                {children}
            </h1>
        )
    } else if (level === 2) {
        return (
            <h2
                className={`${center ? 'center ' : ''}${major ? 'major' : ''}${
                    className ? className : ''
                }`}
                style={style}
            >
                {children}
            </h2>
        )
    } else if (level === 3) {
        return (
            <h3
                className={`${center ? 'center ' : ''}${major ? 'major' : ''}${
                    className ? className : className ? className : ''
                }`}
                style={style}
            >
                {children}
            </h3>
        )
    } else if (level === 4) {
        return (
            <h4
                className={`${center ? 'center ' : ''}${major ? 'major' : ''}${
                    className ? className : ''
                }`}
                style={style}
            >
                {children}
            </h4>
        )
    } else if (level === 5) {
        return (
            <h5
                className={`${center ? 'center ' : ''}${major ? 'major' : ''}${
                    className ? className : ''
                }`}
                style={style}
            >
                {children}
            </h5>
        )
    } else {
        // if (value === 6)
        return (
            <h6
                className={`${center ? 'center ' : ''}${major ? 'major' : ''}${
                    className ? className : ''
                }`}
                style={style}
            >
                {children}
            </h6>
        )
    }
}
export default Title
