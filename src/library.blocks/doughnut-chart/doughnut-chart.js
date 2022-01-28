import Chart from 'chart.js/auto';

import './doughnut-chart.scss';

function doughnutChart(chartSelector = '.js-doughnut-chart', chartData = [
  { label: 'red', data: 30, color: '#FF0000' },
  { label: 'green', data: 30, color: '#00FF00' },
  { label: 'blue', data: 30, color: '#0000FF' },
]) {
  const chartElement = document.querySelector(chartSelector);
  const ctx = chartElement.querySelector('.js-doughnut-chart__canvas').getContext('2d');
  const charCount = chartElement.querySelector('.js-doughnut-chart__count');
  const count = chartData.reduce((prev, curr) => prev + curr.data, 0);
  charCount.textContent = count;

  function colorsGenerate(context, data) {
    return data.map((item) => {
      let color = '';
      if (item.color.start) {
        color = context.createLinearGradient(0, 0, 0, 124);
        color.addColorStop(0, item.color.start);
        color.addColorStop(1, item.color.end);
      } else {
        color = item.color;
      }
      return color;
    });
  }

  const htmlLegendPlugin = {
    afterUpdate(chart) {
      const ul = chartElement.querySelector('.js-doughnut-chart__legend');
      ul.innerHTML = '';

      const items = chart.options.plugins.legend.labels.generateLabels(chart);
      items.forEach((item, idx) => {
        const itemColor = chartData[idx].color.start
          ? `background: linear-gradient(180deg, ${chartData[idx].color.start}, ${chartData[idx].color.end} 100%);`
          : `background-color: ${chartData[idx].color}`;
        const legendItemTemplate = `<li class="doughnut-chart__legend-item js-doughnut-chart__legend-item">
          <span
            class="doughnut-chart__legend-point"
            style="${itemColor}"
          ></span>
          <p class="doughnut-chart__legend-label">${item.text}</p>
        </li>`;
        ul.insertAdjacentHTML('beforeend', legendItemTemplate);
      });

      const legendItems = chartElement.querySelectorAll('.js-doughnut-chart__legend-item');
      legendItems.forEach((item, idx) => {
        item.addEventListener('click', () => {
          chart.toggleDataVisibility(idx);
          chart.update();
        });
      });
    },
  };

  return new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: chartData.map((item) => item.label),
      datasets: [
        {
          data: chartData.map((item) => item.data),
          backgroundColor: colorsGenerate(ctx, chartData),
        },
      ],
      offset: 2,
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
        htmlLegend: {
          containerID: 'room-details__chart-legend',
        },
        tooltip: {
          enabled: false,
        },
      },
      cutout: 55,
    },
    plugins: [htmlLegendPlugin],
  });
}

export default doughnutChart;
