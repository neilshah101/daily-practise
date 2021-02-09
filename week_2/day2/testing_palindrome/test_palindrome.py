import unittest
from palindrome_for_unit_test import Palindrome

class PalindromeTests(unittest.TestCase):
    def test_word_straight_checker(self):
        palindrome_test = Palindrome()
        result = palindrome_test.word_staraight_check(word)
        self.assertItemEqual( word , result)

    def test_rev_word_checker(self):
        palindrome_test = Palindrome()
        result = palindrome_test.rev_word_checker(rev_word)
        self.assertItemsEqual( rev_word , result)

unittest.main()
