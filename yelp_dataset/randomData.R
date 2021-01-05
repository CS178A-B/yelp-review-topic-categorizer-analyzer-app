library(dplyr)
library(xlsx)
# pick random rows for golden dataset

samplereviews <- all_reviews_df[sample(nrow(all_reviews_df), 400),]
samplereviews <- samplereviews %>% select(text)

write.xlsx(samplereviews, "/Users/andrewchen/Downloads/goldenData.xlsx", row.names = FALSE)

