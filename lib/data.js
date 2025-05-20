// Personal Information
export const personalInfo = {
  name: "Jaydeep Kadiya",
  title: "Backend Developer",
  tagline: "Crafting resilient backend systems that power seamless digital experiences",
  email: "jaydeepkadiya005@gmail.com",
  phone: "+91 7777957606",
  location: "29/B Ayodhya Sagar City, Bhuj-Mundra Highway, Bhuj, Gujarat, India",
  profileImage: "/images/profile.png", // Replace with your image
  bio: "I'm a passionate backend developer with 2+ years of experience building scalable applications and APIs. I specialize in Node.js, PHP, and cloud infrastructure.",
  resumeUrl: "/resume.pdf",
  socialLinks: {
    github: "https://github.com/Jayuuuu04",
    linkedin: "www.linkedin.com/in/jaydeep-kadiya-7178b0163"
  },
}

// Navigation Links
export const navLinks = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
]

// Skills
export const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "JavaScript", icon: "Code2" },
      { name: "TypeScript", icon: "FileJson" },
      { name: "Python", icon: "FileCode" },
      { name: "PHP", icon: "Coffee" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "Node.js", icon: "Server" },
      { name: "Express.js", icon: "Network" },
      { name: "Django", icon: "LayoutTemplate" },
      { name: "Flask", icon: "Flask" },
      { name: "Spring Boot", icon: "Leaf" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", icon: "Database" },
      { name: "MongoDB", icon: "CircleDot" },
      { name: "MySQL", icon: "Database" },
      { name: "Redis", icon: "Cpu" },
      { name: "Elasticsearch", icon: "Search" },
    ],
  },
  {
    category: "DevOps & Cloud",
    items: [
      { name: "Docker", icon: "Container" },
      { name: "Kubernetes", icon: "Ship" },
      { name: "AWS", icon: "Cloud" },
      { name: "GCP", icon: "Cloud" },
      { name: "CI/CD", icon: "GitPullRequest" },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git", icon: "GitBranch" },
      { name: "RESTful APIs", icon: "Network" },
      { name: "GraphQL", icon: "Webhook" },
      { name: "Microservices", icon: "Boxes" },
      { name: "System Design", icon: "Layers" },
    ],
  },
]

// Experience
export const experiences = [
  {
    company: "Tech Innovations Inc.",
    position: "Senior Backend Developer",
    period: "Jan 2021 - Present",
    description:
      "Leading the development of scalable microservices architecture. Implemented CI/CD pipelines and reduced API response times by 40%.",
    technologies: ["Node.js", "TypeScript", "AWS", "Docker", "Kubernetes"],
  },
  {
    company: "DataSystems Corp",
    position: "Backend Developer",
    period: "Mar 2018 - Dec 2020",
    description:
      "Developed and maintained RESTful APIs serving 100K+ daily users. Optimized database queries and implemented caching solutions.",
    technologies: ["Python", "Django", "PostgreSQL", "Redis", "RabbitMQ"],
  },
  {
    company: "StartupXYZ",
    position: "Junior Developer",
    period: "Jun 2016 - Feb 2018",
    description:
      "Contributed to backend services for a SaaS platform. Implemented authentication systems and data processing pipelines.",
    technologies: ["Java", "Spring Boot", "MySQL", "Hibernate", "Jenkins"],
  },
]

// Education
export const education = [
  {
    institution: "University of Technology",
    degree: "Master of Science in Computer Science",
    period: "2014 - 2016",
    description: "Specialized in Distributed Systems and Cloud Computing",
  },
  {
    institution: "State University",
    degree: "Bachelor of Science in Software Engineering",
    period: "2010 - 2014",
    description: "Graduated with honors. Capstone project: Distributed Database System",
  },
]

// Certifications
export const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2022",
    url: "https://aws.amazon.com/certification/",
  },
  {
    name: "Google Professional Cloud Developer",
    issuer: "Google Cloud",
    date: "2021",
    url: "https://cloud.google.com/certification/cloud-developer",
  },
  {
    name: "Docker Certified Associate",
    issuer: "Docker",
    date: "2020",
    url: "https://www.docker.com/certification/",
  },
  {
    name: "MongoDB Certified Developer",
    issuer: "MongoDB",
    date: "2019",
    url: "https://university.mongodb.com/certification",
  },
]

// Projects
export const projects = [
  {
    id: "scalable-api-platform",
    title: "Scalable API Platform",
    slug: "scalable-api-platform",
    summary: "A high-performance RESTful API platform handling 10M+ daily requests",
    description: `
      Designed and implemented a scalable API platform that serves as the backbone for multiple client applications.
      The system handles over 10 million requests daily with 99.99% uptime.
      
      Key achievements:
      - Implemented a microservices architecture using Node.js and Express
      - Designed a caching strategy that reduced database load by 60%
      - Set up auto-scaling infrastructure on AWS using Terraform
      - Implemented comprehensive monitoring and alerting using Prometheus and Grafana
    `,
    technologies: ["Node.js", "Express", "MongoDB", "Redis", "AWS", "Docker", "Kubernetes"],
    image: "/images/projects/api-platform.png",
    githubUrl: "https://github.com/yourusername/api-platform",
    liveUrl: "https://api-platform-demo.example.com",
    featured: true,
  },
  {
    id: "data-processing-pipeline",
    title: "Real-time Data Processing Pipeline",
    slug: "data-processing-pipeline",
    summary: "A distributed system processing 5TB of data daily with sub-second latency",
    description: `
      Built a real-time data processing pipeline that ingests, processes, and analyzes large volumes of data.
      The system processes approximately 5TB of data daily with sub-second latency.
      
      Key achievements:
      - Designed a fault-tolerant architecture using Kafka for message queuing
      - Implemented stream processing with Python and Apache Spark
      - Created a monitoring dashboard for real-time system metrics
      - Reduced processing costs by 45% through optimization
    `,
    technologies: ["Python", "Apache Kafka", "Apache Spark", "PostgreSQL", "Airflow", "GCP"],
    image: "/images/projects/data-pipeline.png",
    githubUrl: "https://github.com/yourusername/data-pipeline",
    liveUrl: "https://data-pipeline-demo.example.com",
    featured: true,
  },
  {
    id: "authentication-service",
    title: "Enterprise Authentication Service",
    slug: "authentication-service",
    summary: "A secure authentication system serving 50+ internal applications",
    description: `
      Developed a centralized authentication and authorization service for enterprise applications.
      The system provides SSO capabilities and integrates with multiple identity providers.
      
      Key achievements:
      - Implemented OAuth 2.0 and OpenID Connect protocols
      - Created a flexible role-based access control system
      - Integrated with Active Directory and other LDAP services
      - Achieved SOC 2 compliance for the entire authentication flow
    `,
    technologies: ["Java", "Spring Security", "JWT", "OAuth 2.0", "MySQL", "Redis"],
    image: "/images/projects/auth-service.png",
    githubUrl: "https://github.com/yourusername/auth-service",
    liveUrl: "https://auth-service-demo.example.com",
    featured: true,
  },
  {
    id: "distributed-cache",
    title: "Distributed Caching System",
    slug: "distributed-cache",
    summary: "A high-performance distributed cache with 99.999% availability",
    description: `
      Designed and implemented a distributed caching system that provides low-latency data access
      for critical applications. The system maintains 99.999% availability with automatic failover.
      
      Key achievements:
      - Created a custom sharding algorithm for optimal data distribution
      - Implemented a gossip protocol for cluster membership management
      - Developed an efficient eviction policy based on access patterns
      - Built a monitoring system for cache hit/miss rates and latency metrics
    `,
    technologies: ["Go", "Redis", "etcd", "gRPC", "Prometheus", "Kubernetes"],
    image: "/images/projects/distributed-cache.png",
    githubUrl: "https://github.com/yourusername/distributed-cache",
    liveUrl: null,
    featured: false,
  },
  {
    id: "log-analytics",
    title: "Log Analytics Platform",
    slug: "log-analytics",
    summary: "A system processing and analyzing 10B+ log events daily",
    description: `
      Built a scalable log ingestion and analytics platform that processes over 10 billion events daily.
      The system provides real-time insights and alerting for application performance and security.
      
      Key achievements:
      - Designed a scalable log ingestion pipeline using Kafka and Elasticsearch
      - Implemented real-time anomaly detection algorithms
      - Created customizable dashboards for different stakeholders
      - Reduced storage costs by 50% through intelligent log compression and retention policies
    `,
    technologies: ["Python", "Elasticsearch", "Kafka", "Kibana", "Machine Learning", "AWS"],
    image: "/images/projects/log-analytics.png",
    githubUrl: "https://github.com/yourusername/log-analytics",
    liveUrl: "https://log-analytics-demo.example.com",
    featured: false,
  },
  {
    id: "payment-gateway",
    title: "Secure Payment Gateway",
    slug: "payment-gateway",
    summary: "A PCI-compliant payment processing system handling $10M+ monthly",
    description: `
      Developed a secure payment gateway that processes transactions for e-commerce platforms.
      The system is PCI DSS compliant and handles over $10 million in monthly transactions.
      
      Key achievements:
      - Implemented end-to-end encryption for sensitive payment data
      - Integrated with multiple payment processors and banking systems
      - Created a reconciliation system for transaction verification
      - Achieved 99.99% uptime with zero data breaches
    `,
    technologies: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "AWS KMS", "Docker"],
    image: "/images/projects/payment-gateway.png",
    githubUrl: "https://github.com/yourusername/payment-gateway",
    liveUrl: null,
    featured: false,
  },
]
