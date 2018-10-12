function incrementString (s) {
  let match = s.match(/(^\D*)(\d*)$/);
  return match[1]+''+String(Number(match[2])+1).padStart(match[2].length, '0');
}

test('Tests', () => {
    expect(incrementString("foobar000")).toEqual("foobar001");
    expect(incrementString("foo")).toEqual("foo1");
    expect(incrementString("foobar001")).toEqual("foobar002");
    expect(incrementString("foobar99")).toEqual("foobar100");
    expect(incrementString("foobar099")).toEqual("foobar100");
    expect(incrementString("")).toEqual("1");
});