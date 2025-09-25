// ===== DADOS SIMULADOS =====
const mockJobs = [
    {
        id: 1,
        title: "Estágio em Desenvolvimento Web",
        company: "TechCorp",
        location: "São Paulo, SP",
        modality: "remoto",
        area: "tecnologia",
        salary: 1500,
        workload: "30h",
        duration: "12 meses",
        description: "Oportunidade para estudantes de tecnologia desenvolverem habilidades em desenvolvimento web moderno. Você trabalhará com tecnologias como React, Node.js e bancos de dados relacionais.",
        requirements: "• Cursando Ciência da Computação, Engenharia de Software ou áreas relacionadas\n• Conhecimento básico em HTML, CSS e JavaScript\n• Vontade de aprender e trabalhar em equipe\n• Disponibilidade para 30h semanais",
        benefits: "• Bolsa auxílio de R$ 1.500\n• Vale transporte\n• Vale refeição\n• Ambiente jovem e descontraído\n• Oportunidade de efetivação",
        companyDescription: "A TechCorp é uma startup em crescimento focada em soluções digitais inovadoras. Nossa missão é transformar ideias em produtos digitais que impactem positivamente a vida das pessoas.",
        companySize: "startup",
        publishedDate: "2024-01-15",
        urgent: false,
        featured: true,
        tags: ["React", "JavaScript", "Node.js"]
    },
    {
        id: 2,
        title: "Estágio em Marketing Digital",
        company: "CreativeAgency",
        location: "Rio de Janeiro, RJ",
        modality: "hibrido",
        area: "marketing",
        salary: 1200,
        workload: "20h",
        duration: "6 meses",
        description: "Estágio voltado para estudantes interessados em marketing digital e criação de conteúdo. Você aprenderá sobre estratégias de redes sociais, SEO e campanhas pagas.",
        requirements: "• Cursando Marketing, Publicidade, Comunicação ou áreas relacionadas\n• Conhecimento em redes sociais\n• Criatividade e proatividade\n• Conhecimento básico em ferramentas de design (desejável)",
        benefits: "• Bolsa auxílio de R$ 1.200\n• Vale transporte\n• Flexibilidade de horários\n• Certificações em marketing digital",
        companyDescription: "Agência criativa especializada em marketing digital para pequenas e médias empresas. Trabalhamos com clientes de diversos segmentos, sempre buscando resultados inovadores.",
        companySize: "pequena",
        publishedDate: "2024-01-10",
        urgent: true,
        featured: false,
        tags: ["Marketing Digital", "Redes Sociais", "SEO"]
    },
    {
        id: 3,
        title: "Estágio em Análise Financeira",
        company: "FinanceGroup",
        location: "Belo Horizonte, MG",
        modality: "presencial",
        area: "financeiro",
        salary: 1800,
        workload: "40h",
        duration: "18 meses",
        description: "Oportunidade para estudantes de áreas financeiras desenvolverem conhecimentos em análise de investimentos, planejamento financeiro e mercado de capitais.",
        requirements: "• Cursando Administração, Economia, Ciências Contábeis ou áreas relacionadas\n• Conhecimento em Excel avançado\n• Interesse em mercado financeiro\n• Inglês intermediário",
        benefits: "• Bolsa auxílio de R$ 1.800\n• Vale transporte e refeição\n• Plano de saúde\n• Programa de mentoria\n• Possibilidade de efetivação",
        companyDescription: "Grupo financeiro com mais de 20 anos de experiência no mercado. Oferecemos soluções completas em investimentos e planejamento financeiro para pessoas físicas e jurídicas.",
        companySize: "grande",
        publishedDate: "2024-01-08",
        urgent: false,
        featured: true,
        tags: ["Excel", "Análise Financeira", "Investimentos"]
    },
    {
        id: 4,
        title: "Estágio em Recursos Humanos",
        company: "PeopleFirst",
        location: "Remoto",
        modality: "remoto",
        area: "rh",
        salary: 1000,
        workload: "25h",
        duration: "12 meses",
        description: "Estágio focado em processos de RH, incluindo recrutamento e seleção, treinamento e desenvolvimento, e gestão de pessoas.",
        requirements: "• Cursando Psicologia, Administração, Gestão de RH ou áreas relacionadas\n• Boa comunicação interpessoal\n• Organização e atenção aos detalhes\n• Conhecimento básico em ferramentas de RH",
        benefits: "• Bolsa auxílio de R$ 1.000\n• Trabalho 100% remoto\n• Horários flexíveis\n• Certificações em RH\n• Networking com profissionais da área",
        companyDescription: "Consultoria especializada em gestão de pessoas e desenvolvimento organizacional. Ajudamos empresas a construir culturas mais humanas e produtivas.",
        companySize: "media",
        publishedDate: "2024-01-12",
        urgent: false,
        featured: false,
        tags: ["Recrutamento", "Gestão de Pessoas", "Treinamento"]
    },
    {
        id: 5,
        title: "Estágio em Design UX/UI",
        company: "DesignStudio",
        location: "São Paulo, SP",
        modality: "hibrido",
        area: "design",
        salary: 1400,
        workload: "30h",
        duration: "12 meses",
        description: "Oportunidade para estudantes de design desenvolverem habilidades em UX/UI Design, trabalhando em projetos reais de aplicativos e websites.",
        requirements: "• Cursando Design, Design Gráfico, Sistemas de Informação ou áreas relacionadas\n• Conhecimento em Figma ou Adobe XD\n• Portfolio com projetos de design\n• Interesse em experiência do usuário",
        benefits: "• Bolsa auxílio de R$ 1.400\n• Vale transporte e refeição\n• Acesso a ferramentas de design\n• Mentoria com designers sênior\n• Projetos para portfolio",
        companyDescription: "Estúdio de design especializado em experiência digital. Criamos interfaces intuitivas e experiências memoráveis para startups e empresas consolidadas.",
        companySize: "pequena",
        publishedDate: "2024-01-14",
        urgent: true,
        featured: true,
        tags: ["UX/UI", "Figma", "Design Thinking"]
    }
];

const mockUsers = [
    {
        id: 1,
        email: "joao@email.com",
        password: "123456",
        name: "João Silva",
        type: "candidate",
        phone: "(11) 99999-9999",
        location: "São Paulo, SP",
        birthDate: "2000-05-15",
        course: "Ciência da Computação",
        university: "USP",
        semester: "6",
        graduationYear: "2025",
        skills: "JavaScript, React, Node.js, Python",
        bio: "Estudante apaixonado por tecnologia, sempre em busca de novos desafios e oportunidades de aprendizado."
    },
    {
        id: 2,
        email: "empresa@techcorp.com",
        password: "123456",
        name: "TechCorp",
        type: "company",
        phone: "(11) 88888-8888",
        location: "São Paulo, SP",
        companyName: "TechCorp",
        cnpj: "12.345.678/0001-90",
        industry: "tecnologia",
        companySize: "startup",
        website: "https://www.techcorp.com",
        companyDescription: "Startup inovadora focada em soluções digitais para transformar a experiência do usuário."
    }
];

// ===== SISTEMA DE AUTENTICAÇÃO =====
class AuthSystem {
    constructor() {
        this.currentUser = this.getCurrentUser();
        this.init();
    }

    init() {
        this.updateNavbar();
        this.setupAuthForms();
        this.setupLogout();
    }

    getCurrentUser() {
        const userData = localStorage.getItem('currentUser');
        return userData ? JSON.parse(userData) : null;
    }

    setCurrentUser(user) {
        this.currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.updateNavbar();
    }

    logout() {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
        this.updateNavbar();
        // Redirecionar para página inicial
        if (window.location.pathname !== '/index.html' && window.location.pathname !== '/') {
            window.location.href = 'index.html';
        }
    }

    updateNavbar() {
        const authButtons = document.querySelector('.auth-buttons');
        if (!authButtons) return;

        if (this.currentUser) {
            // Usuário logado
            const userType = this.currentUser.type;
            const userName = this.currentUser.name;
            
            authButtons.innerHTML = `
                ${userType === 'company' ? '<a href="gerenciar-vagas.html" class="btn btn-outline">Painel</a>' : ''}
                <div class="user-menu">
                    <button class="btn btn-outline user-menu-btn" id="userMenuBtn">
                        ${userName} ▼
                    </button>
                    <div class="user-dropdown" id="userDropdown">
                        <a href="editar-perfil.html" class="dropdown-item">Meu Perfil</a>
                        <button class="dropdown-item logout-btn" id="logoutBtn">Sair</button>
                    </div>
                </div>
            `;

            // Setup dropdown menu
            this.setupUserMenu();
        } else {
            // Usuário não logado
            authButtons.innerHTML = `
                <a href="auth.html" class="btn btn-outline">Entrar</a>
                <a href="auth.html?mode=signup" class="btn btn-primary">Cadastrar</a>
            `;
        }
    }

    setupUserMenu() {
        const userMenuBtn = document.getElementById('userMenuBtn');
        const userDropdown = document.getElementById('userDropdown');
        
        if (userMenuBtn && userDropdown) {
            userMenuBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                userDropdown.classList.toggle('active');
            });

            // Fechar dropdown ao clicar fora
            document.addEventListener('click', () => {
                userDropdown.classList.remove('active');
            });

            // Setup logout
            const logoutBtn = document.getElementById('logoutBtn');
            if (logoutBtn) {
                logoutBtn.addEventListener('click', () => {
                    this.logout();
                });
            }
        }
    }

    setupAuthForms() {
        // Setup para página de autenticação
        if (window.location.pathname.includes('auth.html')) {
            this.setupAuthPage();
        }
    }

    setupAuthPage() {
        const loginForm = document.getElementById('loginForm');
        const signupForm = document.getElementById('signupForm');
        const authTabs = document.querySelectorAll('.auth-tab');
        const authForms = document.querySelectorAll('.auth-form');

        // Setup tabs
        authTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const targetForm = tab.dataset.tab;
                
                // Update active tab
                authTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                // Update active form
                authForms.forEach(form => {
                    form.classList.remove('active');
                    if (form.dataset.form === targetForm) {
                        form.classList.add('active');
                    }
                });
            });
        });

        // Check URL parameter for signup mode
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('mode') === 'signup') {
            document.querySelector('[data-tab="signup"]').click();
        }

        // Setup login form
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleLogin();
            });
        }

        // Setup signup form
        if (signupForm) {
            signupForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleSignup();
            });
        }
    }

    handleLogin() {
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        // Simular autenticação
        const user = mockUsers.find(u => u.email === email && u.password === password);
        
        if (user) {
            this.setCurrentUser(user);
            alert(`Login realizado com sucesso! Bem-vindo(a), ${user.name}!`);
            
            // Redirecionar baseado no tipo de usuário
            if (user.type === 'company') {
                window.location.href = 'gerenciar-vagas.html';
            } else {
                window.location.href = 'index.html';
            }
        } else {
            alert('Email ou senha incorretos!');
        }
    }

    handleSignup() {
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const userType = document.getElementById('userType').value;

        if (password !== confirmPassword) {
            alert('As senhas não coincidem!');
            return;
        }

        if (!userType) {
            alert('Por favor, selecione o tipo de perfil!');
            return;
        }

        // Verificar se email já existe
        if (mockUsers.find(u => u.email === email)) {
            alert('Este email já está cadastrado!');
            return;
        }

        // Criar novo usuário
        const newUser = {
            id: mockUsers.length + 1,
            email,
            password,
            name,
            type: userType,
            phone: '',
            location: ''
        };

        // Adicionar campos específicos baseado no tipo
        if (userType === 'candidate') {
            Object.assign(newUser, {
                course: '',
                university: '',
                semester: '',
                graduationYear: '',
                skills: '',
                bio: ''
            });
        } else {
            Object.assign(newUser, {
                companyName: name,
                cnpj: '',
                industry: '',
                companySize: '',
                website: '',
                companyDescription: ''
            });
        }

        mockUsers.push(newUser);
        this.setCurrentUser(newUser);
        
        alert(`Cadastro realizado com sucesso! Bem-vindo(a), ${name}!`);
        
        // Redirecionar para completar perfil
        window.location.href = 'editar-perfil.html';
    }

    setupLogout() {
        // Setup logout buttons em outras páginas
        const logoutBtns = document.querySelectorAll('#logoutBtn');
        logoutBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.logout();
            });
        });
    }

    isLoggedIn() {
        return this.currentUser !== null;
    }

    isCompany() {
        return this.currentUser && this.currentUser.type === 'company';
    }

    isCandidate() {
        return this.currentUser && this.currentUser.type === 'candidate';
    }
}

// ===== SISTEMA DE BUSCA E FILTROS =====
class JobSearch {
    constructor() {
        this.jobs = [...mockJobs];
        this.filteredJobs = [...mockJobs];
        this.currentPage = 1;
        this.jobsPerPage = 10;
        this.init();
    }

    init() {
        this.setupSearchForm();
        this.setupFilters();
        this.renderJobs();
    }

    setupSearchForm() {
        const searchForm = document.getElementById('searchForm');
        if (searchForm) {
            searchForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.performSearch();
            });
        }

        // Setup filtros em tempo real
        const searchInput = document.getElementById('searchInput');
        const areaFilter = document.getElementById('areaFilter');
        const locationFilter = document.getElementById('locationFilter');
        const modalityFilter = document.getElementById('modalityFilter');

        [searchInput, areaFilter, locationFilter, modalityFilter].forEach(element => {
            if (element) {
                element.addEventListener('input', () => {
                    this.applyFilters();
                });
            }
        });
    }

    setupFilters() {
        const sortSelect = document.getElementById('sortSelect');
        if (sortSelect) {
            sortSelect.addEventListener('change', () => {
                this.sortJobs();
            });
        }
    }

    performSearch() {
        const keyword = document.getElementById('searchKeyword')?.value || '';
        const location = document.getElementById('searchLocation')?.value || '';
        const area = document.getElementById('searchArea')?.value || '';

        this.filteredJobs = this.jobs.filter(job => {
            const matchesKeyword = !keyword || 
                job.title.toLowerCase().includes(keyword.toLowerCase()) ||
                job.company.toLowerCase().includes(keyword.toLowerCase()) ||
                job.description.toLowerCase().includes(keyword.toLowerCase());
            
            const matchesLocation = !location || 
                job.location.toLowerCase().includes(location.toLowerCase());
            
            const matchesArea = !area || job.area === area;

            return matchesKeyword && matchesLocation && matchesArea;
        });

        this.currentPage = 1;
        this.renderJobs();
        
        // Redirecionar para página de vagas se não estiver nela
        if (!window.location.pathname.includes('vagas.html')) {
            const params = new URLSearchParams();
            if (keyword) params.set('keyword', keyword);
            if (location) params.set('location', location);
            if (area) params.set('area', area);
            
            window.location.href = `vagas.html?${params.toString()}`;
        }
    }

    applyFilters() {
        const searchTerm = document.getElementById('searchInput')?.value || '';
        const area = document.getElementById('areaFilter')?.value || '';
        const location = document.getElementById('locationFilter')?.value || '';
        const modality = document.getElementById('modalityFilter')?.value || '';

        this.filteredJobs = this.jobs.filter(job => {
            const matchesSearch = !searchTerm || 
                job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                job.company.toLowerCase().includes(searchTerm.toLowerCase());
            
            const matchesArea = !area || job.area === area;
            const matchesLocation = !location || job.location.toLowerCase().includes(location.toLowerCase());
            const matchesModality = !modality || job.modality === modality;

            return matchesSearch && matchesArea && matchesLocation && matchesModality;
        });

        this.currentPage = 1;
        this.renderJobs();
        this.updateResultsCount();
    }

    sortJobs() {
        const sortBy = document.getElementById('sortSelect')?.value || 'recent';
        
        switch (sortBy) {
            case 'recent':
                this.filteredJobs.sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate));
                break;
            case 'company':
                this.filteredJobs.sort((a, b) => a.company.localeCompare(b.company));
                break;
            case 'location':
                this.filteredJobs.sort((a, b) => a.location.localeCompare(b.location));
                break;
        }

        this.renderJobs();
    }

    renderJobs() {
        const jobsGrid = document.getElementById('jobsGrid');
        const jobsList = document.getElementById('jobsList');
        
        if (jobsGrid) {
            // Renderizar para página inicial (grid)
            this.renderJobsGrid(jobsGrid);
        }
        
        if (jobsList) {
            // Renderizar para página de vagas (lista)
            this.renderJobsList(jobsList);
            this.setupPagination();
        }

        this.updateResultsCount();
    }

    renderJobsGrid(container) {
        // Mostrar apenas vagas em destaque na página inicial
        const featuredJobs = this.filteredJobs.filter(job => job.featured).slice(0, 6);
        
        container.innerHTML = featuredJobs.map(job => this.createJobCard(job)).join('');
        this.setupJobCardEvents();
    }

    renderJobsList(container) {
        const startIndex = (this.currentPage - 1) * this.jobsPerPage;
        const endIndex = startIndex + this.jobsPerPage;
        const jobsToShow = this.filteredJobs.slice(startIndex, endIndex);

        container.innerHTML = jobsToShow.map(job => this.createJobListItem(job)).join('');
        this.setupJobCardEvents();
    }

    createJobCard(job) {
        const daysAgo = this.getDaysAgo(job.publishedDate);
        
        return `
            <div class="job-card" data-job-id="${job.id}">
                <div class="job-card-header">
                    <div>
                        <h3 class="job-title">${job.title}</h3>
                        <p class="job-company">${job.company}</p>
                    </div>
                    <div class="job-salary">R$ ${job.salary}</div>
                </div>
                <div class="job-meta">
                    <span>📍 ${job.location}</span>
                    <span>💼 ${this.getModalityLabel(job.modality)}</span>
                    <span>⏰ ${job.workload}</span>
                </div>
                <p class="job-description">${job.description}</p>
                <div class="job-tags">
                    ${job.tags.map(tag => `<span class="job-tag">${tag}</span>`).join('')}
                </div>
                <div class="job-footer">
                    <span class="job-date">${daysAgo} dias atrás</span>
                    <button class="btn btn-primary job-apply-btn">Ver detalhes</button>
                </div>
            </div>
        `;
    }

    createJobListItem(job) {
        const daysAgo = this.getDaysAgo(job.publishedDate);
        
        return `
            <div class="job-list-item" data-job-id="${job.id}">
                <div class="job-info">
                    <h3>${job.title}</h3>
                    <p class="job-company-info">${job.company} • ${job.location}</p>
                    <div class="job-location-info">
                        <span>💼 ${this.getModalityLabel(job.modality)}</span>
                        <span>⏰ ${job.workload}</span>
                        <span>💰 R$ ${job.salary}</span>
                        <span>📅 ${daysAgo} dias atrás</span>
                    </div>
                </div>
                <div class="job-actions">
                    <button class="btn btn-outline btn-small">❤️</button>
                    <button class="btn btn-primary btn-small">Ver detalhes</button>
                </div>
            </div>
        `;
    }

    setupJobCardEvents() {
        const jobCards = document.querySelectorAll('.job-card, .job-list-item');
        jobCards.forEach(card => {
            card.addEventListener('click', (e) => {
                if (!e.target.closest('button')) {
                    const jobId = card.dataset.jobId;
                    window.location.href = `detalhes-vaga.html?id=${jobId}`;
                }
            });
        });

        // Setup apply buttons
        const applyButtons = document.querySelectorAll('.job-apply-btn');
        applyButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const jobId = btn.closest('[data-job-id]').dataset.jobId;
                window.location.href = `detalhes-vaga.html?id=${jobId}`;
            });
        });
    }

    setupPagination() {
        const totalPages = Math.ceil(this.filteredJobs.length / this.jobsPerPage);
        const prevBtn = document.getElementById('prevPage');
        const nextBtn = document.getElementById('nextPage');
        const pageInfo = document.getElementById('pageInfo');

        if (pageInfo) {
            pageInfo.textContent = `Página ${this.currentPage} de ${totalPages}`;
        }

        if (prevBtn) {
            prevBtn.disabled = this.currentPage === 1;
            prevBtn.onclick = () => {
                if (this.currentPage > 1) {
                    this.currentPage--;
                    this.renderJobs();
                }
            };
        }

        if (nextBtn) {
            nextBtn.disabled = this.currentPage === totalPages;
            nextBtn.onclick = () => {
                if (this.currentPage < totalPages) {
                    this.currentPage++;
                    this.renderJobs();
                }
            };
        }
    }

    updateResultsCount() {
        const resultsCount = document.getElementById('resultsCount');
        if (resultsCount) {
            resultsCount.textContent = `${this.filteredJobs.length} vagas encontradas`;
        }
    }

    getModalityLabel(modality) {
        const labels = {
            'presencial': 'Presencial',
            'remoto': 'Remoto',
            'hibrido': 'Híbrido'
        };
        return labels[modality] || modality;
    }

    getDaysAgo(dateString) {
        const publishedDate = new Date(dateString);
        const today = new Date();
        const diffTime = Math.abs(today - publishedDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    }
}

// ===== DETALHES DA VAGA =====
class JobDetails {
    constructor() {
        if (window.location.pathname.includes('detalhes-vaga.html')) {
            this.init();
        }
    }

    init() {
        const urlParams = new URLSearchParams(window.location.search);
        const jobId = parseInt(urlParams.get('id'));
        
        if (jobId) {
            this.loadJobDetails(jobId);
            this.setupApplicationModal();
        } else {
            this.showError();
        }
    }

    loadJobDetails(jobId) {
        // Simular busca da vaga
        const job = mockJobs.find(j => j.id === jobId);
        
        if (!job) {
            this.showError();
            return;
        }

        this.renderJobDetails(job);
        this.loadRelatedJobs(job);
    }

    renderJobDetails(job) {
        const daysAgo = this.getDaysAgo(job.publishedDate);
        
        // Update page title and breadcrumb
        document.title = `${job.title} - EsTagio+`;
        document.getElementById('breadcrumbTitle').textContent = job.title;
        
        // Update job header
        document.getElementById('companyInitial').textContent = job.company.charAt(0);
        document.getElementById('jobTitle').textContent = job.title;
        document.getElementById('companyName').textContent = job.company;
        document.getElementById('jobLocation').textContent = job.location;
        document.getElementById('jobModality').textContent = this.getModalityLabel(job.modality);
        document.getElementById('jobSalary').textContent = `R$ ${job.salary}`;
        document.getElementById('jobDate').textContent = `Publicado há ${daysAgo} dias`;
        
        // Update job content
        document.getElementById('jobDescription').innerHTML = this.formatText(job.description);
        document.getElementById('jobRequirements').innerHTML = this.formatText(job.requirements);
        document.getElementById('jobBenefits').innerHTML = this.formatText(job.benefits);
        document.getElementById('companyDetails').innerHTML = this.formatText(job.companyDescription);
        
        // Update sidebar
        document.getElementById('sidebarArea').textContent = this.getAreaLabel(job.area);
        document.getElementById('sidebarModality').textContent = this.getModalityLabel(job.modality);
        document.getElementById('sidebarDuration').textContent = job.duration;
        document.getElementById('sidebarWorkload').textContent = job.workload;
    }

    loadRelatedJobs(currentJob) {
        const relatedJobs = mockJobs
            .filter(job => job.id !== currentJob.id && job.area === currentJob.area)
            .slice(0, 3);
        
        const container = document.getElementById('relatedJobs');
        if (container) {
            container.innerHTML = relatedJobs.map(job => `
                <div class="related-job-item" onclick="window.location.href='detalhes-vaga.html?id=${job.id}'">
                    <div class="related-job-title">${job.title}</div>
                    <div class="related-job-company">${job.company} • ${job.location}</div>
                </div>
            `).join('');
        }
    }

    setupApplicationModal() {
        const applyBtn = document.getElementById('applyBtn');
        const modal = document.getElementById('applicationModal');
        const closeModal = document.getElementById('closeModal');
        const cancelBtn = document.getElementById('cancelApplication');
        const applicationForm = document.getElementById('applicationForm');

        if (applyBtn) {
            applyBtn.addEventListener('click', () => {
                // Verificar se usuário está logado
                const auth = new AuthSystem();
                if (!auth.isLoggedIn()) {
                    alert('Você precisa estar logado para se candidatar a uma vaga!');
                    window.location.href = 'auth.html';
                    return;
                }

                if (auth.isCompany()) {
                    alert('Empresas não podem se candidatar a vagas!');
                    return;
                }

                modal.classList.add('active');
            });
        }

        [closeModal, cancelBtn].forEach(btn => {
            if (btn) {
                btn.addEventListener('click', () => {
                    modal.classList.remove('active');
                });
            }
        });

        if (applicationForm) {
            applicationForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.submitApplication();
            });
        }

        // Fechar modal ao clicar fora
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('active');
                }
            });
        }
    }

    submitApplication() {
        // Simular envio da candidatura
        alert('Candidatura enviada com sucesso! A empresa entrará em contato em breve.');
        document.getElementById('applicationModal').classList.remove('active');
        
        // Aqui seria feita a chamada para a API
        // fetch('/api/applications', { method: 'POST', body: formData })
    }

    formatText(text) {
        return text.replace(/\n/g, '<br>');
    }

    getModalityLabel(modality) {
        const labels = {
            'presencial': 'Presencial',
            'remoto': 'Remoto',
            'hibrido': 'Híbrido'
        };
        return labels[modality] || modality;
    }

    getAreaLabel(area) {
        const labels = {
            'tecnologia': 'Tecnologia',
            'marketing': 'Marketing',
            'financeiro': 'Financeiro',
            'rh': 'Recursos Humanos',
            'design': 'Design'
        };
        return labels[area] || area;
    }

    getDaysAgo(dateString) {
        const publishedDate = new Date(dateString);
        const today = new Date();
        const diffTime = Math.abs(today - publishedDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    }

    showError() {
        document.querySelector('.job-detail-container').innerHTML = `
            <div style="text-align: center; padding: 2rem;">
                <h2>Vaga não encontrada</h2>
                <p>A vaga que você está procurando não existe ou foi removida.</p>
                <a href="vagas.html" class="btn btn-primary">Ver todas as vagas</a>
            </div>
        `;
    }
}

// ===== GERENCIAMENTO DE VAGAS (EMPRESA) =====
class JobManagement {
    constructor() {
        if (window.location.pathname.includes('gerenciar-vagas.html')) {
            this.init();
        }
    }

    init() {
        // Verificar se é empresa logada
        const auth = new AuthSystem();
        if (!auth.isLoggedIn() || !auth.isCompany()) {
            alert('Acesso restrito para empresas!');
            window.location.href = 'auth.html';
            return;
        }

        this.loadDashboardData();
        this.setupFilters();
        this.setupDeleteModal();
    }

    loadDashboardData() {
        // Simular dados da empresa
        const companyJobs = mockJobs.filter(job => job.company === 'TechCorp'); // Filtrar por empresa logada
        
        // Atualizar estatísticas
        document.getElementById('totalJobs').textContent = companyJobs.length;
        document.getElementById('totalApplications').textContent = companyJobs.length * 15; // Simular
        document.getElementById('totalViews').textContent = companyJobs.length * 120; // Simular
        document.getElementById('totalHired').textContent = Math.floor(companyJobs.length * 0.3); // Simular
        
        this.renderJobsTable(companyJobs);
    }

    renderJobsTable(jobs) {
        const tbody = document.getElementById('jobsTableBody');
        if (!tbody) return;

        tbody.innerHTML = jobs.map(job => {
            const daysAgo = this.getDaysAgo(job.publishedDate);
            const status = this.getJobStatus(job);
            
            return `
                <tr>
                    <td>
                        <div class="job-title-cell">
                            <div>${job.title}</div>
                            <div class="job-area">${this.getAreaLabel(job.area)}</div>
                        </div>
                    </td>
                    <td>
                        <span class="status-badge status-${status.toLowerCase()}">${status}</span>
                    </td>
                    <td>${Math.floor(Math.random() * 50) + 5}</td>
                    <td>${Math.floor(Math.random() * 500) + 100}</td>
                    <td>${daysAgo} dias atrás</td>
                    <td>
                        <div class="action-buttons">
                            <button class="action-btn edit-btn" onclick="window.location.href='editar-vaga.html?id=${job.id}'">
                                Editar
                            </button>
                            <button class="action-btn delete-btn" onclick="jobManagement.confirmDelete(${job.id})">
                                Excluir
                            </button>
                        </div>
                    </td>
                </tr>
            `;
        }).join('');
    }

    setupFilters() {
        const statusFilter = document.getElementById('statusFilter');
        if (statusFilter) {
            statusFilter.addEventListener('change', () => {
                this.applyFilters();
            });
        }
    }

    applyFilters() {
        const statusFilter = document.getElementById('statusFilter').value;
        let filteredJobs = mockJobs.filter(job => job.company === 'TechCorp');
        
        if (statusFilter) {
            filteredJobs = filteredJobs.filter(job => {
                const status = this.getJobStatus(job).toLowerCase();
                return status === statusFilter;
            });
        }
        
        this.renderJobsTable(filteredJobs);
    }

    setupDeleteModal() {
        const modal = document.getElementById('deleteModal');
        const closeBtn = document.getElementById('closeDeleteModal');
        const cancelBtn = document.getElementById('cancelDelete');
        const confirmBtn = document.getElementById('confirmDelete');

        [closeBtn, cancelBtn].forEach(btn => {
            if (btn) {
                btn.addEventListener('click', () => {
                    modal.classList.remove('active');
                });
            }
        });

        if (confirmBtn) {
            confirmBtn.addEventListener('click', () => {
                this.deleteJob();
            });
        }
    }

    confirmDelete(jobId) {
        this.jobToDelete = jobId;
        document.getElementById('deleteModal').classList.add('active');
    }

    deleteJob() {
        if (this.jobToDelete) {
            // Simular exclusão
            alert('Vaga excluída com sucesso!');
            document.getElementById('deleteModal').classList.remove('active');
            this.loadDashboardData(); // Recarregar dados
            
            // Aqui seria feita a chamada para a API
            // fetch(`/api/jobs/${this.jobToDelete}`, { method: 'DELETE' })
        }
    }

    getJobStatus(job) {
        // Simular status baseado na data
        const daysAgo = this.getDaysAgo(job.publishedDate);
        if (daysAgo > 30) return 'Closed';
        if (daysAgo > 20) return 'Paused';
        return 'Active';
    }

    getAreaLabel(area) {
        const labels = {
            'tecnologia': 'Tecnologia',
            'marketing': 'Marketing',
            'financeiro': 'Financeiro',
            'rh': 'Recursos Humanos',
            'design': 'Design'
        };
        return labels[area] || area;
    }

    getDaysAgo(dateString) {
        const publishedDate = new Date(dateString);
        const today = new Date();
        const diffTime = Math.abs(today - publishedDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    }
}

// ===== EDITOR DE VAGAS =====
class JobEditor {
    constructor() {
        if (window.location.pathname.includes('editar-vaga.html')) {
            this.init();
        }
    }

    init() {
        // Verificar se é empresa logada
        const auth = new AuthSystem();
        if (!auth.isLoggedIn() || !auth.isCompany()) {
            alert('Acesso restrito para empresas!');
            window.location.href = 'auth.html';
            return;
        }

        this.setupForm();
        this.checkEditMode();
    }

    setupForm() {
        const jobForm = document.getElementById('jobForm');
        const saveAsDraftBtn = document.getElementById('saveAsDraft');

        if (jobForm) {
            jobForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.saveJob(false);
            });
        }

        if (saveAsDraftBtn) {
            saveAsDraftBtn.addEventListener('click', () => {
                this.saveJob(true);
            });
        }
    }

    checkEditMode() {
        const urlParams = new URLSearchParams(window.location.search);
        const jobId = parseInt(urlParams.get('id'));
        
        if (jobId) {
            // Modo edição
            this.loadJobForEdit(jobId);
            document.getElementById('pageTitle').textContent = 'Editar Vaga';
            document.getElementById('breadcrumbTitle').textContent = 'Editar Vaga';
        }
    }

    loadJobForEdit(jobId) {
        const job = mockJobs.find(j => j.id === jobId);
        if (!job) {
            alert('Vaga não encontrada!');
            window.location.href = 'gerenciar-vagas.html';
            return;
        }

        // Preencher formulário
        document.getElementById('jobTitle').value = job.title;
        document.getElementById('jobArea').value = job.area;
        document.getElementById('jobLocation').value = job.location;
        document.getElementById('jobModality').value = job.modality;
        document.getElementById('jobSalary').value = job.salary;
        document.getElementById('jobWorkload').value = job.workload;
        document.getElementById('jobDuration').value = job.duration;
        document.getElementById('jobDescription').value = job.description;
        document.getElementById('jobRequirements').value = job.requirements;
        document.getElementById('jobBenefits').value = job.benefits;
        document.getElementById('companyName').value = job.company;
        document.getElementById('companyDescription').value = job.companyDescription;
        document.getElementById('jobUrgent').checked = job.urgent;
        document.getElementById('jobFeatured').checked = job.featured;
    }

    saveJob(isDraft) {
        const formData = this.getFormData();
        
        if (!this.validateForm(formData)) {
            return;
        }

        // Simular salvamento
        const action = isDraft ? 'salva como rascunho' : 'publicada';
        alert(`Vaga ${action} com sucesso!`);
        
        window.location.href = 'gerenciar-vagas.html';
        
        // Aqui seria feita a chamada para a API
        // const method = this.isEditMode ? 'PUT' : 'POST';
        // fetch('/api/jobs', { method, body: JSON.stringify(formData) })
    }

    getFormData() {
        return {
            title: document.getElementById('jobTitle').value,
            area: document.getElementById('jobArea').value,
            location: document.getElementById('jobLocation').value,
            modality: document.getElementById('jobModality').value,
            salary: document.getElementById('jobSalary').value,
            workload: document.getElementById('jobWorkload').value,
            duration: document.getElementById('jobDuration').value,
            description: document.getElementById('jobDescription').value,
            requirements: document.getElementById('jobRequirements').value,
            benefits: document.getElementById('jobBenefits').value,
            companyName: document.getElementById('companyName').value,
            companySize: document.getElementById('companySize').value,
            companyDescription: document.getElementById('companyDescription').value,
            urgent: document.getElementById('jobUrgent').checked,
            featured: document.getElementById('jobFeatured').checked
        };
    }

    validateForm(data) {
        const required = ['title', 'area', 'location', 'modality', 'description', 'requirements', 'companyName'];
        
        for (let field of required) {
            if (!data[field] || data[field].trim() === '') {
                alert(`Por favor, preencha o campo obrigatório: ${this.getFieldLabel(field)}`);
                return false;
            }
        }
        
        return true;
    }

    getFieldLabel(field) {
        const labels = {
            'title': 'Título da Vaga',
            'area': 'Área',
            'location': 'Localização',
            'modality': 'Modalidade',
            'description': 'Descrição',
            'requirements': 'Requisitos',
            'companyName': 'Nome da Empresa'
        };
        return labels[field] || field;
    }
}

// ===== EDITOR DE PERFIL =====
class ProfileEditor {
    constructor() {
        if (window.location.pathname.includes('editar-perfil.html')) {
            this.init();
        }
    }

    init() {
        // Verificar se usuário está logado
        const auth = new AuthSystem();
        if (!auth.isLoggedIn()) {
            alert('Você precisa estar logado para acessar esta página!');
            window.location.href = 'auth.html';
            return;
        }

        this.currentUser = auth.currentUser;
        this.setupProfile();
        this.setupTabs();
        this.setupForms();
        this.setupDeleteAccount();
    }

    setupProfile() {
        // Atualizar informações do cabeçalho
        const initials = this.currentUser.name.split(' ').map(n => n[0]).join('').toUpperCase();
        document.getElementById('avatarInitials').textContent = initials;
        document.getElementById('profileName').textContent = this.currentUser.name;
        
        const typeLabel = this.currentUser.type === 'candidate' ? 'Candidato' : 'Empresa';
        document.getElementById('profileType').textContent = typeLabel;

        // Mostrar/ocultar tabs baseado no tipo de usuário
        if (this.currentUser.type === 'candidate') {
            document.getElementById('candidateTab').style.display = 'block';
            document.getElementById('candidateStats').style.display = 'block';
            document.getElementById('appliedJobs').textContent = Math.floor(Math.random() * 20) + 1;
        } else {
            document.getElementById('companyTab').style.display = 'block';
            document.getElementById('companyStats').style.display = 'block';
            document.getElementById('publishedJobs').textContent = mockJobs.filter(j => j.company === this.currentUser.name).length;
        }

        this.loadUserData();
    }

    setupTabs() {
        const tabs = document.querySelectorAll('.profile-tab');
        const contents = document.querySelectorAll('.tab-content');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const targetTab = tab.dataset.tab;
                
                // Update active tab
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                // Update active content
                contents.forEach(content => {
                    content.classList.remove('active');
                    if (content.id === `${targetTab}Tab` || content.id === `${targetTab}ProfileTab`) {
                        content.classList.add('active');
                    }
                });
            });
        });
    }

    setupForms() {
        // Formulário geral
        const generalForm = document.getElementById('generalForm');
        if (generalForm) {
            generalForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.saveGeneralInfo();
            });
        }

        // Formulário do candidato
        const candidateForm = document.getElementById('candidateForm');
        if (candidateForm) {
            candidateForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.saveCandidateProfile();
            });
        }

        // Formulário da empresa
        const companyForm = document.getElementById('companyForm');
        if (companyForm) {
            companyForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.saveCompanyProfile();
            });
        }

        // Formulário de segurança
        const securityForm = document.getElementById('securityForm');
        if (securityForm) {
            securityForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.changePassword();
            });
        }
    }

    loadUserData() {
        // Carregar dados gerais
        document.getElementById('fullName').value = this.currentUser.name || '';
        document.getElementById('email').value = this.currentUser.email || '';
        document.getElementById('phone').value = this.currentUser.phone || '';
        document.getElementById('birthDate').value = this.currentUser.birthDate || '';
        document.getElementById('location').value = this.currentUser.location || '';

        // Carregar dados específicos do tipo de usuário
        if (this.currentUser.type === 'candidate') {
            document.getElementById('course').value = this.currentUser.course || '';
            document.getElementById('university').value = this.currentUser.university || '';
            document.getElementById('semester').value = this.currentUser.semester || '';
            document.getElementById('graduationYear').value = this.currentUser.graduationYear || '';
            document.getElementById('skills').value = this.currentUser.skills || '';
            document.getElementById('bio').value = this.currentUser.bio || '';
        } else {
            document.getElementById('companyName').value = this.currentUser.companyName || '';
            document.getElementById('cnpj').value = this.currentUser.cnpj || '';
            document.getElementById('industry').value = this.currentUser.industry || '';
            document.getElementById('companySize').value = this.currentUser.companySize || '';
            document.getElementById('website').value = this.currentUser.website || '';
            document.getElementById('companyDescription').value = this.currentUser.companyDescription || '';
        }
    }

    saveGeneralInfo() {
        // Atualizar dados do usuário
        this.currentUser.name = document.getElementById('fullName').value;
        this.currentUser.email = document.getElementById('email').value;
        this.currentUser.phone = document.getElementById('phone').value;
        this.currentUser.birthDate = document.getElementById('birthDate').value;
        this.currentUser.location = document.getElementById('location').value;

        this.updateUser();
        alert('Informações gerais atualizadas com sucesso!');
    }

    saveCandidateProfile() {
        this.currentUser.course = document.getElementById('course').value;
        this.currentUser.university = document.getElementById('university').value;
        this.currentUser.semester = document.getElementById('semester').value;
        this.currentUser.graduationYear = document.getElementById('graduationYear').value;
        this.currentUser.skills = document.getElementById('skills').value;
        this.currentUser.bio = document.getElementById('bio').value;

        this.updateUser();
        alert('Perfil do candidato atualizado com sucesso!');
    }

    saveCompanyProfile() {
        this.currentUser.companyName = document.getElementById('companyName').value;
        this.currentUser.cnpj = document.getElementById('cnpj').value;
        this.currentUser.industry = document.getElementById('industry').value;
        this.currentUser.companySize = document.getElementById('companySize').value;
        this.currentUser.website = document.getElementById('website').value;
        this.currentUser.companyDescription = document.getElementById('companyDescription').value;

        this.updateUser();
        alert('Perfil da empresa atualizado com sucesso!');
    }

    changePassword() {
        const currentPassword = document.getElementById('currentPassword').value;
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmNewPassword').value;

        if (currentPassword !== this.currentUser.password) {
            alert('Senha atual incorreta!');
            return;
        }

        if (newPassword !== confirmPassword) {
            alert('As senhas não coincidem!');
            return;
        }

        if (newPassword.length < 6) {
            alert('A nova senha deve ter pelo menos 6 caracteres!');
            return;
        }

        this.currentUser.password = newPassword;
        this.updateUser();
        alert('Senha alterada com sucesso!');
        
        // Limpar campos
        document.getElementById('securityForm').reset();
    }

    updateUser() {
        // Atualizar no localStorage
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
        
        // Atualizar no array de usuários simulados
        const userIndex = mockUsers.findIndex(u => u.id === this.currentUser.id);
        if (userIndex !== -1) {
            mockUsers[userIndex] = { ...this.currentUser };
        }

        // Atualizar navbar
        const auth = new AuthSystem();
        auth.currentUser = this.currentUser;
        auth.updateNavbar();
        
        // Aqui seria feita a chamada para a API
        // fetch('/api/users/profile', { method: 'PUT', body: JSON.stringify(this.currentUser) })
    }

    setupDeleteAccount() {
        const deleteBtn = document.getElementById('deleteAccountBtn');
        const modal = document.getElementById('deleteAccountModal');
        const closeBtn = document.getElementById('closeDeleteAccountModal');
        const cancelBtn = document.getElementById('cancelDeleteAccount');
        const confirmBtn = document.getElementById('confirmDeleteAccount');

        if (deleteBtn) {
            deleteBtn.addEventListener('click', () => {
                modal.classList.add('active');
            });
        }

        [closeBtn, cancelBtn].forEach(btn => {
            if (btn) {
                btn.addEventListener('click', () => {
                    modal.classList.remove('active');
                });
            }
        });

        if (confirmBtn) {
            confirmBtn.addEventListener('click', () => {
                this.deleteAccount();
            });
        }
    }

    deleteAccount() {
        const password = document.getElementById('deleteConfirmPassword').value;
        
        if (password !== this.currentUser.password) {
            alert('Senha incorreta!');
            return;
        }

        if (confirm('Tem certeza absoluta que deseja excluir sua conta? Esta ação não pode ser desfeita!')) {
            // Simular exclusão da conta
            localStorage.removeItem('currentUser');
            alert('Conta excluída com sucesso!');
            window.location.href = 'index.html';
            
            // Aqui seria feita a chamada para a API
            // fetch('/api/users/account', { method: 'DELETE' })
        }
    }
}

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar sistemas
    window.authSystem = new AuthSystem();
    window.jobSearch = new JobSearch();
    window.jobDetails = new JobDetails();
    window.jobManagement = new JobManagement();
    window.jobEditor = new JobEditor();
    window.profileEditor = new ProfileEditor();

    // Aplicar parâmetros da URL na página de vagas
    if (window.location.pathname.includes('vagas.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const keyword = urlParams.get('keyword');
        const location = urlParams.get('location');
        const area = urlParams.get('area');

        if (keyword) document.getElementById('searchInput').value = keyword;
        if (location) document.getElementById('locationFilter').value = location;
        if (area) document.getElementById('areaFilter').value = area;

        if (keyword || location || area) {
            window.jobSearch.applyFilters();
        }
    }
});

// Expor instâncias globalmente para uso em eventos inline
window.jobManagement = null;
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('gerenciar-vagas.html')) {
        window.jobManagement = new JobManagement();
    }
});