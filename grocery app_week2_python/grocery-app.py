from store_class import *

stores = []
json_table = []


def display_all_list_and_store():
    for store in stores: 
       print(f"{store.name} - {store.address}")
       for item in store.items: 
          item_index = 0          
          print(f"{item_index + 1} {item.name} - ${item.price}")

while True: 
    menu()
    choice = input("Enter choice: ")
    print("\n")
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
        display_all_list_and_store()
        
        
    elif choice =="4":
        for index in range(0, len(stores)): 
            store = stores[index]
            print(f"{index + 1} {store.name} - {store.address}")
        delete_store_index = int(input("choose a store you want to  delete: "))
        del stores[delete_store_index - 1]

    elif choice =="5":
        display_all_list_and_store()
        del_item = int(input("enter item name to delet: "))  #ValueError: invalid literal for int() with base 10: 'walamart'
        for store in stores:
            print(f"{store.name} - {store.address}")
            for item in store.items: 
                item_index = 0
                del store.items[del_item - 1 ]
        
    elif choice == "q" or choice == "Q": 
        break 



python3 