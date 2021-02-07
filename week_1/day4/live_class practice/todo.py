
tasks = [] 


def menu():
    print("enter 1 to add new task")
    print("enter 2 to delete task task")
    print("enter 3 to view all task")
    print("enter q to exit")

def display_all_tasks():
    for i in range(0,len(tasks)):
     task = tasks[i]
     print (f"{i+1} - {task['name']} - {task['priority']}")



while True:
    menu()
    choice = input("Enter the choice to countinue: ") 
    if choice == "1":
      name = input("Enter name of your task: ")
      priority = input("Enter priority: ")
      task = {"name": name, "priority": priority}
      tasks.append(task)
      display_all_tasks()

    elif choice =="2":
      display_all_tasks()  
      del_task = int(input("enter the no. of task to delet it: "))
      del tasks[del_task - 1]
      print ("after deletion of selected task you to do list is as follows: ")
      display_all_tasks()
            
    elif choice == "3":
        display_all_tasks()

    elif choice == "q": 
        break

    else:
        print ("********************")
        print ("not a correct option selected") 
        print ("********************")


#this was first attempt
# tasks = [] 

# while True: 

#     name = input("Enter name of your task: ")
#     priority = input("Enter priority: ")

#     task = {"name": name, "priority": priority}

#     tasks.append(task)

#     choice = input("Enter q to quit or any key to continue: ")
#     if choice == "q": 
#         break 

# print(tasks)



