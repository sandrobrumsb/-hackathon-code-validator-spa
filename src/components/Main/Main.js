import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./Main.css";

// Registrar os componentes do gráfico
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Main = () => {
  const [code, setCode] = useState("");
  const [correction, setCorrection] = useState("");
  const [metrics, setMetrics] = useState({
    legibility: 0,
    security: 0,
    formatting: 0,
    reusability: 0,
  });

  // Função para realizar a análise e correção de código (simulada)
  const handleAnalyze = () => {
    // Simulando a correção de código com uma resposta padrão
    const simulatedCorrection = `Aqui está uma versão melhorada do código, levando em consideração legibilidade, segurança, formatação e reutilização:

// Função que compara dois valores e retorna o maior ou o dobro do segundo valor
function compareAndDouble(value1, value2) {
  // Validação dos parâmetros de entrada para garantir que sejam números
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Ambos os parâmetros devem ser números.');
  }

  const doubledValue = value2 * 2;

  if (value1 > doubledValue) {
    return value1;
  } else {
    return doubledValue;
  }
}

// Função principal para demonstrar o uso da função compareAndDouble
function main() {
  const firstValue = 5;
  const secondValue = 7;
  const thirdValue = 3;

  // Usando a função compareAndDouble de forma reutilizável
  const result1 = compareAndDouble(firstValue, secondValue);
  const result2 = compareAndDouble(firstValue, thirdValue);

  // Exibindo os resultados de forma legível
  console.log('Resultado 1:', result1);
  console.log('Resultado 2:', result2);
}

// Chama a função principal
main();`;

    // Atualizando a correção no estado
    setCorrection(simulatedCorrection);

    // Gerando métricas fictícias (substitua conforme necessário)
    const newMetrics = {
      legibility: Math.floor(Math.random() * 101),
      security: Math.floor(Math.random() * 101),
      formatting: Math.floor(Math.random() * 101),
      reusability: Math.floor(Math.random() * 101),
    };

    setMetrics(newMetrics);
  };

  const data = {
    labels: ["Legibilidade", "Vulnerabilidade", "Formatação", "Reutilização"],
    datasets: [
      {
        label: "Porcentagem",
        data: [
          metrics.legibility,
          metrics.security,
          metrics.formatting,
          metrics.reusability,
        ],
        backgroundColor: "#4CAF50",
        borderColor: "#388E3C",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    scales: {
      x: { beginAtZero: true, max: 100 },
      y: { ticks: { font: { size: 14 } } },
    },
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <main className="main">
      <div className="editor-container">
        <h2>Editor de Código</h2>
        <textarea
          className="editor"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Digite seu código aqui"
        />
        <button className="analyze-button" onClick={handleAnalyze}>
          Analisar Código
        </button>
      </div>

      <div className="chart-container">
        <h2>Métricas de Análise</h2>
        <Bar data={data} options={options} />
      </div>

      <div className="correction-container">
        <h2>Correção do Código</h2>
        <textarea
          className="correction"
          value={correction}
          readOnly={true}
          placeholder="Correção do código será exibida aqui"
        />
      </div>
    </main>
  );
};

export default Main;
