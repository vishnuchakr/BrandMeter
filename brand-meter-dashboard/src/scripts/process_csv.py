import csv

countries_dict = {}
with open('starbucks_1.csv', newline='') as csvfile:
    csv_reader = csv.DictReader(csvfile)
    
    for row in csv_reader:
        if (row['country'].split('|')[0] not in countries_dict):
            countries_dict[row['country'].split('|')[0]] = [0, []]
            countries_dict[row['country'].split('|')[0]][0] = 1
        else:
            countries_dict[row['country'].split('|')[0]][0] += 1
            countries_dict[row['country'].split('|')[0]][1].append(row['url'])



with open('processed_countries_url.csv', 'w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(["country", "num_mentions", "url"])
    for item in countries_dict:
        writer.writerow([item, countries_dict[item][0], countries_dict[item][1]])



