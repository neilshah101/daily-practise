
tasks = [] 


def menu():
    print("Press 1 to add task")
    print("Press 2 to delete task")
    print("Press 3 to view all tasks")
    print("Press q to quit")

# display list of all the tasks 
def display_all_tasks():   
    print("**************ALL TASKS***********************")
    for index in range(0,len(tasks)):
        task = tasks[index]
        print(f"{index + 1} - {task['name']} - {task['priority']} priority")
    
    print("**********************************************")


menu()

while True:

    choice = input("Enter choice: ") 

    if choice == "1":
        name = input("Name the task you want to add: ")
        priority = input("Enter the priority high, medium, low: ")
    
        task = {"name": name, "priority": priority}
        tasks.append(task)
    
    elif choice == "2": 
        display_all_tasks()

        delete_task =int(input("Enter the task number you would like to delete "))
        del tasks[delete_task - 1]
        #tasks.pop(delete_task)

    elif choice == "3":
        display_all_tasks() 
    
    elif choice == "q": 
        break 


print("Thanks for using the TODO List")

#car = {"make": make, "model": model, "vin": vin, "color": color}
