# assignment 3
# week 1 
# day 2  
#fizz/buzz

input_message = str.upper("enter the no. to check fizzbuzz: ")
desire_no = float(input(input_message))


def fizzbuzz(desire_no):
    if desire_no%3 ==0 and desire_no%5 == 0:
     print("its a fizzbuzz number")
    
    elif desire_no%3 == 0 :
     print("its a fizz no.")

    elif desire_no%5 == 0 :
     print("its a buzz no.")


print(fizzbuzz(desire_no))