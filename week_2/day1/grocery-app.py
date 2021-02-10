
stores = [] 

class Store:
    def __init__(self, name, address):
        self.name = name
        self.address = address
        self.items = []
    #def __repr__(self):
    #    return f"{self.name} - {self.address}"

class Item: 
    def __init__(self, name, price): 
        self.name = name 
        self.price = price 

print("1. Add Store: ")
print("2. Add Item to Store: ")
print("3. View All stores and all list: ")
print("4. Delete The Store: ")
print("4. Delete The : ")
print("q. Quit")

while True: 
    choice = input("Enter choice: ")
    if choice == "1": 
        store_name = input("Enter store name: ")
        store_address = input("Enter store address: ")
        store = Store(store_name, store_address)
        stores.append(store)

        
    elif choice == "2": 
        for index in range(0, len(stores)): 
            store = stores[index]
            print(f"{index + 1} {store.name} - {store.address}")

        store_index = int(input("Choose store to add items: "))
        store = stores[store_index - 1]
        item_name = input("Enter item name: ")
        item_price = float(input("Enter price: ")) 
        item = Item(item_name, item_price) 
        # add item to the store 
        store.items.append(item)

    
    elif choice == "3": 
        for store in stores: 
            print(f"{store.name} - {store.address}")
            for item in store.items: 
                print(f"{item.name} - ${item.price}")
        
    elif choice =="4":
        for index in range(0, len(stores)): 
            store = stores[index]
            print(f"{index + 1} {store.name} - {store.address}")
        delete_store_index = int(input("choose a store you want to  delete: "))
        del stores[delete_store_index - 1]

    elif choice =="5":
        for store in stores: 
            print(f"{store.name} - {store.address}")
            for item in store.items: 
                item_index = 0
                print(f"{item_index + 1} - {item.name} - ${item.price}")
        del_item = int(input("enter item name to delet: "))  #ValueError: invalid literal for int() with base 10: 'walamart'
        for store in stores:
            print(f"{store.name} - {store.address}")
            for item in store.items: 
                item_index = 0
                print(item[item_index + del_item])
        
    elif choice == "q": 
        break 



#Stores 
#  - 0 Store 
#       - name 
#       - address
#       - items 
#           0 - Item 
#                 - name 
#                 - price 



# stores = []
# class Store: 
#   def __init__(self, name, address): 
#     self.name = name 
#     self.address = address 
#     self.items = [] 

# class Item:
#     def __init__(self, title, price, quantity):
#         self.title = title
#         self.price = price
#         self.quantity = quantity


# def menu():
#   print("Enter 1 to add a store: ")
#   print("Enter 2 to add item to a store: ")
#   print("Enter 3 to view  store: ")
#   print("Enter q to quit: ")

# def display_store():
#     for store in stores:
#         print (f'{store.name} - {store.address}')
#         for item in store.items: 
#           print(f"{item.name} - ${item.price}")

# while True: 
#   menu()
#   choice = input("Enter choice: ")
#   if choice == "1":
#      name = input("Enter store name: ")
#      address = input("Enter store address: ")
#      store = Store(name, address)
#      stores.append(store)

#   elif choice == "3":
#       display_store()

#   elif choice =="2":
#       for index in range(0,len(stores)):
#           print(f'{index+1}  {store.name} - {store.address}')
#       store_index =int(input("choose storeto add items: "))
#       store = stores[store_index - 1]
#       item_name = input("Enter item name: ")
#       item_price = float(input("Enter price: ")) 
#       item_quantity =float(input("enter the quantity: "))
#       item = Item(item_name, item_price, item_quantity) 
#         # add item to the store 
#       store.items.append(item)

#     #   store_select = int(input("enter the no. of store  to add grocery list item: "))
#     #   if store_select in range(0,len(store.name)):




#     #   else :
#     #         print("nanananana")

#   elif choice =="q":
#        break

    































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

