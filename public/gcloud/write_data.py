import csv
import pandas as pd

# WITHOUT PANDAS #

def write_data_to_new_csv(old_file, new_file, review_scores_list):
    with open(old_file, 'r') as csvinput:
        with open(new_file, 'w') as csvoutput:
            writer = csv.writer(csvoutput, lineterminator='\n')
            reader = csv.reader(csvinput)

            all = []
            row = next(reader)
            row.append('ambience')
            row.append('service')
            row.append('food')
            # row.append('other')
            all.append(row)

            review_scores_list_iterator = 0;
            for row in reader:
                row.append(review_scores_list[review_scores_list_iterator].ambience)
                row.append(review_scores_list[review_scores_list_iterator].service)
                row.append(review_scores_list[review_scores_list_iterator].food)
                # row.append(review_scores_list[review_scores_list_iterator].other)
                all.append(row)
                review_scores_list_iterator += 1

            writer.writerows(all)


# WITH PANDAS #

def create_new_columns(file):
    df = pd.read_csv(file, index_col=[0])
    df["ambience"] = ""
    df["service"] = ""
    df["food"] = ""
    # df["other"] = ""
    df.to_csv(file, quoting=csv.QUOTE_NONE)


def write_data_to_column(row, data, file):
    df = pd.read_csv(file, index_col=[0])
    df.at[row, "ambience"] = data.ambience
    df.at[row, "service"] = data.service
    df.at[row, "food"] = data.food
    # df.at[row, "other"] = data.other
    df.to_csv(file, quoting=csv.QUOTE_NONE)


# TESTING #

class review:
    def __init__(self, ambience, service, food):
        self.ambience = ambience
        self.service = service
        self.food = food
        # self.other = other


# create_new_columns('new_york_reviews_three_copy0.csv')
# write_data_to_column(1, p1, 'new_york_reviews_three_copy0.csv')
# write_data_to_column(2, p2, 'new_york_reviews_three_copy0.csv')
# write_data_to_column(3, p3, 'new_york_reviews_three_copy0.csv')


