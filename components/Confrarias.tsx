import React from 'react';
import { Users, Rocket, Target, ArrowRight } from 'lucide-react';
import { Button } from './Button';

export const Confrarias: React.FC = () => {
    const confrarias = [
        {
            title: "Confraria Credinor",
            description: "Uma confraria criada para aproximar empresários do Norte de Minas em torno de negócios reais, troca de experiências e relacionamento estratégico. Aqui, o foco é construir parcerias, abrir portas e discutir, com profundidade, os desafios da região e as oportunidades para 2026 e além.",
            icon: Users,
            color: "from-brand-deep to-brand-neon"
        },
        {
            title: "T3 Hub",
            description: "Hub de negócios liderado por Diego Suzano, que conecta empreendedores, empresas e projetos em uma mesma mesa. É o espaço onde estratégia, finanças e gestão se encontram na prática, com encontros focados em acelerar resultados e tirar planos do papel.",
            icon: Rocket,
            color: "from-violet-500 to-purple-400"
        },
        {
            title: "Mentoria Estratégica",
            description: "Três meses de acompanhamento exclusivo com encontros quinzenais online. Tenha acesso direto a Diego Suzano, Fred Rocha e convidados especiais para validar suas decisões e acelerar seus resultados pós-evento.",
            icon: Target,
            color: "from-amber-500 to-orange-400"
        }
    ];

    return (
        <section className="py-20 bg-brand-dark relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
                        Confrarias que vão <span className="text-brand-neon">além do evento</span>
                    </h2>
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                        O Roadshow Empreendedores de Sucesso não termina no dia da imersão. Depois dos dois dias presenciais, você tem a oportunidade de continuar essa jornada em confrarias exclusivas, pensadas para quem quer crescer cercado de gente grande.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {confrarias.map((item, index) => (
                        <div key={index} className="group relative">
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                            <div className="bg-white/5 border border-white/10 hover:border-brand-neon/30 p-8 rounded-2xl h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} p-3 mb-6 shadow-lg`}>
                                    <item.icon className="w-full h-full text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Highlight Box */}
                <div className="bg-gradient-to-r from-brand-blue/20 to-brand-dark border border-brand-neon/30 rounded-2xl p-8 max-w-4xl mx-auto flex flex-col items-center gap-6 shadow-[0_0_30px_rgba(211, 225, 51,0.1)] text-center">
                    <div className="bg-brand-neon/10 p-4 rounded-full">
                        <ArrowRight className="text-brand-neon w-8 h-8" />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-white mb-2">Bônus Exclusivo da Imersão</h4>
                        <p className="text-gray-300">
                            Ao garantir a <span className="text-brand-neon font-semibold">Imersão Completa</span>, você já sai do evento com mentoria online pós-evento e acesso facilitado a esse ecossistema de confrarias, aumentando muito suas chances de aplicar tudo o que aprendeu e não voltar sozinho para a rotina.
                        </p>
                    </div>

                    <div className="flex-shrink-0 flex justify-center w-full">
                        <Button onClick={() => document.getElementById('inscricao')?.scrollIntoView({ behavior: 'smooth' })}>
                            GARANTA SUA VAGA
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
