def xo(s):
    s = s.lower()
    return s.count('x') == s.count('o')


def test_answer():
    assert xo('xo') == True
    assert xo("xxOo") == True
    assert xo("xxxm") == False
    assert xo("Oo") == False
    assert xo("ooom") == False
