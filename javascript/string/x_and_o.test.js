function xo(str) {
    let a = str.replace(/x/gi, ''),
        b = str.replace(/o/gi, '');
    return a.length === b.length;
}

function xo2(str) {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
};

function xo3(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}

test('Tests', () => {
    expect(xo('xo')).toEqual(true);
    expect(xo("xxOo")).toEqual(true);
    expect(xo("xxxm")).toEqual(false);
    expect(xo("Oo")).toEqual(false);
    expect(xo("ooom")).toEqual(false);
});
