'use strict';

import ChartConfigurations from './chartConfigurations.js';

document.addEventListener('DOMContentLoaded', init);

async function init() {
    const doorLogs = await getDoorLogs();
    console.log(doorLogs);
    drawTestChart();
}

async function getDoorLogs() {
    const res = await fetch('/api/doors/1/logs');
    return await res.json();
}

function drawTestChart() {
    const ctx = document.querySelector('#test-chart');
    new Chart(ctx, ChartConfigurations.testChart);
}
