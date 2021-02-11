def menu():
  print ("press 1 to enter details: ")
  



while True:
    menu()
    choice = input("enter the choice:")
    if  choice == "1":
      user_input =input("enter the name of favorite dish : ")
    
    elif choice == "q" :
        break

    with open("guest.txt" , "a") as file:
      file.write(user_input)
      file.write("\n")

with open("guest.txt") as file_object:
    lines =file_object.read()

print(lines)