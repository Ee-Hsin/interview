import data from "./data.json"
import { useEffect, useState } from "react"
import Chart from "./Chart"

interface Model {
  id: number
  name: string
}

interface Stock {
  symbol: string
  name: string
}

interface StockData {
  date: string
  price: number
}

const WatStreet: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<string>(
    data.models[0].name
  )
  const [selectedStock, setSelectedStock] = useState<string>(
    data.stocks[0].symbol
  )
  const [timeSeriesData, setTimeSeriesData] = useState<StockData[]>()

  const handleSelectModel = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedModel(e.target.value)
  }

  const handleSelectStock = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStock(e.target.value)
  }

  useEffect(() => {
    if (selectedStock == "AAPL") {
      setTimeSeriesData(data.timeSeriesData["AAPL"])
    } else if (selectedStock == "GOOGL") {
      setTimeSeriesData(data.timeSeriesData["GOOGL"])
    } else if (selectedStock == "MSFT") {
      setTimeSeriesData(data.timeSeriesData["MSFT"])
    }
  }, [selectedStock])

  return (
    <div className="flex flex-col space-y-8">
      <div className="flex flex-col">
        <label htmlFor="model" className="pb-2">
          Select a Model
        </label>
        <select
          name="model"
          id="model"
          onChange={handleSelectModel}
          value={selectedModel}
        >
          {data.models.map((model: Model) => (
            <option key={model.id} value={model.name}>
              {model.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="stock" className="pb-2">
          Select a Stock
        </label>
        <select
          name="stock"
          id="stock"
          onChange={handleSelectStock}
          value={selectedStock}
        >
          {data.stocks.map((stock: Stock) => (
            <option key={stock.symbol} value={stock.symbol}>
              {stock.name}
            </option>
          ))}
        </select>
      </div>
      {/* The chart */}
      <div>
        <h1>The chart!</h1>
        <Chart
          data={timeSeriesData}
          selectedStock={selectedStock}
          modelName={selectedModel}
        />
      </div>
    </div>
  )
}

export default WatStreet
