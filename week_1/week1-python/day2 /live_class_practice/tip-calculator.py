greetings = "WELCOME TO THE INTERNATIONAL HOTEL"
print (greetings)

bill_total = int(input("enter the bill amount: "))
tip_percentage = int(input("enter the percentage: "))
print ("YOU TOTAL FOR THE MEAL IS: " + "$" + str(bill_total) )

def tip_calculation():
    return float(bill_total *tip_percentage/100)

print ("YOUR TIP AMOUNT IS : $" + str(tip_calculation()))
total_bill = tip_calculation() + bill_total 
print ("YOUR TOTAL BILL IS: $" + str(total_bill))
