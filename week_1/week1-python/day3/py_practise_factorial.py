#week1
#day 3
#assignment 1
#factorial

#Write an app which asks users for the input and then prints the factorial for that number. 

user_input = int(input("enter the no. to perform factorial: "))
if user_input<0:
    print ("it not a factorial no.")

elif user_input == 0:
    print ("1")

multi = 1
for i in range( 1, (user_input)+1 ):
    multi *= i
    print (multi) 



