total_tables = 12
pool_tables =[]



#ASSIGNING A CLASS POOLTABLE
class Pooltable:
    def  __init__(self,table_number):
        self.table_number = table_number
        self.is_occupied = False 
        self.start_time = None 
        self.end_time = None 
    
    
  
#ASSIGINING ALL POOL TABLE NO
def pool_tables_no():
    for table_number in range(0,total_tables):
        pool_table = Pooltable(table_number)
        pool_tables.append(pool_table)
        # print (f" pool table {table_number +1}")
    return


# SHOWING ALL POOL TABLES
def display_all_tables():
   pool_tables_no()
   for index in range(0,len(pool_tables)):
       pool_table =pool_tables[index]
       print(f"pool table no : {pool_table.table_number+1}")
    
# def checkout():
#     display_all_tables()
#     table_rent =input("enter the table no. to checkout: ")


display_all_tables()
                
















































# class PoolTable: 
#     def __init__(self, table_number): 
#         self.table_number = table_number
#         self.is_occupied = False 
#         self.start_time = None 
#         self.end_time = None 
#     def checkout(self): 
#         # check if the table is available 
#         # if available then checkout out the table to the customer 
#         self.is_occupied = True 
#         self.start_time = datetime.datetime.now() 
#     def checkin(self): 
#         self.is_occupied = False 
#         self.end_time = datetime.datetime.now() 
#     def get_time_played(self): 
#         return self.end_time - self.start_time # not working code 












# def checkout(self):
#         if self.occupied == True:
#             print("")
#             input(
#                 f" !!Table {self.number} is currently occupied!! Please choose another. Hit RETURN.")
#         else:
#             self.occupied = True
#             self.start_time = datetime.now()
#             self.end_time = datetime.now()
#             self.time_played = self.end_time - self.start_time

#     def checkin(self):
#         if self.occupied == False:
#             print("")
#             input(
#                 " !!This table is currently available!! Please choose another table. Hit RETURN.")
#             return False
#         else:
#             self.occupied = False
#             self.end_time = datetime.now()
#             self.time_played = self.end_time - self.start_time
#             # self.start_time = ""
#             return True