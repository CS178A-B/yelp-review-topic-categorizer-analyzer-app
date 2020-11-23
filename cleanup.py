import json

f = open('reviews.json')

with open('reviews.json') as f:
    data = json.load(f)



for data in data:
    print(data['text'])

f.close()
