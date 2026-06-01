# Backlog – MVP do Site de Pesca

Este documento reúne as tarefas necessárias para entregar o MVP (Minimum Viable Product) do site de pesca, seguindo o passo‑a‑passo descrito anteriormente. Cada item está organizado por prioridade e por fase de desenvolvimento.

## 1️⃣ Preparação do ambiente

- [ ] Instalar **Node.js** (versão ≥ 18) e **npm**.
- [ ] Criar o projeto Next.js: `npx create-next-app@latest fishing-site --use-npm --typescript`
- [ ] Instalar dependências:
  - `bootstrap@5` e `@popperjs/core`
  - `react-bootstrap`
  - `prisma`, `@prisma/client` e `sqlite3`

## 2️⃣ Configuração do banco (SQLite + Prisma)

- [ ] Executar `npx prisma init --datasource-provider sqlite`
- [ ] Editar `prisma/schema.prisma` para incluir o modelo **Comment** (ver exemplo).
- [ ] Rodar `npx prisma migrate dev --name init` para criar `dev.db`.

## 3️⃣ Estrutura de pastas & dados estáticos

- [ ] Criar pastas: `components/`, `data/`, `pages/api/`, `public/img/`, `styles/`.
- [ ] Implementar `data/fishingData.ts` com:
  - 10 iscas (nome, imagem, peixes‑alvo, descrição)
  - 3 varas, 2 molinetes, 2 carretilhas, 2 linhas
  - 5 peixes de água doce + 3 de água salgada (habitat + dicas)

## 4️⃣ Componentes de UI reutilizáveis

- [ ] `components/Navbar.tsx` – barra de navegação fixa com links para: Iscas, Equipamentos, Peixes, Fórum.
- [ ] `components/Card.tsx` – card genérico (título, imagem, descrição, extra).
- [ ] `components/Forum.tsx` – UI de envio/visualização de comentários (anônimo).

## 5️⃣ Páginas do site

| Página | Tarefas |
| -------- | --------- |
| **_app.tsx** | Importar Bootstrap, `globals.css` e `SiteNavbar`. |
| **index.tsx** | Home com blocos de acesso rápido (Iscas, Equipamentos, Peixes, Fórum). |
| **baits.tsx** | Listar iscas usando `<Card>` + exibir peixes‑alvo. |
| **gear.tsx** | Abas (Tabs) para varas, molinetes, carretilhas e linhas; usar `<Card>`. |
| **fish.tsx** | Listar peixes de água doce e salgada (habitat + dicas). |
| **forum.tsx** | Importar `<Forum>` para comentários anônimos. |

## 6️⃣ API do fórum

- [ ] Criar `pages/api/comments.ts` (GET → lista; POST → cria).
- [ ] Garantir tratamento de erros e retorno JSON.

## 7️⃣ Estilos globais

- [ ] `styles/globals.css` – fonte Montserrat, cores (azul náutico `#0066cc`, fundo claro).
- [ ] Ajustar responsividade (Bootstrap já cobre).

## 8️⃣ Testes manuais

- [ ] Navegar em cada página e conferir layout em desktop & mobile.
- [ ] Inserir e visualizar comentários no fórum.
- [ ] Verificar persistência no `dev.db` (recarregar página).

## 9️⃣ Deploy

- **Vercel** (recomendado): conectar repositório → deploy automático.
- **Netlify** (alternativa): `npm run build` → publicar a pasta `.next`.
- **GitHub Pages** (opcional): `next export` → publicar pasta `out`.

## ✅ Conclusão

Ao concluir todas as tarefas acima o MVP estará funcional, com:

- Navegação completa (menus).
- Listas de iscas, equipamentos e peixes.
- Fórum de comentários anônimo armazenado em SQLite.
