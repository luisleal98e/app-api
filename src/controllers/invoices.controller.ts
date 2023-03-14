import { Request, Response } from 'express'
import db from '../models'

const invoicesModel = db.invoices
const clientsModel = db.clients

export const invoicesList = async (req: Request, res: Response) => {
  try {
    const query = await invoicesModel.findAll()
    return res.status(200).send(query)
  } catch (error) {
    return res.status(400).send(error)
  }
}

export const invoiceFind = async (req: Request, res: Response) => {
  const { invoice } = req.params
  try {
    const query = await invoicesModel.findOne({
      where: {
        id: invoice,
      },
    })
    return res.status(200).send(query)
  } catch (error) {
    return res.status(400).send(error)
  }
}

export const invoicesCreate = async (req: Request, res: Response) => {
  const { idClient, idService } = req.body
  try {
    const query = await invoicesModel.create({ idClient, idService })
    return res.status(200).send(query)
  } catch (error) {
    return res.status(400).send(error)
  }
}

export const invoicesDelete = async (req: Request, res: Response) => {
  const { invoice } = req.params
  try {
    const query = await invoicesModel.destroy({
      where: {
        id: invoice,
      },
    })
    return res.status(204).send("Eliminado con exito")
  } catch (error) {
    return res.status(400).send(error)
  }
}
