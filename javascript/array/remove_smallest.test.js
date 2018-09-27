function removeSmallest2(numbers) {
  if (!numbers) return numbers;
  let i = 0, v = numbers[i];
  numbers.forEach((item, index) => {
    if (item < v) {
      i = index;
      v = item;
    }
  });
  return numbers.filter((v, ind) => ind !== i);
}

function removeSmallest(numbers) {
  let min = Math.min(...numbers),
      i = numbers.indexOf(min);
  return numbers.slice(0, i).concat(numbers.slice(i+1));
}

expect(removeSmallest([1, 2, 3, 4, 5])).toEqual([2, 3, 4, 5]);
expect(removeSmallest([5, 3, 2, 1, 4])).toEqual([5, 3, 2, 4]);
expect(removeSmallest([2, 2, 1, 2, 1])).toEqual([2, 2, 2, 1]);
expect(removeSmallest([])).toEqual([]);
test('Test completed', () => {});
