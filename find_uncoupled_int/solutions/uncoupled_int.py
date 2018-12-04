import sys

def compareValues(values):
    tempValues = set(values)
    tempValues = list(tempValues)
    for v in tempValues:
        if values.count(v) == 1:
            print(v)

values = input('Enter values separated by commas: ')
values = [int(i) for i in values.split(', ')]

compareValues(values)