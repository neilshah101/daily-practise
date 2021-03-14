# assignment 1
# week 1 
# day 2  
#even/odd checker

greeting_message = str.upper("welcome to even / odd checker")
print(greeting_message)

input_message = str.upper("input the no. to check: ")
number = float(input(input_message))

if number%2 == 0:
   print ("its even")

if number%2 != 0:
   print ("its odd")