def tickets(people):
    cacheBox = {25: 0, 50: 0, 100: 0}
    ticketPrice = 25
    for bill in people:
        cacheBox[bill] += 1
        rest = bill - ticketPrice
        if 0 == rest:
            continue
        if 25 == rest and cacheBox[25] > 0:
            cacheBox[25] -= 1
            continue
        if 75 == rest:
            if cacheBox[50] > 0 and cacheBox[25] > 0:
                cacheBox[50] -= 1
                cacheBox[25] -= 1
                continue
            if cacheBox[25] >= 3:
                cacheBox[25] -= 3
                continue
        return 'NO'
    return 'YES'


def test_answer():
    assert tickets([25, 25, 50, 50]) == "YES"
    assert tickets([25, 100]) == "NO"
    assert tickets([25,25,25,100,25,50,25,100,25,50,25,100,25,25,50,100,25,50,25,100,25,100,50]) == "NO"
