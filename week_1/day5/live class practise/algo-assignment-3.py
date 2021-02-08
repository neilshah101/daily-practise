user_input =input("enter the word or sentence to count the: ")
vowels = {"a" : 0 , "e" :0, "i":0 ,"o":0 ,"u":0}
for i in user_input:
  if i in vowels:
      vowels[i] += 1
  print (vowels)