import pyperclip

# def capture_and_save_clipboard_content(file_path):
#     # Captura o conteúdo da área de transferência
#     clipboard_content = pyperclip.paste()

#     # Cria um arquivo de texto e escreve o conteúdo da área de transferência nele
#     with open(file_path, 'w', encoding='utf-8') as file:
#         file.write(clipboard_content)

#     print(f'Conteúdo do Ctrl+V salvo no arquivo "{file_path}".')

# # Nome do arquivo de texto onde o conteúdo do Ctrl+V será salvo
# nome_arquivo = 'conteudo.txt'

# # Chama a função para capturar e salvar o conteúdo do Ctrl+V no arquivo
# capture_and_save_clipboard_content('pat.txt')


x = pyperclip.paste()
print(x)
