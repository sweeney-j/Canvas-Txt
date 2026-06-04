import splitText from './split-text.ts'; 

// Calculates the number of characters it will take to fill a canvas. 
export default function computeFill({ctx, text, justify, width}, totalHeight) {
    // I'm assuming this is large enough for all scenerios. 
    const text = 'A'.repeat(1000); 
    const metrics = ctx.measureText('A'); 
    const characterPerLine = splitText({ctx, text, justify, width})[1]; 
    const lineHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent; 
    return (totalHeight / lineHeight) * characterPerLine; 
); 
