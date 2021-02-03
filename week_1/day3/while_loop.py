#activity 4


friends =[]
while True:
  friends_name =input("enters friend name or q to quit: ")
  if friends_name == "q":
      break
  else:
      friends.append(friends_name)


print(friends)
