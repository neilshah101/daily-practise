class BankAccount:
    def __init__(self , balance , account_number):
        self.balance = balance
        self.account_number = account_number
        self.deposit = 0
        self.withdraw = 0
        transfer_funds = 0

    
    def deposit(self,deposit):
        self.balance += deposit 
    
    def withdraw(self , withdraw):
        self.balance -= withdraw
    
    def transfer_funds(self , transfer_funds):
        self.transfer_funds = transfer_funds

checking_account =BankAccount(100 , "fd332")
checking_account.deposit(50)
print(checking_account.balance)