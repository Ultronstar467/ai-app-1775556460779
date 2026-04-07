```javascript
document.addEventListener('DOMContentLoaded', () => {
    // Check if we are on the dashboard page
    if (document.body.classList.contains('dashboard-layout')) {
        initializeCharts();
    }
});

function initializeCharts() {
    // API Usage Over Time Chart
    const apiUsageCtx = document.getElementById('apiUsageChart');
    if (apiUsageCtx) {
        new Chart(apiUsageCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                datasets: [{
                    label: 'API Calls',
                    data: [12000, 19000, 30000, 50000, 23000, 45000, 60000],
                    backgroundColor: 'rgba(233, 69, 96, 0.2)', // Accent color with transparency
                    borderColor: 'var(--accent-color)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: 'var(--text-color)'
                        }
                    },
                    tooltip: {
                        backgroundColor: 'var(--secondary-bg)',
                        titleColor: 'var(--text-color)',
                        bodyColor: 'var(--text-muted)',
                        borderColor: 'var(--border-color)',
                        borderWidth: 1
                    }
                },
                scales: {
                    x: {
                        grid: {
                            color: 'var(--border-color)'
                        },
                        ticks: {
                            color: 'var(--text-muted)'
                        }
                    },
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'var(--border-color)'
                        },
                        ticks: {
                            color: 'var(--text-muted)',
                            callback: function(value) {
                                return value.toLocaleString();
                            }
                        }
                    }
                }
            }
        });
    }

    // Model Performance Chart (Bar Chart Example)
    const modelPerformanceCtx = document.getElementById('modelPerformanceChart');
    if (modelPerformanceCtx) {
        new Chart(modelPerformanceCtx, {
            type: 'bar',
            data: {
                labels: ['Model A', 'Model B', 'Model C', 'Model D', 'Model E'],
                datasets: [{
                    label: 'Accuracy (%)',
                    data: [88, 92, 75, 95, 80],
                    backgroundColor: [
                        'rgba(40, 167, 69, 0.8)', // Success
                        'rgba(23, 162, 184, 0.8)', // Info
                        'rgba(255, 193, 7, 0.8)', // Warning
                        'rgba(233, 69, 96, 0.8)', // Accent
                        'rgba(111, 66, 193, 0.8)' // Purple-ish
                    ],
                    borderColor: [
                        'var(--success-color)',
                        'var(--info-color)',
                        'var(--warning-color)',
                        'var(--accent-color)',
                        '#6f42c1'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: 'var(--text-color)'
                        }
                    },
                     tooltip: {
                        backgroundColor: 'var(--secondary-bg)',
                        titleColor: 'var(--text-color)',
                        bodyColor: 'var(--text-muted)',
                        borderColor: 'var(--border-color)',
                        borderWidth: 1,
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.parsed.y !== null) {
                                    label += context.parsed.y + '%';
                                }
                                return label;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        grid: {
                            color: 'var(--border-color)'
                        },
                        ticks: {
                            color: 'var(--text-muted)'
                        }
                    },
                    y: {
                        beginAtZero: true,
                        max: 100,
                        grid: {
                            color: 'var(--border-color)'
                        },
                        ticks: {
                            color: 'var(--text-muted)',
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                }
            }
        });
    }
}
```