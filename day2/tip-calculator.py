bill_total = int(input("enter the bill amount: "))
tip_percentage = int(input("enter the percentage: "))

def tip_calculation():
    return float(bill_total *tip_percentage/100)


total_bill = tip_calculation() + bill_total 
print (total_bill)
