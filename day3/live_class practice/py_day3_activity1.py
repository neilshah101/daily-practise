#activity 1
#day3 
#week1
#loops

friends = ["Alex", "Steve", "John", "Harry", "Jack", "fray", "brad", "stamp"]
numbers = [1,3,4,5,6,7,8,9,10,33,22]


print("**********")
print("activity 1")
print("**********")

for names in friends:
    print(names)


print("**********")


for friend in range (0,8):
    print (friends[friend])






print("**********")
print("activity 2")
print("**********")
print(len(numbers))
print("**********")
for index in range(len(numbers)-1,-1,-1):
    print (numbers[index])


for index in range(len(friends)-1,-1,-1):
    print (friends[index])

print("*************")



# print("**********")
# print("activity 3")
# print("**********")

# word = str(input("enter the word to reverse: "))
# rev_string=[]
# length_word = len(word)
# print (f"{word} , lengthof a word= {length_word}")
# length_rev_string = len(rev_string)

# while length_word > 0:
#     rev_string += word[length_word - 1]
#     length_word =length_word - 1
# print(rev_string)


