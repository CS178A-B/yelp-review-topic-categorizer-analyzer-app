# import nlp
from automl import *
import csv
# import nltk.data
import pandas as pd
from sentence import split_sentences


class review:
    def __init__(self, num, business_id, user_id, stars, text, date):
        self.num = num
        self.business_id = business_id
        self.user_id = user_id
        self.stars = stars
        self.text = text
        self.date = date
        

#with open('final.csv', mode='w') as final_file:
#    labeleddata = csv.writer(final_file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)    
        
with open('new_york_reviews_three.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    line_count = 0

    for row in csv_reader:
        # print (row[4])
        temp_sentence_list = split_sentences(row[4]) # column 4 = text review
        
        for sentence in temp_sentence_list:
            # predict(sentence)
        
        line_count += 1

        # split sentence

        
