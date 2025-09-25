// SIMULAÇÃO DAS VAGAS
const mockData = {
    jobs: [
        {
            id: 1,
            title: "Estágio em Desenvolvimento Front-end",
            company: "TechCorp Soluções",
            area: "tecnologia",
            location: "São Paulo, SP",
            modality: "hibrido",
            salary: 1500,
            workload: "30h",
            duration: "12 meses",
            description: "Oportunidade única para estagiar em uma das maiores empresas de tecnologia do país. Você trabalhará com React, TypeScript e tecnologias modernas de desenvolvimento web.",
            requirements: "Cursando Ciência da Computação, Engenharia de Software ou áreas afins. Conhecimentos básicos em HTML, CSS e JavaScript. Interesse em aprender React e TypeScript.",
            benefits: "Bolsa auxílio de R$ 1.500, vale transporte, vale refeição, plano de saúde, ambiente descontraído e muito aprendizado.",
            companyDescription: "A TechCorp é líder em soluções tecnológicas inovadoras, com mais de 500 funcionários e presença em todo o Brasil.",
            companySize: "media",
            publishedAt: "2024-01-15",
            urgent: false,
            featured: true,
            status: "active",
            views: 156,
            applications: 23
        },
        {
            id: 2,
            title: "Estágio em Marketing Digital",
            company: "Agência Criativa Plus",
            area: "marketing",
            location: "Rio de Janeiro, RJ",
            modality: "remoto",
            salary: 1200,
            workload: "20h",
            duration: "6 meses",
            description: "Venha fazer parte da nossa equipe de marketing digital! Você participará de campanhas para grandes marcas e aprenderá sobre redes sociais, Google Ads e analytics.",
            requirements: "Cursando Marketing, Comunicação ou áreas relacionadas. Conhecimento básico em redes sociais. Criatividade e proatividade.",
            benefits: "Bolsa auxílio de R$ 1.200, trabalho remoto, horário flexível, mentorias semanais.",
            companyDescription: "Agência especializada em marketing digital com 8 anos de mercado e clientes de diversos segmentos.",
            companySize: "pequena",
            publishedAt: "2024-01-18",
            urgent: true,
            featured: false,
            status: "active",
            views: 89,
            applications: 15
        },
        {
            id: 3,
            title: "Estágio em Análise Financeira",
            company: "Banco Central de Investimentos",
            area: "financeiro",
            location: "São Paulo, SP",
            modality: "presencial",
            salary: 2000,
            workload: "40h",
            duration: "18 meses",
            description: "Oportunidade no setor financeiro para aprender sobre investimentos, análise de mercado e gestão de portfólios. Ambiente corporativo de alto nível.",
            requirements: "Cursando Economia, Administração, Engenharia ou áreas afins. Conhecimentos básicos em Excel. Inglês intermediário.",
            benefits: "Bolsa auxílio de R$ 2.000, vale transporte, vale refeição, convênio médico, participação nos resultados.",
            companyDescription: "Uma das principais instituições financeiras do país, com mais de 50 anos de história e solidez no mercado.",
            companySize: "grande",
            publishedAt: "2024-01-20",
            urgent: false,
            featured: true,
            status: "active",
            views: 234,
            applications: 45
        },
        {
            id: 4,
            title: "Estágio em UX/UI Design",
            company: "Design Studio",
            area: "design",
            location: "Belo Horizonte, MG",
            modality: "hibrido",
            salary: 1300,
            workload: "30h",
            duration: "12 meses",
            description: "Estágio em design de interfaces e experiência do usuário. Trabalhe em projetos reais para startups e empresas consolidadas.",
            requirements: "Cursando Design Gráfico, Design de Produto ou áreas relacionadas. Portfolio básico. Conhecimentos em Figma ou Adobe XD.",
            benefits: "Bolsa auxílio de R$ 1.300, kit Apple para trabalho, ambiente criativo, mentoria com designers sênior.",
            companyDescription: "Studio boutique de design com foco em inovação e experiência do usuário, atendendo clientes nacionais e internacionais.",
            companySize: "pequena",
            publishedAt: "2024-01-22",
            urgent: false,
            featured: false,
            status: "active",
            views: 67,
            applications: 12
        },
        {
            id: 5,
            title: "Estágio em Recursos Humanos",
            company: "RH Inovação Ltda",
            area: "rh",
            location: "Remoto",
            modality: "remoto",
            salary: 1100,
            workload: "25h",
            duration: "10 meses",
            description: "Aprenda sobre recrutamento, seleção, treinamento e desenvolvimento de pessoas. Participe de processos seletivos e projetos de cultura organizacional.",
            requirements: "Cursando Psicologia, Administração, RH ou áreas afins. Boa comunicação. Interesse em desenvolvimento humano.",
            benefits: "Bolsa auxílio de R$ 1.100, trabalho 100% remoto, curso de especialização incluso.",
            companyDescription: "Consultoria em RH focada em transformação digital e inovação em gestão de pessoas.",
            companySize: "startup",
            publishedAt: "2024-01-25",
            urgent: true,
            featured: false,
            status: "active",
            views: 43,
            applications: 8
        }
    ],
    
    // User data simulation
    currentUser: null,
    
    // Company jobs (for management dashboard)
    companyJobs: [
        {
            id: 1,
            title: "Estágio em Desenvolvimento Front-end",
            area: "Tecnologia",
            status: "active",
            applications: 23,
            views: 156,
            publishedAt: "2024-01-15"
        },
        {
            id: 2,
            title: "Estágio em Backend Development",
            area: "Tecnologia",
            status: "paused",
            applications: 8,
            views: 42,
            publishedAt: "2024-01-10"
        }
    ],
    
    // ESTATISTICAS SIMULADAS
    stats: {
        totalJobs: 12,
        totalApplications: 156,
        totalViews: 1247,
        totalHired: 3
    }
};

// Application state
const appState = {
    currentPage: 1,
    itemsPerPage: 10,
    currentFilters: {},
    selectedJob: null
};

// Utility functions
const utils = {
    // Format date to Brazilian format
    formatDate(dateString) {
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now - date);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays === 1) return "Publicado há 1 dia";
        if (diffDays <= 7) return `Publicado há ${diffDays} dias`;
        return `Publicado em ${date.toLocaleDateString('pt-BR')}`;
    },
    
    // Format salary
    formatSalary(salary) {
        if (!salary) return "A combinar";
        return `R$ ${salary.toLocaleString('pt-BR')}`;
    },
    
    // Get company initials for avatar
    getCompanyInitials(companyName) {
        return companyName.split(' ').map(word => word[0]).join('').substring(0, 2).toUpperCase();
    },
    
    // Get job URL with ID
    getJobUrl(jobId) {
        return `detalhes-vaga.html?id=${jobId}`;
    },
    
    // Get URL parameters
    getUrlParams() {
        const params = new URLSearchParams(window.location.search);
        return Object.fromEntries(params.entries());
    },
    
    // Show notification
    showNotification(message, type = 'success') {
        // TODO: Future API integration point for notifications
        console.log(`Notification (${type}):`, message);
        alert(message); // Temporary implementation
    },
    
    // Simulate API delay
    async simulateApiCall(data, delay = 500) {
        return new Promise(resolve => {
            setTimeout(() => resolve(data), delay);
        });
    }
};

// API simulation functions (Future integration points)
const api = {
    // Future: Replace with real API calls
    async fetchJobs(filters = {}) {
        // TODO: Replace with actual API call
        // const response = await fetch('/api/jobs', { method: 'GET', headers: {...} });
        
        let jobs = [...mockData.jobs];
        
        // Apply filters
        if (filters.keyword) {
            jobs = jobs.filter(job => 
                job.title.toLowerCase().includes(filters.keyword.toLowerCase()) ||
                job.company.toLowerCase().includes(filters.keyword.toLowerCase()) ||
                job.description.toLowerCase().includes(filters.keyword.toLowerCase())
            );
        }
        
        if (filters.location) {
            jobs = jobs.filter(job => 
                job.location.toLowerCase().includes(filters.location.toLowerCase())
            );
        }
        
        if (filters.area && filters.area !== '') {
            jobs = jobs.filter(job => job.area === filters.area);
        }
        
        if (filters.modality && filters.modality !== '') {
            jobs = jobs.filter(job => job.modality === filters.modality);
        }
        
        return utils.simulateApiCall(jobs);
    },
    
    async fetchJobById(id) {
        // TODO: Replace with actual API call
        // const response = await fetch(`/api/jobs/${id}`, { method: 'GET', headers: {...} });
        
        const job = mockData.jobs.find(job => job.id == id);
        return utils.simulateApiCall(job);
    },
    
    async submitApplication(jobId, applicationData) {
        // TODO: Replace with actual API call
        // const response = await fetch(`/api/jobs/${jobId}/apply`, { 
        //     method: 'POST', 
        //     body: JSON.stringify(applicationData),
        //     headers: { 'Content-Type': 'application/json' }
        // });
        
        console.log('Application submitted:', { jobId, applicationData });
        return utils.simulateApiCall({ success: true, message: 'Candidatura enviada com sucesso!' });
    },
    
    async login(credentials) {
        // TODO: Replace with actual API call
        // const response = await fetch('/api/auth/login', { 
        //     method: 'POST', 
        //     body: JSON.stringify(credentials),
        //     headers: { 'Content-Type': 'application/json' }
        // });
        
        console.log('Login attempt:', credentials);
        
        // Simulate successful login
        mockData.currentUser = {
            id: 1,
            name: credentials.email.split('@')[0],
            email: credentials.email,
            type: 'candidate' // or 'company'
        };
        
        return utils.simulateApiCall({ 
            success: true, 
            user: mockData.currentUser,
            token: 'mock-jwt-token'
        });
    },
    
    async signup(userData) {
        // TODO: Replace with actual API call
        // const response = await fetch('/api/auth/signup', { 
        //     method: 'POST', 
        //     body: JSON.stringify(userData),
        //     headers: { 'Content-Type': 'application/json' }
        // });
        
        console.log('Signup attempt:', userData);
        
        return utils.simulateApiCall({ 
            success: true, 
            message: 'Conta criada com sucesso!'
        });
    },
    
    async createJob(jobData) {
        // TODO: Replace with actual API call
        // const response = await fetch('/api/jobs', { 
        //     method: 'POST', 
        //     body: JSON.stringify(jobData),
        //     headers: { 'Content-Type': 'application/json' }
        // });
        
        console.log('Job creation:', jobData);
        
        const newJob = {
            id: Date.now(), // Temporary ID generation
            ...jobData,
            publishedAt: new Date().toISOString().split('T')[0],
            views: 0,
            applications: 0,
            status: 'active'
        };
        
        mockData.jobs.unshift(newJob);
        
        return utils.simulateApiCall({ 
            success: true, 
            job: newJob,
            message: 'Vaga publicada com sucesso!'
        });
    },
    
    async updateJob(jobId, jobData) {
        // TODO: Replace with actual API call
        console.log('Job update:', { jobId, jobData });
        
        return utils.simulateApiCall({ 
            success: true, 
            message: 'Vaga atualizada com sucesso!'
        });
    },
    
    async deleteJob(jobId) {
        // TODO: Replace with actual API call
        console.log('Job deletion:', jobId);
        
        return utils.simulateApiCall({ 
            success: true, 
            message: 'Vaga excluída com sucesso!'
        });
    }
};

// Page-specific functionality
const pages = {
    // Homepage functionality
    home: {
        init() {
            this.loadFeaturedJobs();
            this.initSearchForm();
            this.initSmoothScroll();
        },
        
        async loadFeaturedJobs() {
            const jobsGrid = document.getElementById('jobsGrid');
            if (!jobsGrid) return;
            
            try {
                const jobs = await api.fetchJobs();
                const featuredJobs = jobs.filter(job => job.featured).slice(0, 6);
                
                jobsGrid.innerHTML = featuredJobs.map(job => `
                    <div class="job-card" onclick="window.location.href='${utils.getJobUrl(job.id)}'">
                        <div class="job-card-header">
                            <div>
                                <h3 class="job-title">${job.title}</h3>
                                <p class="job-company">${job.company}</p>
                            </div>
                            <div class="job-salary">${utils.formatSalary(job.salary)}</div>
                        </div>
                        <div class="job-meta">
                            <span>📍 ${job.location}</span>
                            <span>💼 ${job.modality}</span>
                            <span>⏰ ${job.workload}</span>
                        </div>
                        <div class="job-description">${job.description}</div>
                        <div class="job-tags">
                            <span class="job-tag">${job.area}</span>
                            ${job.urgent ? '<span class="job-tag" style="background: var(--accent-100); color: var(--accent-700);">Urgente</span>' : ''}
                        </div>
                        <div class="job-footer">
                            <span class="job-date">${utils.formatDate(job.publishedAt)}</span>
                            <button class="btn btn-primary job-apply-btn" onclick="event.stopPropagation(); window.location.href='${utils.getJobUrl(job.id)}'">Ver detalhes</button>
                        </div>
                    </div>
                `).join('');
            } catch (error) {
                console.error('Error loading featured jobs:', error);
                jobsGrid.innerHTML = '<p>Erro ao carregar vagas em destaque.</p>';
            }
        },
        
        initSearchForm() {
            const searchForm = document.getElementById('searchForm');
            if (!searchForm) return;
            
            searchForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const formData = new FormData(searchForm);
                const filters = {
                    keyword: document.getElementById('searchKeyword').value,
                    location: document.getElementById('searchLocation').value,
                    area: document.getElementById('searchArea').value
                };
                
                // Redirect to jobs page with filters
                const params = new URLSearchParams();
                Object.entries(filters).forEach(([key, value]) => {
                    if (value) params.append(key, value);
                });
                
                window.location.href = `vagas.html${params.toString() ? '?' + params.toString() : ''}`;
            });
        },
        
        initSmoothScroll() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            });
        }
    },
    
    // Authentication page functionality
    auth: {
        init() {
            this.initTabs();
            this.initForms();
            this.checkUrlParams();
        },
        
        initTabs() {
            const tabs = document.querySelectorAll('.auth-tab');
            const forms = document.querySelectorAll('.auth-form');
            
            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    const targetForm = tab.getAttribute('data-tab');
                    
                    // Update tabs
                    tabs.forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');
                    
                    // Update forms
                    forms.forEach(f => f.classList.remove('active'));
                    document.querySelector(`[data-form="${targetForm}"]`).classList.add('active');
                    
                    // Update footer links
                    this.updateFooterLinks(targetForm);
                });
            });
            
            // Switch form links
            document.querySelectorAll('.switch-form').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetTab = link.getAttribute('data-target');
                    const tabButton = document.querySelector(`[data-tab="${targetTab}"]`);
                    if (tabButton) tabButton.click();
                });
            });
        },
        
        initForms() {
            // Login form
            const loginForm = document.getElementById('loginForm');
            if (loginForm) {
                loginForm.addEventListener('submit', async (e) => {
                    e.preventDefault();
                    
                    const formData = new FormData(loginForm);
                    const credentials = {
                        email: formData.get('loginEmail') || document.getElementById('loginEmail').value,
                        password: formData.get('loginPassword') || document.getElementById('loginPassword').value
                    };
                    
                    try {
                        const result = await api.login(credentials);
                        if (result.success) {
                            utils.showNotification('Login realizado com sucesso!');
                            
                            // Redirect based on user type
                            if (result.user.type === 'company') {
                                window.location.href = 'gerenciar-vagas.html';
                            } else {
                                window.location.href = 'index.html';
                            }
                        }
                    } catch (error) {
                        utils.showNotification('Erro ao fazer login. Tente novamente.', 'error');
                    }
                });
            }
            
            // Signup form
            const signupForm = document.getElementById('signupForm');
            if (signupForm) {
                signupForm.addEventListener('submit', async (e) => {
                    e.preventDefault();
                    
                    const formData = new FormData(signupForm);
                    const userData = {
                        name: formData.get('signupName') || document.getElementById('signupName').value,
                        email: formData.get('signupEmail') || document.getElementById('signupEmail').value,
                        password: formData.get('signupPassword') || document.getElementById('signupPassword').value,
                        confirmPassword: formData.get('confirmPassword') || document.getElementById('confirmPassword').value,
                        userType: formData.get('userType') || document.getElementById('userType').value
                    };
                    
                    // Validate passwords match
                    if (userData.password !== userData.confirmPassword) {
                        utils.showNotification('As senhas não coincidem.', 'error');
                        return;
                    }
                    
                    try {
                        const result = await api.signup(userData);
                        if (result.success) {
                            utils.showNotification('Conta criada com sucesso!');
                            // Switch to login form
                            document.querySelector('[data-tab="login"]').click();
                        }
                    } catch (error) {
                        utils.showNotification('Erro ao criar conta. Tente novamente.', 'error');
                    }
                });
            }
        },
        
        checkUrlParams() {
            const params = utils.getUrlParams();
            if (params.mode === 'signup') {
                document.querySelector('[data-tab="signup"]').click();
            }
        },
        
        updateFooterLinks(activeTab) {
            const footerLinks = document.querySelectorAll('.auth-footer p');
            footerLinks.forEach(p => {
                p.style.display = 'none';
            });
            
            if (activeTab === 'login') {
                footerLinks[0].style.display = 'block'; // Show signup link
            } else {
                footerLinks[1].style.display = 'block'; // Show login link
            }
        }
    },
    
    // Jobs listing page functionality
    jobs: {
        init() {
            this.initFilters();
            this.initPagination();
            this.loadJobs();
            this.initUrlParams();
        },
        
        initFilters() {
            const filterInputs = [
                'searchInput', 'areaFilter', 'locationFilter', 'modalityFilter'
            ];
            
            filterInputs.forEach(inputId => {
                const input = document.getElementById(inputId);
                if (input) {
                    input.addEventListener('input', () => {
                        this.applyFilters();
                    });
                }
            });
            
            // Sort functionality
            const sortSelect = document.getElementById('sortSelect');
            if (sortSelect) {
                sortSelect.addEventListener('change', () => {
                    this.loadJobs();
                });
            }
        },
        
        initPagination() {
            const prevBtn = document.getElementById('prevPage');
            const nextBtn = document.getElementById('nextPage');
            
            if (prevBtn) {
                prevBtn.addEventListener('click', () => {
                    if (appState.currentPage > 1) {
                        appState.currentPage--;
                        this.loadJobs();
                    }
                });
            }
            
            if (nextBtn) {
                nextBtn.addEventListener('click', () => {
                    appState.currentPage++;
                    this.loadJobs();
                });
            }
        },
        
        async loadJobs() {
            const jobsList = document.getElementById('jobsList');
            const resultsCount = document.getElementById('resultsCount');
            const pageInfo = document.getElementById('pageInfo');
            
            if (!jobsList) return;
            
            try {
                // Show loading state
                jobsList.innerHTML = '<div style="padding: 2rem; text-align: center; color: var(--gray-500);">Carregando vagas...</div>';
                
                const jobs = await api.fetchJobs(appState.currentFilters);
                
                // Apply sorting
                const sortValue = document.getElementById('sortSelect')?.value || 'recent';
                this.sortJobs(jobs, sortValue);
                
                // Calculate pagination
                const totalJobs = jobs.length;
                const totalPages = Math.ceil(totalJobs / appState.itemsPerPage);
                const startIndex = (appState.currentPage - 1) * appState.itemsPerPage;
                const endIndex = startIndex + appState.itemsPerPage;
                const pageJobs = jobs.slice(startIndex, endIndex);
                
                // Update results count
                if (resultsCount) {
                    resultsCount.textContent = `${totalJobs} vaga${totalJobs !== 1 ? 's' : ''} encontrada${totalJobs !== 1 ? 's' : ''}`;
                }
                
                // Update page info
                if (pageInfo) {
                    pageInfo.textContent = `Página ${appState.currentPage} de ${totalPages || 1}`;
                }
                
                // Update pagination buttons
                const prevBtn = document.getElementById('prevPage');
                const nextBtn = document.getElementById('nextPage');
                if (prevBtn) prevBtn.disabled = appState.currentPage <= 1;
                if (nextBtn) nextBtn.disabled = appState.currentPage >= totalPages;
                
                // Render jobs
                if (pageJobs.length === 0) {
                    jobsList.innerHTML = `
                        <div style="padding: 3rem; text-align: center; color: var(--gray-500);">
                            <h3>Nenhuma vaga encontrada</h3>
                            <p>Tente ajustar seus filtros de busca.</p>
                        </div>
                    `;
                } else {
                    jobsList.innerHTML = pageJobs.map(job => `
                        <div class="job-list-item" onclick="window.location.href='${utils.getJobUrl(job.id)}'">
                            <div class="job-info">
                                <h3>${job.title}</h3>
                                <div class="job-company-info">
                                    <strong>${job.company}</strong> • ${utils.formatSalary(job.salary)}
                                </div>
                                <div class="job-location-info">
                                    <span>📍 ${job.location}</span>
                                    <span>💼 ${job.modality}</span>
                                    <span>⏰ ${job.workload}</span>
                                    <span>📅 ${utils.formatDate(job.publishedAt)}</span>
                                </div>
                            </div>
                            <div class="job-actions">
                                ${job.urgent ? '<span style="background: var(--accent-500); color: white; padding: 4px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 600;">URGENTE</span>' : ''}
                                <button class="btn btn-primary btn-small" onclick="event.stopPropagation(); window.location.href='${utils.getJobUrl(job.id)}'">Ver detalhes</button>
                            </div>
                        </div>
                    `).join('');
                }
            } catch (error) {
                console.error('Error loading jobs:', error);
                jobsList.innerHTML = '<div style="padding: 2rem; text-align: center; color: var(--error-500);">Erro ao carregar vagas.</div>';
            }
        },
        
        applyFilters() {
            appState.currentFilters = {
                keyword: document.getElementById('searchInput')?.value || '',
                area: document.getElementById('areaFilter')?.value || '',
                location: document.getElementById('locationFilter')?.value || '',
                modality: document.getElementById('modalityFilter')?.value || ''
            };
            
            appState.currentPage = 1; // Reset to first page
            this.loadJobs();
        },
        
        sortJobs(jobs, sortValue) {
            switch (sortValue) {
                case 'recent':
                    jobs.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
                    break;
                case 'company':
                    jobs.sort((a, b) => a.company.localeCompare(b.company));
                    break;
                case 'location':
                    jobs.sort((a, b) => a.location.localeCompare(b.location));
                    break;
                default:
                    break;
            }
        },
        
        initUrlParams() {
            const params = utils.getUrlParams();
            
            // Set filters from URL
            if (params.keyword) {
                const input = document.getElementById('searchInput');
                if (input) input.value = params.keyword;
            }
            
            if (params.location) {
                const input = document.getElementById('locationFilter');
                if (input) input.value = params.location;
            }
            
            if (params.area) {
                const input = document.getElementById('areaFilter');
                if (input) input.value = params.area;
            }
            
            // Apply filters if any were set
            if (Object.keys(params).length > 0) {
                this.applyFilters();
            }
        }
    },
    
    // Job details page functionality
    jobDetail: {
        init() {
            this.loadJobDetails();
            this.initApplicationModal();
        },
        
        async loadJobDetails() {
            const params = utils.getUrlParams();
            const jobId = params.id;
            
            if (!jobId) {
                window.location.href = 'vagas.html';
                return;
            }
            
            try {
                const job = await api.fetchJobById(jobId);
                
                if (!job) {
                    utils.showNotification('Vaga não encontrada.', 'error');
                    window.location.href = 'vagas.html';
                    return;
                }
                
                appState.selectedJob = job;
                this.renderJobDetails(job);
                this.loadRelatedJobs(job);
            } catch (error) {
                console.error('Error loading job details:', error);
                utils.showNotification('Erro ao carregar detalhes da vaga.', 'error');
            }
        },
        
        renderJobDetails(job) {
            // Update page title and meta
            document.title = `${job.title} - ${job.company} | EsTagio+`;
            
            // Update breadcrumb
            const breadcrumbTitle = document.getElementById('breadcrumbTitle');
            if (breadcrumbTitle) breadcrumbTitle.textContent = job.title;
            
            // Update main content
            this.updateElement('jobTitle', job.title);
            this.updateElement('companyName', job.company);
            this.updateElement('jobLocation', job.location);
            this.updateElement('jobModality', job.modality);
            this.updateElement('jobSalary', utils.formatSalary(job.salary));
            this.updateElement('jobDate', utils.formatDate(job.publishedAt));
            this.updateElement('jobDescription', job.description);
            this.updateElement('jobRequirements', job.requirements);
            this.updateElement('jobBenefits', job.benefits);
            this.updateElement('companyDetails', job.companyDescription);
            
            // Update company logo
            const companyInitial = document.getElementById('companyInitial');
            if (companyInitial) {
                companyInitial.textContent = utils.getCompanyInitials(job.company);
            }
            
            // Update sidebar info
            this.updateElement('sidebarArea', job.area);
            this.updateElement('sidebarModality', job.modality);
            this.updateElement('sidebarDuration', job.duration);
            this.updateElement('sidebarWorkload', job.workload);
        },
        
        updateElement(id, content) {
            const element = document.getElementById(id);
            if (element) {
                element.innerHTML = content;
            }
        },
        
        async loadRelatedJobs(currentJob) {
            const relatedContainer = document.getElementById('relatedJobs');
            if (!relatedContainer) return;
            
            try {
                const allJobs = await api.fetchJobs();
                const relatedJobs = allJobs
                    .filter(job => job.id !== currentJob.id && job.area === currentJob.area)
                    .slice(0, 3);
                
                relatedContainer.innerHTML = relatedJobs.map(job => `
                    <div class="related-job-item" onclick="window.location.href='${utils.getJobUrl(job.id)}'">
                        <div class="related-job-title">${job.title}</div>
                        <div class="related-job-company">${job.company} • ${job.location}</div>
                    </div>
                `).join('');
            } catch (error) {
                console.error('Error loading related jobs:', error);
            }
        },
        
        initApplicationModal() {
            const applyBtn = document.getElementById('applyBtn');
            const modal = document.getElementById('applicationModal');
            const closeModal = document.getElementById('closeModal');
            const cancelBtn = document.getElementById('cancelApplication');
            const applicationForm = document.getElementById('applicationForm');
            
            if (applyBtn && modal) {
                applyBtn.addEventListener('click', () => {
                    modal.classList.add('active');
                });
                
                const closeModalFunction = () => {
                    modal.classList.remove('active');
                };
                
                if (closeModal) closeModal.addEventListener('click', closeModalFunction);
                if (cancelBtn) cancelBtn.addEventListener('click', closeModalFunction);
                
                // Close modal when clicking outside
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) {
                        closeModalFunction();
                    }
                });
            }
            
            if (applicationForm) {
                applicationForm.addEventListener('submit', async (e) => {
                    e.preventDefault();
                    
                    const formData = new FormData(applicationForm);
                    const applicationData = {
                        name: formData.get('applicantName') || document.getElementById('applicantName').value,
                        email: formData.get('applicantEmail') || document.getElementById('applicantEmail').value,
                        phone: formData.get('applicantPhone') || document.getElementById('applicantPhone').value,
                        cv: formData.get('applicantCV'),
                        coverLetter: formData.get('coverLetter') || document.getElementById('coverLetter').value
                    };
                    
                    try {
                        const result = await api.submitApplication(appState.selectedJob.id, applicationData);
                        if (result.success) {
                            utils.showNotification(result.message);
                            modal.classList.remove('active');
                            applicationForm.reset();
                        }
                    } catch (error) {
                        utils.showNotification('Erro ao enviar candidatura. Tente novamente.', 'error');
                    }
                });
            }
            
            // Save and share functionality
            const saveBtn = document.getElementById('saveBtn');
            const shareBtn = document.getElementById('shareBtn');
            
            if (saveBtn) {
                saveBtn.addEventListener('click', () => {
                    utils.showNotification('Vaga salva nos seus favoritos!');
                });
            }
            
            if (shareBtn) {
                shareBtn.addEventListener('click', () => {
                    if (navigator.share) {
                        navigator.share({
                            title: appState.selectedJob.title,
                            text: `Confira esta vaga de estágio: ${appState.selectedJob.title} na ${appState.selectedJob.company}`,
                            url: window.location.href
                        });
                    } else {
                        navigator.clipboard.writeText(window.location.href);
                        utils.showNotification('Link copiado para a área de transferência!');
                    }
                });
            }
        }
    },
    
    // Company dashboard functionality
    dashboard: {
        init() {
            this.checkAuth();
            this.loadStats();
            this.loadCompanyJobs();
            this.initDeleteModal();
            this.initLogout();
        },
        
        checkAuth() {
            // TODO: Replace with real authentication check
            // if (!mockData.currentUser || mockData.currentUser.type !== 'company') {
            //     utils.showNotification('Acesso negado. Faça login como empresa.', 'error');
            //     window.location.href = 'auth.html';
            //     return;
            // }
            
            // Simulate authentication check
            console.log('Checking company authentication...');
        },
        
        loadStats() {
            const elements = {
                totalJobs: document.getElementById('totalJobs'),
                totalApplications: document.getElementById('totalApplications'),
                totalViews: document.getElementById('totalViews'),
                totalHired: document.getElementById('totalHired')
            };
            
            Object.entries(elements).forEach(([key, element]) => {
                if (element && mockData.stats[key] !== undefined) {
                    element.textContent = mockData.stats[key];
                }
            });
        },
        
        loadCompanyJobs() {
            const tbody = document.getElementById('jobsTableBody');
            if (!tbody) return;
            
            tbody.innerHTML = mockData.companyJobs.map(job => `
                <tr>
                    <td>
                        <div class="job-title-cell">
                            ${job.title}
                            <div class="job-area">${job.area}</div>
                        </div>
                    </td>
                    <td>
                        <span class="status-badge status-${job.status}">
                            ${job.status === 'active' ? 'Ativa' : job.status === 'paused' ? 'Pausada' : 'Fechada'}
                        </span>
                    </td>
                    <td>${job.applications}</td>
                    <td>${job.views}</td>
                    <td>${utils.formatDate(job.publishedAt)}</td>
                    <td>
                        <div class="action-buttons">
                            <button class="action-btn edit-btn" onclick="pages.dashboard.editJob(${job.id})">Editar</button>
                            <button class="action-btn delete-btn" onclick="pages.dashboard.confirmDelete(${job.id})">Excluir</button>
                        </div>
                    </td>
                </tr>
            `).join('');
        },
        
        editJob(jobId) {
            window.location.href = `editar-vaga.html?id=${jobId}`;
        },
        
        confirmDelete(jobId) {
            appState.jobToDelete = jobId;
            const modal = document.getElementById('deleteModal');
            if (modal) {
                modal.classList.add('active');
            }
        },
        
        async deleteJob() {
            if (!appState.jobToDelete) return;
            
            try {
                const result = await api.deleteJob(appState.jobToDelete);
                if (result.success) {
                    utils.showNotification(result.message);
                    
                    // Remove from mock data
                    const index = mockData.companyJobs.findIndex(job => job.id === appState.jobToDelete);
                    if (index > -1) {
                        mockData.companyJobs.splice(index, 1);
                        this.loadCompanyJobs();
                    }
                    
                    // Close modal
                    const modal = document.getElementById('deleteModal');
                    if (modal) modal.classList.remove('active');
                }
            } catch (error) {
                utils.showNotification('Erro ao excluir vaga. Tente novamente.', 'error');
            }
            
            appState.jobToDelete = null;
        },
        
        initDeleteModal() {
            const modal = document.getElementById('deleteModal');
            const closeBtn = document.getElementById('closeDeleteModal');
            const cancelBtn = document.getElementById('cancelDelete');
            const confirmBtn = document.getElementById('confirmDelete');
            
            const closeModal = () => {
                if (modal) modal.classList.remove('active');
                appState.jobToDelete = null;
            };
            
            if (closeBtn) closeBtn.addEventListener('click', closeModal);
            if (cancelBtn) cancelBtn.addEventListener('click', closeModal);
            if (confirmBtn) confirmBtn.addEventListener('click', () => this.deleteJob());
            
            if (modal) {
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) closeModal();
                });
            }
        },
        
        initLogout() {
            const logoutBtn = document.getElementById('logoutBtn');
            if (logoutBtn) {
                logoutBtn.addEventListener('click', () => {
                    mockData.currentUser = null;
                    utils.showNotification('Logout realizado com sucesso!');
                    window.location.href = 'index.html';
                });
            }
        }
    },
    
    // Job creation/editing page functionality
    editJob: {
        init() {
            this.initForm();
            this.checkEditMode();
        },
        
        initForm() {
            const form = document.getElementById('jobForm');
            const saveAsDraftBtn = document.getElementById('saveAsDraft');
            
            if (form) {
                form.addEventListener('submit', async (e) => {
                    e.preventDefault();
                    await this.submitJob(false); // Publish job
                });
            }
            
            if (saveAsDraftBtn) {
                saveAsDraftBtn.addEventListener('click', async () => {
                    await this.submitJob(true); // Save as draft
                });
            }
        },
        
        checkEditMode() {
            const params = utils.getUrlParams();
            const jobId = params.id;
            
            if (jobId) {
                // Edit mode
                document.getElementById('pageTitle').textContent = 'Editar Vaga';
                document.getElementById('breadcrumbTitle').textContent = 'Editar Vaga';
                
                // Load job data for editing
                this.loadJobData(jobId);
            }
        },
        
        async loadJobData(jobId) {
            try {
                const job = await api.fetchJobById(jobId);
                if (job) {
                    this.fillForm(job);
                }
            } catch (error) {
                console.error('Error loading job data:', error);
                utils.showNotification('Erro ao carregar dados da vaga.', 'error');
            }
        },
        
        fillForm(job) {
            const fields = {
                jobTitle: job.title,
                jobArea: job.area,
                jobLocation: job.location,
                jobModality: job.modality,
                jobSalary: job.salary,
                jobWorkload: job.workload,
                jobDuration: job.duration,
                jobDescription: job.description,
                jobRequirements: job.requirements,
                jobBenefits: job.benefits,
                companyName: job.company,
                companyDescription: job.companyDescription
            };
            
            Object.entries(fields).forEach(([fieldId, value]) => {
                const field = document.getElementById(fieldId);
                if (field && value) {
                    field.value = value;
                }
            });
        },
        
        async submitJob(isDraft = false) {
            const form = document.getElementById('jobForm');
            const formData = new FormData(form);
            
            const jobData = {
                title: formData.get('jobTitle') || document.getElementById('jobTitle').value,
                area: formData.get('jobArea') || document.getElementById('jobArea').value,
                location: formData.get('jobLocation') || document.getElementById('jobLocation').value,
                modality: formData.get('jobModality') || document.getElementById('jobModality').value,
                salary: parseInt(formData.get('jobSalary') || document.getElementById('jobSalary').value) || 0,
                workload: formData.get('jobWorkload') || document.getElementById('jobWorkload').value,
                duration: formData.get('jobDuration') || document.getElementById('jobDuration').value,
                description: formData.get('jobDescription') || document.getElementById('jobDescription').value,
                requirements: formData.get('jobRequirements') || document.getElementById('jobRequirements').value,
                benefits: formData.get('jobBenefits') || document.getElementById('jobBenefits').value,
                company: formData.get('companyName') || document.getElementById('companyName').value,
                companyDescription: formData.get('companyDescription') || document.getElementById('companyDescription').value,
                urgent: document.getElementById('jobUrgent')?.checked || false,
                featured: document.getElementById('jobFeatured')?.checked || false,
                status: isDraft ? 'draft' : 'active'
            };
            
            try {
                const params = utils.getUrlParams();
                const isEditing = !!params.id;
                
                let result;
                if (isEditing) {
                    result = await api.updateJob(params.id, jobData);
                } else {
                    result = await api.createJob(jobData);
                }
                
                if (result.success) {
                    utils.showNotification(result.message);
                    window.location.href = 'gerenciar-vagas.html';
                }
            } catch (error) {
                utils.showNotification('Erro ao salvar vaga. Tente novamente.', 'error');
            }
        }
    },
    
    // Profile page functionality
    profile: {
        init() {
            this.initTabs();
            this.initForms();
            this.loadUserData();
            this.initDeleteAccount();
        },
        
        initTabs() {
            const tabs = document.querySelectorAll('.profile-tab');
            const tabContents = document.querySelectorAll('.tab-content');
            
            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    const targetTab = tab.getAttribute('data-tab');
                    
                    // Update tabs
                    tabs.forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');
                    
                    // Update content
                    tabContents.forEach(content => content.classList.remove('active'));
                    document.getElementById(`${targetTab}Tab`).classList.add('active');
                });
            });
        },
        
        initForms() {
            const forms = ['generalForm', 'candidateForm', 'companyForm', 'securityForm'];
            
            forms.forEach(formId => {
                const form = document.getElementById(formId);
                if (form) {
                    form.addEventListener('submit', async (e) => {
                        e.preventDefault();
                        await this.saveProfile(formId);
                    });
                }
            });
            
            // Avatar change functionality
            const changeAvatarBtn = document.getElementById('changeAvatarBtn');
            const avatarInput = document.getElementById('avatarInput');
            
            if (changeAvatarBtn && avatarInput) {
                changeAvatarBtn.addEventListener('click', () => {
                    avatarInput.click();
                });
                
                avatarInput.addEventListener('change', (e) => {
                    const file = e.target.files[0];
                    if (file) {
                        // TODO: Upload avatar image
                        utils.showNotification('Foto do perfil atualizada!');
                    }
                });
            }
        },
        
        loadUserData() {
            // TODO: Load real user data
            // For now, simulate user data
            const userData = {
                name: 'João Silva',
                email: 'joao.silva@email.com',
                type: 'candidate', // or 'company'
                phone: '(11) 99999-9999',
                location: 'São Paulo, SP'
            };
            
            // Update profile header
            document.getElementById('profileName').textContent = userData.name;
            document.getElementById('profileType').textContent = userData.type === 'candidate' ? 'Candidato' : 'Empresa';
            document.getElementById('avatarInitials').textContent = userData.name.split(' ').map(n => n[0]).join('');
            
            // Show/hide tabs based on user type
            if (userData.type === 'candidate') {
                document.getElementById('candidateTab').style.display = 'block';
                document.getElementById('candidateStats').style.display = 'block';
            } else {
                document.getElementById('companyTab').style.display = 'block';
                document.getElementById('companyStats').style.display = 'block';
            }
            
            // Fill form fields
            document.getElementById('fullName').value = userData.name;
            document.getElementById('email').value = userData.email;
            if (userData.phone) document.getElementById('phone').value = userData.phone;
            if (userData.location) document.getElementById('location').value = userData.location;
        },
        
        async saveProfile(formType) {
            // TODO: Implement real profile saving
            utils.showNotification('Perfil atualizado com sucesso!');
        },
        
        initDeleteAccount() {
            const deleteBtn = document.getElementById('deleteAccountBtn');
            const modal = document.getElementById('deleteAccountModal');
            const closeBtn = document.getElementById('closeDeleteAccountModal');
            const cancelBtn = document.getElementById('cancelDeleteAccount');
            const confirmBtn = document.getElementById('confirmDeleteAccount');
            
            if (deleteBtn && modal) {
                deleteBtn.addEventListener('click', () => {
                    modal.classList.add('active');
                });
                
                const closeModal = () => {
                    modal.classList.remove('active');
                    document.getElementById('deleteConfirmPassword').value = '';
                };
                
                if (closeBtn) closeBtn.addEventListener('click', closeModal);
                if (cancelBtn) cancelBtn.addEventListener('click', closeModal);
                
                if (confirmBtn) {
                    confirmBtn.addEventListener('click', async () => {
                        const password = document.getElementById('deleteConfirmPassword').value;
                        if (!password) {
                            utils.showNotification('Digite sua senha para confirmar.', 'error');
                            return;
                        }
                        
                        // TODO: Implement account deletion
                        utils.showNotification('Conta excluída com sucesso.');
                        window.location.href = 'index.html';
                    });
                }
                
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) closeModal();
                });
            }
        }
    }
};

// Router to initialize correct page functionality
const router = {
    init() {
        const path = window.location.pathname;
        const page = path.split('/').pop() || 'index.html';
        
        switch (page) {
            case 'index.html':
            case '':
                pages.home.init();
                break;
            case 'auth.html':
                pages.auth.init();
                break;
            case 'vagas.html':
                pages.jobs.init();
                break;
            case 'detalhes-vaga.html':
                pages.jobDetail.init();
                break;
            case 'gerenciar-vagas.html':
                pages.dashboard.init();
                break;
            case 'editar-vaga.html':
                pages.editJob.init();
                break;
            case 'editar-perfil.html':
                pages.profile.init();
                break;
            default:
                console.log('No specific initialization for this page');
        }
        
        
    }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    router.init();
});

// Global functions (accessible from inline event handlers)
window.pages = pages;
window.utils = utils;