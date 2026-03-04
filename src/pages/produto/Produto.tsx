import ListaProduto from "./listaproduto/ListaProduto";

function Produto() {
  return (
    <div className="min-h-screen bg-[var(--color-crm-branco)] p-6">
      
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[var(--color-crm-preto)]">
          Produtos
        </h1>

        <button className="bg-[var(--color-crm-roxo)] text-white px-4 py-2 rounded-lg hover:opacity-90 transition">
          Novo Produto
        </button>
      </div>

      <ListaProduto />

    </div>
  );
}

export default Produto;