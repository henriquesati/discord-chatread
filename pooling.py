import subprocess
import platform
import time

comando = ""
if platform.system() == "Windows":
    comando = "bash"
elif platform.system() == "Linux" or platform.system() == "Darwin":  # Para sistemas baseados em Unix como Linux e macOS
    comando = "x-terminal-emulator"

subprocess.Popen(comando, shell=True)
entrada = "echo 'Olá, Console!'"
time.sleep(5)
print("Novo console aberto!")
