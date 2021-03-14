# week1
# day5
# Algorithm Exercises
# Exercise 1



# 1) Return the number of perfect squares (like 4, 16, 25, 36, etc.) 
# between two integers a and b, inclusive


number_1 = int(input("enter the first no: "))
number_2 = int(input("enter the second no: "))
def squares():
 for i in range(number_1 , number_2 + 1):
      i  = i ** 2
      print (i)
 return


print (squares ())

#if reviewed try to find the solution for the "none" prints in result 