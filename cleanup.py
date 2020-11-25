import json

f = open('200reviews.json')

with open('200reviews.json') as f:
    data = json.load(f)

i = 1

for data in data:
    print(str(i) + ". " + data['text']).encode('utf-8')
    i = i + 1

f.close()
