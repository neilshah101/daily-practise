number = float(input("Enter you desired no. to check fizzbuzz:  "))
print ("you selected  " + str(number))

if number%3 == 0 and number%5 ==0:
    print ("its a fizzbuzz number")
  

elif number%5 == 0:
    print ("it's a buzz number")

elif number%3 == 0:
    print ("its a fizz number")

else:
    print("number is not fizz not buzz and not fizzbuzz")
  