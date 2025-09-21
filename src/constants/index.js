const navLinks = [
    {
        name: "Trabalho",
        link: "#trabalho",
    },
    {
        name: "Experiência",
        link: "#experiencia",
    },
    {
        name: "Skills",
        link: "#skills",
    },
    {
        name: "Depoimentos",
        link: "#depoimentos",
    },
];

const words = [
    { text: "Ideias", imgPath: "/images/ideas.svg" },
    { text: "Conceitos", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Código", imgPath: "/images/code.svg" },
    { text: "Ideias", imgPath: "/images/ideas.svg" },
    { text: "Conceitos", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Código", imgPath: "/images/code.svg" },
];

const counterItems = [
    { value: 2, suffix: "+", label: "Anos de Experiência" },
    { value: 10, suffix: "+", label: "Clientes Satisfeitos" },
    { value: 15, suffix: "+", label: "Projetos Completos" },
    { value: 90, suffix: "%", label: "Retenção de Cliente" },
];

const logoIconsList = [
    {
        imgPath: "/images/logos/company-logo-1.png",
    },
    {
        imgPath: "/images/logos/company-logo-2.png",
    },
    {
        imgPath: "/images/logos/company-logo-3.png",
    },
    {
        imgPath: "/images/logos/company-logo-4.png",
    },
    {
        imgPath: "/images/logos/company-logo-5.png",
    },
    {
        imgPath: "/images/logos/company-logo-6.png",
    },
    {
        imgPath: "/images/logos/company-logo-7.png",
    },
    {
        imgPath: "/images/logos/company-logo-8.png",
    },
    {
        imgPath: "/images/logos/company-logo-9.png",
    },
    {
        imgPath: "/images/logos/company-logo-10.png",
    },
    {
        imgPath: "/images/logos/company-logo-11.png",
    },
];

const abilities = [
    {
        imgPath: "/images/seo.png",
        title: "Foco na Qualidade",
        desc: "Entregando resultados de alta qualidade, com atenção a cada detalhe.",
    },
    {
        imgPath: "/images/chat.png",
        title: "Comunicação Confiável",
        desc: "Mantendo você atualizado em cada etapa para garantir transparência e clareza.",
    },
    {
        imgPath: "/images/time.png",
        title: "Entrega no Prazo",
        desc: "Garantindo que os projetos sejam concluídos dentro do prazo, com qualidade e atenção aos detalhes.",
    },
];

const techStackImgs = [
    {
        name: "React Developer",
        imgPath: "/images/logos/react.png",
    },
    {
        name: "Python Developer",
        imgPath: "/images/logos/python.svg",
    },
    {
        name: "Java Developer",
        imgPath: "/images/logos/node.png",
    },
    {
        name: "Backend Developer",
        imgPath: "/images/logos/node.png",
    },
    {
        name: "Interactive Developer",
        imgPath: "/images/logos/three.png",
    },
    {
        name: "Project Manager",
        imgPath: "/images/logos/git.svg",
    },
];

const techStackIcons = [
    {
        name: "React Developer",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Python Developer",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Java Developer",
        modelPath: "/models/java.glb",
        scale: 1.5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Node Developer",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Interactive Developer",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Project Manager",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        review:
            "Durante meu estágio na Telebrás, desenvolvi e automatizei sistemas essenciais, garantindo eficiência e segurança no gerenciamento de dados.",
        imgPath: "/images/trademark-telebras.webp",
        logoPath: "/images/logo-telebras.png",
        title: "Estagiário",
        date: "Novembro 2023 - Novembro 2024",
        responsibilities: [
            "Desenvolvimento de sistema de gerenciamento e monitoramento de dados comerciais de circuitos usando JavaScript, HTML, CSS e PHP com MySQL.",
            "Criação e consumo de APIs, com testes de endpoints realizados no Postman.",
            "Implementação de autenticação via LDAP e utilização de JWT para controle de acesso seguro.",
            "Automação de processos manuais em planilhas usando Python e Google Colab, integrando dados ao Looker Studio.",
            "Participação em treinamentos internos sobre LGPD, adquirindo conhecimento em privacidade e proteção de dados.",
        ],
    },
    {
        review:
            "Na Lançamento Brasil, contribui para a manutenção e evolução de sistemas de mensageria, além de migrar e modernizar aplicações legadas.",
        imgPath: "/images/lancamento_brasil_cover.jpeg",
        logoPath: "/images/lancamento_brasil_cover.jpeg",
        title: "Desenvolvedor Full Stack",
        date: "Novembro 2024 - Setembro 2025",
        responsibilities: [
            "Manutenção e desenvolvimento de sistemas de mensageria via WhatsApp usando TypeScript, Node.js e React.",
            "Aprendizado e utilização de tecnologias como Redis, Google Cloud Storage (Buckets) e Nginx.",
            "Testes de APIs com Postman e implementação de novas funcionalidades.",
            "Trabalhos envolvendo RabbitMQ, PostgreSQL e Docker.",
            "Experiência com CI/CD, Linux e arquitetura MVC.",
            "Migração de sistemas: manutenção de Django e reimplementação em Node.js com TypeScript.",
        ],
    },
    {
        review:
            "Na Agendup, implementei soluções de backend eficientes, garantindo integração confiável com front-end e escalabilidade do sistema.",
        imgPath: "/images/logo-agendup.webp",
        logoPath: "/images/logo-agendup.webp",
        title: "Desenvolvedor Back-end (Freelance)",
        date: "Janeiro 2025 - Presente",
        responsibilities: [
            "Implementação de backend para novo sistema utilizando PHP (Laravel), aplicando boas práticas de arquitetura.",
            "Modelagem e estruturação de dados com DTO (Data Transfer Objects) para otimização do fluxo de informações.",
            "Integração com front-end, assegurando comunicação eficiente entre camadas.",
            "Containerização do ambiente com Docker, garantindo padronização e portabilidade.",
            "Testes e validação de APIs com Postman, assegurando qualidade e confiabilidade nas entregas.",
            "Controle de versionamento e integração contínua utilizando GitLab.",
        ],
    },
];

const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/images/logo3.png",
    },
];

const testimonials = [
    {
        name: "Matheus Nunes",
        mentions: "@matheusnunes",
        review:
            "Tive a oportunidade de estagiar ao lado do Vinícius na Telebras, e foi uma experiência que marcou muito meu aprendizado. Ele sempre demonstrou uma facilidade enorme em entender problemas complexos e transformá-los em soluções práticas e bem estruturadas. Sua dedicação e curiosidade em aprender novas tecnologias fizeram toda a diferença em nossa rotina, e não tenho dúvidas de que ele será um grande profissional na área de desenvolvimento.",
        imgPath: "/images/client1.png",
    },
    {
        name: "Vitor Costa",
        mentions: "@vitorcosta",
        review:
            "Conheço o Vinícius desde o período de estágio, quando tive a oportunidade de supervisionar seu trabalho. Desde aquela época já demonstrava muito talento e proatividade. Hoje trabalhamos juntos no time de backend do projeto AgendUp, e posso afirmar com tranquilidade que sua evolução é notável. Ele alia responsabilidade, visão técnica e um espírito colaborativo que tornam qualquer equipe mais forte.",
        imgPath: "/images/client3.png",
    },
    {
        name: "Felipe Hora",
        mentions: "@felipehora",
        review:
            "No AgendUp, trabalhar com o Vinícius é sempre motivador. Ele é extremamente esforçado, comprometido e consegue entregar tudo dentro do prazo necessário, sem perder a qualidade. Sempre disposto a ajudar e aprender, o Vinícius mostra um entusiasmo que contagia a equipe e eleva o nível do projeto.",
        imgPath: "/images/client2.png",
    },
    {
        name: "Luis Gustavo",
        mentions: "@luisgustavo",
        review:
            "Compartilhar o dia a dia de desenvolvimento com o Vinícius é uma experiência muito positiva. Ele sempre busca entender o problema a fundo e não mede esforços para entregar soluções completas no prazo certo. Sua disciplina, dedicação e capacidade de trabalhar bem em equipe são qualidades que fazem toda a diferença em projetos como o AgendUp.",
        imgPath: "/images/client6.png",
    },
    {
        name: "Davi Serra",
        mentions: "@daviserra",
        review:
            "Trabalhar com o Vinícius foi ótimo. Ele sempre buscou criar soluções criativas e funcionais, entregando resultados de alta qualidade e que agregaram muito ao projeto. A dedicação e a boa comunicação dele tornam a colaboração muito mais fácil e produtiva.",
        imgPath: "/images/client5.png",
    },
    {
        name: "Rafael Augusto",
        mentions: "@rafaelaugusto",
        review:
            "O Vinícius é um profissional de destaque no desenvolvimento. Sua capacidade de unir boa arquitetura, performance e usabilidade resulta em soluções que realmente fazem diferença. Sempre comprometido e com olhar estratégico, é alguém que contribui muito para qualquer equipe de tecnologia.",
        imgPath: "/images/client4.png",
    },
];

const socialImgs = [
    {
        name: "linkedin",
        url: "www.linkedin.com/in/vinicius-von-glehn-severo-171684225",
        imgPath: "/images/linkedin.png",
    },
];

const projects = [
    {
        id: 1,
        title: "BrubyScore - App de Ligas e Resultados de Futebol",
        description:
            "Aplicativo mobile desenvolvido com React Native, Gluestack, Typescript e TailwindCSS para acompanhar ligas e resultados de futebol em tempo real.",
        image: "/images/brubyscore-prototipo.png",
        bg: "#ffffff",
        repo: "https://github.com/ViniciusVon/Brubyscore",
    },
    {
        id: 2,
        title: "Website para Arquiteta Vanessa von Glehn",
        description:
            "Website desenvolvido utilizando Typescript no frontend e Java no backend, focado em apresentar os projetos e portfólio da arquiteta Vanessa von Glehn.",
        image: "/images/mentoria-vanessa.png",
        bg: "#ffefdb",
        repo: "https://site-vanessa-von-glehn.vercel.app",
    },
    {
        id: 3,
        title: "Monitoramento da Placa de Rede",
        description:
            "Projeto acadêmico para disciplina de Redes na faculdade de Ciência da Computação. Utiliza Docker para monitorar e analisar tráfego da placa de rede.",
        image: "/images/network-monitor-prototipo.png",
        bg: "#ffe7db",
        repo: "https://github.com/ViniciusVon/network-monitor",
    },
];


export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
    projects
};