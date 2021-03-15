
#cars = [{"make": "Honda"}, {"make": "Toyota"}]
#car = cars[0] # dictionary 
#car["make"] = "TESLA"
#print(cars)

# OPTION 1 
#import pizza # pizza.create_pizza(12, ["Onions", "Mushrooms", "Chicken"])
#import american_pizza 

# OPTION 2 - Importing the create_pizza and deliver_pizza functions. You can call them without using the pizza prefix
#from pizza import create_pizza, deliver_pizza

# OPTION 3 
import pizza as p # p.create_pizza(15, ["Onions", "Mushrooms", "Chicken"])
import american_pizza as ap # ap.create_pizza(?,?)

# OPTION 4 
from pizza import * # import everthing from pizza module (file) call create_pizza(?,?) 

import utils 

print("Enter 1 to create pizza: ")
print("Enter 2 to add delivery address: ")
print("Enter q to quit: ")

create_pizza(16, ["Onions", "Mushrooms", "Chicken"])
deliver_pizza("1200 Richmond Ave Houston, TX")

utils.is_palindrome("cat")
utils.is_even(2)
utils.is_prime(3)

#american_pizza.create_pizza(14, ["Onions"])


