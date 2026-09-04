import Image from "next/image";

export default function About() {
  return (
    <section
      id="sobre"
      className="bg-navy text-white py-16 md:py-24 px-4 md:px-8 relative overflow-hidden"
    >
      <div className="absolute top-8 right-8 w-32 h-32 bg-magenta/20 blob blur-xl pointer-events-none" />
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-center relative z-10">
        <div className="lg:col-span-2">
          <div className="relative w-full max-w-sm mx-auto aspect-square">
            <div className="absolute inset-0 bg-yellow blob-slow" />
            <div className="absolute inset-3 blob overflow-hidden">
              <Image
                src="/images/creator-bel-about.webp"
                alt="Ilustracao estilizada da Creator Bel"
                fill
                sizes="(max-width: 1024px) 80vw, 24rem"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-lime text-navy border-2 border-white rounded-2xl px-5 py-3 rotate-[-4deg] font-display font-bold floaty">
              +3 anos criando
            </div>
          </div>
        </div>
        <div className="lg:col-span-3">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-yellow">
            Sobre mim
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight mt-3 mb-6">
            Conteudo real, <span className="text-magenta">resultado real.</span>
          </h2>
          <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-[65ch] mb-4">
            Sou apaixonada por contar historias que conectam marcas a pessoas de
            verdade. Ha anos crio conteudo autentico para redes sociais, unindo
            criatividade, estrategia e uma boa dose de espontaneidade.
          </p>
          <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-[65ch] mb-8">
            Cada video que produzo carrega minha voz, meu jeito de contar
            historias e a certeza de que o UGC nao e sobre perfeicao — e sobre
            conexao.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4">
              <p className="font-display font-extrabold text-3xl text-yellow">120+</p>
              <p className="text-xs uppercase tracking-wider text-white/60">
                Videos entregues
              </p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4">
              <p className="font-display font-extrabold text-3xl text-lime">35+</p>
              <p className="text-xs uppercase tracking-wider text-white/60">
                Marcas parceiras
              </p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4">
              <p className="font-display font-extrabold text-3xl text-magenta">98%</p>
              <p className="text-xs uppercase tracking-wider text-white/60">
                Clientes satisfeitos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
