import random
import string
url_length = 10


def generateRandomURL():
    letters = string.ascii_letters
    digits = string.digits
    return ''.join(random.sample(letters + digits, url_length))
