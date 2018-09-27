function tickets(peopleInLine){
  let cashbox = {25: 0, 50: 0, 100: 0};
  const ticketCost = 25;
  return peopleInLine.reduce((acc, bill) => {
    if ('NO' === acc) return acc;
    cashbox[bill]++;
    let reminder = bill-ticketCost;
    if (0 === reminder) return 'YES';
    if (25 === reminder && cashbox[25] > 0) {
      cashbox[25]--;
      return 'YES';
    }
    if (75 === reminder) {
      if (cashbox[50] > 0 && cashbox[25] > 0) {
        cashbox[50]--;
        cashbox[25]--;
        return 'YES';
      }
      if (cashbox[25] >= 3) {
        cashbox[25] -= 3;
        return 'YES';
      }
    }
    return 'NO';
  }, null);
}

// tickets([25,25,25,100,25,50,25,100,25,50,25,100,25,25,50,100,25,50,25,100,25,100,50]);
expect(tickets([25, 25, 50, 50])).toEqual("YES");
expect(tickets([25, 100])).toEqual( "NO");
expect(tickets([25,25,25,100,25,50,25,100,25,50,25,100,25,25,50,100,25,50,25,100,25,100,50])).toEqual( "NO");
test('Test completed', () => {});
