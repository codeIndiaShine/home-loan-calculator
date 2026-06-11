import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface ResultsProps {
  emi: number;
  totalInterest: number;
  totalPayment: number;
  amortizationSchedule: { month: number; principal: number; interest: number; balance: number }[];
}

export default function Results({ emi, totalInterest, totalPayment, amortizationSchedule }: ResultsProps) {
  const chartData = {
    labels: amortizationSchedule.map(a => `M${a.month}`),
    datasets: [
      {
        label: 'Principal',
        data: amortizationSchedule.map(a => a.principal),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
      {
        label: 'Interest',
        data: amortizationSchedule.map(a => a.interest),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  return (
    <div className="mt-6 max-w-4xl mx-auto">
      <div className="bg-white p-6 rounded shadow mb-6">
        <h2 className="text-xl font-bold mb-4">Loan Summary</h2>
        <p><strong>Monthly EMI:</strong> ${emi.toFixed(2)}</p>
        <p><strong>Total Interest:</strong> ${totalInterest.toFixed(2)}</p>
        <p><strong>Total Payment:</strong> ${totalPayment.toFixed(2)}</p>
      </div>
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Amortization Schedule</h2>
        <Bar data={chartData} />
      </div>
    </div>
  );
}