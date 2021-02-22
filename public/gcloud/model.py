from nlp import *
from automl import *
from ratings import *
import csv
# import nltk.data
import pandas as pd
from sentence import split_sentences
# from write_data import write_data_to_csv


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

    firstLine = True # skip first 
    for row in csv_reader:
        if firstLine:
            firstLine = False
            continue
        # print (row[4])
        temp_sentence_list = split_sentences(row[4]) # column 4 = where the review is
        print(temp_sentence_list)
        
        scores = []
        categories = []
        
        for sentence in temp_sentence_list:
            print(sentence)
            sentiment_score = analyze_sentiment(sentence)
            category = automl_predict(sentence)
            
            categories.append(category)
            scores.append(sentiment_score)
            
        getRating(scores, categories)
            
        # for (score, category) in zip(scores, categories):
        #     print(score)
        #     print(category)
            
        # getRating(scores, categories)

                
        exit(0)    # for testing purposes
        line_count += 1

        # split sentence

        
