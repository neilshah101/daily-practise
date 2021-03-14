# activity 2
# week 1 
# day 2  
#tip_calculator
 


decoration = "*************************************************"
hotel_name = str .upper("hotel abc") 
welcome_message = str .upper("welcome to") 

print (decoration)
print (f"{welcome_message}  {hotel_name}")
print ("*************************************************")

check_total = float(input("ENTER THE CHECK AMOUNT: "))
desired_tip = float(input("ENTER THE TIP PERCENTAGE: "))

tip_calculation = float (check_total * desired_tip / 100)
tip_greetings  = str .upper(", thanks for your  appericiation;")
print (f"YOU TIP AMOUNT IS {tip_calculation} AND BILL AMOUNT IS {check_total} {tip_greetings}")

total_check = float(check_total+ desired_tip)
print (f"YOUR TOTAL CHECK AMOUNT IS: {total_check} ")

