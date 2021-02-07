user_input =input("enter the word or sentence to count the: ")

def vowel_count(user_input):
    count=0
    vowel = set("aeiouAEIOU")
    for alphbates in user_input:
        if alphabates in vowels:
            count += 1