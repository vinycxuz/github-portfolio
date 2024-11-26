import {
    Card,
    CardTitle,
    CardHeader,
    CardContent
} from "@/components/ui/card";

export const AboutMe = ( ) => {
    return (
        <Card className="mb-6">
            <CardHeader>
                <CardTitle>Sobre Mim</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground text-justify">
                Desenvolvedor fullstack, destaco-me na criação de arquitetura e aplicações dinâmicas e amigáveis ao usuário, utilizando MERN stack (MongoDB, Express.js, React e Node.js).

Proficiência em construção de interfaces web responsivas utilizando React, Next.js e JavaScript, frameworks como Tailwind CSS e criando componentes reutilizáveis, para tornar os sistemas mais fáceis de usar e gerenciar.

Outras tecnologias na qual tenho conhecimento ou já tive experiência são Flask (Python), Github Actions, ESP-IDF, Bun, Wordpress, Open-Source AI Models, Jasmine e PyQt.
                </p>
            </CardContent>
        </Card>
    )
}