/* ============================================================================
   Admin dashboard charts. Relies on window.Chart + window.HomeClubData.
   ============================================================================ */

(function(global){
  'use strict';

  function setChartDefaults(){
    if (!global.Chart) return;
    Chart.defaults.color = '#7A8090';
    Chart.defaults.font.family = "'Inter', sans-serif";
    Chart.defaults.font.size = 10.5;
    Chart.defaults.borderColor = '#262A33';
  }

  function growthChart(ctx){
    return new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['W1','W2','W3','W4','W5','W6','W7','W8','W9','W10','W11','W12','W13','W14'],
        datasets: [
          {
            label: 'Cumulative members',
            data: [42,68,94,121,148,172,194,218,238,256,275,294,308,320],
            borderColor: '#FF7847',
            backgroundColor: 'rgba(255, 120, 71, 0.12)',
            borderWidth: 2.5, fill: true, tension: 0.4,
            pointBackgroundColor: '#FF7847', pointRadius: 0, pointHoverRadius: 5
          },
          {
            label: 'Active projects',
            data: [12,21,28,36,44,51,58,67,76,85,96,108,121,134],
            borderColor: '#5CC689',
            backgroundColor: 'rgba(92, 198, 137, 0.05)',
            borderWidth: 2, fill: false, tension: 0.4, borderDash: [4,4],
            pointRadius: 0, pointHoverRadius: 5
          }
        ]
      },
      options: commonLineOptions()
    });
  }

  function earnBurnChart(ctx){
    return new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Leroy Merlin','Decathlon','Mugg & Bean'],
        datasets: [
          { label: 'HomeBucks earned',   data: [612000, 154000, 81000],
            backgroundColor: '#FF7847', borderRadius: 4 },
          { label: 'HomeBucks redeemed', data: [218000,  96000, 142000],
            backgroundColor: '#5CC689', borderRadius: 4 }
        ]
      },
      options: {
        maintainAspectRatio: false, responsive: true,
        plugins: {
          legend: { position: 'bottom', labels: { boxWidth: 8, boxHeight: 8, padding: 14, usePointStyle: true } },
          tooltip: { callbacks: { label: c => c.dataset.label + ': ' + c.parsed.y.toLocaleString() + ' HB' } }
        },
        scales: {
          x: { grid: { display: false } },
          y: { grid: { color: '#1B1E25' }, beginAtZero: true, ticks: { callback: v => (v/1000)+'k' } }
        }
      }
    });
  }

  function storeChart(ctx){
    const d = global.HomeClubData;
    return new Chart(ctx, {
      type: 'bar',
      data: {
        labels: d.STORES.map(s => s.name),
        datasets: [
          { label: 'Members', data: d.STORES.map(s => d.storeCounts[s.name].members),
            backgroundColor: '#FF7847', borderRadius: 4 },
          { label: 'Active projects', data: d.STORES.map(s => d.storeCounts[s.name].projects),
            backgroundColor: '#E5B447', borderRadius: 4 }
        ]
      },
      options: {
        maintainAspectRatio: false, responsive: true,
        plugins: { legend: { position: 'bottom', labels: { boxWidth: 8, boxHeight: 8, padding: 14, usePointStyle: true } } },
        scales: {
          x: { grid: { display: false }, ticks: { font: { size: 9.5 } } },
          y: { grid: { color: '#1B1E25' }, beginAtZero: true }
        }
      }
    });
  }

  function projChart(ctx){
    const d = global.HomeClubData;
    return new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: Object.keys(d.projCounts),
        datasets: [{
          data: Object.values(d.projCounts),
          backgroundColor: ['#FF7847','#E5B447','#5CC689','#B89B6E','#8B7FD6','#5A6B3F','#E5566F'],
          borderColor: '#14161B', borderWidth: 2
        }]
      },
      options: {
        maintainAspectRatio: false, responsive: true, cutout: '62%',
        plugins: { legend: { position: 'right', labels: { boxWidth: 10, boxHeight: 10, padding: 8, font: { size: 10 }, usePointStyle: true } } }
      }
    });
  }

  function commonLineOptions(){
    return {
      maintainAspectRatio: false, responsive: true,
      plugins: {
        legend: { position: 'bottom', labels: { boxWidth: 8, boxHeight: 8, padding: 14, usePointStyle: true } },
        tooltip: { backgroundColor: '#0A0B0E', borderColor: '#262A33', borderWidth: 1, padding: 10, titleColor: '#fff', bodyColor: '#E4E6EB' }
      },
      interaction: { mode: 'index', intersect: false },
      scales: {
        x: { grid: { display: false } },
        y: { grid: { color: '#1B1E25' }, beginAtZero: true }
      }
    };
  }

  // Sparklines (inline SVG — avoids Chart.js overhead for small KPI cards)
  function sparkline(el, values, color){
    if (!el) return;
    const w = 70, h = 28;
    const max = Math.max.apply(null, values);
    const min = Math.min.apply(null, values);
    const range = Math.max(1, max - min);
    const pts = values.map((v, i) => {
      const x = (i / (values.length - 1)) * w;
      const y = h - ((v - min) / range) * h;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(' ');
    el.innerHTML = `
      <svg viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" preserveAspectRatio="none">
        <polyline points="${pts}" fill="none" stroke="${color}" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
      </svg>
    `;
  }

  global.HomeClubCharts = {
    setChartDefaults, growthChart, earnBurnChart, storeChart, projChart, sparkline
  };
})(window);
