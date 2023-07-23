import React, { useState } from 'react';
import parser, { Tag } from 'bbcode-to-react';
import { Box, Button } from '@mui/material';

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

class SpoilerTag extends Tag {
    toReact() {
        const [show, setShow] = useState(false);
        const title = this.params.spoiler || 'spoiler';
        return (
            <Box sx={{ display: 'flex', flexDirection: 'column', border: '1px solid #1CB251', borderRadius: '5px' }}>
                <Button variant="contained" color="secondary" onClick={() => { setShow((show) => (!show)); }}>{title}</Button>
                {show && <Box sx={{ p: '1rem' }}>{this.getComponents()}</Box>}
            </Box>
        );
    }
}

parser.registerTag('color', ColorTag);
parser.registerTag('size', SizeTag);
parser.registerTag('spoiler', SpoilerTag);

const RenderBBcode = ({ content }) => {
    return (
        <div style={{
            whiteSpace: 'break-spaces',
            padding: '1rem'
        }}>{parser.toReact(content)}</div>
    );
};

export default RenderBBcode;