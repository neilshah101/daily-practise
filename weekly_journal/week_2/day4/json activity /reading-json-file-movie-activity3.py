import json 

with open("movie.json") as file_object:
    result = json.load(file_object)

movies =result["Search"]
for movie in movies:
    print (f'{movie["Title"]} - {movie["Year"]} - {movie["imdbID"]} - {movie["Type"]}')
    # for i in movie:
    #     print (f'{i["Search"]}')
    # for movie in movies
    #   print (movie[])