
# EVEN ODD 

# is the number even or odd 

# Process of improving your existing code is called Refactoring 
# == is a comparision operator 

def is_even(number): 
    return number % 2 == 0 # returns either True or False 
    
    #return 1 == 1 # True 
    #return 1 == 2 # False 

   # if number % 2 == 0: 
    #    return True 

    #return False 

number = int(input("Please input a number:"))

result = is_even(number)
if result == True: 
    print("EVEN")
else: 
    print("ODD")

#if number % 2 == 0:
#    print("EVEN")
#else: 
#    print("ODD")

# GAME 

direction = "UP"

if direction == "UP": 
    print("Move the Player UP")
elif direction == "DOWN": 
    print("DOWN")
elif direction == "LEFT": 
    print("LEFT")
else: 
    print("RIGHT")








