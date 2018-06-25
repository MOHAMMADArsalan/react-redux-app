function trancateString(str, limit) {
    if (str.length > limit) {
        return str = str.slice(0, limit - 3) + '...';
    }
    return str;
}

export {
    trancateString
}