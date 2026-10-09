export const config = {
    developer: {
        name: "Mohamed",
        fullName: "Mohamed Essam Madyan",
        title: "Full-Stack (MERN) Engineer",
        description: "Full-Stack (MERN) Engineer based in Cairo. From backend logic to frontend experience — I build the whole thing, and I build it right."
    },
    social: {
        github: "mohamedmadyan56",
        email: "mohamedmadyan1234@gmail.com",
        location: "Cairo, Egypt"
    },
    about: {
        title: "About Me",
        description: "I'm a Full-Stack Developer specializing in Next.js, React, Node.js, and TypeScript with hands-on experience building scalable RESTful APIs, real-time architectures, and full-stack web applications using MongoDB, PostgreSQL with Prisma ORM, and secure JWT authentication. Graduated with a BSc in Computer Science from Minufiya University, completed the NTI Full-Stack Scholarship, and actively delivering production applications for international and local clients."
    },
    experiences: [
        {
            position: "Full-Stack Engineer",
            company: "Freelance & Production Projects",
            period: "2024 - Present",
            location: "Cairo, Egypt",
            description: "Architecting and developing production web applications, including live marketplaces (xcar.autos) and enterprise ERP systems with RBAC and real-time sockets.",
            responsibilities: [
                "Developing full-stack web applications using Next.js, React, Node.js, and TypeScript",
                "Building secure RESTful APIs with JWT authentication and role-based permissions",
                "Integrating real-time features using Socket.io and optimizing MongoDB/PostgreSQL databases",
                "Deploying and maintaining production cloud infrastructure"
            ],
            technologies: ["Next.js", "React.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL", "Socket.io", "Tailwind CSS"]
        },
        {
            position: "Full-Stack Developer Scholarship",
            company: "National Telecommunication Institute (NTI)",
            period: "2025 - 2026",
            location: "Cairo, Egypt",
            description: "Intensive 4-month Open Source Hire Ready scholarship program focused on advanced full-stack engineering, microservices, and industry best practices.",
            responsibilities: [
                "Built San3a marketplace graduation project with Nest.js, Next.js, and Prisma",
                "Mastered modern backend architecture, clean code, and API security",
                "Collaborated on agile software development cycles and code reviews"
            ],
            technologies: ["Next.js", "Nest.js", "Node.js", "Prisma ORM", "Docker", "Socket.io", "Git"]
        },
        {
            position: "Frontend Development Diploma",
            company: "Route IT Training Center",
            period: "2025",
            location: "Cairo, Egypt",
            description: "Comprehensive frontend engineering diploma covering advanced JavaScript ES6+, React.js architecture, state management, and modern responsive design.",
            responsibilities: [
                "Built responsive, accessible web applications and dashboards",
                "Implemented complex state management and performance optimizations",
                "Applied modern UI/UX design patterns and component architectures"
            ],
            technologies: ["React.js", "JavaScript ES6+", "Redux Toolkit", "Tailwind CSS", "Bootstrap", "REST APIs"]
        },
        {
            position: "React Native Development",
            company: "Information Technology Institute (ITI)",
            period: "2022",
            location: "Egypt",
            description: "Completed 150 hours of intensive summer training in cross-platform mobile and web application development.",
            responsibilities: [
                "Built cross-platform mobile interfaces and state-driven screens",
                "Gained deep foundational knowledge in modern JavaScript and React fundamentals"
            ],
            technologies: ["React Native", "React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap"]
        },
        {
            position: "BSc in Computer Science",
            company: "Minufiya University (Faculty of Computers & AI)",
            period: "2020 - 2024",
            location: "Egypt",
            description: "Earned Bachelor's degree in Computer Science with strong foundations in Data Structures, Algorithms, Software Engineering, Database Systems, and System Design.",
            responsibilities: [
                "Studied core computer science curricula and algorithms",
                "Engineered multiple academic software engineering projects"
            ],
            technologies: ["Computer Science", "Data Structures", "Algorithms", "OOP", "Database Design", "Software Engineering"]
        }
    ],
    projects: [
        {
            id: 9,
            title: "EL2RMOTY STORE — Desktop POS",
            category: "Desktop App · Offline-First",
            technologies: "Electron, Node.js, SQLite, better-sqlite3, JavaScript, HTML5 QRCode, XLSX",
            image: "/images/el2rmoty-pos.png",
            description: "Offline-first desktop POS for mobile shops with sales dashboard, cart and auto stock deduction, product management, 100-invoice history, SQLite backup, barcode/QR scanning and Excel import/export. Packaged with Windows installer and portable builds."
        },
        {
            id: 8,
            title: "F6 Media — Real Estate Video Platform",
            category: "Production · Live",
            technologies: "Next.js, TypeScript, Tailwind CSS, Turbopack, Video Streaming, Responsive Design",
            image: "/images/f6-media.png",
            description: "Cinematic video editing and post-production platform for real estate media companies, creators, and agents. Features interactive grade comparison sliders, showcase reels, bespoke pricing calculators, and dynamic showreel playback.",
            link: "https://real-estate-editing.vercel.app/"
        },

        {
            id: 1,
            title: "XCar Marketplace",
            category: "Production · Live",
            technologies: "React, TypeScript, SSR, Vite, i18n AR/EN, Cloudinary, Tailwind CSS",
            image: "/images/XCar.png",
            description: "Production inspected car marketplace live in Egypt. Every listing carries a certified 200-point inspection report with smart pricing engine, inspection booking, and bilingual Arabic/English experience.",
            link: "https://xcar.autos"
        },
        {
            id: 2,
            title: "San3a Marketplace",
            category: "Marketplace · Sockets",
            technologies: "Next.js, Node.js, Nest.js, MongoDB, Socket.io, Prisma ORM",
            image: "/images/San3a.png",
            description: "NTI graduation project connecting 200+ users with 50+ verified craftsmen. Features role-based dashboards, real-time booking notifications via Socket.io, and dynamic routing.",
            link: "https://github.com/mohamedmadyan56"
        },
        {
            id: 3,
            title: "Mayorca Travel ERP",
            category: "Enterprise ERP · RBAC",
            technologies: "React.js, Node.js, Express.js, MongoDB, Tailwind CSS, FingerprintJS, Sharp",
            image: "/images/mayorca_erp.jpg",
            description: "Full-stack ERP for managing Hajj and Umrah pilgrim operations with granular role-based access control (Admin/Employee), complex data models, flight routes, and document management.",
            link: "https://mayorca-travels.vercel.app/"
        },
        {
            id: 4,
            title: "Expert AI Platform",
            category: "Full-Stack · AI",
            technologies: "Node.js, Express.js, React.js, MongoDB, Groq API, JWT",
            image: "/images/expert_ai.jpg",
            description: "Full-stack AI-powered web application featuring an intelligent chatbot processing 100+ queries daily, portfolio showcase, smart navigation, and context-aware Groq API responses.",
            link: "https://github.com/mohamedmadyan56"
        },
        {
            id: 5,
            title: "RedxChess 3D",
            category: "Interactive 3D / AI",
            technologies: "React, Three.js, React Three Fiber, GSAP, Chess.js, WebGL",
            image: "/images/RedxChess.png",
            description: "Interactive 3D chess game with animated character, custom chess engine rated 3640 ELO, and live interactive assistant.",
            link: "/play"
        },
        {
            id: 6,
            title: "Social Media API",
            category: "Backend · REST API",
            technologies: "Node.js, Express.js, MongoDB, Mongoose, JWT, Socket.io",
            image: "/images/Phoenix3.0.png",
            description: "RESTful social network backend featuring user profiles, posts, comments, likes, and follower relationships with JWT authentication and middleware authorization.",
            link: "https://github.com/mohamedmadyan56"
        },
        {
            id: 7,
            title: "POS Inventory System",
            category: "Retail · E-Commerce",
            technologies: "React, Node.js, Express, MongoDB, Mongoose",
            image: "/images/hektools.png",
            description: "Point-of-Sale system handling 1,000+ inventory items, customer management, and automated invoice generation with real-time transaction updates.",
            link: "https://github.com/mohamedmadyan56"
        }
    ],
    contact: {
        email: "mohamedmadyan1234@gmail.com",
        github: "https://github.com/mohamedmadyan56",
        linkedin: "https://linkedin.com/in/muhammed-madyan-212928223",
        twitter: "https://x.com/mohamedDevelope",
        facebook: "https://www.facebook.com/madyan66",
        instagram: "https://www.instagram.com/mohamedmadyan77/"
    },
    skills: {
        develop: {
            title: "BACKEND & ARCHITECTURE",
            description: "Robust APIs, Microservices & Database Systems",
            details: "Architecting secure, scalable backend services with Node.js, Express, Nest.js, and TypeScript. Designing efficient schemas with MongoDB and PostgreSQL (Prisma), implementing JWT/OAuth authentication, and building real-time event-driven systems using Socket.io.",
            tools: ["Node.js", "Express.js", "Nest.js", "TypeScript", "MongoDB", "PostgreSQL", "Prisma ORM", "RESTful APIs", "Socket.io", "Docker", "JWT", "Redis"]
        },
        design: {
            title: "FRONTEND & FULL-STACK",
            description: "Modern, responsive & high-performance Web Apps",
            details: "Creating fluid, reactive user interfaces with Next.js, React.js, and TypeScript. Focused on high-performance SSR/SSG, seamless UX with Tailwind CSS, complex state management, and full end-to-end integration.",
            tools: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Three.js", "Vite", "HTML5 / CSS3", "Git / GitHub", "Vercel"]
        }
    }
};
