import Chart from 'chart.js/auto';

import './doughnut-chart.scss';

function doughnutChart(chartData) {
  const ctx = document.querySelector('.doughnut-chart__canvas').getContext('2d');
  const charCount = document.querySelector('.doughnut-chart__count');
  const count = chartData.reduce((prev, curr) => prev + curr.data, 0);
  charCount.textContent = count;

  function colorsGenerate(context, data) {
    return data.map((item) => {
      let gradient = '';
      if (item.color.start) {
        gradient = context.createLinearGradient(0, 0, 0, 124);
        gradient.addColorStop(0, item.color.start);
        gradient.addColorStop(1, item.color.end);
      } else {
        gradient = item.color;
      }
      return gradient;
    });
  }

  const htmlLegendPlugin = {
    afterUpdate(chart) {
      const ul = document.querySelector('.doughnut-chart__legend');

      while (ul.firstChild) {
        ul.firstChild.remove();
      }

      const items = chart.options.plugins.legend.labels.generateLabels(chart);

      items.forEach((item, idx) => {
        const li = document.createElement('li');
        li.classList.add('doughnut-chart__legend-item');

        const point = document.createElement('span');
        point.classList.add('doughnut-chart__legend-point');
        if (chartData[idx].color.start) {
          point.style.background = `linear-gradient(180deg, ${chartData[idx].color.start}, ${chartData[idx].color.end} 100%)`;
        }

        const label = document.createElement('p');
        label.textContent = item.text;
        label.classList.add('doughnut-chart__legend-label');

        li.appendChild(point);
        li.appendChild(label);
        ul.appendChild(li);

        li.onclick = () => {
          chart.toggleDataVisibility(item.index);
          chart.update();
        };
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
      },
      cutout: 55,
    },
    plugins: [htmlLegendPlugin],
  });
}

export default doughnutChart;
