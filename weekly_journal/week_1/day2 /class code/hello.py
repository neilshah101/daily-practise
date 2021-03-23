# Data Types in Python 

# String - Combination of alphanumeric characters 33AAA$%^
# Int - Numbers without decimal (whole numbers) 34, 2,1 100, 986
# Float - Numbers with decimal 5.23, 3.142, 5.0 
# Bool - YES/NO, TRUE/FALSE, 1/0, ON/OFF 

# Variables 
name = "John"
age = 34 
pi = 3.142 
is_open = True # Snake casing 

# Python uses snake casing 

# JS, Swift, Java, Dart, C# uses Camel Casing 

# Don't use Python Language reserve words as your variable names

first_name = "John"
last_name = "Doe"

# Immutability - String are immutable/ They cannot be changed
#print(first_name + last_name + "22" + "aa" + "cc" + "dd" + "ff")

company = "DigitalCrafts"
cohort = "Feb 2021"

#message = "Welcome to " + company + " " + "Cohort " + cohort

message = f"Welcome to {company} and cohort is {cohort}"

print(message)

# Asking for user input 

# input function always returns you as a String datatype 
full_name = input("Please enter your full name: ")
car_make = input("Enter make of your car: ")
car_model = input("Enter model of your car: ")

print(full_name)
print(car_make)
print(car_model)



