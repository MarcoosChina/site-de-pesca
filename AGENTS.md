# Agents – Padrão de Configuração

Este arquivo descreve os agentes e ferramentas que o projeto utiliza, bem como como eles devem ser instalados e configurados. Ele serve como referência para novos desenvolvedores ou para integração em pipelines CI/CD.

## 1️⃣ Agentes principais

| Agente | Função | Como instalar |
| -------- | -------- | ---------------- |
| **Next.js** | Framework React para renderização server‑side e geração estática. | Já incluído ao rodar `npx create-next-app`. |
| **Bootstrap 5** | UI responsiva e componentes prontos (navbar, cards, tabs). | `npm i bootstrap@5 @popperjs/core react-bootstrap`. |
| **Prisma** | ORM para SQLite (modelagem e migrações). | `npm i prisma @prisma/client sqlite3`; `npx prisma init`. |
| **React‑Bootstrap** | Wrappers React para componentes Bootstrap. | `npm i react-bootstrap`. |
| **SQLite** | Banco de dados leve e embutido. | Gerenciado via Prisma (não requer instalação adicional). |

## 2️⃣ Configurações de ambiente

- **Node.js**: versão ≥ 18 (LTS).
- **npm**: usado para gerenciamento de pacotes.
- **Variáveis de ambiente** (opcional):
  - `NEXT_PUBLIC_API_URL` – URL base da API (usada em produção).

## 3️⃣ Scripts NPM (arquivo `package.json`)

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "prisma:migrate": "prisma migrate dev --name init",
    "prisma:generate": "prisma generate"
  }
}
```

## 4️⃣ Fluxo de trabalho recomendado

1. **Instalação** – `npm install` (instala todas as dependências).
2. **Banco** – `npm run prisma:migrate` (cria/atualiza `dev.db`).
3. **Desenvolvimento** – `npm run dev` e visitar `http://localhost:3000`.
4. **Commit** – Sempre versionar o código (exclua `dev.db` via `.gitignore`).
5. **Deploy** – Conectar repositório ao Vercel/Netlify; o build será disparado automaticamente.

## 5️⃣ Boas práticas

- Manter o **schema Prisma** atualizado antes de qualquer alteração de modelo.
- Utilizar **Componentes React** (`Navbar`, `Card`, `Forum`) para evitar duplicação de código.
- Garantir que **todos os textos** estejam em português (i18n futuro).
- Não commitar arquivos de banco de produção; apenas o esquema (`schema.prisma`).

## 6️⃣ Futuras extensões (roadmap)

- **Autenticação** – Integrar `next-auth` para login social (Google, GitHub).
- **Persistência de comentários em nuvem** – Migrar de SQLite para Supabase/PostgreSQL.
- **SEO avançado** – Inserir `next/head` com meta‑tags Open Graph e Schema.org.
- **Testes automatizados** – Jest + React Testing Library para componentes críticos.

---

### Como usar

1. Crie os arquivos `BACKLOG_MVP.md` e `AGENTS.md` na raiz do repositório.
2. Cole os blocos de conteúdo acima nos respectivos arquivos.
3. Commit e push para seu controle de versão (`git add . && git commit -m "Add backlog and agents docs"`).

Esses documentos servirão como guia de desenvolvimento e referência para toda a equipe.

---

**Próximo passo**: Quando estiver pronto para aplicar as mudanças, basta criar os arquivos com o conteúdo acima e seguir as tarefas listadas no `BACKLOG_MVP.md`. Se precisar de ajuda para gerar algum dos arquivos ou executar algum comando, avise‑me!
