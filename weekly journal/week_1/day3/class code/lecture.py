
# ARRAYS AND LOOPS 

# array variable name should be plural 
numbers = [1,3,4,5,6,7,8,9,10,33,22]

# arrays/lists are named using plural 
friends = ["Alex", "Steve", "John", "Harry", "Jack", "Mary", "Jerry", "George", "Bryan"]

print(friends[0]) # Alex
print(friends[1])
print(friends[2])
print(friends[4])   

#friends[2] # John 

#friends[8] # Error Index out of range error 

# FOR LOOP 
#for index in range(0,10,1): # range(start, end (runs till end - 1), how to increment and default is 1)
#    print(index)

# ACTIVITY 1 

print(len(friends)) 

print("ACTIVITY 1")
for index in range(0,len(friends)): 
    print(index)
    print(friends[index])

print("ForEach Loop")
# for each 
for friend in friends: 
    print(friend)

# range(start, end, how it increment/decrements)

# ACTIVITY 2 REVERSE ARRAY 
print("ACTIVITY 2")

#print(len(numbers)) 
# numbers = [1,3,4,5,6,7,8,9,10,33,22]

# len(numbers) = 11

for index in range(len(numbers) - 1,-1, -1):
    print(numbers[index])


# APPEND/ADD TO AN ARRAY 

animals = []

animals.append("cat")
animals.append("dog")
animals.append("zebra")

# INSERT ITEM AT A SPECIFIC POSITION 
animals.insert(0, "lion")

# REMOVE ITEM FROM AN ARRAY 
animals.remove("cat")
animals.remove("dog")

# REMOVE ITEM BASED ON AN INDEX 
#del animals[2]
del animals[0]

# WHILE LOOP 

# while loop runs until the condition is false 
#while condition: 
#    print("this is the body of the while loop")


#health = 100
#while health > 0: 
#    print("continue the game")

counter = 0 
while counter < 10: 
    print("HELLO!")
    counter = 11

while True: 
    name = input("Enter name or press q to quit: ")
    if name == "q": 
        break # break out of the loop 






















