def order3(sentence):
    words = {}
    for word in sentence.split():
        for i in range(0, len(word)):
            if word[i].isnumeric():
                words[word] = int(word[i])
                break
    return ' '.join(sorted(words, key=words.__getitem__))


def order2(sentence):
    words = {}
    for word in sentence.split():
        for i in range(0, len(word)):
            try:
                n = int(word[i])
                words[word] = int(word[i])
                break
            except ValueError:
                continue
    return ' '.join(sorted(words, key=words.__getitem__))


def orderA(sentence):
    return " ".join(sorted(sentence.split(), key=lambda x: int(filter(str.isdigit, x))))


def orderB(words):
  return ' '.join(sorted(words.split(), key=lambda w:sorted(w)))


def test_answer():
    assert orderB("is2 Thi1s T4est 3a") == "Thi1s is2 3a T4est"
