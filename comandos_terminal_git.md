## Comandos de Terminal

```bash
pwd                          # Mostra o caminho da pasta atual (Print Working Directory)
mkdir nova/                  # Cria uma nova pasta
ls                           # Lista arquivos e pastas
la                           # É um alias para o ls, mas que exibe ficheiros ocultos
cd pasta/                    # Entra em uma pasta

cd ..                        # Volta uma pasta
cd -                         # Volta para a pasta anterior
touch arquivo.txt            # Cria um arquivo
echo "conteudo" >> arquivo.txt  # Cria um arquivo com conteúdo
rm pasta                     # Apaga pasta ou arquivo
rm -rf                       # Remove tudo recursivamente, forçadamente
nano nomedoarq.txt           # Abre o editor Nano. Salvar: Ctrl + O, Enter | Sair: Ctrl + X
tree caminho/pasta #para ver a estrutura do projeto 
# use -d para só pastas, e -L 2 para o nível de profundidade
```
> **Dica:** Barra invertida (`\`) indica que o espaço faz parte do nome da pasta. Mas use aspas para evitar erros.

---

## Git:

### Criar controle de versão se n tem repo
```bash
git init
```

### Configuração inicial (uma vez por máquina)
```bash
git config --global user.name "Erick"
git config --global user.email "seu@email.com"
```

---

### Clonar repo
```bash
cat -vet ~/.bash_history | grep git #pra evitar caracteres invisiveis
git clone https://github.com/usuario/repositorio
git clone git@github.com:usuario/repositorio.git

```

---

### Status do repositório
```bash
git status -v                # Com mais detalhes
```

---
### Adicionar no stage
```bash
git add arquivo.txt
git add .                    # Adiciona o que estiver modificado
```

---

### Comitar alterações
```bash
git commit -m "mensagem do commit"  # Comita tudo que foi alterado sem precisar de git add
```

---

###  Enviar alterações para o GitHub
```bash
git push origin nome-da-branch
git push -u origin nome-da-branch    # Primeiro push da branch
git push --force origin nome-da-branch   # Push forçado (ignorando bloqueios)
```

---

###  Puxar atualizações do repositório remoto
```bash
git pull
git pull origin master --rebase   # Tenta colocar suas alterações por cima, evitando conflitos
# comando que combina git fetch e git merge, baixando as alterações e mesclando-as automaticamente na sua branch atual. 

git rebase #move o historico de comits de uma branch para o topo de outra
```

---

### Histórico de commits
```bash
git log  --oneline   # Versão resumida do histórico
```

---

##  GCM: Git Credential Manager no Linux

### 📦 Instalar
```bash
sudo apt update && sudo apt upgrade
sudo apt install git-credential-manager-core
```

### Configurar
```bash
git config --global credential.helper manager-core
```

---

### Atualizar URL para SSH
```bash
git remote -v # pra ver atual
git remote set-url origin git@github.com:usuario/#nomedorepo
```

### Trocar branch
```bash
git checkout nomedabranch # pra saber se vc está em tal branch
git branch -m nomedabranch
git branch -d mainantiga # deleta a branch -D força a exclusão



```
cat -vet ~/.bash_history | grep git

---

> Use sempre o `rebase` ao invés de `merge` se quiser menos dor de cabeça com conflitos.
