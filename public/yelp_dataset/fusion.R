library(tidyverse)
library(httr)

res <- POST("https://api.yelp.com/oauth2/token",
            body = list(grant_type = "client_credentials",
                        client_id = client_id,
                        client_secret = client_secret))

token <- content(res)$access_token

getImageURL <- function(business_id) {
  
  yelp <- "https://api.yelp.com"
  url <- modify_url(yelp, path = c("v3", "businesses", business_id))
  res <- GET(url, add_headers('Authorization' = paste("bearer", client_secret)))
  
  results <- content(res)
  image_url <- results["image_url"]
  
  # print(typeof(unlist(image_url$image_url)))
  
  if (is.null(unlist(image_url$image_url))) {
    return("NA")
    } else {
    return(unlist(image_url$image_url)) 
  }
}
