numbers = [2,1,45,67,89,4,5,7,9,100]

def bubble_sort_ascending(alist):
    for i in range(len(alist)-1 , 0 , -1):
        for j in range(i):
            if alist[j] >alist[j+1]:
                temp = alist[j]
                alist[j] = alist[j+1]
                alist[j+1] = temp
    return alist

print (bubble_sort_ascending(numbers))



def bubble_sort_descending(alist):
    for i in range(len(alist)-1 , 0 , -1):
        for j in range(i):
            if alist[j] <alist[j+1]:
                temp = alist[j]
                alist[j] = alist[j+1]
                alist[j+1] = temp
    return alist

print (bubble_sort_descending(numbers))



























# num_len = len(numbers)

# for i in numbers(0, num_len-1):
#     if numbers[i] > numbers[i+1]:
        
        
        
        
#         # numbers[i] ,numbers[i+1] = numbers[i+1] , number[i]
#         # print (number(i))
