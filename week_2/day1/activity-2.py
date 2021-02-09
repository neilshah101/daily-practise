class BankAccount:
    def __init__(self , balance , account_number):
        self.balance = balance
        self.account_number = account_number
        
    
    def deposit(self,amount):
        self.balance = self.balance + amount 
    
    def withdraw(self , amount):
        self.balance -= amount 
    
    def transfer_funds(self , amount , destination):
        self.withdraw(amount)
        destination.deposit(amount)

checking_account =BankAccount(100 , "fd332")
print (checking_account.balance)
checking_account.deposit(50)
print(checking_account.balance)
checking_account.deposit(100)
print(checking_account.balance)
savings_account = BankAccount(1000 , "020343")
print (savings_account.balance)
print (savings_account.account_number)
savings_account.withdraw(300)
print (savings_account.balance)
savings_account.transfer_funds(200 , checking_account)
print (savings_account.balance)
print (checking_account.balance)
