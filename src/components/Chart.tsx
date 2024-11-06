interface StockData {
  date: string
  price: number
}

interface ChartProps {
  data?: StockData[]
  modelName?: string,
  selectedStock? : string,
}

const Chart: React.FC<ChartProps> = ({ data, selectedStock, modelName }) => {
  return (
    <div>
      <h1>Chart for {selectedStock} using {modelName}</h1>
      <ul>
        {data?.map((dataPoint) => (
          <div>
            <li key={dataPoint.date}>{dataPoint.date}</li>
            <li>${dataPoint.price}</li>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Chart
