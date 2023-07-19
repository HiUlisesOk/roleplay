import React from 'react';
import parser, { Tag } from 'bbcode-to-react';

class ColorTag extends Tag {
    toReact() {
        const color = this.params.color;
        const style = { color };
        return (
            <span style={style}>{this.getComponents()}</span>
        );
    }
}
class SizeTag extends Tag {
    toReact() {
        const size = this.params.size;
        const style = { fontSize: size };
        return (
            <span style={style}>{this.getComponents()}</span>
        );
    }
}

parser.registerTag('color', ColorTag);
parser.registerTag('size', SizeTag);

const RenderBBcode = ({ content }) => {
    return (
        <p>{parser.toReact(content)}</p>
    );
};

export default RenderBBcode;