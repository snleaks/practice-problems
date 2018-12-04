
def returnOpposite(delim):
    if delim == ')':
        return '('
    if delim == ']':
        return '['
    if delim == '}':
        return '{'

def isBalanced(delimiters):
    prevDelims = []
    
    for delim in delimiters:
        if len(prevDelims) <= 1:
            prevDelims.append(delim)
        elif len(prevDelims) > 1:
            if delim == '(' or delim == '[' or delim == '{':
                prevDelims.append(delim)
            if delim == ')' or delim == ']' or delim == '}':
                opposite = returnOpposite(delim)
                if opposite in prevDelims and prevDelims.count(opposite) == 1:
                    prevDelims.append(delim)
                    continue
                elif prevDelims.count(opposite) > 1 and prevDelims.count(delim) != prevDelims.count(opposite):
                    return False
                else:
                    return False
    if prevDelims.count('(') != prevDelims.count(')') or prevDelims.count('[') != prevDelims.count(']') or prevDelims.count('{') != prevDelims.count('}'):
        return False
    else: 
        return True


delimiters = "([{(]]]]]]]][])}])"
print(isBalanced(delimiters))
