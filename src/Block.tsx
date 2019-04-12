import React from 'react';

export interface IBlockProps {
    color: 'red' | 'green' | 'blue' | 'orange';
    text: string;
}

export class Block extends React.Component<IBlockProps> {
    render() {
        const { color, text } = this.props;
        const style = { backgroundColor: color, width: '50px', height: '50px' };
        return (
            <div style={style}>
                {text}
            </div>
        );

    }
}