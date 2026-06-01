---
description: Fluxo de commit, validação e integração de alterações no Git de forma performática.
---

# Git Workflow

Este documento estabelece o fluxo de commit, validação e integração de alterações no repositório de forma performática.

## Fluxo de Commit

Ao realizar modificações no código, siga rigorosamente as etapas abaixo para otimizar o processo:

1. Execute git status para listar de forma rápida os arquivos modificados e identificar quais trechos necessitam de revisão.

2. Verifique o conteúdo alterado analisando os diffs (ex: git diff ou git diff arquivo) para planejar e criar uma mensagem de commit detalhada.

3. Certifique-se de que não há warnings ou erros de linting (nunca utilize # noqa). Se houver erros, interrompa o fluxo imediatamente e avise o usuário para corrigi-los antes de prosseguir.

4. Crie um arquivo temporário chamado commit_msg.txt na raiz do projeto para escrever a mensagem de commit.

5. Escreva a mensagem de commit e o corpo detalhado obrigatoriamente em *inglês*, seguindo o padrão de Commits Semânticos (ex: feat:, fix:).

6. Adicione os arquivos ao stage com git add.

7. Execute o commit apontando para o arquivo de mensagem:

```bash
git commit -F commit_msg.txt
```

1. Aguarde a validação dos hooks de pre-commit. *NUNCA* execute comandos subsequentes de forma encadeada.

2. Exclua o arquivo temporário commit_msg.txt após a validação bem-sucedida do pre-commit.

## Fluxo de Finalização e Integração

Após a validação do commit na branch local, siga os passos para integrar à main:

1. Alterne para a branch principal do projeto:

```bash
git checkout main
```

1. Realize o merge da branch de feature. Certifique-se de verificar qual é a branch de feature atual para especificar corretamente o nome no comando de merge (ex: feature/TODO-XX):

```bash
git merge feature/TODO-XX
```

1. Remova a branch local que foi integrada:

```bash
git branch -d feature/TODO-XX
```

1. Envie as atualizações para o repositório remoto:

```bash
git push origin main
```
