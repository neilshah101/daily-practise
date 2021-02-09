import unittest
from calculator_for_unit_test_activity1 import Calculator

class CalculaterTests(unittest.TestCase):
    
    def test_addition_function(self):
        calculator = Calculator()
        result  = calculator.add(1,2)
        self.assertEqual(3,result)
    

    def test_substraction_function(self):
        calculator = Calculator()
        result  = calculator.sub(5,3)
        self.assertEqual(2,result)

    def test_multiply_function(self):
        calculator = Calculator()
        result  = calculator.multi(1,2)
        self.assertEqual(2,result)

    def test_devision_function(self):
        calculator = Calculator()
        result  = calculator.div(6,3)
        self.assertEqual(2,result)

unittest.main()