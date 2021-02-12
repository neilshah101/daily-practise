import json
from datetime import *


class PoolTable:
    def __init__(self, table_number):
        self.table_number = table_number
        self.is_occupied = False
        self.start_time = None
        self.end_time = None
    
    def check_out(self):
        self.is_occupied = True
        self.start_time = datetime.now().strftime("%m-%d-%y  %H:%M")
        self.a = datetime.now()
    def check_in(self):
        self.is_occupied = False
        self.end_time = datetime.now().strftime("%m-%d-%y  %H:%M")
        self.b = datetime.now()

    def time_played(self):
        if self.start_time == None:
            return 
        elif self.end_time == None:
            return 
        else:
            return self.b - self.a 
    
    def to_dictionary(self): 
        return self.__dict__ 

class DateTimeEncoder(json.JSONEncoder):

    def default(self, obj):
        if isinstance(obj, (datetime, date, time)):
            return obj.isoformat()
        elif isinstance(obj,timedelta):
            return (datetime.min + obj).time().isoformat()

        return super(DateTimeEncoder, self).default(obj)