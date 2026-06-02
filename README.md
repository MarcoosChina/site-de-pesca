# site-de-pesca

## Configuração do Ambiente

1. Clone o repositório:

   ```bash
   git clone <url-do-repositorio>
   cd site-de-pesca
   ```

2. Instale as dependências:

   ```bash
   cd fishing-site
   npm install
   ```

3. Crie o arquivo `.env.local` na raiz do projeto `fishing-site` com a variável `DATABASE_URL` apontando para seu banco PostgreSQL.
4. Execute as migrações do Prisma:

   ```bash
   npx prisma migrate dev --name init
   ```

5. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

Acesse o site em `http://localhost:3000`.


