import apiUrl from '../apiConfig'
import axios from 'axios'

export const createInvoice = (invoice, token) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/invoices',
    headers: {
      'Authorization': `Token token=${token}`
    },
    data: {
      invoice: {
        title: invoice.title,
        description: invoice.description
      }
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
