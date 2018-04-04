from os import environ
from .services import mine

def main():
    problem_uri = environ.get('PROBLEM_URI')
    solve_uri = environ.get('SOLVE_URI')

    assert problem_uri
    assert solve_uri

    mine(problem_uri, solve_uri)

if __name__ == "__main__":
    main()
