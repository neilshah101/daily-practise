tasks={}

while True:
    print ("Press 1 to add task ")
    print ("Press 2 to delete task ")
    print ("Press 3 to view all task")
    print ("Press q to quit ")
    user_choice = input("enter the choice  : ")
    if user_choice == "1" or user_choice == "add task":
       name_task = input("enter the task title: ")
       task_priority = input("enter the priority: ")
       tasks[name_task] = task_priority
       print(tasks)
       print("************************")
    elif user_choice == "3" or user_choice == "view all task":
        for k , v in tasks.items():
         print(f"- {k} - {v} ")
            
    elif user_choice =="2" or user_choice == "delete task":
        del_task = input("name of a task to delete: ")
        del tasks[del_task]
    
    elif user_choice =="q" or user_choice == "quit":
        break
