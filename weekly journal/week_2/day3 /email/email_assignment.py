with open("emails.txt") as file_object:
    lines = file_object.read()

duplicate_emails = lines.split(',')

no_duplicate_email =[]
for email in duplicate_emails:
    email = email.strip()
    if email not in no_duplicate_email:
       no_duplicate_email.append(email)
    
print(no_duplicate_email) 

with open("duplicate-free-emails.txt", "w") as file_object:
    for email in no_duplicate_email: 
        file_object.write(email)
        file_object.write("\n") 