from nlp import *
from automl import *
from ratings import *
import csv
import pandas as pd
from sentence import split_sentences
from write_data import *


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



with open('new_york_reviews.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    line_count = 0
    
    # create_new_columns('fake_reviews.csv')

    firstLine = True # skip first 
    
    review_scores = []
    
    for row in csv_reader:
        if firstLine:
            firstLine = False
            line_count += 1
            continue
        # print (row[4])
        temp_sentence_list = split_sentences(row[4]) # column 4 = where the review is
        # print(temp_sentence_list)

        scores = []
        categories = []
        
        

        for sentence in temp_sentence_list:
            print(sentence)
            sentiment_score = analyze_sentiment(sentence)
            category = automl_predict(sentence)

            categories.append(category)
            scores.append(sentiment_score)

        review_with_score = getRating(scores, categories)
        review_scores.append(review_with_score)
        
        print("Ambience: " + str(review_with_score.ambience))
        print("Service: " + str(review_with_score.service))
        print("Food: " + str(review_with_score.food))
        print("Score: " + str(review_with_score.other))

        # write_data_to_column(row, review_with_score, 'fake_reviews.csv')

        # for (score, category) in zip(scores, categories):
        #     print(score)
        #     print(category)

        # getRating(scores, categories)


        # exit(0)    # for testing purposes
        line_count += 1
        
    write_data_to_new_csv('new_york_reviews.csv', 'new.csv', review_scores)

        # split sentence

    
