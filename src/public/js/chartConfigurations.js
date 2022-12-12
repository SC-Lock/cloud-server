export function getTimeLockedChart(doorLogs) {
    const lastDoorLogs = doorLogs.slice(-20);
    const timeValues = lastDoorLogs.map((doorLog) => doorLog.createdAt);
    const lockedValues = lastDoorLogs.map((doorLog) => doorLog.isLocked);
    return {
        type: 'line',
        data: {
            labels: timeValues,
            datasets: [
                {
                    label: 'locked',
                    data: lockedValues,
                    backgroundColor: '#248886',
                    borderColor: '#248886',
                },
            ],
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Most recent updates',
                },
            },
            scales: {
                y: {
                    grid: {
                        display: false,
                    },
                },
            },
        },
    };
}

export default {
    getTimeLockedChart,
};
