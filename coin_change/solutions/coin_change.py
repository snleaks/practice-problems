import sys

def count(C, length, n):
    if n == 0:
        return 1
    elif n < 0:
        return 0
    elif length == 0 and n >= 1:
        return 0

    return count(C, length - 1, n) + count(C, length, n - C[length - 1])

coins = input('Enter coins separated by commas: ')
coins = [int(i) for i in coins.split(', ')]

n = int(input('Enter number to sum to: '))

length = len(coins)
print(count(coins, length, n))

