library(jsonlite)
library(tibble)
library(stringr)
library(tidyr)

library("dplyr") 
library("magrittr")

# GNU COMMAND: split -l 1000000 yelp_academic_dataset_review.json 
# original chunks contain 1 million lines ~750MB each

index <- 0

df_review_list <- vector("list", 9) 

repeat {
  index = index + 1
  
  filepath1 <- paste("reviewchunks/chunk", toString(index), sep="")
  
  complete_path <- paste(filepath1, ".json", sep="")
  
  yelprev1 <- stream_in(file(complete_path))
  
  # deleting unnecessary columns
  yelprev1 <- subset (yelprev1, select = -c(useful, funny, cool, review_id) )
  
  # reviews with restaurants only
  # business_id derived from cleanbus.R
  yelp_restaurantrev <- yelprev1[ yelprev1$business_id %in% restaurant_id$business_id, ]
  
  # print(object.size(yelp_restaurantrev), units="auto", standard = "SI")
  # reduced to ~500MB from ~750MB
  
  df_review_list[[index]] <- yelp_restaurantrev
  # or export to csv
  # write.csv(yelp_restaurant,"path \\ filename.csv)
  
  if (index == 9) {
    break
  }
}



