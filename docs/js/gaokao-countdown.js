// Interactive Gaokao Countdown Widget with Study Milestones
// Feature 1: Enhances student engagement with countdown timer, milestones, and motivation

document.addEventListener('DOMContentLoaded', function() {
    initGaokaoCountdown();
});

function initGaokaoCountdown() {
    // Add countdown widget to the page
    addCountdownWidget();
    
    // Update countdown every second
    updateCountdownDisplay();
    setInterval(updateCountdownDisplay, 1000);
    
    // Initialize milestone notifications
    checkMilestones();
}

function addCountdownWidget() {
    // Check if widget container already exists
    let widgetContainer = document.getElementById('gaokao-countdown-widget');
    if (widgetContainer) return;
    
    // Create widget HTML
    const widgetHTML = `
        <div id="gaokao-countdown-widget" class="gaokao-widget">
            <div class="widget-header">
                <h3>🎯 2026年高考倒计时</h3>
                <p class="widget-subtitle">距离梦想更近一步</p>
            </div>
            <div class="countdown-display">
                <div class="time-unit">
                    <span class="time-value" id="days">000</span>
                    <span class="time-label">天</span>
                </div>
                <div class="time-separator">:</div>
                <div class="time-unit">
                    <span class="time-value" id="hours">00</span>
                    <span class="time-label">时</span>
                </div>
                <div class="time-separator">:</div>
                <div class="time-unit">
                    <span class="time-value" id="minutes">00</span>
                    <span class="time-label">分</span>
                </div>
                <div class="time-separator">:</div>
                <div class="time-unit">
                    <span class="time-value" id="seconds">00</span>
                    <span class="time-label">秒</span>
                </div>
            </div>
            <div class="milestone-alert" id="milestone-alert"></div>
            <div class="progress-tracker">
                <div class="progress-label">
                    <span>备考进度</span>
                    <span id="progress-percentage">0%</span>
                </div>
                <div class="progress-bar-container">
                    <div class="progress-bar-fill" id="progress-fill"></div>
                </div>
            </div>
            <div class="daily-motivation" id="daily-motivation">
                <p class="motivation-text">每一天的努力都是通向成功的阶梯</p>
            </div>
            <div class="milestone-list">
                <h4>📍 重要节点</h4>
                <div id="upcoming-milestones"></div>
            </div>
        </div>
    `;
    
    // Find the best place to insert the widget (after hero section)
    const heroSection = document.querySelector('.hero, header');
    if (heroSection && heroSection.nextElementSibling) {
        heroSection.insertAdjacentHTML('afterend', widgetHTML);
    } else {
        // Fallback: add to the beginning of main content
        const mainContent = document.querySelector('main, body > section');
        if (mainContent) {
            mainContent.insertAdjacentHTML('beforebegin', widgetHTML);
        }
    }
    
    // Add styles
    addCountdownStyles();
}

function updateCountdownDisplay() {
    // Gaokao date: June 7, 2026
    const gaokaoDate = new Date('2026-06-07T09:00:00');
    const now = new Date();
    
    // Calculate time difference
    const diff = gaokaoDate - now;
    
    if (diff <= 0) {
        document.getElementById('days').textContent = '000';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }
    
    // Calculate time units
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    // Update display
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    if (daysElement) daysElement.textContent = String(days).padStart(3, '0');
    if (hoursElement) hoursElement.textContent = String(hours).padStart(2, '0');
    if (minutesElement) minutesElement.textContent = String(minutes).padStart(2, '0');
    if (secondsElement) secondsElement.textContent = String(seconds).padStart(2, '0');
    
    // Update progress
    updateProgress(days);
    
    // Update daily motivation
    updateDailyMotivation(days);
    
    // Update upcoming milestones
    updateUpcomingMilestones(days);
}

function updateProgress(daysRemaining) {
    // Total days from today to Gaokao (approximately)
    const startDate = new Date('2024-09-01'); // Start of senior year
    const gaokaoDate = new Date('2026-06-07');
    const totalDays = Math.floor((gaokaoDate - startDate) / (1000 * 60 * 60 * 24));
    const daysPassed = totalDays - daysRemaining;
    const progressPercentage = Math.max(0, Math.min(100, (daysPassed / totalDays) * 100));
    
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-percentage');
    
    if (progressFill) {
        progressFill.style.width = progressPercentage + '%';
    }
    
    if (progressText) {
        progressText.textContent = progressPercentage.toFixed(1) + '%';
    }
}

function updateDailyMotivation(daysRemaining) {
    const motivations = [
        "每一天的努力都是通向成功的阶梯 💪",
        "相信自己，你比想象中更强大 ✨",
        "今日的汗水，是明日的骄傲 🌟",
        "坚持不懈，成功就在前方 🎯",
        "梦想不会逃跑，逃跑的只有不努力的自己 🚀",
        "努力的时光，终将闪闪发光 ⭐",
        "每一次突破，都是对自己的超越 🏆",
        "相信过程，享受成长 🌱",
        "你的努力，时光看得见 ⏰",
        "坚持到底，就是胜利 🎊"
    ];
    
    // Select motivation based on day of year
    const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    const motivationIndex = dayOfYear % motivations.length;
    
    const motivationElement = document.querySelector('#daily-motivation .motivation-text');
    if (motivationElement) {
        motivationElement.textContent = motivations[motivationIndex];
    }
}

function checkMilestones() {
    const gaokaoDate = new Date('2026-06-07');
    const now = new Date();
    const daysRemaining = Math.floor((gaokaoDate - now) / (1000 * 60 * 60 * 24));
    
    const milestones = [
        { days: 365, message: "🎉 距离高考还有整整一年！制定好你的全年学习计划吧！" },
        { days: 200, message: "💪 距离高考还有200天！进入冲刺阶段，加油！" },
        { days: 100, message: "🔥 距离高考还有100天！最后的冲刺，全力以赴！" },
        { days: 50, message: "⚡ 距离高考还有50天！坚持就是胜利！" },
        { days: 30, message: "🎯 距离高考还有30天！调整心态，稳定发挥！" },
        { days: 7, message: "🌟 距离高考还有一周！保持信心，你准备好了！" }
    ];
    
    // Check if today matches any milestone
    const milestone = milestones.find(m => m.days === daysRemaining);
    if (milestone) {
        showMilestoneAlert(milestone.message);
    }
}

function showMilestoneAlert(message) {
    const alertElement = document.getElementById('milestone-alert');
    if (alertElement) {
        alertElement.textContent = message;
        alertElement.classList.add('show');
        
        // Auto-hide after 10 seconds
        setTimeout(() => {
            alertElement.classList.remove('show');
        }, 10000);
    }
}

function updateUpcomingMilestones(daysRemaining) {
    const milestones = [
        { days: 365, title: "一年倒计时", icon: "🎯" },
        { days: 200, title: "200天冲刺", icon: "💪" },
        { days: 100, title: "100天誓师", icon: "🔥" },
        { days: 50, title: "50天倒计时", icon: "⚡" },
        { days: 30, title: "最后30天", icon: "🌟" },
        { days: 7, title: "考前一周", icon: "🎓" }
    ];
    
    const upcomingMilestones = milestones.filter(m => m.days <= daysRemaining + 30 && m.days >= daysRemaining);
    
    const milestonesContainer = document.getElementById('upcoming-milestones');
    if (milestonesContainer) {
        if (upcomingMilestones.length === 0) {
            milestonesContainer.innerHTML = '<p class="no-milestones">暂无即将到来的重要节点</p>';
        } else {
            milestonesContainer.innerHTML = upcomingMilestones.map(m => {
                const daysUntil = m.days - daysRemaining;
                const status = daysUntil === 0 ? '今天' : `还有${Math.abs(daysUntil)}天`;
                return `
                    <div class="milestone-item">
                        <span class="milestone-icon">${m.icon}</span>
                        <span class="milestone-title">${m.title}</span>
                        <span class="milestone-days">${status}</span>
                    </div>
                `;
            }).join('');
        }
    }
}

function addCountdownStyles() {
    if (document.getElementById('gaokao-countdown-styles')) return;
    
    const styles = `
        <style id="gaokao-countdown-styles">
        .gaokao-widget {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 2rem;
            margin: 2rem auto;
            max-width: 900px;
            border-radius: 20px;
            box-shadow: 0 10px 40px rgba(102, 126, 234, 0.3);
            position: relative;
            overflow: hidden;
        }
        
        .gaokao-widget::before {
            content: "";
            position: absolute;
            top: -50%;
            right: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
            animation: pulse 4s ease-in-out infinite;
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.5; }
            50% { transform: scale(1.1); opacity: 0.3; }
        }
        
        .widget-header {
            text-align: center;
            margin-bottom: 2rem;
            position: relative;
            z-index: 2;
        }
        
        .widget-header h3 {
            font-size: 2rem;
            margin-bottom: 0.5rem;
            text-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .widget-subtitle {
            font-size: 1rem;
            opacity: 0.9;
        }
        
        .countdown-display {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            margin: 2rem 0;
            position: relative;
            z-index: 2;
        }
        
        .time-unit {
            display: flex;
            flex-direction: column;
            align-items: center;
            background: rgba(255, 255, 255, 0.1);
            padding: 1rem 1.5rem;
            border-radius: 15px;
            backdrop-filter: blur(10px);
            min-width: 80px;
        }
        
        .time-value {
            font-size: 2.5rem;
            font-weight: bold;
            line-height: 1;
            text-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .time-label {
            font-size: 0.9rem;
            margin-top: 0.5rem;
            opacity: 0.9;
        }
        
        .time-separator {
            font-size: 2rem;
            font-weight: bold;
            opacity: 0.6;
        }
        
        .milestone-alert {
            background: rgba(255, 215, 0, 0.2);
            border: 2px solid rgba(255, 215, 0, 0.5);
            border-radius: 10px;
            padding: 1rem;
            margin: 1rem 0;
            text-align: center;
            font-weight: 500;
            opacity: 0;
            max-height: 0;
            overflow: hidden;
            transition: all 0.3s ease;
            position: relative;
            z-index: 2;
        }
        
        .milestone-alert.show {
            opacity: 1;
            max-height: 200px;
            margin: 1rem 0;
        }
        
        .progress-tracker {
            margin: 2rem 0;
            position: relative;
            z-index: 2;
        }
        
        .progress-label {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.5rem;
            font-size: 0.9rem;
        }
        
        .progress-bar-container {
            height: 12px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 10px;
            overflow: hidden;
        }
        
        .progress-bar-fill {
            height: 100%;
            background: linear-gradient(90deg, #4ade80 0%, #22c55e 100%);
            border-radius: 10px;
            transition: width 1s ease;
            box-shadow: 0 0 10px rgba(74, 222, 128, 0.5);
        }
        
        .daily-motivation {
            background: rgba(255, 255, 255, 0.1);
            padding: 1.5rem;
            border-radius: 15px;
            text-align: center;
            margin: 2rem 0;
            backdrop-filter: blur(10px);
            position: relative;
            z-index: 2;
        }
        
        .motivation-text {
            font-size: 1.1rem;
            font-style: italic;
            margin: 0;
        }
        
        .milestone-list {
            background: rgba(255, 255, 255, 0.1);
            padding: 1.5rem;
            border-radius: 15px;
            margin-top: 2rem;
            backdrop-filter: blur(10px);
            position: relative;
            z-index: 2;
        }
        
        .milestone-list h4 {
            margin: 0 0 1rem 0;
            font-size: 1.2rem;
        }
        
        .milestone-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.75rem;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 8px;
            margin-bottom: 0.5rem;
        }
        
        .milestone-icon {
            font-size: 1.5rem;
            margin-right: 0.5rem;
        }
        
        .milestone-title {
            flex: 1;
            font-weight: 500;
        }
        
        .milestone-days {
            font-size: 0.9rem;
            opacity: 0.8;
        }
        
        .no-milestones {
            text-align: center;
            opacity: 0.7;
            margin: 0;
        }
        
        @media (max-width: 768px) {
            .gaokao-widget {
                padding: 1.5rem;
                margin: 1rem;
            }
            
            .widget-header h3 {
                font-size: 1.5rem;
            }
            
            .countdown-display {
                gap: 0.5rem;
            }
            
            .time-unit {
                padding: 0.75rem 1rem;
                min-width: 60px;
            }
            
            .time-value {
                font-size: 1.8rem;
            }
            
            .time-label {
                font-size: 0.8rem;
            }
            
            .time-separator {
                font-size: 1.5rem;
            }
            
            .milestone-item {
                flex-direction: column;
                text-align: center;
                gap: 0.5rem;
            }
        }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', styles);
}
