import React, {CSSProperties, ReactNode} from 'react'
import Title from '../../Title'

// left or right side?
// always going to be two components passed into this one
// this component is strictly for styling the grid layouts with images

interface Props {
    children: ReactNode[]
    title?: string
    level?: 1 | 2 | 3 | 4 | 5 | 6
    background?: boolean
    color?: string
}

const TextWithImageGridWrapper: React.FC<Props> = ({
    children,
    title,
    level,
    background,
    color,
}: Props) => {
    let className = 'grid-section-wrapper'

    if (background) {
        className += ' background'
    }

    const styles: CSSProperties = {}

    if (color) {
        styles.backgroundColor = color
    }

    return (
        <section className={className} style={styles}>
            {title && level && <Title level={level}>{title}</Title>}
            {children[0]!.type.name === 'Image' ? (
                // if the first child component is an Image component,
                // give style img-left
                <div className="grid img-left">{children}</div>
            ) : (
                <div className="grid img-right">{children}</div>
            )}
        </section>
    )
}

export default TextWithImageGridWrapper
