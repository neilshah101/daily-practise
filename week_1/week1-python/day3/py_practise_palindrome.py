#week1
#day 3
#assignment 2
#palindrome

# Create an app which detects if the input word is a palindrome or not. 

# Palindromes are strings which when read from left to right are same as right to left. Examples below: 
# ```
# mom 

# dad 

# madam 
# ```

# The following strings are NOT palindrome: 

# ```
# cat != tac 

# car != rac 

# bus = sub 
# ```

# * Hint - You can loop through a String. A String can be accessed like an array. 

# `word = "Car" -> word[1] = "a"`

user_inp = input ("Enter The Word To Perform Palindrome: ")
count_word = len(user_inp)
print (f" your input word is '{user_inp}' ,length of word  is {count_word} ")


word =""

for i in range(0,(count_word)):
    word += user_inp[i]

print (f"straight formate of the word is : {word}")

rev_word = ""

for i in range((count_word)-1, -1, -1):
    rev_word += user_inp[i]

print (f"reverse formate of the word is : {rev_word}")


if word == rev_word:
    print (f"  YES  THE GIVEN INPUT '{word}'IS PALINDROME")

else:
    print (f"  NO  THE GIVEN INPUT '{word}'IS NOT A PALINDROME")