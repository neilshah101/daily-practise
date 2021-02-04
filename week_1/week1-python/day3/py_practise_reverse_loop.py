#week1
#day 3
#activity 2
#reverse loops

# In this activity, you will learn how to run a loop in reverse order. 

# 1. Create an array and initialize it with list of numbers. 

# 2. Run a for loop in reverse order, so the last number in the array is printed first on the terminal.


decoration = "****************"

# 1. Create an array and initialize it with list of numbers. 

friends = ["Alex", "Steve", "John", "Harry", "Jack", "fray", "brad", "stamp"]
numbers = [1,3,4,5,6,7,8,9,10,33,22]

# 2. Run a for loop in reverse order, so the last number in the array is printed first on the terminal.


print (decoration)
print ("NUMBERS REVERSE LOOP")
print (decoration)


for index in range(len(numbers)-1, -1, -1):
    print (numbers[index])



print (decoration)
print ("FRIENDS REVERSE LOOP")
print (decoration)


for index in range(len(friends)-1, -1, -1):
    print (friends[index])
