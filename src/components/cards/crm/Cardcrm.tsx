interface SectionProps {
  title: string;
  description: string;
  imageSrc: string;
  reverse?: boolean;
}

function Section({ title, description, imageSrc, reverse }: SectionProps) {
  return (
    <div
      className={`grid lg:grid-cols-2 gap-16 items-center ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div>
        <h2 className="text-3xl md:text-5xl font-bold text-[#1E1B18] leading-tight mb-6">
          {title}
          <span className="block text-[#2563EB]">para seu negócio</span>
        </h2>

        <p className="text-gray-700 text-lg mb-10 max-w-xl">{description}</p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            className="border-2 border-[#EC4899] text-[#EC4899]
                        px-8 py-4 rounded-xl font-semibold
                        transition-all duration-300
                        hover:bg-[#EC4899] hover:text-white
                        hover:shadow-xl hover:-translate-y-1 hover:scale-105"
          >
            Começar agora
          </button>

          <button
            className="border-2 border-[#2563EB] text-[#2563EB]
                        px-8 py-4 rounded-xl font-semibold
                        transition-all duration-300
                        hover:bg-[#2563EB] hover:text-white
                        hover:shadow-xl hover:-translate-y-1 hover:scale-105"
          >
            Saiba mais
          </button>
        </div>
      </div>

      <div className="flex justify-end">
        <img
          src={imageSrc}
          alt={title}
          className="w-full max-w-2xl rounded-3xl shadow-xl"
        />
      </div>
    </div>
  );
}

export default function CardCrm() {
  return (
    <section className="bg-[#FBFAFF py-24">
      <div className="max-w-7xl mx-auto px-6 space-y-32">
        <Section
          title="Gestão inteligente"
          description="Controle seus clientes, contratos e pagamentos em um único painel simples e organizado. Tenha visão clara do seu fluxo de trabalho."
          imageSrc="https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=800&q=80"
        />

        <Section
          title="Organização profissional"
          description="Visualize prazos, acompanhe entregas e mantenha tudo sob controle. Ideal para freelancers que querem crescer com estrutura."
          imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
          reverse
        />
      </div>
    </section>
  );
}