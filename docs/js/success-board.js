// Peer Success Stories & Achievement Board
// Feature 3: Displays student achievements and success stories to motivate participation

document.addEventListener('DOMContentLoaded', function() {
    initSuccessBoard();
});

function initSuccessBoard() {
    addSuccessBoard();
    initAchievementSystem();
    loadSuccessStories();
}

function addSuccessBoard() {
    // Check if board already exists
    if (document.getElementById('success-board')) return;
    
    const boardHTML = `
        <section id="success-board" class="success-board">
            <div class="container">
                <div class="board-header">
                    <h2 class="board-title">🏆 成就与荣誉墙</h2>
                    <p class="board-subtitle">见证每一个努力者的成长与突破</p>
                </div>
                
                <div class="board-tabs">
                    <button class="board-tab active" data-tab="achievements">
                        🎖️ 成就榜单
                    </button>
                    <button class="board-tab" data-tab="success-stories">
                        ⭐ 成功故事
                    </button>
                    <button class="board-tab" data-tab="contributors">
                        👥 贡献者排行
                    </button>
                </div>
                
                <div class="board-content">
                    <!-- Achievements Tab -->
                    <div class="tab-panel active" id="achievements-panel">
                        <div class="achievements-intro">
                            <p>通过参与学习、分享故事、帮助他人来解锁成就徽章！</p>
                        </div>
                        <div class="achievements-grid" id="achievements-grid">
                            <!-- Achievements will be loaded here -->
                        </div>
                    </div>
                    
                    <!-- Success Stories Tab -->
                    <div class="tab-panel" id="success-stories-panel">
                        <div class="stories-featured">
                            <h3>✨ 本月精选成功故事</h3>
                            <div id="featured-stories" class="featured-stories">
                                <!-- Featured stories will be loaded here -->
                            </div>
                        </div>
                        <div class="stories-list">
                            <h3>💫 更多成功案例</h3>
                            <div id="success-stories-list" class="success-stories-list">
                                <!-- Success stories will be loaded here -->
                            </div>
                        </div>
                    </div>
                    
                    <!-- Contributors Tab -->
                    <div class="tab-panel" id="contributors-panel">
                        <div class="leaderboard">
                            <div class="leaderboard-header">
                                <h3>🌟 本月贡献者排行榜</h3>
                                <p>感谢这些同学的无私分享！</p>
                            </div>
                            <div class="top-contributors">
                                <div class="top-three">
                                    <div class="rank-item rank-2">
                                        <div class="rank-medal">🥈</div>
                                        <div class="contributor-avatar">李</div>
                                        <div class="contributor-name">李华</div>
                                        <div class="contributor-score">285分</div>
                                    </div>
                                    <div class="rank-item rank-1">
                                        <div class="rank-medal">🥇</div>
                                        <div class="contributor-avatar champion">王</div>
                                        <div class="contributor-name">王明</div>
                                        <div class="contributor-score">342分</div>
                                    </div>
                                    <div class="rank-item rank-3">
                                        <div class="rank-medal">🥉</div>
                                        <div class="contributor-avatar">张</div>
                                        <div class="contributor-name">张伟</div>
                                        <div class="contributor-score">267分</div>
                                    </div>
                                </div>
                                <div class="other-ranks" id="other-ranks">
                                    <!-- Other contributors will be loaded here -->
                                </div>
                            </div>
                        </div>
                        
                        <div class="contribution-guide">
                            <h4>如何获得贡献分？</h4>
                            <ul>
                                <li>📝 分享学习故事：+50分</li>
                                <li>💡 提供学习建议：+20分</li>
                                <li>👍 获得点赞：+5分/次</li>
                                <li>💬 有效评论：+10分</li>
                                <li>🎯 完成挑战任务：+30分</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="participation-cta">
                    <h3>💪 加入我们，开始你的成就之旅！</h3>
                    <p>分享你的学习经验，帮助更多同学，解锁专属徽章</p>
                    <a href="https://github.com/NickScherbakov/lovebearing-series/new/main/stories" 
                       class="cta-button" target="_blank" rel="noopener">
                        立即分享故事
                    </a>
                </div>
            </div>
        </section>
    `;
    
    // Insert after study resources hub or in appropriate location
    const insertPoint = document.getElementById('study-resources-hub') ||
                       document.querySelector('#features') ||
                       document.querySelector('main > section:nth-child(2)');
    
    if (insertPoint) {
        insertPoint.insertAdjacentHTML('afterend', boardHTML);
    } else {
        document.querySelector('main, body').insertAdjacentHTML('beforeend', boardHTML);
    }
    
    addSuccessBoardStyles();
    initTabSwitching();
}

function initAchievementSystem() {
    const achievements = [
        {
            id: 1,
            name: '初次分享',
            description: '分享你的第一个学习故事',
            icon: '🌱',
            rarity: 'common',
            unlocked: true,
            progress: 100
        },
        {
            id: 2,
            name: '热心助人',
            description: '帮助10位同学解答疑问',
            icon: '🤝',
            rarity: 'common',
            unlocked: false,
            progress: 60
        },
        {
            id: 3,
            name: '学习达人',
            description: '连续30天打卡学习',
            icon: '📚',
            rarity: 'rare',
            unlocked: false,
            progress: 45
        },
        {
            id: 4,
            name: '分享之星',
            description: '分享10个学习故事',
            icon: '⭐',
            rarity: 'rare',
            unlocked: false,
            progress: 30
        },
        {
            id: 5,
            name: '人气王',
            description: '你的故事获得100个点赞',
            icon: '👑',
            rarity: 'epic',
            unlocked: false,
            progress: 0
        },
        {
            id: 6,
            name: '知识导师',
            description: '为50位同学提供学习指导',
            icon: '🎓',
            rarity: 'epic',
            unlocked: false,
            progress: 0
        },
        {
            id: 7,
            name: '灵感源泉',
            description: '你的故事启发了100人',
            icon: '💡',
            rarity: 'legendary',
            unlocked: false,
            progress: 0
        },
        {
            id: 8,
            name: '传奇贡献者',
            description: '累计贡献1000分',
            icon: '🏆',
            rarity: 'legendary',
            unlocked: false,
            progress: 0
        }
    ];
    
    renderAchievements(achievements);
}

function renderAchievements(achievements) {
    const grid = document.getElementById('achievements-grid');
    if (!grid) return;
    
    grid.innerHTML = achievements.map(achievement => `
        <div class="achievement-card ${achievement.unlocked ? 'unlocked' : 'locked'} ${achievement.rarity}">
            <div class="achievement-icon ${achievement.unlocked ? '' : 'grayscale'}">
                ${achievement.icon}
            </div>
            <div class="achievement-info">
                <h4 class="achievement-name">${achievement.name}</h4>
                <p class="achievement-description">${achievement.description}</p>
                <div class="achievement-progress">
                    <div class="progress-bar-small">
                        <div class="progress-fill-small" style="width: ${achievement.progress}%"></div>
                    </div>
                    <span class="progress-text">${achievement.progress}%</span>
                </div>
                <span class="rarity-badge rarity-${achievement.rarity}">${getRarityLabel(achievement.rarity)}</span>
            </div>
            ${achievement.unlocked ? '<div class="unlocked-badge">已解锁 ✓</div>' : ''}
        </div>
    `).join('');
}

function getRarityLabel(rarity) {
    const labels = {
        'common': '普通',
        'rare': '稀有',
        'epic': '史诗',
        'legendary': '传奇'
    };
    return labels[rarity] || rarity;
}

function loadSuccessStories() {
    const featuredStories = [
        {
            id: 1,
            title: '从倒数到前十的逆袭之路',
            author: '王明',
            school: '北京某重点中学',
            improvement: '年级排名：285名 → 第8名',
            excerpt: '高二下学期，我的成绩一度跌至年级倒数。但通过科学的学习方法和坚持不懈的努力，我在一年内实现了惊人的逆袭...',
            image: '📈',
            likes: 256,
            inspiration: 189
        },
        {
            id: 2,
            title: '数学满分的秘密武器',
            author: '李华',
            school: '上海某示范高中',
            improvement: '数学成绩：72分 → 150分',
            excerpt: '数学曾是我最头疼的科目。通过建立错题本、总结题型规律、每日刷题等方法，我最终在高考中取得了满分...',
            image: '💯',
            likes: 312,
            inspiration: 245
        }
    ];
    
    const successStories = [
        {
            id: 3,
            title: '英语从90分到140+的蜕变',
            author: '张伟',
            achievement: '英语提高50分',
            time: '6个月',
            icon: '📚'
        },
        {
            id: 4,
            title: '物理竞赛省一等奖经验分享',
            author: '赵丽',
            achievement: '物理竞赛省一等奖',
            time: '1年准备',
            icon: '🏅'
        },
        {
            id: 5,
            title: '如何平衡竞赛与高考',
            author: '刘强',
            achievement: '竞赛+高考双丰收',
            time: '高三全年',
            icon: '⚖️'
        },
        {
            id: 6,
            title: '文综260+的学习方法',
            author: '陈敏',
            achievement: '文综高分突破',
            time: '高三备考',
            icon: '📖'
        }
    ];
    
    renderFeaturedStories(featuredStories);
    renderSuccessStoriesList(successStories);
    loadContributors();
}

function renderFeaturedStories(stories) {
    const container = document.getElementById('featured-stories');
    if (!container) return;
    
    container.innerHTML = stories.map(story => `
        <div class="featured-story-card">
            <div class="story-image">${story.image}</div>
            <div class="story-details">
                <h4 class="story-title">${story.title}</h4>
                <div class="story-meta">
                    <span class="story-author">👤 ${story.author}</span>
                    <span class="story-school">🏫 ${story.school}</span>
                </div>
                <div class="story-improvement">${story.improvement}</div>
                <p class="story-excerpt">${story.excerpt}</p>
                <div class="story-stats">
                    <span>👍 ${story.likes} 点赞</span>
                    <span>✨ 启发了 ${story.inspiration} 人</span>
                </div>
                <a href="#" class="read-more-btn">阅读完整故事 →</a>
            </div>
        </div>
    `).join('');
}

function renderSuccessStoriesList(stories) {
    const container = document.getElementById('success-stories-list');
    if (!container) return;
    
    container.innerHTML = stories.map(story => `
        <div class="success-story-item">
            <div class="story-icon">${story.icon}</div>
            <div class="story-content">
                <h5>${story.title}</h5>
                <div class="story-info">
                    <span>作者：${story.author}</span>
                    <span>成就：${story.achievement}</span>
                    <span>用时：${story.time}</span>
                </div>
            </div>
            <a href="#" class="view-story-btn">查看</a>
        </div>
    `).join('');
}

function loadContributors() {
    const contributors = [
        { rank: 4, name: '陈芳', score: 234 },
        { rank: 5, name: '刘洋', score: 218 },
        { rank: 6, name: '杨雪', score: 205 },
        { rank: 7, name: '赵强', score: 192 },
        { rank: 8, name: '周敏', score: 178 },
        { rank: 9, name: '吴涛', score: 165 },
        { rank: 10, name: '孙丽', score: 152 }
    ];
    
    const container = document.getElementById('other-ranks');
    if (!container) return;
    
    container.innerHTML = contributors.map(contributor => `
        <div class="rank-row">
            <span class="rank-number">#${contributor.rank}</span>
            <span class="rank-name">${contributor.name}</span>
            <span class="rank-score">${contributor.score}分</span>
        </div>
    `).join('');
}

function initTabSwitching() {
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('board-tab')) {
            const tabName = e.target.dataset.tab;
            
            // Update active tab
            document.querySelectorAll('.board-tab').forEach(tab => {
                tab.classList.remove('active');
            });
            e.target.classList.add('active');
            
            // Show corresponding panel
            document.querySelectorAll('.tab-panel').forEach(panel => {
                panel.classList.remove('active');
            });
            document.getElementById(tabName + '-panel').classList.add('active');
        }
    });
}

function addSuccessBoardStyles() {
    if (document.getElementById('success-board-styles')) return;
    
    const styles = `
        <style id="success-board-styles">
        .success-board {
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            padding: 4rem 0;
            margin: 2rem 0;
        }
        
        .board-header {
            text-align: center;
            margin-bottom: 3rem;
        }
        
        .board-title {
            font-size: 2.5rem;
            color: #2c3e50;
            margin-bottom: 1rem;
        }
        
        .board-subtitle {
            font-size: 1.2rem;
            color: #7f8c8d;
        }
        
        .board-tabs {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-bottom: 2rem;
            flex-wrap: wrap;
        }
        
        .board-tab {
            padding: 1rem 2rem;
            border: none;
            background: white;
            color: #555;
            border-radius: 30px;
            cursor: pointer;
            font-size: 1rem;
            font-weight: 500;
            transition: all 0.3s ease;
            box-shadow: 0 2px 10px rgba(0,0,0,0.08);
        }
        
        .board-tab:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(0,0,0,0.12);
        }
        
        .board-tab.active {
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            color: white;
        }
        
        .tab-panel {
            display: none;
            animation: fadeIn 0.5s ease;
        }
        
        .tab-panel.active {
            display: block;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .achievements-intro {
            text-align: center;
            margin-bottom: 2rem;
            padding: 1rem;
            background: white;
            border-radius: 15px;
            color: #7f8c8d;
        }
        
        .achievements-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
        }
        
        .achievement-card {
            background: white;
            border-radius: 15px;
            padding: 1.5rem;
            box-shadow: 0 4px 15px rgba(0,0,0,0.08);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }
        
        .achievement-card.locked {
            opacity: 0.6;
        }
        
        .achievement-card.unlocked {
            border: 2px solid #4ade80;
        }
        
        .achievement-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.12);
        }
        
        .achievement-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
            text-align: center;
        }
        
        .achievement-icon.grayscale {
            filter: grayscale(100%);
            opacity: 0.5;
        }
        
        .achievement-info {
            text-align: center;
        }
        
        .achievement-name {
            font-size: 1.2rem;
            color: #2c3e50;
            margin-bottom: 0.5rem;
        }
        
        .achievement-description {
            color: #7f8c8d;
            font-size: 0.9rem;
            margin-bottom: 1rem;
        }
        
        .achievement-progress {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 1rem;
        }
        
        .progress-bar-small {
            flex: 1;
            height: 8px;
            background: #ecf0f1;
            border-radius: 10px;
            overflow: hidden;
        }
        
        .progress-fill-small {
            height: 100%;
            background: linear-gradient(90deg, #4ade80 0%, #22c55e 100%);
            border-radius: 10px;
            transition: width 0.5s ease;
        }
        
        .progress-text {
            font-size: 0.8rem;
            color: #7f8c8d;
        }
        
        .rarity-badge {
            display: inline-block;
            padding: 0.3rem 0.8rem;
            border-radius: 12px;
            font-size: 0.75rem;
            font-weight: 600;
        }
        
        .rarity-common { background: #d1f2eb; color: #0e6655; }
        .rarity-rare { background: #d1ecf1; color: #0c5460; }
        .rarity-epic { background: #e2d1f9; color: #4c1d95; }
        .rarity-legendary { background: #ffd700; color: #8b4513; }
        
        .unlocked-badge {
            position: absolute;
            top: 10px;
            right: 10px;
            background: #4ade80;
            color: white;
            padding: 0.3rem 0.8rem;
            border-radius: 15px;
            font-size: 0.75rem;
            font-weight: 600;
        }
        
        .featured-stories {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
            gap: 2rem;
            margin-bottom: 3rem;
        }
        
        .featured-story-card {
            background: white;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
        }
        
        .featured-story-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 30px rgba(0,0,0,0.15);
        }
        
        .story-image {
            font-size: 5rem;
            text-align: center;
            padding: 2rem;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        .story-details {
            padding: 1.5rem;
        }
        
        .story-title {
            font-size: 1.4rem;
            color: #2c3e50;
            margin-bottom: 1rem;
        }
        
        .story-meta {
            display: flex;
            gap: 1.5rem;
            margin-bottom: 1rem;
            font-size: 0.9rem;
            color: #7f8c8d;
        }
        
        .story-improvement {
            background: #d1f2eb;
            color: #0e6655;
            padding: 0.5rem 1rem;
            border-radius: 8px;
            font-weight: 600;
            margin-bottom: 1rem;
            display: inline-block;
        }
        
        .story-excerpt {
            color: #555;
            line-height: 1.6;
            margin-bottom: 1rem;
        }
        
        .story-stats {
            display: flex;
            gap: 1.5rem;
            margin-bottom: 1rem;
            font-size: 0.9rem;
            color: #7f8c8d;
        }
        
        .read-more-btn {
            color: #667eea;
            text-decoration: none;
            font-weight: 600;
            transition: color 0.3s ease;
        }
        
        .read-more-btn:hover {
            color: #764ba2;
        }
        
        .success-stories-list {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        
        .success-story-item {
            background: white;
            border-radius: 12px;
            padding: 1.5rem;
            display: flex;
            align-items: center;
            gap: 1.5rem;
            box-shadow: 0 2px 10px rgba(0,0,0,0.06);
            transition: all 0.3s ease;
        }
        
        .success-story-item:hover {
            transform: translateX(5px);
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        
        .story-icon {
            font-size: 2.5rem;
        }
        
        .story-content {
            flex: 1;
        }
        
        .story-content h5 {
            color: #2c3e50;
            margin-bottom: 0.5rem;
        }
        
        .story-info {
            display: flex;
            gap: 1rem;
            font-size: 0.85rem;
            color: #7f8c8d;
            flex-wrap: wrap;
        }
        
        .view-story-btn {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 0.5rem 1.5rem;
            border-radius: 20px;
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
        }
        
        .view-story-btn:hover {
            transform: scale(1.05);
        }
        
        .leaderboard {
            background: white;
            border-radius: 20px;
            padding: 2rem;
            box-shadow: 0 4px 20px rgba(0,0,0,0.08);
            margin-bottom: 2rem;
        }
        
        .leaderboard-header {
            text-align: center;
            margin-bottom: 2rem;
        }
        
        .leaderboard-header h3 {
            color: #2c3e50;
            margin-bottom: 0.5rem;
        }
        
        .leaderboard-header p {
            color: #7f8c8d;
        }
        
        .top-three {
            display: flex;
            justify-content: center;
            align-items: flex-end;
            gap: 2rem;
            margin-bottom: 3rem;
        }
        
        .rank-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
        }
        
        .rank-1 {
            order: 2;
        }
        
        .rank-2 {
            order: 1;
        }
        
        .rank-3 {
            order: 3;
        }
        
        .rank-medal {
            font-size: 3rem;
            margin-bottom: 0.5rem;
        }
        
        .contributor-avatar {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            font-weight: bold;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }
        
        .contributor-avatar.champion {
            width: 100px;
            height: 100px;
            font-size: 2.5rem;
            background: linear-gradient(135deg, #ffd700 0%, #ff6b6b 100%);
        }
        
        .contributor-name {
            font-weight: 600;
            color: #2c3e50;
        }
        
        .contributor-score {
            color: #667eea;
            font-weight: bold;
        }
        
        .other-ranks {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
        }
        
        .rank-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 1.5rem;
            background: #f8f9fa;
            border-radius: 10px;
            transition: all 0.3s ease;
        }
        
        .rank-row:hover {
            background: #e9ecef;
            transform: translateX(5px);
        }
        
        .rank-number {
            font-weight: bold;
            color: #7f8c8d;
            min-width: 40px;
        }
        
        .rank-name {
            flex: 1;
            color: #2c3e50;
        }
        
        .rank-score {
            color: #667eea;
            font-weight: 600;
        }
        
        .contribution-guide {
            background: white;
            border-radius: 15px;
            padding: 2rem;
            box-shadow: 0 2px 15px rgba(0,0,0,0.06);
        }
        
        .contribution-guide h4 {
            color: #2c3e50;
            margin-bottom: 1rem;
        }
        
        .contribution-guide ul {
            list-style: none;
            padding: 0;
        }
        
        .contribution-guide li {
            padding: 0.75rem 0;
            border-bottom: 1px solid #ecf0f1;
            color: #555;
        }
        
        .contribution-guide li:last-child {
            border-bottom: none;
        }
        
        .participation-cta {
            text-align: center;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 3rem;
            border-radius: 20px;
            margin-top: 3rem;
        }
        
        .participation-cta h3 {
            margin-bottom: 1rem;
        }
        
        .participation-cta p {
            margin-bottom: 2rem;
            opacity: 0.9;
        }
        
        .cta-button {
            display: inline-block;
            background: white;
            color: #667eea;
            padding: 1rem 2.5rem;
            border-radius: 30px;
            text-decoration: none;
            font-weight: 600;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }
        
        .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(0,0,0,0.3);
        }
        
        @media (max-width: 768px) {
            .board-title {
                font-size: 2rem;
            }
            
            .achievements-grid {
                grid-template-columns: 1fr;
            }
            
            .featured-stories {
                grid-template-columns: 1fr;
            }
            
            .top-three {
                flex-direction: column;
                align-items: center;
            }
            
            .rank-1, .rank-2, .rank-3 {
                order: initial;
            }
            
            .story-meta, .story-info {
                flex-direction: column;
                gap: 0.5rem;
            }
            
            .success-story-item {
                flex-direction: column;
                text-align: center;
            }
        }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', styles);
}
