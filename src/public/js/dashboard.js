'use strict';

import ChartConfigurations from './chartConfigurations.js';

document.addEventListener('DOMContentLoaded', init);

async function init() {
    const doorLogs = await getDoorLogs();
}

async function getDoorLogs() {
    const res = await fetch('/api/doors/1/logs');
    return await res.json();
}
