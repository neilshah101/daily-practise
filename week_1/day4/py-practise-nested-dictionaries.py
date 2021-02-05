# Create a dictionary with
#  your first name, last name and 
#  list of addresses (2 addresses is fine) - 
#  nested dictionary 


#creat items for the list
first_name = "neil"
last_name = "shah"

#creat items for the list
home_add = {"street": "1200 Richmond Ave", "city": "Houston"}
home_add2 = {"street": "100 Rich Blvd", "city": "Houston"}

#place it in a list
address = [home_add , home_add2]
user = {"first name": first_name , "lastname" : last_name , "address" : address}


#print it
print (user)