# ## Activity - Creating a Dictionary
# Take inputs for firstname and lastname and then create a dictionary with your first and last name. Finally, print out the contents of the dictionary on the screen in the following format. 

# ## First Name Last Name
# My name is LastName, FirstName 


# taking inputs

first_name = input("enter the first name: ")
last_name  = input("enter the last name: ")


# creat dictionary

name = {"first name" : first_name , "last name" : last_name}

# print the content of dictionary

print(f"My name is {(last_name)} , {first_name}")
