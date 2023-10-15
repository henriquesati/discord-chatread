import threading
from queue import Queue
import time

def worker(q):
    """thread worker function"""
    running = True
    while running:
        message = q.get()
        print('Worker received message: {}'.format(message))
        if message == 'KILL':
            running = False
    print('Worker completed')

if __name__ == '__main__':
    q = Queue()
    worker = threading.Thread(target=worker, args=(q,))
    worker.start()
    running = True
    while running:
        user_input = input('Input some data: ')
        q.put(user_input)
        if user_input == 'KILL':
            running = False
        time.sleep(0.5)