import React from 'react';

const TransitionWrapper: React.FC<IProps> = ({children, className}: IProps) => {
    return (
        <div className={`animate${className ? ' ' + className : ''}`}>
            {children}
        </div>
    );
};

export default TransitionWrapper;
