from hashlib import sha256
from json import dumps

class Block:
    def __init__(self, data: list, difficulty: int, nonce: int):
        self.data = data
        self.difficulty = difficulty
        self.nonce = nonce

    def generate_sha(self, nonce: int = 0):
        if nonce != 0:
            self.nonce = nonce

        self.nonce += 1
        json = dumps({
            'data': self.data,
            'nonce': self.nonce
        }, separators=(",",":"))

        sha = sha256(json.encode('ascii')).hexdigest()

        return sha

    def solve(self):
        hash = self.generate_sha()
        fill = len(hash) * 4
        return (bin(int(hash, 16))[2:]).zfill(fill)

