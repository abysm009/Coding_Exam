For the first task Checking if 2 Characters are in same case
    1. First I created a function 'checkCase()' to check whether a given character is on Lower or Upper casing.
    2. Then I also created a function 'isLetter()' to check whether the character is a letter using regex test.
    3. Lastly I created a function which will compare the given characters.
        a. First, it will use the fuction 'isLetter()' to check if a character is letter.
            If either of the characters is not a letter, it will return -1

        b. If both characters are letter, it will use the function 'checkCase()' to check the casing of a character.
            If both characters are the same case, it will return 1
            If both characters are letters, but not the same case, it will return 0
    
    Thoughts
        The 'checkCase()' and 'isLetter()' function can actually be just removed, and inside the 'sameCase()' function 
        we can just add the codes use to validate a character on both checkCase() and isLetter() functions.

        But they can be a function on their own that's why I separated them on their own function, so if ever I have to
        add more functionality I can just export them and use them to other parts to minimize code redundancy and also
        maximize code reusability.

For the next task the String Cleaner
    1. I just created a function 'stringCleaner()' to just simply regex test if a string contains numerical values
    and just replace them with nothing.