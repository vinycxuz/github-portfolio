import { Metadata } from 'next'


export function constructMetadata({
  title = 'Vinícius Aarão', // TODO: Add a custom title
  description = `desenvolvedor fullstack, destaco-me na criação de arquitetura e aplicações dinâmicas e amigáveis ao usuário, utilizando MERN stack (MongoDB, Express.js, React e Node.js).

Proficiência em construção de interfaces web responsivas utilizando React, Next.js e JavaScript, mesmo que utilizando frameworks como Tailwind CSS e criando componentes reutilizáveis, para tornar os sistemas mais fáceis de usar e gerenciar.

Meu compromisso se estende com a integrações de AI, middleware para sessão, cookies e autenticação utilizando JWT e passport.js, deployment, além de personalização de banco de dados e configurações de índices.

Outras tecnologias na qual tenho conhecimento ou já tive experiência são Flask (Python), Github Actions, ESP-IDF, Bun, Wordpress, Open-Source AI Models, Jasmine e PyQt.`, // TODO: Add a custom description
  image = '/', // TODO: Add a custom image
  icons = '/', // TODO: Add a custom icon
  noIndex = false
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image]
    },
    icons,
    metadataBase: new URL('https://www.chrislonzo.com'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false
      }
    })
  }
}
