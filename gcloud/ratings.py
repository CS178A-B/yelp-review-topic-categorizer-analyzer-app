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
    if (sentiment_score < -0.7): # 1 star
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
    elif sentiment_score >= 0.7: # 5 star
        return 5
    
def getRating(scores, categories):
    length = 0
    
    if len(scores) == len(categories):
        print("OK")
        length = len(scores)
        
    service = []
    ambience = []
    food = []
    other = []
    
    for (score, category) in zip(scores, categories):
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
            
    
            
    
    
