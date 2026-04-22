<script setup>
import { ArrowUpRight, Mail, Github, Linkedin, ExternalLink } from 'lucide-vue-next';

// Comprehensive Data from Brian Onchari's Resume
const skills = {
  languages: "Java, Kotlin, JavaScript, SQL",
  frameworks: "Spring Boot, NodeJs, VueJs, Android",
  cloud: "AWS, Google Cloud, Terraform, GitHub Actions",
  databases: "PostgreSQL, MySQL, MongoDB",
  observability: "Grafana, Loki, Prometheus",
  methodologies: "Agile (Kanban, Jira), TDD"
};

const experience = [
  {
    year: 'Sept 2025 — Present',
    role: 'Software Engineer',
    company: 'TenderSure',
    location: 'Nairobi',
    points: [
      'Design and develop an escrow system to secure client funds, integrating PayPal payment gateway and bank integrations for fund transfers .',
      'Execute large-scale data migrations for service providers into the platform, refining PostgreSQL schemas and performing data cleansing for high-performance indexing and data consistency.',
      'Designed and developed REST APIs to manage the lifecycle of contracts and jobs, ensuring data consistency across the platform.',
      'Set up CI/CD workflows and observability pipelines using GitHub Actions, Docker, and Grafana to maintain 99.9% uptime and rapid deployment cycles.',
      'Develop and maintain documentation and manuals on system configuration and setup.'
    ]
  },
  {
    year: 'Oct 2023 — July 2025',
    role: 'Backend Engineer',
    company: 'Tiko',
    location: 'Remote',
    points: [
      'Optimized high-volume data processing workflows, reducing PDF batch generation output size by 82% (300MB to 55MB) via refined Java memory management and sefficient stream handling.',
      'Refactored legacy monolithic modules into microservices using Spring Boot and AWS (SQS/SNS) to decouple data domains and improve horizontal scalability.',
      'Implemented voice-based identity verification via Nuance APIs, reducing fraudulent service claims by 70% through bimetric data verification.',
      'Achieved 85% unit and integration test coverage across critical services, significantly decreasing production failures.',
      'Participated actively in system design and architecture for new features.'
    ]
  },
  {
    year: 'Mar 2022 — Sept 2023',
    role: 'Backend Engineer',
    company: 'Teleeza Africa Limited',
    location: 'Nairobi, Kenya',
    points: [
      'Reduced API latency by 70% (from 10s to <3s) by identifying inefficient query patterns, implementing strategic SQL indexing, and integrating a caching layer.',
      'Developed a high-concurrency advertising engine handling instant reward to ad viewers, utilizing RabbitMQ for asynchronous event processing.',
      'Designed and developed a digital wallet infrastructure leveraging third-party APIs, ensuring interoperability with mobile money providers.',
      'Improved system fault tolerance by implementing Spring Cloud Circuit Breaker (Resilience4j) and retry policies,reducing transaction failure rates during third-party outages'
    ]
  },
  {
    year: 'July 2021 — Mar 2022',
    role: 'Software Developer',
    company: 'SongaSonga Solutions Limited',
    location: 'Nairobi, Kenya',
    points: [
      'Led a team of four developers to architect, design, and develop a bike-sharing mobile application and backend services.',
      'Integrated BLE (Bluetooth Low Energy) locks to secure bikes by locking and unlocking.',
      'Developed an Android app using Kotlin for real-time bike monitoring.',
      'Assisted with the development of a web portal to monitor bikes and user activity[.',
      'Wrote detailed documentation explaining features, functions, and app operations.'
    ]
  },

  {
    year: 'January 2021 — July 2021',
    role: 'Junior Software Developer',
    company: 'ConsentWise.io',
    location: 'Remote',
    points: [
      'Built Java REST APIs for the initial product launch and used Hibernate to manage how data was stored in the database',
      'Assist with the development and maintenance of an MVP to validate the companys product idea,rapidly learning and utilizing new tech stacks to ensure project delivery.Delivered clean, maintainable, and well-documented code, adhering to best coding practices'
    ]
  }, 

  {
    year: 'January 2019 — May 2029',
    role: 'Android Developer Intern',
    company: 'ConsentWise.io',
    location: 'Remote',
    points: [
      'Built Android UIs and integrated REST APIs for a mobile lending app.'
    ]
  }, 
];

const featuredProjects = [
  {
    title: 'Mzigo Match',
    desc: 'Developed a distributed logistics engine utilizing spatial indexing to match service providers with clients in real-time, featuring automated M-Pesa settlement[cite: 127, 128].',
    tags: ['Spring Boot', 'PostGIS', 'Mapbox', 'WhatsApp API','Android', 'VueJs'],
    link: 'https://mzigomatch.com/'
  },
  {
    title: 'Outsource Africa',
    desc: 'B2B work marketplace featuring a secure digital wallet and escrow account to guarantee trust between clients and service providers.',
    tags: ['Java', 'Spring Boot', 'VueJs','PayPal', 'PostgreSQL', 'Grafana'],
    link: 'https://outsourceafrica.co.ke/'
  }
];
</script>

<template>
  <div class="min-h-screen bg-white text-[#1a1a1a] font-sans selection:bg-gray-200">
    <nav class="max-w-5xl mx-auto px-6 py-8 flex justify-between items-center sticky top-0 bg-white/80 backdrop-blur-md z-50">
      <span class="font-bold text-sm tracking-tighter">BRIAN ONCHARI</span>
      <div class="flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-400">
        <a href="#experience" class="hover:text-black transition-colors">Experience</a>
        <a href="#projects" class="hover:text-black transition-colors">Projects</a>
        <a href="#contact" class="hover:text-black transition-colors">Contact</a>
      </div>
    </nav>

    <main class="max-w-5xl mx-auto px-6">
      <section class="py-24 md:py-32 max-w-3xl">
        <p class="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-6">Software Engineer · Nairobi</p>
        <h1 class="text-5xl md:text-6xl font-semibold tracking-tighter leading-[1.05] mb-8">
          I build scalable, high-performance applications.
        </h1>
        <p class="text-xl text-gray-500 leading-relaxed mb-12">
          A Software Engineer with a passion for building scalable, high-performance applications. I have a strong track
record of enhancing system performance and optimizing application efficiency. I'm passionate about using
technology to tackle real-world challenges and build solutions that truly make a difference.
        </p>
        <div class="flex gap-4">
          <a href="mailto:oncharibrian@gmail.com" class="bg-black text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-gray-800 transition-all">
            Work with me
          </a>
        </div>
      </section>

      <section id="experience" class="py-20 border-t border-gray-100">
        <h2 class="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-16">Selected Experience</h2>
        <div class="space-y-24">
          <div v-for="job in experience" :key="job.company" class="grid md:grid-cols-[1fr_3fr] gap-8 md:gap-16">
            <div class="text-xs font-bold uppercase tracking-widest text-gray-300 tabular-nums">
              {{ job.year }}
            </div>
            <div>
              <div class="flex justify-between items-start mb-6">
                <h3 class="text-2xl font-semibold tracking-tight">
                  {{ job.role }} <span class="text-gray-300 font-light mx-2">/</span> {{ job.company }}
                </h3>
                <span class="text-[10px] font-bold uppercase tracking-widest text-gray-400 border border-gray-100 px-2 py-1 rounded">
                  {{ job.location }}
                </span>
              </div>
              <ul class="space-y-4">
                <li v-for="point in job.points" :key="point" class="text-gray-600 leading-relaxed flex gap-3">
                  <span class="text-gray-300 mt-1.5">•</span>
                  <span>{{ point }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="py-20 border-t border-gray-100">
        <h2 class="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-16">Technical Skills</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          <div v-for="(value, key) in skills" :key="key" class="border-b border-gray-50 pb-6">
            <h4 class="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-300 mb-3">{{ key }}</h4>
            <p class="text-sm font-medium text-gray-700">{{ value }}</p>
          </div>
        </div>
      </section>

      <section id="projects" class="py-20 border-t border-gray-100">
        <h2 class="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-16">Selected Projects</h2>
        <div class="grid md:grid-cols-2 gap-12">
          <a v-for="project in featuredProjects" :key="project.title" :href="project.link" target="_blank"
             class="group block p-10 border border-gray-100 rounded-3xl hover:border-black hover:bg-black hover:text-white transition-all duration-500">
            <div class="flex justify-between items-start mb-8">
              <h3 class="text-3xl font-semibold tracking-tighter">{{ project.title }}</h3>
              <ArrowUpRight class="w-6 h-6 opacity-20 group-hover:opacity-100 transition-opacity" />
            </div>
            <p class="text-gray-500 group-hover:text-gray-400 mb-10 leading-relaxed">
              {{ project.desc }}
            </p>
            <div class="flex flex-wrap gap-2">
              <span v-for="tag in project.tags" :key="tag" 
                    class="text-[10px] font-bold uppercase tracking-widest border border-gray-100 group-hover:border-white/20 px-3 py-1.5 rounded-full">
                {{ tag }}
              </span>
            </div>
          </a>
        </div>
      </section>

      <section id="contact" class="py-32 border-t border-gray-100 text-center">
        <h2 class="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-12">Get in Touch</h2>
        <a :href="'mailto:' + 'oncharibrian@gmail.com'" class="text-3xl md:text-5xl font-semibold tracking-tighter hover:text-gray-500 transition-colors break-all">
          oncharibrian@gmail.com 
        </a>
        <div class="flex justify-center gap-12 mt-16">
          <a href="https://www.linkedin.com/in/brianonchari/" class="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black [cite: 72]">
            <Linkedin class="w-4 h-4" /> LinkedIn
          </a>
          <a href="https://github.com/Brianonchari" class="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black">
            <Github class="w-4 h-4" /> GitHub
          </a>
        </div>
      </section>
    </main>

    <footer class="max-w-5xl mx-auto px-6 py-12 border-t border-gray-50 flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.3em] text-gray-300">
      <p>© 2026 Brian Onchari</p>
      <p>Nairobi, Kenya</p>
    </footer>
  </div>
</template>