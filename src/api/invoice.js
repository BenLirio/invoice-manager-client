import apiUrl from '../apiConfig'
import axios from 'axios'

export const createInvoice = (invoice, token) => {
  console.log('invoice', invoice)
  return axios({
    method: 'POST',
    url: apiUrl + '/invoices',
    headers: {
      'Authorization': `Token token=${token}`
    },
    data: {
      invoice
    }
  })
}

export const getInvoices = (token) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/invoices',
    headers: {
      'Authorization': `Token token=${token}`
    }
  })
}

export const deleteInvoice = (token, id) => {
  return axios({
    method: 'DELETE',
    url: apiUrl + '/invoices/' + id,
    headers: {
      'Authorization': `Token token=${token}`
    }
  })
}
