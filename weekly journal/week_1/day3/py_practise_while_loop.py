
#week1
#day 3
#activity 4
#while loops



# # In this activity, you are going to enter your friend's name using the `input` function continuously inside a while loop. The while loop will end when the user enter "q" (without quotes) to quit.

# Also make sure to add your friend's name to an array and print the array after right after the end of while loop. 

# ```
# while(some condition): 
#     code ...
#     code ...

# print(friends) # friends is an array 
# ```


# In this activity, you are going to enter your friend's name using the `input` function continuously inside a while loop.
#  The while loop will end when the user enter "q" (without quotes) to quit.


friends =[]

while True:
    frineds_list = input("enter the name of a friend or press q to quit: ")
    if frineds_list == "q":
        break
    else:
        friends.append(frineds_list)
print (friends)