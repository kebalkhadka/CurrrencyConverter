import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import { GoArrowSwitch } from "react-icons/go";

const CurrencyConverter = () => {
  const [data, setData] = useState(null);
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("USD");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://v6.exchangerate-api.com/v6/91e7a604ce3467e1e387bd5a/latest/USD');
        const result = await response.json();
        setData(result);

        const options = Object.keys(result.conversion_rates).map((key) => ({
          code: key
        }));
        setCurrencyOptions(options);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const swapCurrencies = () => {
    setFromCurrency((prevFromCurrency) => {
      const newFromCurrency = toCurrency;
      setToCurrency(prevFromCurrency);
      return newFromCurrency;
    });
    console.log("clicked");
    
  };

  const convertCurrency = () => {
    if (data && data.conversion_rates) {
      const fromRate = data.conversion_rates[fromCurrency];
      const toRate = data.conversion_rates[toCurrency];
      const converted = (amount / fromRate) * toRate;
      setConvertedAmount(converted.toFixed(2));
    } else {
      console.log("Conversion rates not available");
    }
  };

  return (
    <div className="max-w-xl mx-auto my-10 p-5 bg-white rounded-lg shadow-md">
      <h2 className="mb-5 text-2xl font-semibold text-gray-500">Currency Converter</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
        <Dropdown
          options={currencyOptions}
          label="From Currency"
          onChange={handleFromCurrencyChange}
          value={fromCurrency}
        />
        <div className="flex justify-center -mb-5 sm:mb-0">
          <button className="p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300" onClick={swapCurrencies}>
            <GoArrowSwitch className="text-xl text-gray-700" />
          </button>
        </div>
        <Dropdown
          options={currencyOptions}
          label="To Currency"
          onChange={handleToCurrencyChange}
          value={toCurrency}
        />
      </div>

      <div className="mt-4">
        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount:</label>
        <input
          type="number"
          className="w-full py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-1"
          value={amount}
          onChange={handleAmountChange}
        />
      </div>
      <div className="mt-6 flex justify-end">
        <button className="px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={convertCurrency}>Convert</button>
      </div>
      {convertedAmount !== null && (
        <div className="mt-4 text-lg font-medium text-right text-green-500">
          Converted Amount: {convertedAmount} {toCurrency}
        </div>
      )}
    </div>
  );
};

export default CurrencyConverter;
