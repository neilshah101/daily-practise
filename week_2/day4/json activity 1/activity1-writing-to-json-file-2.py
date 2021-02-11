import json 

users = [] 

while True: 
    name = input("Enter name: ")
    age = int(input("Enter age: "))

    # write name and age to a JSON doc 
    with open("users.json", "w") as file_object: 
        user = {"name": name, "age": age}
        users.append(user)
        json.dump(users, file_object)

    choice = input("Press q to quit or any key to continue: ")
    if choice == "q": 
        break 





# import json
# user = []
# while True: 
#   user_choice = input("enetr the chice 1 to enter data q to quit: ")
    
#   if user_choice == "1":
#       name = input("enter the name : ")
#       age = input("enter the age: ")
#       with open("user.json" ,"a") as file_object:
#           data= {"name" : name , "age" : age}
#           user.append(data)
#           json.dump(user,file_object)
    
#   else:
#         break


