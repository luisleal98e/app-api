import express from 'express'
import {
  clientList,
  clientFind,
  clientCreate,
  clientUpdate,
  clientDelete,
  clientAddService,
} from '../controllers/clients.controller'
import {
  serviceList,
  serviceFind,
  serviceCreate,
  serviceUpdate,
  serviceDelete,
} from '../controllers/services.controller'

import {
  invoicesList,
  invoiceFind,
  invoicesCreate,
  invoicesDelete,
} from '../controllers/invoices.controller'

const router = express.Router()

router.get('/clients/', clientList)
router.get('/clients/find/:client', clientFind)
router.post('/clients/create', clientCreate)
router.put('/clients/update/:client', clientUpdate)
router.delete('/clients/delete/:client', clientDelete)
router.post('/clients/add-service', clientAddService)

router.get('/services/', serviceList)
router.get('/services/find/:service', serviceFind)
router.post('/services/create/', serviceCreate)
router.put('/services/update/:service', serviceUpdate)
router.delete('/services/delete/:service', serviceDelete)

router.get('/invoices/', invoicesList)
router.get('/invoices/find/:invoice', invoiceFind)
router.post('/invoices/add-invoice', invoicesCreate)
router.delete('/invoices/delete/:invoice', invoicesDelete)

export default router
