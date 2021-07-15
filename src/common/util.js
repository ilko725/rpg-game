export default function clamp(x, fromX, toX) {
    let temporaryX = 0;
    if (x < fromX) temporaryX = fromX;
    if (x > toX) temporaryX = toX;

    return temporaryX;
}