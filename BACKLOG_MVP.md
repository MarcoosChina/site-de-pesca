# Backlog – MVP do Site de Pesca

Este documento reúne as tarefas necessárias para entregar o MVP (Minimum Viable Product) do site de pesca, seguindo o passo‑a‑passo descrito anteriormente. Cada item está organizado por prioridade e por fase de desenvolvimento.

## 1️⃣ Preparação do ambiente

- [x] Instalar **Node.js** (versão ≥ 18) e **npm**.
- [x] Criar o projeto Next.js com Tailwind já configurado:

  ```bash
  npx create-next-app@latest fishing-site --typescript --tailwind --eslint --app --src-dir
  ```

- [x] Instalar dependências:
  - `prisma` e `@prisma/client`
- [x] Criar `.env.local` na raiz com a variável do banco:

  ```env
  DATABASE_URL="postgresql://..."
  ```

- [x] Adicionar `.env.local` e `.env` ao `.gitignore`
- [x] Criar `README.md` com instruções de setup local (clone → install → migrate → dev)

## 2️⃣ Configuração do banco (PostgreSQL + Neon + Prisma)

- [x] Criar conta gratuita em [neon.tech](https://neon.tech) e copiar a `DATABASE_URL` para o `.env.local`
- [x] Executar `npx prisma init --datasource-provider postgresql`
- [x] Editar `prisma/schema.prisma` para incluir o modelo **Comment**:

  ```prisma
  model Comment {
    id        Int      @id @default(autoincrement())
    content   String   @db.VarChar(500)
    createdAt DateTime @default(now())
  }
  ```

- [ ] Rodar `npx prisma migrate dev --name init` para criar as tabelas no Neon
- [ ] Verificar a tabela criada com `npx prisma studio`

## 3️⃣ Estrutura de pastas & dados estáticos

- [x] Criar pastas: `src/components/`, `src/data/`, `src/types/`, `src/app/api/`, `public/img/`.
- [x] Criar `src/types/index.ts` com interfaces TypeScript para os dados:

  ```ts
  export interface Bait { id: number; name: string; image: string; targetFish: string[]; description: string }
  export interface GearItem { id: number; name: string; image: string; description: string; category: 'rod' | 'reel-spin' | 'reel-bait' | 'line' }
  export interface Fish { id: number; name: string; image: string; habitat: 'freshwater' | 'saltwater'; tips: string[] }
  ```

- [x] Criar arquivos separados em `src/data/`:
  - `baits.ts` – 10 iscas (nome, imagem, peixes‑alvo, descrição)
  - `gear.ts` – 3 varas, 2 molinetes, 2 carretilhas, 2 linhas
  - `fish.ts` – 5 peixes de água doce + 3 de água salgada (habitat + dicas)
- [x] Usar imagens do [Unsplash](https://unsplash.com) (gratuitas, URLs externas)

- [x] Configurar `next.config.ts` para permitir domínios de imagem externos:

  ```ts
  images: { remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }] }
  ```

## 4️⃣ Componentes de UI reutilizáveis

- [x] `src/components/Navbar.tsx` – barra de navegação fixa com links para: Início, Iscas, Equipamentos, Peixes, Fórum. Responsiva com menu hamburguer no mobile.
- [x] `src/components/Card.tsx` – card genérico com `next/image` (título, imagem, descrição, extra).
- [x] `src/components/Forum.tsx` – UI de envio/visualização de comentários (anônimo).
- [x] `src/components/Tabs.tsx` – abas reutilizáveis para a página de equipamentos.

## 5️⃣ Páginas do site

| Página | Tarefas |
| -------- | --------- |
| **src/app/layout.tsx** | Layout raiz: importar fonte Montserrat, `<Navbar>` e rodapé. |
| **src/app/page.tsx** | Home com blocos de acesso rápido (Iscas, Equipamentos, Peixes, Fórum). |
| **src/app/iscas/page.tsx** | Listar iscas usando `<Card>` + exibir peixes‑alvo. |
| **src/app/equipamentos/page.tsx** | Abas (Tabs) para varas, molinetes, carretilhas e linhas; usar `<Card>`. |
| **src/app/peixes/page.tsx** | Listar peixes de água doce e salgada (habitat + dicas). |
| **src/app/forum/page.tsx** | Importar `<Forum>` para comentários anônimos. |
| **src/app/sobre/page.tsx** | Sobre o site: contexto, objetivo e autor. |
| **src/app/not-found.tsx** | Página 404 customizada com link para a Home. |

### SEO – adicionar `metadata` em cada página

```ts
export const metadata: Metadata = {
  title: 'Iscas | Site de Pesca',
  description: 'Conheça as melhores iscas para pesca de água doce e salgada.'
}
```

## 6️⃣ API do fórum

- [x] Criar `src/app/api/comments/route.ts`:
  - `GET` → retorna lista paginada (`?page=1&limit=10`)
  - `POST` → cria comentário, com validações: conteúdo não vazio e máximo de 500 caracteres
- [ ] Adicionar rate limiting simples: 1 POST por IP a cada 30 segundos
- [x] Garantir tratamento de erros e retorno JSON padronizado.

## 7️⃣ Estilos globais

- [ ] `src/app/globals.css` – importar Tailwind + fonte Montserrat, variáveis de cor (azul náutico `#0066cc`, fundo claro).
- [ ] Configurar `tailwind.config.ts` com as cores e fonte customizadas.

## 8️⃣ Testes manuais

- [x] Navegar em cada página e conferir layout em desktop & mobile.
- [x] Inserir e visualizar comentários no fórum.
- [x] Verificar persistência dos comentários após recarregar a página.
- [ ] Testar a página 404 acessando uma rota inválida.
- [ ] Validar SEO com o Lighthouse no Chrome.

## 9️⃣ Deploy

- **Vercel** (recomendado): conectar repositório → adicionar `DATABASE_URL` nas variáveis de ambiente → deploy automático.

> ⚠️ Não usar GitHub Pages nem `next export` — APIs e Prisma não funcionam nesse modo.

## ✅ Conclusão

Ao concluir todas as tarefas acima o MVP estará funcional, com:

- Navegação completa e responsiva (menus + mobile).
- Dados tipados com TypeScript (interfaces definidas).
- Listas de iscas, equipamentos e peixes com imagens reais.
- Fórum de comentários anônimo com paginação e rate limiting.
- Banco PostgreSQL hospedado no Neon (persistente em produção).
- SEO básico em todas as páginas.
- Página 404 customizada.
- Deploy automático na Vercel.
