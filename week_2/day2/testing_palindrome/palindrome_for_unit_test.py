class Palindrome:
    def __init__(self):
        pass

    def word_staraight_check(self,word):
        word =""
        for i in range(0,len(word)):
           word += user_input[i]
        return word

    def rev_word_checker(self,rev_word):
        rev_word =""
        for r in range(len(rev_word) - 1, -1, -1):
         rev_word += user_input[r]
        return rev_word







# user_input = input("enter a word to check palindrome: ")
# length_word = len(user_input)
# print (f"{length_word}  {user_input} ")


# word =""
# for i in range(0,length_word):
#     word += user_input[i]

# print (word)

# rev_word =""
# for r in range(length_word - 1, -1, -1):
#    rev_word += user_input[r]

# print(rev_word)

# if word == rev_word:
#     print ("true")

# else:
#     print ("false")