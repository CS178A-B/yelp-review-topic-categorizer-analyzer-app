# partial code snippets derived from Kan Nishida, errors corrected

library(jsonlite)
library(tibble)
library(stringr)
library(tidyr)

library("dplyr") 
library("magrittr")

yelp <- fromJSON("yelp_academic_dataset_business.json")

yelp <- stream_in(file("yelp_academic_dataset_business.json"))   # need file to create connection for disk access

# str(yelp)

yelp_flat <- flatten(yelp)  # separate values to smallest whole (removes on hierarchy level)
#str(yelp_flat)

yelp_tibble <- as_data_frame(yelp_flat)   # as_df: don't have to call 'head' function separately
# str(yelp_tibble)


# strip individual attributes for 'categories'
# mutate creates new variable from dataset, vector of individual elements
yelp_tibble %>% mutate(categories = as.character(categories)) %>% select(categories) %>% unnest(yelp_tibble)

# delete unnecessary column
# use regex to find how many json objects are restaurants
temp_df <- yelp_tibble %>% select(-starts_with("hours"), -starts_with("attribute"), -starts_with("is_open"), -starts_with("review_count") ) %>% 
    filter(str_detect(categories, "(Restaurants)")) 

categories <- temp_df %>% mutate(categories = as.character(categories)) %>% select(categories) %>%
  mutate(categories1 = stringr::str_split(categories, ",")) %>% unnest(categories1) %>% select(categories1)

# unique list of categories, can use this for regex keywords during search
categories <- categories[!duplicated(categories$categories1),]

yelp_tibble %>% select(-starts_with("hours"), -starts_with("attribute"), -starts_with("is_open"), -starts_with("review_count") ) %>% 
  filter(str_detect(categories, "(Restaurants)")) %>% unnest(categories) %>% select(name, categories) %>%
  count(categories)
# unnest makes each element of list its own row


# Estimate memory size, note that MongoDB cluster is limited
print(object.size(temp_df), units="auto", standard = "SI")







