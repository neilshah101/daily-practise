import json 

with open("users.json") as file_object:
    users = json.load(file_object)


for user in users:
   print (f'{user["name"]} {user["age"]}')
