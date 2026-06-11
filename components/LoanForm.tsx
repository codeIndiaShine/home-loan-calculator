import { useState } from "react";

interface LoanFormProps {
  onCalculate: (principal: number, rate: number, years: number) => void;
}

export default function LoanForm({ onCalculate }: LoanFormProps) {
  const [principal, setPrincipal] = useState(300000);
  const [rate, setRate] = useState(7);
  const [years, setYears] = useState(20);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCalculate(principal, rate, years);
  };

  return (
    <form className="bg-white p-6 rounded shadow-md w-full max-w-md mx-auto" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-4">Home Loan Calculator</h2>
      <div className="mb-4">
        <label className="block mb-1">Loan Amount ($)</label>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(Number(e.target.value))}
          className="w-full border p-2 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Annual Interest Rate (%)</label>
        <input
          type="number"
          step="0.01"
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
          className="w-full border p-2 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Loan Tenure (years)</label>
        <input
          type="number"
          value={years}
          onChange={(e) => setYears(Number(e.target.value))}
          className="w-full border p-2 rounded"
        />
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" type="submit">
        Calculate
      </button>
    </form>
  );
}