class User:
    def __init__ (self, first_name, last_name):
        self.first_name =  first_name
        self.last_name = last_name
        self.addresses = []

class Address:
    def __init__(self ,street , city , state , zip_code):
        self.street = street
        self.city = city
        self.state = state
        self.zip_code = zip_code

customer = User("david" ,"head")
address = Address ("123 abc blvd","montgomery", "al" , "36106")
another_address = Address("234 abc" , "greenville" , "al" , "36104")
print(address.street)
print(another_address.city)
print (customer.first_name)
print (customer.last_name)


customer.addresses .append(address)
customer.addresses .append(another_address)


print (customer.addresses)
print(f"{customer.first_name} {customer.last_name} " )
for address in customer.addresses:
    print (address.street)
    print (address.city)
    print (address.state)
    print (address.zip_code)

# for another_address in customer.addresses:
#     print(another_address.street)
#     print(another_address.city)
#     print(another_address.state)
#     print(another_address.zip_code)


     

# class Table:
#     def __init__(self , width ,height):
#         self.width = width
#         self.height = height
#         self.color =""

# table= Table("40cm", "100cm")
# table.color = "red"

# print(table.color)

# table.color="purple"

# another_table = Table("50", "300")

# print (another_table.width)



# width = []

# for a in range(0,10):
#     a += 2
#     width.append(a)
# third_table = Table(width,"60")
# print (third_table.width)
# print (third_table.height)