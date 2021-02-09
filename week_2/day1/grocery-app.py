stores = []
class Store: 
  def __init__(self, name, address): 
    self.name = name 
    self.address = address 
    self.items = [] 

class Item:
    def __init__(self, title, price, quantity):
        self.title = title
        self.price = price
        self.quantity = quantity


def menu():
  print("Enter 1 to add a store: ")
  print("Enter 2 to add item to a store: ")
  print("Enter q to quit: ")

def display_store():
    for i in range(0,len(stores)):
        print (f'{(i)+1} - {stores[i]}')

while True: 
  menu()
  choice = input("Enter choice: ")
  if choice == "1":
     name = input("Enter store name: ")
     address = input("Enter store address: ")
     store = Store(name, address)
     stores.append(store)

  elif choice == "2":
    #   for i in stores : 
    #       print (f'{i+1} - {i.stores}')
      display_store()
      store_select = int(input("enter the no. of store  to add grocery list item: "))
      if store_select in range(0,len(store.name)):
          print ("hahahahah")
      else :
            print("nanananana")

  elif choice =="q":
       break

    



































# class Store:
#     def __init__(self , name):
#      self.name = name

# list=[]

# user_input =input("enter the store name: ")

# list.append(user_input)
# print (list)

# while True:
#     user_input = input("enter the 1 to enter stores name or q to quit: ")
#     if user_input == 1 :
#         stores_name_input = input("enter the store name to do shopping: ")
#         list.append(stores.name)
#         print (list)
#     elif user_input == "q":
#         break

# for stores in list:
#     print (stores.name)













# class Store:
#     def __init__(self):
#         self.names= []
# class Name:
#     def __init__(self, store_name):
#        self.store_name = store_name


# stores = Name(input("enter the store name: "))



# stores.name.append(stores)
# print(f" the stores in your list is {stores.name}")

