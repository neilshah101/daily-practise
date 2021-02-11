import json


name = input("enter the name : ")
age = input("enter the age: ")


with open("person.json" ,"w") as file_object:
    person = {"name": name , "age" : age}
    json.dump(person,file_object)

