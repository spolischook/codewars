def remove_smallest2(numbers):
    if len(numbers) == 0:
        return numbers
    v = numbers[0]
    for x in numbers:
        if x < v:
            v = x
    num2 = numbers.copy()
    num2.remove(v)
    return num2


def remove_smallest3(numbers):
    if len(numbers) == 0:
        return numbers
    res = numbers.copy()
    res.remove(min(numbers))
    return res


def remove_smallest(numbers):
    if len(numbers) == 0:
        return numbers
    i = numbers.index(min(numbers))
    return numbers[:i] + numbers[i+1:]


def test_answer():
    assert remove_smallest([1, 2, 3, 4, 5]) == [2, 3, 4, 5]
    assert remove_smallest([5, 3, 2, 1, 4]) == [5, 3, 2, 4]
    assert remove_smallest([2, 2, 1, 2, 1]) == [2, 2, 2, 1]
    assert remove_smallest([]) == []
