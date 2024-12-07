
import { CalendarDays } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { JobImages } from "@/components/JobImages";

const jobs = [
    {
        role: "Freelancer Developer", 
        company: "", 
        logo:"", 
        duration: "08/2023 - 12/2024",
        description:
            "Atualmente estou produzindo um software para pdv e gestão de estoque em pré-contrato com 2 comércios da região e um e-commerce.",
        link: "",
        images: [
        ],
    },
    {
        role: "Full-Stack Developer", 
        company: "We Heart Impact", 
        logo: "", 
        duration: "07/2024 - 09/2024",
        description:
            `Contratado para ajudar na criação do MVP de um chatbot AI voltado para pequenas e médias franquias, utilizando Postgre, MongoDB, AWS S3, Flask, Python, JavaScript, React. 
             Dentre as tarefas realizadas estão permanência de sessão do usuário, autenticação e autorização de login, incluindo com o google, estilização de páginas e aplicação de responsividade, 
             criação de controle de estado para melhorar a UX durante login e utilização do chat, implementação de alguns componentes react reutilizáveis, refatoração do código front-end.`,
        link: "",
        images: [],
    },
    {
        role: "Full-Stack Developer",
        company: "LXP EAD",
        logo: "",
        duration: "09/2024",
        description:
            `Contratado para criação e edição de algumas páginas web. Utilizado Next.js, CSS module, Bootstrap, Swagger e Axios.
             Dentre as tarefas realizadas: criação de tabela que realizava requisições de informações específicas de cada tipo de usuário, 
             implementação de 3 telas incluindo para editor para envio de e-mail,
             utilização de componentes reutilizáveis da base de dados já disponível da empresa.`,
        link: "",
        images: [
            
        ],
    },
    {
      role: "Outras experiências",
      company: "",
      logo: "",
      duration: "2019 - 2023",
      description:
          `Trabalhei anterior como técnico em Eletronica, acompanahmento de projetos de TI, redes e analista de Suporte. Detalhes disponíveis no meu LinkedIn.`,
      link: "",
      images: [
          
      ],
  },
]

export const Experience = () => {
    return (
        <>
            <h2 className="text-xl font-bold mb-4">Experiências relevantes</h2>
            <Card>
                <CardContent className="pt-6">
                    <ul className="space-y-8">
                        {jobs.map((j, i) => (
                            <li key={i} className="border-b last:border-b-0 pb-8 last:pb-0">
                                {/* Job Details */}
                                <div className="flex items-center space-x-4">
                                    <div>
                                        <h3 className="font-semibold">
                                            {j.role}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {j.company}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-xs text-muted-foreground mt-2 flex items-center">
                                    <CalendarDays className="size-3 mr-2"/>
                                    {j.duration}
                                </p>
                                <p className="text-sm mt-2 text-justify">{j.description}</p>
                                {/* Job Images */}
                                <JobImages 
                                    role={j.role} 
                                    link={j.link}
                                    images={j.images} 
                                    duration={j.duration} 
                                />
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </>
    )
}