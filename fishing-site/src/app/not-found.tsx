export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-5xl font-bold mb-4">404 – Página não encontrada</h1>
      <p className="mb-2">Desculpe, a página que você procura não existe.</p>
      <a href="/" className="text-blue-600 hover:underline">
        Voltar para a Home
      </a>
    </div>
  );
}
