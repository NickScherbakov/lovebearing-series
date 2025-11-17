// Subject-Specific Study Resources Hub
// Feature 2: Provides organized access to study materials by subject and difficulty

document.addEventListener('DOMContentLoaded', function() {
    initStudyResourcesHub();
});

function initStudyResourcesHub() {
    addResourcesHub();
    initResourcesInteraction();
}

function addResourcesHub() {
    // Check if hub already exists
    if (document.getElementById('study-resources-hub')) return;
    
    const resourcesHTML = `
        <section id="study-resources-hub" class="resources-hub">
            <div class="container">
                <div class="hub-header">
                    <h2 class="hub-title">📚 学科资源中心</h2>
                    <p class="hub-subtitle">精选高考备考资源，按学科和难度分类</p>
                </div>
                
                <div class="resources-nav">
                    <button class="subject-tab active" data-subject="all">
                        全部科目
                    </button>
                    <button class="subject-tab" data-subject="math">
                        数学
                    </button>
                    <button class="subject-tab" data-subject="chinese">
                        语文
                    </button>
                    <button class="subject-tab" data-subject="english">
                        英语
                    </button>
                    <button class="subject-tab" data-subject="physics">
                        物理
                    </button>
                    <button class="subject-tab" data-subject="chemistry">
                        化学
                    </button>
                    <button class="subject-tab" data-subject="biology">
                        生物
                    </button>
                    <button class="subject-tab" data-subject="history">
                        历史
                    </button>
                    <button class="subject-tab" data-subject="geography">
                        地理
                    </button>
                    <button class="subject-tab" data-subject="politics">
                        政治
                    </button>
                </div>
                
                <div class="difficulty-filter">
                    <span class="filter-label">难度等级：</span>
                    <label class="difficulty-option">
                        <input type="checkbox" name="difficulty" value="basic" checked>
                        <span class="badge badge-basic">基础</span>
                    </label>
                    <label class="difficulty-option">
                        <input type="checkbox" name="difficulty" value="intermediate" checked>
                        <span class="badge badge-intermediate">中等</span>
                    </label>
                    <label class="difficulty-option">
                        <input type="checkbox" name="difficulty" value="advanced" checked>
                        <span class="badge badge-advanced">提高</span>
                    </label>
                    <label class="difficulty-option">
                        <input type="checkbox" name="difficulty" value="competition" checked>
                        <span class="badge badge-competition">竞赛</span>
                    </label>
                </div>
                
                <div id="resources-grid" class="resources-grid">
                    <!-- Resources will be loaded here -->
                </div>
                
                <div class="resource-stats">
                    <div class="stat-item">
                        <span class="stat-number" id="total-resources">0</span>
                        <span class="stat-label">学习资源</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number" id="subjects-count">10</span>
                        <span class="stat-label">学科覆盖</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number" id="practice-problems">1000+</span>
                        <span class="stat-label">练习题目</span>
                    </div>
                </div>
            </div>
        </section>
    `;
    
    // Insert after countdown widget or in appropriate location
    const insertPoint = document.getElementById('gaokao-countdown-widget') || 
                       document.querySelector('#mission') ||
                       document.querySelector('main > section:first-child');
    
    if (insertPoint) {
        insertPoint.insertAdjacentHTML('afterend', resourcesHTML);
    } else {
        document.querySelector('main, body').insertAdjacentHTML('beforeend', resourcesHTML);
    }
    
    addResourcesStyles();
    loadResources();
}

function loadResources() {
    const resources = [
        // Math Resources
        {
            id: 1,
            subject: 'math',
            title: '高考数学必考公式大全',
            description: '涵盖所有高考数学必考公式，配有详细例题和解析',
            difficulty: 'basic',
            type: 'document',
            icon: '📐',
            tags: ['公式', '必考', '基础'],
            link: '#'
        },
        {
            id: 2,
            subject: 'math',
            title: '函数与导数专题突破',
            description: '深入剖析函数与导数题型，提供系统解题方法',
            difficulty: 'advanced',
            type: 'tutorial',
            icon: '📈',
            tags: ['函数', '导数', '专题'],
            link: '#'
        },
        {
            id: 3,
            subject: 'math',
            title: '立体几何100题精选',
            description: '精选历年高考立体几何真题，附详细解答',
            difficulty: 'intermediate',
            type: 'practice',
            icon: '🔺',
            tags: ['几何', '练习', '真题'],
            link: '#'
        },
        
        // Chinese Resources
        {
            id: 4,
            subject: 'chinese',
            title: '古诗词鉴赏技巧精讲',
            description: '系统讲解古诗词鉴赏方法，提高阅读理解能力',
            difficulty: 'intermediate',
            type: 'tutorial',
            icon: '📜',
            tags: ['古诗词', '鉴赏', '技巧'],
            link: '#'
        },
        {
            id: 5,
            subject: 'chinese',
            title: '作文素材100篇',
            description: '精选时事热点和名人事迹，充实作文内容',
            difficulty: 'basic',
            type: 'document',
            icon: '✍️',
            tags: ['作文', '素材', '时事'],
            link: '#'
        },
        {
            id: 6,
            subject: 'chinese',
            title: '文言文阅读专项训练',
            description: '历年高考文言文真题及翻译技巧',
            difficulty: 'intermediate',
            type: 'practice',
            icon: '📖',
            tags: ['文言文', '阅读', '训练'],
            link: '#'
        },
        
        // English Resources
        {
            id: 7,
            subject: 'english',
            title: '高考英语3500词汇速记',
            description: '运用记忆法快速掌握高考必备词汇',
            difficulty: 'basic',
            type: 'document',
            icon: '📝',
            tags: ['词汇', '记忆', '必备'],
            link: '#'
        },
        {
            id: 8,
            subject: 'english',
            title: '完形填空解题技巧',
            description: '完形填空题型分析及高效解题方法',
            difficulty: 'intermediate',
            type: 'tutorial',
            icon: '🎯',
            tags: ['完形填空', '技巧', '方法'],
            link: '#'
        },
        {
            id: 9,
            subject: 'english',
            title: '英语作文模板大全',
            description: '各类作文模板及优秀范文赏析',
            difficulty: 'basic',
            type: 'document',
            icon: '📄',
            tags: ['作文', '模板', '范文'],
            link: '#'
        },
        
        // Physics Resources
        {
            id: 10,
            subject: 'physics',
            title: '物理实验操作指南',
            description: '高考物理实验详细步骤和注意事项',
            difficulty: 'intermediate',
            type: 'tutorial',
            icon: '🔬',
            tags: ['实验', '操作', '指南'],
            link: '#'
        },
        {
            id: 11,
            subject: 'physics',
            title: '力学综合题专练',
            description: '力学综合应用题及解题思路',
            difficulty: 'advanced',
            type: 'practice',
            icon: '⚙️',
            tags: ['力学', '综合', '专练'],
            link: '#'
        },
        
        // Chemistry Resources
        {
            id: 12,
            subject: 'chemistry',
            title: '化学方程式记忆手册',
            description: '高考常考化学方程式分类整理',
            difficulty: 'basic',
            type: 'document',
            icon: '⚗️',
            tags: ['方程式', '记忆', '整理'],
            link: '#'
        },
        {
            id: 13,
            subject: 'chemistry',
            title: '有机化学推断题突破',
            description: '有机化学推断题解题技巧和常见题型',
            difficulty: 'advanced',
            type: 'tutorial',
            icon: '🧪',
            tags: ['有机', '推断', '技巧'],
            link: '#'
        },
        
        // Biology Resources
        {
            id: 14,
            subject: 'biology',
            title: '生物知识点思维导图',
            description: '用思维导图构建完整生物知识体系',
            difficulty: 'basic',
            type: 'document',
            icon: '🧬',
            tags: ['思维导图', '知识点', '体系'],
            link: '#'
        },
        {
            id: 15,
            subject: 'biology',
            title: '遗传学专题攻略',
            description: '遗传学重难点解析和经典例题',
            difficulty: 'advanced',
            type: 'tutorial',
            icon: '🔬',
            tags: ['遗传学', '专题', '解析'],
            link: '#'
        },
        
        // History Resources
        {
            id: 16,
            subject: 'history',
            title: '中国近代史时间轴',
            description: '直观展示中国近代史重要事件时间线',
            difficulty: 'basic',
            type: 'document',
            icon: '📅',
            tags: ['近代史', '时间轴', '事件'],
            link: '#'
        },
        {
            id: 17,
            subject: 'history',
            title: '历史材料分析技巧',
            description: '历史材料题解题方法和答题模板',
            difficulty: 'intermediate',
            type: 'tutorial',
            icon: '📚',
            tags: ['材料', '分析', '技巧'],
            link: '#'
        },
        
        // Geography Resources
        {
            id: 18,
            subject: 'geography',
            title: '地理区域地图集',
            description: '高考常考区域地图及特征分析',
            difficulty: 'basic',
            type: 'document',
            icon: '🗺️',
            tags: ['地图', '区域', '特征'],
            link: '#'
        },
        {
            id: 19,
            subject: 'geography',
            title: '自然地理综合题精讲',
            description: '自然地理综合题型分析和解题策略',
            difficulty: 'advanced',
            type: 'tutorial',
            icon: '🌍',
            tags: ['自然', '综合', '精讲'],
            link: '#'
        },
        
        // Politics Resources
        {
            id: 20,
            subject: 'politics',
            title: '政治知识框架体系',
            description: '政治学科知识点系统梳理',
            difficulty: 'basic',
            type: 'document',
            icon: '📋',
            tags: ['框架', '体系', '梳理'],
            link: '#'
        },
        {
            id: 21,
            subject: 'politics',
            title: '时政热点专题分析',
            description: '最新时政热点与考点结合分析',
            difficulty: 'intermediate',
            type: 'tutorial',
            icon: '📰',
            tags: ['时政', '热点', '分析'],
            link: '#'
        }
    ];
    
    // Store resources globally
    window.studyResources = resources;
    
    // Initial render
    filterAndRenderResources();
    
    // Update stats
    document.getElementById('total-resources').textContent = resources.length;
}

function filterAndRenderResources() {
    const activeSubject = document.querySelector('.subject-tab.active')?.dataset.subject || 'all';
    const selectedDifficulties = Array.from(document.querySelectorAll('input[name="difficulty"]:checked'))
        .map(cb => cb.value);
    
    let filtered = window.studyResources || [];
    
    // Filter by subject
    if (activeSubject !== 'all') {
        filtered = filtered.filter(r => r.subject === activeSubject);
    }
    
    // Filter by difficulty
    if (selectedDifficulties.length > 0) {
        filtered = filtered.filter(r => selectedDifficulties.includes(r.difficulty));
    }
    
    renderResources(filtered);
}

function renderResources(resources) {
    const grid = document.getElementById('resources-grid');
    if (!grid) return;
    
    if (resources.length === 0) {
        grid.innerHTML = '<div class="no-resources">暂无符合条件的资源</div>';
        return;
    }
    
    grid.innerHTML = resources.map(resource => `
        <div class="resource-card" data-subject="${resource.subject}">
            <div class="resource-icon">${resource.icon}</div>
            <div class="resource-content">
                <h3 class="resource-title">${resource.title}</h3>
                <p class="resource-description">${resource.description}</p>
                <div class="resource-meta">
                    <span class="badge badge-${resource.difficulty}">${getDifficultyLabel(resource.difficulty)}</span>
                    <span class="resource-type">${getTypeLabel(resource.type)}</span>
                </div>
                <div class="resource-tags">
                    ${resource.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <a href="${resource.link}" class="resource-link">查看资源 →</a>
            </div>
        </div>
    `).join('');
}

function getDifficultyLabel(difficulty) {
    const labels = {
        'basic': '基础',
        'intermediate': '中等',
        'advanced': '提高',
        'competition': '竞赛'
    };
    return labels[difficulty] || difficulty;
}

function getTypeLabel(type) {
    const labels = {
        'document': '📄 文档',
        'tutorial': '🎓 教程',
        'practice': '✏️ 练习',
        'video': '🎥 视频'
    };
    return labels[type] || type;
}

function initResourcesInteraction() {
    // Subject tab switching
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('subject-tab')) {
            document.querySelectorAll('.subject-tab').forEach(tab => {
                tab.classList.remove('active');
            });
            e.target.classList.add('active');
            filterAndRenderResources();
        }
    });
    
    // Difficulty filter
    document.addEventListener('change', function(e) {
        if (e.target.name === 'difficulty') {
            filterAndRenderResources();
        }
    });
}

function addResourcesStyles() {
    if (document.getElementById('study-resources-styles')) return;
    
    const styles = `
        <style id="study-resources-styles">
        .resources-hub {
            background: linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%);
            padding: 4rem 0;
            margin: 2rem 0;
        }
        
        .hub-header {
            text-align: center;
            margin-bottom: 3rem;
        }
        
        .hub-title {
            font-size: 2.5rem;
            color: #2c3e50;
            margin-bottom: 1rem;
        }
        
        .hub-subtitle {
            font-size: 1.2rem;
            color: #7f8c8d;
        }
        
        .resources-nav {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 0.5rem;
            margin-bottom: 2rem;
        }
        
        .subject-tab {
            padding: 0.75rem 1.5rem;
            border: 2px solid #e0e0e0;
            background: white;
            color: #555;
            border-radius: 25px;
            cursor: pointer;
            font-size: 1rem;
            transition: all 0.3s ease;
        }
        
        .subject-tab:hover {
            border-color: #667eea;
            color: #667eea;
            transform: translateY(-2px);
        }
        
        .subject-tab.active {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border-color: transparent;
        }
        
        .difficulty-filter {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 1rem;
            margin-bottom: 2rem;
            padding: 1rem;
            background: white;
            border-radius: 15px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        
        .filter-label {
            font-weight: 600;
            color: #2c3e50;
        }
        
        .difficulty-option {
            display: flex;
            align-items: center;
            cursor: pointer;
        }
        
        .difficulty-option input[type="checkbox"] {
            margin-right: 0.5rem;
        }
        
        .badge {
            padding: 0.4rem 0.8rem;
            border-radius: 15px;
            font-size: 0.85rem;
            font-weight: 500;
        }
        
        .badge-basic {
            background: #d1f2eb;
            color: #0e6655;
        }
        
        .badge-intermediate {
            background: #fff3cd;
            color: #856404;
        }
        
        .badge-advanced {
            background: #f8d7da;
            color: #721c24;
        }
        
        .badge-competition {
            background: #d1ecf1;
            color: #0c5460;
        }
        
        .resources-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
            gap: 2rem;
            margin-bottom: 3rem;
        }
        
        .resource-card {
            background: white;
            border-radius: 15px;
            padding: 1.5rem;
            box-shadow: 0 4px 15px rgba(0,0,0,0.08);
            transition: all 0.3s ease;
            display: flex;
            flex-direction: column;
        }
        
        .resource-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.12);
        }
        
        .resource-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
        }
        
        .resource-content {
            flex: 1;
            display: flex;
            flex-direction: column;
        }
        
        .resource-title {
            font-size: 1.3rem;
            color: #2c3e50;
            margin-bottom: 0.75rem;
        }
        
        .resource-description {
            color: #7f8c8d;
            line-height: 1.6;
            margin-bottom: 1rem;
            flex: 1;
        }
        
        .resource-meta {
            display: flex;
            gap: 0.75rem;
            align-items: center;
            margin-bottom: 1rem;
        }
        
        .resource-type {
            color: #95a5a6;
            font-size: 0.9rem;
        }
        
        .resource-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-bottom: 1rem;
        }
        
        .tag {
            background: #ecf0f1;
            color: #34495e;
            padding: 0.3rem 0.7rem;
            border-radius: 12px;
            font-size: 0.8rem;
        }
        
        .resource-link {
            color: #667eea;
            text-decoration: none;
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            transition: color 0.3s ease;
        }
        
        .resource-link:hover {
            color: #764ba2;
        }
        
        .no-resources {
            text-align: center;
            padding: 3rem;
            color: #95a5a6;
            font-size: 1.1rem;
            grid-column: 1 / -1;
        }
        
        .resource-stats {
            display: flex;
            justify-content: center;
            gap: 3rem;
            flex-wrap: wrap;
            margin-top: 3rem;
            padding: 2rem;
            background: white;
            border-radius: 15px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        
        .stat-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
        }
        
        .stat-number {
            font-size: 2.5rem;
            font-weight: bold;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .stat-label {
            color: #7f8c8d;
            font-size: 1rem;
        }
        
        @media (max-width: 768px) {
            .hub-title {
                font-size: 2rem;
            }
            
            .resources-grid {
                grid-template-columns: 1fr;
                gap: 1.5rem;
            }
            
            .resources-nav {
                gap: 0.25rem;
            }
            
            .subject-tab {
                padding: 0.5rem 1rem;
                font-size: 0.9rem;
            }
            
            .difficulty-filter {
                flex-direction: column;
                align-items: stretch;
            }
            
            .resource-stats {
                gap: 1.5rem;
            }
            
            .stat-number {
                font-size: 2rem;
            }
        }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', styles);
}
