import json
from datetime import datetime 


pool_tables = []
json_tables = []

# creating a pooltable class
class PoolTable:
    def __init__(self, table_number):
        self.table_number = table_number
        self.is_occupied = False
        self.start_time = None
        self.end_time = None
    
    def check_out(self):
        self.is_occupied = True
        self.start_time = datetime.now().strftime("%m-%d-%y  %H:%M")
        self.a = datetime.now()
    def check_in(self):
        self.is_occupied = False
        self.end_time = datetime.now().strftime("%m-%d-%y  %H:%M")
        self.b = datetime.now()

    def time_played(self):
        if self.start_time == None:
            return 
        elif self.end_time == None:
            return 
        else:
            return self.b - self.a 


# creating the tables       
for index in range(1,13):
    pool_table = PoolTable(index)
    pool_tables.append(pool_table)


# displaying the menu
def display_menu():
    print ("********************************")
    print("""
      welcome to the pool zone::::    
      1.DISPLAY ALL TABLES
      2.CHECKOUT ALL TABLES
      3.CHECK IN A TABLE 
      """)
    print ("********************************")
    print ('\n')


# displaying the pool tables
def display_tables():
    for index in range(0,len(pool_tables)):
      pool_table = pool_tables[index]
      print (f"table number: {pool_table.table_number} --- occupied status : {pool_table.is_occupied} --- checkout time is: {pool_table.start_time} --- checkin time is: {pool_table.end_time} --- TOTALTIME PLAYED : {pool_table.time_played()}")

while True:
    display_menu()
    choice = input("WHAT WOULD YOU LIKE TO DO: ")
    if choice == "1":
        display_tables()


    elif choice == "2":
        display_tables()
        print ("\n")
        table_checkout_index = int(input("ENTER TABLE NO. TO CHECK-OUT: "))
        table = pool_tables[table_checkout_index - 1]
        table.check_out()

    elif choice == "3":
        display_tables()
        print ("\n")
        table_checkin_index = int(input("ENTER TABLE NO. TO CHECK-IN: "))
        table = pool_tables[table_checkin_index - 1]
        table.check_in()        
        with open(f"{datetime.now().strftime('%m-%d-%y')}.json", "w") as file_object:
          pool_table = {"table number": pool_table.table_number,  "checkout time is" : pool_table.start_time, "checkin time is" :pool_table.end_time, "TOTALTIME PLAYED" : pool_table.time_played() }
          json_tables.append(pool_table)
          json.dump(json_tables, file_object)
    
    elif choice == "q":
        break
    
    else:
        print("\n")
        print ("************select the correct option************")
        print ("\n")
        
    
        














# from datetime import datetime 


# pool_tables = []


# # creating a pooltable class
# class PoolTable:
#     def __init__(self, table_number):
#         self.table_number = table_number
#         self.is_occupied = False
#         self.start_time = None
#         self.end_time = None
    
#     def check_out(self):
#         self.is_occupied = True
#         self.start_time = datetime.now()
    
#     def check_in(self):
#         self.is_occupied = False
#         self.end_time = datetime.now()

# # creating the tables       
# for index in range(1,13):
#     pool_table = PoolTable(index)
#     pool_tables.append(pool_table)


# # displaying the menu
# def display_menu():
#     print ("********************************")
#     print("""
#       welcome to the pool zone::::    
#       1.Display all tables
#       2.checkout a table 
#       3.check-in a table 
#       """)
#     print ("********************************")
#     print ('\n')


# # displaying the pool tables
# def display_tables():
#     for index in range(0,len(pool_tables)):
#       pool_table = pool_tables[index]
#       print (f"table number: {pool_table.table_number} --- occupied status : {pool_table.is_occupied} --- checkout time is: {pool_table.start_time} --- checkin time is: {pool_table.end_time}")

# while True:
#     display_menu()
#     choice = int(input("what would you like to do: "))
#     if choice == 1:
#         display_tables()
#     elif choice == 2:
#         display_tables()
#         print ("\n")
#         table_checkout_index = int(input("enter the table to checkout: "))
#         table = pool_tables[table_checkout_index - 1]
#         table.check_out()
#     elif choice == 3:
#         display_tables()
#         print ("\n")
#         table_checkin_index = int(input("enter the table to checkin: "))
#         table = pool_tables[table_checkin_index - 1]
#         table.check_in()

































# total_tables = 12
# pool_tables =[]



# #ASSIGNING A CLASS POOLTABLE
# class Pooltable:
#     def  __init__(self,table_number):
#         self.table_number = table_number
#         self.is_occupied = False 
#         self.start_time = None 
#         self.end_time = None 
    
    
  
# #ASSIGINING ALL POOL TABLE NO
# def pool_tables_no():
#     for table_number in range(0,total_tables):
#         pool_table = Pooltable(table_number)
#         pool_tables.append(pool_table)
#         # print (f" pool table {table_number +1}")
#     return


# # SHOWING ALL POOL TABLES
# def display_all_tables():
#    pool_tables_no()
#    for index in range(0,len(pool_tables)):
#        pool_table =pool_tables[index]
#        print(f"pool table no : {pool_table.table_number+1}")
    

# display_all_tables()
                














































