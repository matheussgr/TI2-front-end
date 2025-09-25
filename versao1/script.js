// Sample job data
const jobsData = [
    {
        id: 1,
        title: "Desenvolvedor Frontend Jr",
        company: "TechCorp",
        location: "São Paulo, SP",
        type: "Estágio",
        salary: "R$ 1.200",
        tags: ["React", "JavaScript", "CSS"],
        date: "2 dias atrás",
        description: "Oportunidade para desenvolver suas habilidades em desenvolvimento frontend utilizando tecnologias modernas como React, JavaScript e CSS. Você trabalhará em projetos reais e terá mentoria de desenvolvedores seniores.",
        requirements: [
            "Cursando Ciência da Computação, Sistemas de Informação ou áreas relacionadas",
            "Conhecimento básico em HTML, CSS e JavaScript",
            "Interesse em aprender React e outras tecnologias frontend",
            "Capacidade de trabalhar em equipe",
            "Proatividade e vontade de aprender"
        ],
        benefits: [
            "Auxílio transporte",
            "Auxílio alimentação",
            "Seguro saúde",
            "Mentoria personalizada",
            "Ambiente de trabalho colaborativo"
        ]
    },
    {
        id: 2,
        title: "Analista de Marketing Digital",
        company: "Digital Agency",
        location: "Rio de Janeiro, RJ",
        type: "Estágio",
        salary: "R$ 1.000",
        tags: ["Marketing", "Social Media", "Analytics"],
        date: "1 semana atrás",
        description: "Junte-se à nossa equipe de marketing digital e aprenda sobre estratégias de mídia social, análise de dados e campanhas publicitárias online.",
        requirements: [
            "Cursando Marketing, Publicidade, Comunicação ou áreas relacionadas",
            "Interesse em marketing digital e redes sociais",
            "Conhecimento básico de ferramentas de análise",
            "Criatividade e comunicação eficaz"
        ],
        benefits: [
            "Vale transporte",
            "Vale refeição",
            "Treinamentos especializados",
            "Certificações gratuitas"
        ]
    },
    {
        id: 3,
        title: "Desenvolvedor Mobile",
        company: "AppStart",
        location: "Belo Horizonte, MG",
        type: "Estágio",
        salary: "R$ 1.500",
        tags: ["React Native", "Mobile", "JavaScript"],
        date: "3 dias atrás",
        description: "Desenvolva aplicativos móveis incríveis usando React Native. Trabalhe em projetos inovadores e aprenda as melhores práticas de desenvolvimento mobile.",
        requirements: [
            "Cursando Engenharia de Software, Ciência da Computação ou áreas relacionadas",
            "Conhecimento em JavaScript",
            "Interesse em desenvolvimento mobile",
            "Capacidade de resolução de problemas"
        ],
        benefits: [
            "Bolsa auxílio competitiva",
            "Plano de saúde",
            "Equipamentos de trabalho fornecidos",
            "Possibilidade de efetivação"
        ]
    },
    {
        id: 4,
        title: "Designer UX/UI",
        company: "DesignHub",
        location: "Porto Alegre, RS",
        type: "Estágio",
        salary: "R$ 1.100",
        tags: ["Figma", "Design", "UX/UI"],
        date: "5 dias atrás",
        description: "Crie experiências digitais incríveis e aprenda sobre design de interfaces, pesquisa com usuários e prototipagem.",
        requirements: [
            "Cursando Design, Artes Visuais ou áreas relacionadas",
            "Conhecimento básico em Figma ou Adobe XD",
            "Portfolio com projetos pessoais",
            "Senso estético apurado"
        ],
        benefits: [
            "Auxílio transporte e alimentação",
            "Acesso a cursos de design",
            "Mentoria com designers seniores",
            "Ambiente criativo"
        ]
    },
    {
        id: 5,
        title: "Analista de Dados Jr",
        company: "DataLab",
        location: "Remoto",
        type: "Estágio",
        salary: "R$ 1.300",
        tags: ["Python", "SQL", "Analytics"],
        date: "1 dia atrás",
        description: "Trabalhe com análise de dados, criação de relatórios e visualizações. Aprenda Python, SQL e ferramentas de Business Intelligence.",
        requirements: [
            "Cursando Estatística, Matemática, Ciência da Computação ou áreas relacionadas",
            "Conhecimento básico em estatística",
            "Interesse em análise de dados",
            "Capacidade analítica"
        ],
        benefits: [
            "Trabalho remoto",
            "Horários flexíveis",
            "Treinamentos em ferramentas de dados",
            "Plano de carreira estruturado"
        ]
    },
    {
        id: 6,
        title: "Assistente Administrativo",
        company: "CorpSolutions",
        location: "São Paulo, SP",
        type: "Estágio",
        salary: "R$ 900",
        tags: ["Administração", "Excel", "Organização"],
        date: "4 dias atrás",
        description: "Oportunidade para aprender sobre rotinas administrativas, gestão de documentos e apoio a equipes operacionais.",
        requirements: [
            "Cursando Administração, Gestão ou áreas relacionadas",
            "Conhecimento em pacote Office",
            "Organização e atenção aos detalhes",
            "Boa comunicação"
        ],
        benefits: [
            "Auxílio transporte",
            "Auxílio alimentação",
            "Experiência corporativa",
            "Networking profissional"
        ]
    }
];

// DOM Elements
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const searchForm = document.getElementById('searchForm');
const jobsGrid = document.getElementById('jobsGrid');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const contactForm = document.getElementById('contactForm');

// Navigation toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = navToggle.querySelector('i');
    if (navMenu.classList.contains('active')) {
        icon.setAttribute('data-lucide', 'x');
    } else {
        icon.setAttribute('data-lucide', 'menu');
    }
    lucide.createIcons();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.offsetTop;
            const offsetPosition = elementPosition - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        
        // Close mobile menu if open
        navMenu.classList.remove('active');
        navToggle.querySelector('i').setAttribute('data-lucide', 'menu');
        lucide.createIcons();
    });
});

// Active navigation link
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${id}"]`);
        
        if (scrollPos >= top && scrollPos < top + height) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
});

// Modal functions
function showModal(modalId) {
    const modal = document.getElementById(modalId + 'Modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId + 'Modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});

// Modal buttons
loginBtn.addEventListener('click', () => showModal('login'));
registerBtn.addEventListener('click', () => showModal('register'));

// Load jobs
let currentJobsCount = 0;
const jobsPerLoad = 6;

function createJobCard(job) {
    const card = document.createElement('div');
    card.className = 'job-card';
    card.addEventListener('click', () => showJobDetails(job));
    
    card.innerHTML = `
        <div class="job-header">
            <div class="job-logo">${job.company[0]}</div>
            <button class="job-bookmark">
                <i data-lucide="bookmark"></i>
            </button>
        </div>
        <h3 class="job-title">${job.title}</h3>
        <p class="job-company">${job.company}</p>
        <div class="job-tags">
            <span class="job-tag location">
                <i data-lucide="map-pin"></i>
                ${job.location}
            </span>
            <span class="job-tag salary">
                <i data-lucide="dollar-sign"></i>
                ${job.salary}
            </span>
            ${job.tags.map(tag => `<span class="job-tag">${tag}</span>`).join('')}
        </div>
        <div class="job-footer">
            <span class="job-date">${job.date}</span>
            <button class="btn btn-primary">Ver Detalhes</button>
        </div>
    `;
    
    return card;
}

function loadJobs() {
    const jobsToShow = jobsData.slice(currentJobsCount, currentJobsCount + jobsPerLoad);
    
    jobsToShow.forEach(job => {
        const jobCard = createJobCard(job);
        jobsGrid.appendChild(jobCard);
    });
    
    currentJobsCount += jobsToShow.length;
    
    if (currentJobsCount >= jobsData.length) {
        loadMoreBtn.style.display = 'none';
    }
    
    lucide.createIcons();
}

function showJobDetails(job) {
    const modal = document.getElementById('jobModal');
    const title = document.getElementById('jobModalTitle');
    const content = document.getElementById('jobModalContent');
    
    title.textContent = job.title;
    
    content.innerHTML = `
        <div class="job-detail-header">
            <div class="job-logo" style="width: 64px; height: 64px; font-size: 24px;">${job.company[0]}</div>
            <div class="job-detail-info">
                <h3>${job.title}</h3>
                <p class="company">${job.company}</p>
                <div class="job-detail-tags">
                    <span class="job-tag location">
                        <i data-lucide="map-pin"></i>
                        ${job.location}
                    </span>
                    <span class="job-tag salary">
                        <i data-lucide="dollar-sign"></i>
                        ${job.salary}
                    </span>
                    <span class="job-tag">${job.type}</span>
                    ${job.tags.map(tag => `<span class="job-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
        
        <div class="job-detail-section">
            <h4>Descrição da Vaga</h4>
            <p>${job.description}</p>
        </div>
        
        <div class="job-detail-section">
            <h4>Requisitos</h4>
            <ul>
                ${job.requirements.map(req => `<li>${req}</li>`).join('')}
            </ul>
        </div>
        
        <div class="job-detail-section">
            <h4>Benefícios</h4>
            <ul>
                ${job.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
            </ul>
        </div>
        
        <div class="job-detail-actions">
            <button class="btn btn-primary">
                <i data-lucide="send"></i>
                Candidatar-se
            </button>
            <button class="btn btn-outline">
                <i data-lucide="bookmark"></i>
                Salvar Vaga
            </button>
            <button class="btn btn-outline">
                <i data-lucide="share-2"></i>
                Compartilhar
            </button>
        </div>
    `;
    
    showModal('job');
    lucide.createIcons();
}

// Load initial jobs
loadJobs();

// Load more jobs
loadMoreBtn.addEventListener('click', loadJobs);

// Search functionality
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const location = document.getElementById('locationSelect').value;
    const area = document.getElementById('areaSelect').value;
    
    // Clear current jobs
    jobsGrid.innerHTML = '';
    currentJobsCount = 0;
    
    // Filter jobs based on search criteria
    const filteredJobs = jobsData.filter(job => {
        const matchesSearch = searchTerm === '' || 
            job.title.toLowerCase().includes(searchTerm) || 
            job.company.toLowerCase().includes(searchTerm) ||
            job.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        
        const matchesLocation = location === '' || 
            job.location.toLowerCase().includes(location) ||
            (location === 'remote' && job.location.toLowerCase().includes('remoto'));
        
        const matchesArea = area === '' || 
            job.tags.some(tag => {
                switch(area) {
                    case 'ti': return ['React', 'JavaScript', 'Python', 'SQL', 'Mobile', 'React Native'].includes(tag);
                    case 'marketing': return ['Marketing', 'Social Media', 'Analytics'].includes(tag);
                    case 'design': return ['Figma', 'Design', 'UX/UI'].includes(tag);
                    case 'financas': return ['Excel', 'Analytics', 'SQL'].includes(tag);
                    case 'rh': return ['Administração', 'Organização'].includes(tag);
                    default: return false;
                }
            });
        
        return matchesSearch && matchesLocation && matchesArea;
    });
    
    // Display filtered jobs
    filteredJobs.forEach(job => {
        const jobCard = createJobCard(job);
        jobsGrid.appendChild(jobCard);
    });
    
    // Hide load more button if showing filtered results
    loadMoreBtn.style.display = filteredJobs.length < jobsData.length ? 'none' : 'block';
    
    lucide.createIcons();
    
    // Show message if no jobs found
    if (filteredJobs.length === 0) {
        jobsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 48px;">
                <i data-lucide="search" style="font-size: 48px; color: var(--gray-400); margin-bottom: 16px;"></i>
                <h3 style="color: var(--gray-600); margin-bottom: 8px;">Nenhuma vaga encontrada</h3>
                <p style="color: var(--gray-500);">Tente ajustar os filtros de busca</p>
            </div>
        `;
        lucide.createIcons();
    }
});

// Form submissions
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Funcionalidade de login em desenvolvimento!');
    closeModal('login');
});

document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Cadastro realizado com sucesso! (Funcionalidade em desenvolvimento)');
    closeModal('register');
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    contactForm.reset();
});

// Bookmark functionality
document.addEventListener('click', (e) => {
    if (e.target.closest('.job-bookmark')) {
        e.stopPropagation();
        const bookmark = e.target.closest('.job-bookmark');
        const icon = bookmark.querySelector('i');
        
        if (icon.hasAttribute('data-lucide')) {
            const currentIcon = icon.getAttribute('data-lucide');
            if (currentIcon === 'bookmark') {
                icon.setAttribute('data-lucide', 'bookmark-check');
                bookmark.style.color = 'var(--primary-color)';
            } else {
                icon.setAttribute('data-lucide', 'bookmark');
                bookmark.style.color = 'var(--gray-400)';
            }
            lucide.createIcons();
        }
    }
});

// Hero section animations
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    
    // Animate stats on scroll
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const numbers = entry.target.querySelectorAll('.stat-number');
                numbers.forEach(number => {
                    const finalValue = number.textContent;
                    const numericValue = parseInt(finalValue.replace(/[^\d]/g, ''));
                    let current = 0;
                    const increment = numericValue / 50;
                    
                    const counter = setInterval(() => {
                        current += increment;
                        if (current >= numericValue) {
                            number.textContent = finalValue;
                            clearInterval(counter);
                        } else {
                            if (finalValue.includes('K')) {
                                number.textContent = Math.floor(current / 1000) + 'K+';
                            } else if (finalValue.includes('%')) {
                                number.textContent = Math.floor(current) + '%';
                            } else {
                                number.textContent = Math.floor(current) + '+';
                            }
                        }
                    }, 20);
                });
                
                statsObserver.unobserve(entry.target);
            }
        });
    });
    
    const statsGrid = document.querySelector('.stats-grid');
    if (statsGrid) {
        statsObserver.observe(statsGrid);
    }
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = 'var(--shadow-md)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});