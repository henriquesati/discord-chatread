import subprocess
import pyautogui

# Conteúdo da variável string
string = "Hello, world!"

# Abrir o console Python
process = subprocess.Popen(
    ["python"],
    stdin=subprocess.PIPE,
    stdout=subprocess.PIPE,
    stderr=subprocess.PIPE,
    text=True
)

# Esperar um momento para o console ser aberto
# Este tempo pode variar dependendo da velocidade do seu sistema
pyautogui.sleep(1)

# Selecionar a primeira linha e escrever a string
pyautogui.hotkey("shift", "home")  # Seleciona a linha
pyautogui.write(string)  # Escreve a string

# Pressionar Enter para executar o comando
pyautogui.press("enter")

# Esperar um momento para a execução do comando
pyautogui.sleep(1)

# Capturar a saída do console
resultado = process.stdout.read().strip()

# Fechar o console Python
process.stdin.write("exit()\n")
process.stdin.close()
process.wait()

# Imprimir o resultado
print("Resultado obtido:", resultado)
