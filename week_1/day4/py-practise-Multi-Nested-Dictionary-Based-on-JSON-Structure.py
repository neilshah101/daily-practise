# insert data
# creat sub and sub dict for other data
# place it in main dict.
# print it

# insert data
id = int("1")
name ="Leanne Graham"
username = "Bret"
email =  "Sincere@april.biz"
phone ="1-770-736-8031 x56442"
website = "hildegard.org"
lat = "-37.3159"
lng = "81.1496"

# creat list and sub list for other data
geo = {"lat" : lat , "lng" : lng}


# insert data
street = "Kulas Light"
suite = "Apt. 556"
city = "Gwenborough"
zipcode =  "92998-3874" 

# creat list and sub list for other data
address ={"street" : street , "suite" : suite , "city" : city , "zipcode" : zipcode} 



# insert data
company_name = "Romaguera-Crona"
catchPhrase = "Multi-layered client-server neural-net"
bs = "harness real-time e-markets"

# creat list and sub list for other data
company ={"name" : company_name , "catchPhrase": catchPhrase , "bs" :bs  }

# place it in main dict.
bank_info={"id" : id , "name" : name , "username" : username , "email" : email , "address" : address , "phone" : phone , "website" : website , "company" : company}

# print it
print (bank_info)