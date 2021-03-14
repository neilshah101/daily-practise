#week1
#day 3
#assignment 2
#prime or not

user_input =int(input("enter the no to check if it is aprime of not : "))

if user_input == 2 :
    print(f"THE INPUT NUMBER' IS  A PRIME NUMBER")

for i in range(2, user_input):
    if user_input % i == 0:
        print (f"THE INPUT NUMBER IS NOT>>>> A PRIME NUMBER")
        break
    
    else:
        print (f"THE INPUT NUMBER'{user_input}' IS  A PRIME NUMBER")
        break
