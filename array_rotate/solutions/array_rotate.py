#function to left rotate array of size s by n
def rotateArray(array, s, n):
    for i in range(s):
        rotateByOne(array, n)

#function to left rotate array of size s by 1
def rotateByOne(array, n):
    tempArray = array[0]
    for i in range(n - 1):
        array[i] = array[i + 1]
    array[n - 1] = tempArray

array = [1, 2, 3, 4, 5]
rotateArray(array, 5, 3)
print(*array)