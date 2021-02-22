import csv
from write_data import *

def round_of_rating(number):
    return round(number * 2) / 2

class review:
    def __init__(self, ambience, service, food):
        self.ambience = ambience
        self.service = service
        self.food = food

restaurant_list = []

print("hello")

with open('nyc_restaurants.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    
    for row in csv_reader:
        restaurant_list.append(row[1])
        
    print(restaurant_list)
    
    
    review_scores = []
    
for item in range(1, len(restaurant_list)):

    ambience, service, food = 0.0, 0.0, 0.0
    numambience, numservice, numfood = 0.0, 0.0, 0.0 # ignore 0 values in calculating mean

    print(restaurant_list[item])
    
    with open('categorized_reviews.csv') as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        line_count = 0

        firstLine = True # skip first 

        for row in csv_reader:
            if firstLine:
                firstLine = False
                line_count += 1
                continue

            # print(row[0])

            if (row[0] == restaurant_list[item]):

                # 5 ambience, 6 service, 7 food
                print(row[5])
                if row[5] != "0":    # ambience
                        numambience += 1
                        ambience += float(row[5])

                print(row[6])
                if row[6] != "0":    # service
                        numservice += 1
                        service += float(row[6])

                print(row[7])
                if row[7] != "0":    # service
                        numfood += 1
                        food += float(row[7])

            line_count += 1

        # end of for loop
        if numambience == 0.0:
            numambience = 1.0
        if numservice == 0.0:
            numservice = 1.0
        if numfood == 0.0:
            numfood = 1.0

        ratings = review(round_of_rating(ambience / numambience), round_of_rating(service / numservice), round_of_rating(food / numfood))
        review_scores.append(ratings)

    # for item in range(1, len(review_scores)):
    #     print(review_scores[item].ambience)
    
write_data_to_new_csv('new_york_business_collection.csv', 'new.csv', review_scores)
    
   #  exit(0)
            
        
