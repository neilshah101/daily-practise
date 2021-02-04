user_input = input("enter a word to check palindrome: ")
length_word = len(user_input)
print (f"{length_word}  {user_input} ")


word =""
for i in range(0,length_word):
    word += user_input[i]

print (word)

rev_word =""
for r in range(length_word - 1, -1, -1):
   rev_word += user_input[r]

print(rev_word)

if word == rev_word:
    print ("true")

else:
    print ("false")