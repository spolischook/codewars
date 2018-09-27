function longestConsec(strarr, k) {
    let
        len = strarr.length,
        res = []
    ;
    if (len === 0 || k > len || k <= 0) return "";
    for (let i = 0; i <= len-k; i++) {
        res.push(strarr.slice(i, i+k).join(""));
    }

    return res.sort((a, b) => { return a.length < b.length; }).shift();
}

expect(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)).toEqual("abigailtheta");
expect(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1)).toEqual("oocccffuucccjjjkkkjyyyeehh");
expect(longestConsec([], 3)).toEqual("");
expect(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2)).toEqual("wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck");
expect(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2)).toEqual("wlwsasphmxxowiaxujylentrklctozmymu");
expect(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2)).toEqual("");
expect(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3)).toEqual("ixoyx3452zzzzzzzzzzzz");
expect(longestConsec(["it","wkppv","ixoyx", "zzzzzzzzzzzz", "3452"], 15)).toEqual("");
expect(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0)).toEqual("");
test('Test completed', () => {});
