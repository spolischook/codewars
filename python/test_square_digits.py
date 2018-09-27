def square_digits(num):
    res = ''
    for i in str(abs(num)):
        res += str(int(i) ** 2)
    return int(res)


def test_answer():
    assert square_digits(9119) == 811181
