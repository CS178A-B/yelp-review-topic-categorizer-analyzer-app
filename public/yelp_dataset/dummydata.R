# Combine new_york_restaurants with 1000 toronto_restaurants

toronto_restaurants2 <- toronto_restaurants
toronto_restaurants <- toronto_restaurants2

toronto_restaurants$ambience <- sample(x=1:5, size = nrow(toronto_restaurants), replace = TRUE)
toronto_restaurants$service <- sample(x=1:5, size = nrow(toronto_restaurants), replace = TRUE)
toronto_restaurants$food <- sample(x=1:5, size = nrow(toronto_restaurants), replace = TRUE)

toronto_restaurants <- toronto_restaurants[, c("business_id", "name", "address", "city", "state", "postal_code", "latitude", "longitude",
                                               "stars", "ambience", "service", "food", "categories", "image_url")]

combined_restaurant_reviews <- rbind(new_york_state_restaurants, toronto_restaurants)

write.csv(combined_restaurant_reviews, "combined_restaurant_reviews.csv")
