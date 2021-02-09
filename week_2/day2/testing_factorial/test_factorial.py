import unittest
from factorial_for_unit_test import Factorial

class FactorialTests(unittest.TestCase):
    
    
    def test_factorial(self):
        factorial = Factorial()
        results = factorial.factorial_test(5)
        self.assertEqual( 120 , results)


unittest.main()
