def find_outlier(integers):
    odd = []
    even = []
    for el in integers:
        if (el%2 == 1):
            odd.append(el)
        else:
            even.append(el)
        if (len(odd) + len(even) > 2 and len(odd) >=1 and len(even) >= 1):
            return odd[0] if len(odd) < len(even) else even[0]
    return None

print(find_outlier([2, 4, 6, 8, 10, 3]))
print(find_outlier([2, 4, 0, 100, 4, 11, 2602, 36]))
print(find_outlier([160, 3, 1719, 19, 11, 13, -21]))
