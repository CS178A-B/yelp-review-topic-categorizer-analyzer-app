index <- 0

listofdfs <- list()

repeat {
  index = index + 1
  index = 4
  
  filepath1 <- paste("reviewchunks/chunk", toString(index), sep="")
  
  complete_path <- paste(filepath1, ".json", sep="")
  
  yelp_rev_df <- stream_in(file(complete_path))
  
  chunk4 <- yelp_rev_df
  
  gc()
  
  listofdfs[[i]] <- yelp_rev_df
  
  print(object.size(yelp_rev_df), units="auto", standard = "SI")
  
  if (index == 9) {
    break
  }
}
