
first_name = "John"
last_name = "Doe"
customer_id = "123456"

#display_user() # Result in an error because the function does not exists

# Functions should be small. They should be reusable 
# Functions should ONLY DO ONE AND ONE THING ONLY
def display_user():
    print(f"*******{customer_id}********")
    print(f"My first name is {first_name} and last name is {last_name}")
    print("***********************")

print("I am not part of the display_user function")

display_user() 

print("code ...")
print("some more code ....")

display_user() 


#print("***********************")
#print(f"My first name is {first_name} and last name is {last_name}")
#print("***********************")


#name is a local variable and available only inside the function
def greet(name,age): 
    print(f"Hello {name} and my age is {age}")

greet("Mary",34) 
greet("Alex",56)
greet("John",67)

# causes an error because age is declared inside the greet function
#print(age) 

# A good function is a function with NO arguments 


def calculate_overdraft_fee(amount): 
    return amount * 0.10
    print("Not executed")

overdraft_fee = calculate_overdraft_fee(100)
if overdraft_fee > 20: 
    print("lock the account")

def add(no1, no2):
    return no1 + no2


result = add(2,3)
print(result)

# TUPLE 

def airportNameAndCode(address):
    return ("Intercontinental Airport", "IAH") # tuple 
    # lines is ignored because it is after the first return 
    return "IAH" 
    print("Ignored...")

(airport_name, airport_code) = airportNameAndCode("1200 Richmond Ave")

# Optional Arguments 
def greet_with_optional_age(name, age = 32):
    print(name)
    print(age)

greet_with_optional_age("Alex Doe", 65)

# Conditions 

user_age = 18 
citizen = "US"

if user_age >= 18 and citizen == "US":
    print("User is greater than 18")
    greet_with_optional_age("John Doe", user_age)
elif user_age < 18 and citizen == "BAN": 
    print("Do this")
else: 
    print("error..")


#else: 
#    print("User is not 18")

number = 13 

if number % 2 == 0:
    print("EVEN")
else: 
    print("ODD")
    
#elif (number % 2) != 0: 
#    print("ODD")
