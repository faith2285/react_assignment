import axios from "axios";

const API_URL = 'http://localhost:3001';

async function httpGetRewards() {
    const response = await axios(`${API_URL}/rewards`);
    return await response
  }

async function httpGetCustomers() {
      const response = await axios(`${API_URL}/customers`);
      return await response
  }

async function httpGetTransactions() {
    const response = await axios(`${API_URL}/transactions`);
    return await response
}


async function httpGetCustomer(customerId) {
    const response = await axios(`${API_URL}/customers/${customerId}`);
    return await response
}

async function httpGetTransaction(transactionId) {
    const response = await axios(`${API_URL}/transactions/${transactionId}`);
    return await response
}

async function httpGetRewardCustomer(customerId) {
    const response = axios.get(`http://localhost:3001/rewards/${customerId}`)
    return await response
}

async function httpGetTransactionCustomer(customerId) {
    const response = axios
    .get(`http://localhost:3001/transactions?customerId=${customerId}&_sort=createdAt&_order=desc`)
    return await response
}

  export {
   httpGetRewards,
   httpGetCustomers,
   httpGetTransactions,
   httpGetCustomer,
   httpGetTransaction,
   httpGetRewardCustomer,
   httpGetTransactionCustomer
  };