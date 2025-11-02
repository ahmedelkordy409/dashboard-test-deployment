'use client'

import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
)

const chartData = {
  "labels": [
    "2024-01",
    "2024-02",
    "2024-03",
    "2024-04",
    "2024-05"
  ],
  "datasets": [
    {
      "label": "revenue",
      "data": [
        45000,
        52000,
        48000,
        61000,
        58000
      ],
      "backgroundColor": "rgba(59, 130, 246, 1)"
    },
    {
      "label": "customers",
      "data": [
        120,
        145,
        135,
        168,
        155
      ],
      "backgroundColor": "rgba(16, 185, 129, 1)"
    }
  ]
}

const chartOptions = {
  "responsive": true,
  "maintainAspectRatio": false,
  "plugins": {
    "legend": {
      "position": "top"
    }
  }
}

export default function Chart0() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <Bar data={chartData} options={chartOptions} />
    </div>
  )
}
