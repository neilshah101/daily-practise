print("**********")
print("activity 3")
print("**********")

word = str(input("enter the word to reverse: "))
# rev_string = []
length_word = len(word)
print (f"{word} , lengthof a word= {length_word}")



# for index in range(0,length_word):
#     print (word[index])


rev_word =""
for r in range(len(word) - 1 , -1, -1):
    rev_word +=  word[r]


print (rev_word)

# while length_word > 0:
#     rev_string += word[length_word - 1]
#     length_word =length_word - 1
# for i in word:
#     print (i)
 

#for i in rev_string:
#    print(i)


# For loop 
# reversed_word = ""
# for index in range(len(word) - 1, -1, -1): 
#     print(f"{reversed_word} + {word[index]}" )
#     reversed_word = reversed_word + word[index]

# print(reversed_word)

