import requests
from .Block import Block

def mine(problem_uri, solve_uri):
    response = requests.get(problem_uri)
    data = response.json()
    nonce = 0
    if data['block']['nonce'] is not None:
        nonce = data['block']['nonce']
    block = Block(data['block']['data'], data['difficulty'], nonce)
    difficulty = data['difficulty']
    for n in range(0, 1000000):
        result = block.solve()
        if "1" not in result[:difficulty]:
            resp = requests.post(solve_uri, json = {
                'nonce': block.nonce
            })

            print(resp.status_code)
            print(resp.content)

            print(result)
            print(block.nonce)
            break
