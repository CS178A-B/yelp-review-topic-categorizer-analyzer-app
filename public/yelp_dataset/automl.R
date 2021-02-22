library(magrittr)
library(dplyr)

# Create empty column
ohio_golden$other <- NA

# Change all values to characters
ohio_golden$ambience <- as.character(ohio_golden$ambience)
ohio_golden$service <- as.character(ohio_golden$service)
ohio_golden$food <- as.character(ohio_golden$food)

# 1 means present, 0 NA
ohio_golden$ambience[ohio_golden$ambience == "1"] <- "ambience"
ohio_golden$ambience[ohio_golden$ambience == "0"] <- ""

ohio_golden$service <- as.character(ohio_golden$service)
ohio_golden$service[ohio_golden$service == "1"] <- "service"
ohio_golden$service[ohio_golden$service == "0"] <- ""


ohio_golden$food[ohio_golden$food == "1"] <- "food"
ohio_golden$food[ohio_golden$food == "0"] <- ""

# If no category, then assign to "other
ohio_golden$other <- ifelse(ohio_golden$ambience == "0" & ohio_golden$service == "0" & ohio_golden$food == "0",
                            "other", NA)

ohio_golden$other[is.na(ohio_golden$other)] <- ""

ohio_golden <- ohio_golden[{1:398},]

# Export to csv
write.csv(ohio_golden, "ohio_automl.csv", row.names = FALSE)