'use strict';

import ChartConfigurations from './chartConfigurations.js';

document.addEventListener('DOMContentLoaded', init);

async function init() {
    drawCharts();
}

async function getDoorLogs() {
    const res = await fetch('/api/doors/1/logs');
    return await res.json();
}

function drawTimeLockedChart(doorLogs) {
    const ctx = document.querySelector('#time-locked-chart');
    new Chart(ctx, ChartConfigurations.getTimeLockedChart(doorLogs));
}

async function drawCharts() {
    const doorLogs = await getDoorLogs();

    drawTimeLockedChart(doorLogs);
}
