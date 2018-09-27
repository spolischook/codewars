function squareDigits(num){
    let res = '';
    String(num).split('').forEach((x) => {
      res += x*x;
    });
    return Number(res);
}

function squareDigits2(num){
    let res = String(num).split('').map((x) => {return Math.pow(Number(x), 2)}).join('');
    return Number(res);
}

test('Tests', () => {
    expect(squareDigits(9119)).toEqual(811181);
    expect(squareDigits2(9119)).toEqual(811181);
});
