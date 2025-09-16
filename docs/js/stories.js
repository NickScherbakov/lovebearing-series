// Stories page functionality
document.addEventListener('DOMContentLoaded', function() {
    initStoriesPage();
});

function initStoriesPage() {
    loadStories();
    initFilters();
    initModal();
    initLoadMore();
}

// Sample stories data (in real implementation, this would come from API or GitHub)
const sampleStories = [
    {
        id: 1,
        title: "我的数学突破之路",
        author: "小明",
        type: "student",
        subject: "math",
        date: "2025-09-16",
        tags: ["学习方法", "数学突破"],
        excerpt: "从不及格到满分的蜕变历程，分享我的学习方法和心路历程...",
        content: `
## 我的故事

高二下学期，我的数学成绩一直徘徊在60分左右。老师说我的基础不行，同学说我笨，我自己也开始怀疑自己能不能考上大学。

## 转折点

一切的改变始于一次偶然的机会。我在网上看到一个学长的分享，他说数学不是天赋，而是方法。我开始尝试新的学习方法...

## 我的方法

1. **建立知识体系**: 我开始整理知识点之间的联系
2. **多做题**: 每天坚持做题，但不是盲目做
3. **及时复习**: 每天晚上复习当天所学
4. **寻求帮助**: 遇到问题及时问老师和同学

## 结果

经过半年的努力，我的数学成绩从60分提升到95分。更重要的是，我找到了适合自己的学习方法。

## 给同学们的建议

- 不要害怕承认自己的不足
- 找到适合自己的学习方法很重要
- 坚持比天赋更重要
- 多和同学老师交流

记住：每个人都有自己的节奏，找到属于你的学习方式，你也能创造奇迹！
        `,
        likes: 45,
        views: 120
    },
    {
        id: 2,
        title: "如何激发学生的学习动力",
        author: "王老师",
        type: "teacher",
        subject: "general",
        date: "2025-09-15",
        tags: ["教学方法", "学生管理"],
        excerpt: "15年教学经验分享，如何让学生爱上学习...",
        content: `
## 我的教学哲学

15年的教学生涯让我明白，学生不是容器，而是火种。我们的任务不是灌输知识，而是点燃他们的学习热情。

## 我的方法

### 1. 建立情感连接
- 了解每个学生的兴趣爱好
- 记住他们的名字和特点
- 真诚地关心他们的生活

### 2. 创造成功体验
- 从易到难，循序渐进
- 及时肯定学生的进步
- 让学生感受到自己的成长

### 3. 多样化教学
- 结合实际生活案例
- 使用现代科技辅助教学
- 开展小组讨论和合作学习

### 4. 培养自主学习能力
- 教给学生学习方法
- 鼓励独立思考
- 培养解决问题的能力

## 给年轻老师的建议

- 热爱教育事业
- 不断学习新知识
- 尊重每一位学生
- 保持教学热情

教育是一场爱的传递，让我们一起点亮更多年轻的心灵！
        `,
        likes: 67,
        views: 203
    },
    {
        id: 3,
        title: "陪伴孩子高考的日子",
        author: "明妈妈",
        type: "parent",
        subject: "general",
        date: "2025-09-14",
        tags: ["家庭教育", "心理支持"],
        excerpt: "一位母亲眼中的高考，分享陪伴孩子的点点滴滴...",
        content: `
## 我的故事

孩子高考的那一年，是我人生中最煎熬却也最充实的时光。作为母亲，我见证了孩子从懵懂少年到成熟青年的蜕变。

## 我的角色转变

高考前，我是严格的监工；高考中，我是坚定的后盾；高考后，我是温暖的港湾。

## 我学到的经验

### 1. 尊重孩子的选择
- 不要把自己的梦想强加给孩子
- 相信孩子有自己的判断力
- 给予适当的指导和建议

### 2. 创造良好的学习环境
- 提供安静的学习空间
- 准备营养丰富的饮食
- 关注孩子的身体健康

### 3. 心理疏导
- 倾听孩子的心声
- 帮助孩子缓解压力
- 鼓励孩子勇敢面对困难

### 4. 培养独立性
- 让孩子学会自我管理
- 培养解决问题的能力
- 准备好放手的那一刻

## 给家长们的建议

- 保持平和的心态
- 多沟通少命令
- 关注过程而非结果
- 相信孩子的能力

高考不是终点，而是新的起点。让我们一起陪伴孩子，迎接更美好的未来！
        `,
        likes: 89,
        views: 156
    }
];

let currentStories = [...sampleStories];
let filteredStories = [...sampleStories];
let currentPage = 1;
const storiesPerPage = 9;

function loadStories() {
    const container = document.getElementById('stories-container');
    const startIndex = (currentPage - 1) * storiesPerPage;
    const endIndex = startIndex + storiesPerPage;
    const storiesToShow = filteredStories.slice(startIndex, endIndex);

    storiesToShow.forEach(story => {
        const storyCard = createStoryCard(story);
        container.appendChild(storyCard);
    });

    // Hide load more button if no more stories
    if (endIndex >= filteredStories.length) {
        document.getElementById('load-more-btn').style.display = 'none';
    }
}

function createStoryCard(story) {
    const card = document.createElement('div');
    card.className = 'story-card';
    card.setAttribute('data-type', story.type);
    card.setAttribute('data-subject', story.subject);

    card.innerHTML = `
        <div class="story-header">
            <span class="story-type">${getTypeLabel(story.type)}</span>
            <span class="story-date">${formatDate(story.date)}</span>
        </div>
        <h3>${story.title}</h3>
        <p class="story-excerpt">${story.excerpt}</p>
        <div class="story-meta">
            <span class="author">作者: ${story.author}</span>
            <div class="story-stats">
                <span>👍 ${story.likes}</span>
                <span>👁️ ${story.views}</span>
            </div>
        </div>
        <div class="story-tags">
            ${story.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <a href="#" class="story-link" data-story-id="${story.id}">阅读全文 →</a>
    `;

    // Add click event for reading full story
    card.querySelector('.story-link').addEventListener('click', function(e) {
        e.preventDefault();
        openStoryModal(story.id);
    });

    return card;
}

function getTypeLabel(type) {
    const labels = {
        student: '学生故事',
        teacher: '老师故事',
        parent: '家长故事',
        alumni: '往届生故事'
    };
    return labels[type] || type;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function initFilters() {
    const typeFilter = document.getElementById('story-type');
    const subjectFilter = document.getElementById('subject');
    const sortFilter = document.getElementById('sort');

    [typeFilter, subjectFilter, sortFilter].forEach(filter => {
        filter.addEventListener('change', applyFilters);
    });
}

function applyFilters() {
    const typeValue = document.getElementById('story-type').value;
    const subjectValue = document.getElementById('subject').value;
    const sortValue = document.getElementById('sort').value;

    // Filter stories
    filteredStories = sampleStories.filter(story => {
        const typeMatch = typeValue === 'all' || story.type === typeValue;
        const subjectMatch = subjectValue === 'all' || story.subject === subjectValue;
        return typeMatch && subjectMatch;
    });

    // Sort stories
    filteredStories.sort((a, b) => {
        switch (sortValue) {
            case 'newest':
                return new Date(b.date) - new Date(a.date);
            case 'oldest':
                return new Date(a.date) - new Date(b.date);
            case 'popular':
                return (b.likes + b.views) - (a.likes + a.views);
            default:
                return 0;
        }
    });

    // Reset pagination and reload
    currentPage = 1;
    document.getElementById('stories-container').innerHTML = '';
    document.getElementById('load-more-btn').style.display = 'block';
    loadStories();
}

function initLoadMore() {
    document.getElementById('load-more-btn').addEventListener('click', function() {
        currentPage++;
        loadStories();
    });
}

function initModal() {
    const modal = document.getElementById('story-modal');
    const closeBtn = document.querySelector('.close-modal');

    closeBtn.addEventListener('click', closeModal);

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
}

function openStoryModal(storyId) {
    const story = sampleStories.find(s => s.id === storyId);
    if (!story) return;

    const modal = document.getElementById('story-modal');
    const content = document.getElementById('story-content');

    content.innerHTML = `
        <div class="story-full">
            <div class="story-full-header">
                <h2>${story.title}</h2>
                <div class="story-full-meta">
                    <span class="author">作者: ${story.author}</span>
                    <span class="type">${getTypeLabel(story.type)}</span>
                    <span class="date">${formatDate(story.date)}</span>
                </div>
                <div class="story-full-tags">
                    ${story.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
            <div class="story-full-content">
                ${marked.parse(story.content)}
            </div>
            <div class="story-full-stats">
                <button class="like-btn" data-story-id="${story.id}">
                    👍 ${story.likes} 喜欢
                </button>
                <span>👁️ ${story.views} 阅读</span>
            </div>
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    // Update view count
    story.views++;
}

function closeModal() {
    const modal = document.getElementById('story-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Add some CSS for modal and additional styles
const additionalStyles = `
<style>
.modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
    background-color: white;
    margin: 5% auto;
    padding: 0;
    border-radius: 15px;
    width: 90%;
    max-width: 800px;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
}

.close-modal {
    position: absolute;
    right: 20px;
    top: 15px;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    color: #aaa;
    z-index: 1001;
}

.close-modal:hover {
    color: #000;
}

.stories-hero {
    background: linear-gradient(135deg, #3498db 0%, #2c3e50 100%);
}

.filter-controls {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    margin-bottom: 2rem;
}

.filter-group {
    display: flex;
    align-items: center;
    gap: 10px;
}

.filter-select {
    padding: 8px 12px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background: white;
}

.load-more {
    text-align: center;
    margin-top: 3rem;
}

.story-excerpt {
    color: #666;
    line-height: 1.6;
}

.story-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
    font-size: 0.9rem;
    color: #666;
}

.story-stats {
    display: flex;
    gap: 15px;
}

.story-tags {
    margin: 1rem 0;
}

.tag {
    display: inline-block;
    background: #f0f0f0;
    color: #666;
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 0.8rem;
    margin-right: 8px;
    margin-bottom: 8px;
}

.story-full {
    padding: 30px;
}

.story-full-header {
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #eee;
}

.story-full-meta {
    display: flex;
    gap: 20px;
    margin: 1rem 0;
    font-size: 0.9rem;
    color: #666;
}

.story-full-tags {
    margin-top: 1rem;
}

.story-full-content {
    line-height: 1.8;
    margin: 2rem 0;
}

.story-full-content h2,
.story-full-content h3 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: #2c3e50;
}

.story-full-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
    border-top: 1px solid #eee;
}

.like-btn {
    background: #3498db;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
}

.like-btn:hover {
    background: #2980b9;
}

@media (max-width: 768px) {
    .filter-controls {
        flex-direction: column;
        align-items: center;
    }

    .story-meta {
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;
    }

    .story-full-meta {
        flex-direction: column;
        gap: 5px;
    }

    .story-full-stats {
        flex-direction: column;
        gap: 10px;
        align-items: flex-start;
    }
}
</style>
`;

// Add additional styles to head
document.head.insertAdjacentHTML('beforeend', additionalStyles);

// Load marked.js for markdown parsing (if not available, fallback to plain text)
if (typeof marked === 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/marked/marked.min.js';
    document.head.appendChild(script);
}