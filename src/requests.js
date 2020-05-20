
const baseURL = "http://localhost:6001/transactions";

const parseData = res => res.json();
const handleError = err => console.error(err);

const headers = {
    "content-type": "application/json",
    "accept": "application/json"
};

export const getAllTransactions = () => {
    return fetch(baseURL)
    .then(parseData)
    .catch(handleError);
};

export const postNewTransaction = (transaction) => {
    return fetch(baseURL, {
        method:"POST",
        headers,
        body: JSON.stringify(transaction)
    })
    .then(parseData)
    .catch(handleError);
};

export const deleteTransaction = (id) => {
    return fetch(`${baseURL}/${id}`, {
        method: "DELETE",
        headers
    })
    .catch(handleError);
};

