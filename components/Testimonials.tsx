import React from 'react';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
    const testimonials = [
        {
            content: "Sentar com o Fred Rocha nos fazem repensar atitudes, abrir horizontes e voltar para casa com vontade de fazer mais e melhor. Com sua energia contagiante e uma visão prática do varejo, ele conseguiu traduzir de forma leve e direta temas essenciais para empresários e profissionais de vendas, despertando reflexões profundas sobre o papel do atendimento, da experiência do cliente e da inovação no dia a dia das lojas.",
            content2: "O mais admirável é a sua capacidade de transitar entre realidades completamente diferentes — seja contando cases de um bar no interior de São Paulo, da Venda do Fred no norte de Minas ou com executivos de grandes empresas de padrão mundial. Fred conecta pessoas e negócios com a mesma naturalidade e profundidade, levando aprendizados que fazem sentido em qualquer contexto. Um grande privilégio tê-lo conosco.",
            author: "Olga Fonseca",
            role: "Diretora da Simmons do Brasil",
            // Optional: image: "/path/to/image.jpg"
        }
    ];

    return (
        <section className="py-20 bg-brand-dark/50 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
                        O que dizem os <span className="text-brand-neon">Grandes Líderes</span>
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto">
                    {testimonials.map((item, index) => (
                        <div key={index} className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-2xl relative backdrop-blur-sm shadow-[0_0_30px_rgba(0,0,0,0.2)]">
                            <Quote className="absolute top-8 left-8 text-brand-neon/20 w-16 h-16 md:w-24 md:h-24 -z-10" />

                            <div className="relative z-10">
                                <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6 italic">
                                    "{item.content}"
                                </p>
                                <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 italic">
                                    "{item.content2}"
                                </p>

                                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                                    {/* Placeholder for avatar if needed
                  <div className="w-12 h-12 rounded-full bg-brand-neon/20 flex items-center justify-center text-brand-neon font-bold text-xl">
                    {item.author.charAt(0)}
                  </div>
                  */}
                                    <div>
                                        <h4 className="text-white font-bold text-lg">{item.author}</h4>
                                        <p className="text-brand-neon text-sm uppercase tracking-wider">{item.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
