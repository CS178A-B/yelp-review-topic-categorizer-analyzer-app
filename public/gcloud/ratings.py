import itertools

class review:
    def __init__(self, ambience, service, food, other):
        self.ambience = ambience
        self.service = service
        self.food = food
        self.other = other
        
class food_category:
    def __init__(self, ratings_list):
        self.ratings_list = ratings_list
    
    def avg():
        total = 0
        for rating in ratings_list:
            total += rating
        
        return total / len(ratings_list)
    
class ambience(food_category):
    pass

class food(food_category):
    pass

class service(food_category):
    pass

def getStar(sentiment_score):
    if (sentiment_score < -0.7 and sentiment_score > -0.99): # 1 star
        return 1
    elif sentiment_score > -0.7 and sentiment_score <= -0.5: # 1.5 star
        return 1.5
    elif sentiment_score > -0.5 and sentiment_score <= -0.3: # 2 star
        return 2
    elif sentiment_score > -0.3 and sentiment_score <= -0.1: # 2.5 star
        return 2.5
    elif sentiment_score > -0.1 and sentiment_score < 0.1: # 3 star
        return 3
    elif sentiment_score >= 0.1 and sentiment_score < 0.3: # 3.5 star
        return 3.5
    elif sentiment_score >= 0.3 and sentiment_score < 0.5: # 4 star
        return 4
    elif sentiment_score >= 0.5 and sentiment_score < 0.7: # 4.5 star
        return 4.5
    elif sentiment_score >= 0.7 and sentiment_score < 0.99: # 5 star
        return 5
    elif sentiment_score == -10:
        return 0
    
def getRating(scores, categories):
    length = 0
    
    if len(scores) == len(categories):
        length = len(scores)
        
    service = []
    ambience = []
    food = []
    other = []
    
    for (score, category) in zip(scores, categories):
        print(score)
        if (category == "food"):
            food.append(score)
            print("food")
        elif (category == "ambience"):
            ambience.append(score)
            print("ambience")
        elif (category == "service"):
            service.append(score)
            print("service")
        elif (category == "other"):    # not sure what to do with this yet
            other.append(score)
            print("other")
            
            
    # Create service, ambience, food, other
    ambience_avg = -10 # special value
    service_avg = -10
    food_avg = -10
    other_avg = -10
    
    total = 0
    if (len(ambience) != 0):
        for rating in ambience:
                total += rating
        ambience_avg = total / len(ambience)
    
    total = 0
    if (len(service) != 0):
        for rating in service:
                total += rating
        service_avg = total / len(service)
    
    total = 0
    if (len(food) != 0):
        for rating in food:
                total += rating
        food_avg = total / len(food)
    
    total = 0
    if (len(other) != 0):
        for rating in other:
                total += rating
        other_avg = total / len(other)
        
    if food_avg != -10 and service_avg != -10 and ambience_avg != -10:
        other_avg = 1
    else:
        other_avg = 0
            
    review_with_score = review(getStar(ambience_avg), getStar(service_avg), getStar(food_avg), other_avg)
    review_scores.append(review_with_score)
    
    # print(review_with_score.ambience)
    # print(review_with_score.service)
    # print(review_with_score.food)
    # print(review_with_score.other)
    
    
    return review_with_score
    
    
