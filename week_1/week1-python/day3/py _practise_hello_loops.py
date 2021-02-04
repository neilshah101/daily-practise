#week1
#day 3
#activity 1
#hello loops

# In this activity, you will learn how to loop over an array. 

# 1. Create a friends array and initialize it with names of 5-6 of your friends 
# 2. Write a for loop to loop through the friends array and display your friend name on the terminal

decoration = "****************"

# 1. Create a friends array and initialize it with names of 5-6 of your friends 

friends = ["Alex", "Steve", "John", "Harry", "Jack", "fray", "brad", "stamp"]
numbers = [1,3,4,5,6,7,8,9,10,33,22]


print (decoration)
print ("friend's list")
print (decoration)
# 2. Write a for loop to loop through the friends array and display your friend name on the terminal

for index in range (0,len(friends)):
    print (friends[index])
