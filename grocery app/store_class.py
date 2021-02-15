

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


def menu():
    print("\n")
    print("*********  WELCOME TO NEIGHBORHOOD GROCERY  *********")
    print("\n")
    print("1. ADD STORE: ")
    print("2. ADD ITEM TO A STORE: ")
    print("3. VIEW ALL STORES AND ALL LISTS: ")
    print("4. DELETE THE STORE: ")
    print("5. DELETE THE ITEM FROM THE LIST: ")
    print("q. QUIT:")
    print("\n")
    print("******************************************************")
    print("\n")
    

