from nltk.tokenize import sent_tokenize, word_tokenize

def split_sentences(data):

    phrases = sent_tokenize(data)
    # words = word_tokenize(data)

    return phrases
