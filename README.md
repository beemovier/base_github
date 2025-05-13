# Comandos de Terminal: Linux (Bash) vs Windows (CMD)

## 📁 Navegação e Manipulação de Arquivos

| Ação                          | **Linux (Bash)**       | **Windows (CMD)**        |
|------------------------------|------------------------|--------------------------|
| Mostrar diretório atual      | `pwd`                  | `cd`                     |
| Listar arquivos              | `ls`                   | `dir`                    |
| Mudar de diretório           | `cd pasta`             | `cd pasta`               |
| Voltar um nível              | `cd ..`                | `cd ..`                  |
| Voltar pro anterior          | `cd -`                 | **não existe no CMD**    |
| Criar diretório              | `mkdir pasta`          | `mkdir pasta`            |
| Apagar diretório vazio       | `rmdir pasta`          | `rmdir pasta`            |
| Apagar diretório e conteúdo  | `rm -r pasta`          | `rmdir /s pasta`         |
| Criar arquivo vazio          | `touch arquivo.txt`    | `type nul > arquivo.txt` |
| Mostrar conteúdo do arquivo  | `cat arquivo.txt`      | `type arquivo.txt`       |
| Editar arquivo (terminal)    | `nano arquivo.txt`     | `notepad arquivo.txt`    |
| Copiar arquivo               | `cp a.txt b.txt`       | `copy a.txt b.txt`       |
| Mover ou renomear arquivo    | `mv a.txt pasta/`      | `move a.txt pasta\`      |
| Apagar arquivo               | `rm arquivo.txt`       | `del arquivo.txt`        |

---

## ⚙️ Execução e Scripts

| Ação                              | **Linux (Bash)**        | **Windows (CMD)**           |
|----------------------------------|--------------------------|-----------------------------|
| Executar script no shell         | `./script.sh`            | `script.bat` (direto)       |
| Dar permissão de execução        | `chmod +x script.sh`     | **não necessário**          |
| Executar arquivo em pasta atual  | `./programa`             | `programa.exe`              |
| Executar com outro shell         | `bash script.sh`         | `cmd /c script.bat`         |
| Rodar comando em novo shell      | `source script.sh`       | `call script.bat`           |

---

## 🛠️ Outros Comandos Importantes

| Linux / Bash        | Descrição                           | Windows CMD Equivalente            |
|---------------------|-------------------------------------|-------------------------------------|
| `echo`              | Imprime no terminal                 | `echo`                              |
| `clear`             | Limpa a tela                        | `cls`                               |
| `history`           | Mostra histórico                    | **Não tem. Use setas ↑ ↓**         |
| `man comando`       | Manual do comando                   | **Não tem. Use `/help comando`**    |
| `which comando`     | Caminho do executável               | `where comando`                     |
| `alias`             | Atalho pra comandos                 | **Não tem no CMD, só em PowerShell**|
| `exit`              | Sai do terminal                     | `exit`                              |

---

## 🧪 Comandos Bônus Ninja

| Linux / Bash               | Descrição                              | CMD Equivalente                   |
|----------------------------|----------------------------------------|------------------------------------|
| `sleep 5`                  | Espera 5 segundos                      | `timeout /t 5 /nobreak > nul`     |
| `grep`                     | Filtra linhas com padrão               | `findstr`                         |
| `tail -n 10 arquivo.txt`   | Últimas 10 linhas                      | `more +N arquivo.txt` (gambiarra) |
| `head -n 10 arquivo.txt`   | Primeiras 10 linhas                    | `more arquivo.txt`                |
| `df -h`                    | Espaço em disco                        | `wmic logicaldisk get size,freespace,caption` |
| `top`                      | Processos em tempo real                | `tasklist` + `taskkill`           |

---

## ⚠️ Observações Importantes:
- **CMD** não tem tantas funcionalidades avançadas como o **Bash**, como redirecionamento de fluxos, piping e uso de expressões regulares.
- Para funcionalidades mais poderosas no Windows, use o **PowerShell**, que oferece mais flexibilidade e recursos, como variáveis e manipulação avançada de objetos.

---

## 📝 Como Usar este Documento:
Você pode usar esse arquivo `.md` para consultar rapidamente as diferenças de comandos entre Linux e CMD. Também pode ser útil se você estiver migrando entre os dois sistemas ou trabalhando com ambos ao mesmo tempo.

