library(jsonlite)
library(tibble)
library(stringr)
library(tidyr)
library(dplyr)

library("dplyr") 
library("magrittr")

# getting reviews for restaurants in ON only

# GNU COMMAND: split -l 1000000 yelp_academic_dataset_review.json 
# original chunks contain 1 million lines ~750MB each

index <- 0

df_review_list <- vector("list", 9) 


all_reviews_df <- data.frame(matrix(ncol = 9, nrow = 0))
x <- c("business_id", "user_id", "stars", "text", "date", "ambience", "service", "health", "food")
colnames(all_reviews_df) <- x

repeat {
  index = index + 1
  
  filepath1 <- paste("reviewchunks/chunk", toString(index), sep="")
  
  complete_path <- paste(filepath1, ".json", sep="")
  
  yelp_rev_df <- stream_in(file(complete_path))
  
  # deleting unnecessary columns
  yelp_rev_df <- subset (yelp_rev_df, select = -c(useful, funny, cool, review_id) )
  
  # reviews with restaurants only
  # business_id derived from cleanbus.R
  yelp_restaurantrev <- yelp_rev_df[ yelp_rev_df$business_id %in% restaurant_id$business_id, ]
  
  # print(object.size(yelp_restaurantrev), units="auto", standard = "SI")
  # reduced to ~500MB from ~750MB
  temp_ohio_reviews = merge(yelp_restaurantrev, ohio_restaurants, by="business_id")
  temp_ohio_reviews <- subset(temp_ohio_reviews, select = c(business_id, user_id, stars.x, text, date))
  
  temp_ohio_reviews$ambience <- sample(x=1:5, size = nrow(temp_ohio_reviews), replace = TRUE)
  temp_ohio_reviews$service <- sample(x=1:5, size = nrow(temp_ohio_reviews), replace = TRUE)
  temp_ohio_reviews$health <- sample(x=1:5, size = nrow(temp_ohio_reviews), replace = TRUE)
  temp_ohio_reviews$food <- sample(x=1:5, size = nrow(temp_ohio_reviews), replace = TRUE)
  names(temp_ohio_reviews)[names(temp_ohio_reviews) == "stars.x"] <- "stars"
  
  all_reviews_df <- rbind(all_reviews_df, temp_ohio_reviews)
  # df_review_list[[index]] <- temp_ohio_reviews
  
  # or export to csv
  # write.csv(yelp_restaurant,"path \\ filename.csv)
  
  print(object.size(all_reviews_df), units="auto", standard = "SI")
  gc()
  
  if (index == 9) {
    break
  }
}

write_json(all_reviews_df, "ohio_reviews.json")

# export reviews for labeling
# data.frame( yelp_restaurantrev[c(1:50), c("text") ] )



