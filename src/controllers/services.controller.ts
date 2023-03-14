import { Request, Response } from 'express'
import db from '../models'

const servicesModel = db.services

export const serviceList = async (req: Request, res: Response) => {
  try {
    const query = await servicesModel.findAll()
    return res.status(200).send(query)
  } catch (error) {
    return res.status(400).send(error)
  }
}

export const serviceFind = async (req: Request, res: Response) => {
  const { service } = req.params
  try {
    const query = await servicesModel.findOne({
      where: {
        id: service,
      },
    })
    return res.status(200).send(query)
  } catch (error) {
    return res.status(400).send(error)
  }
}

export const serviceCreate = async (req: Request, res: Response) => {
  const { name, price } = req.body
  try {
    const query = await servicesModel.create({
      name,
      price,
    })
    return res.status(200).send(query)
  } catch (error) {
    return res.status(400).send(error)
  }
}

export const serviceUpdate = async (req: Request, res: Response) => {
  const { name, price } = req.body
  const { service } = req.params
  try {
    const query = await servicesModel.update(
      { name, price },
      {
        where: {
          id: service,
        },
      }
    )
    return res.status(200).send(query)
  } catch (error) {
    return res.status(400).send(error)
  }
}

export const serviceDelete = async (req: Request, res: Response) => {
  const { service } = req.params
  try {
    const query = await servicesModel.destroy({
      where: {
        id: service,
      },
    })
    return res.status(204).send("Eliminado con exito")
  } catch (error) {
    return res.status(400).send(error)
  }
}
