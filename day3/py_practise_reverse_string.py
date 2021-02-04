#week1
#day 3
#activity 3
#reverse string

# In this activity, you will learn how to reverse a string. 

# 1. Ask user to input a word as a string using the `input` function 

# 2. Run a loop in reverse order and print individual character of the word on the terminal 

# 3. Inside the loop construct a reverse word and print it on the terminal 

# Example: 

# ```
# word = cat 

# reverse word = tac 
# ```


decoration = "****************"

# 1. Ask user to input a word as a string using the `input` function 

word = input("ENTER WORD TO REVERSE THE ALPHABATES: ")


# 2. Run a loop in reverse order and print individual character of the word on the terminal 

for i in range(len(word)-1, -1, -1):
    print (word[i])

# 3. Inside the loop construct a reverse word and print it on the terminal 

# Example: 

# ```
# word = cat 

# reverse word = tac 
# ```
rev = ""
for i in range(len(word)-1, -1, -1):
    rev += word[i]

print (rev)
