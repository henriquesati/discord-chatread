from pynput import mouse

clique_ocorreu = False

def on_click(x, y, button, pressed):
    global clique_ocorreu
    if pressed:
        print(f'Coordenadas do Mouse: X={x}, Y={y}')
        clique_ocorreu = True

listener = mouse.Listener(on_click=on_click)
listener.start()

while not clique_ocorreu:
    pass

listener.stop()
