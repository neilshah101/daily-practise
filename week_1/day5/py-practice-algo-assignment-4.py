def fibonaci_numbers(n): 
    fn =[0,1,1]  
    if  n< 0:
        print("invalid input")
    elif n == 0 :
        print("0") 
    elif  n ==1 or n==2 :
        print("1")
    else:
        fn =[0,1,1]
        
        for i in range (3,n):
           i = fn[i-1] + fn[i-2]
           fn.append(i)  
           print(fn)

print (fibonaci_numbers(30))

def mult_seven():
    for k in fibonaci_numbers():
        mult_seven=[]
        if k%7 == 0:
            mult_seven.append[k]
            print(mult_seven)
    return

print (mult_seven())










# for k , v in range(0,len(fobonaci_numbers(n))):
#      for v in range(0,len(fobonaci_numbers(n))):
#          if v%7==0  :
#               mult_seven=[]
#               mult_seven.append[v]
#               print(mult_seven)





# for i in range(0,):

#     if i is n%7==0  :
#       mult_seven=[]
#       mult_seven.append[i]
#       print(mult_seven)

        