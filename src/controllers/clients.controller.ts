import { Request, Response } from 'express'
import db from '../models'

const clientsModel = db.clients 

export const clientList = async (req: Request, res: Response) => {
  try {
    const query = await clientsModel.findAll()
    return res.status(200).send(query)
  } catch (error) {
    return res.status(400).send(error)
  }
}

export const clientFind = async (req: Request, res: Response) => {
  const { client } = req.params
  try {
    const query = await clientsModel.findOne({
      where: {
        id: client,
      },
    })
    return res.status(200).send(query)
  } catch (error) {
    return res.status(400).send(error)
  }
}

export const clientCreate = async (req: Request, res: Response) => {
  const { firstName, lastName, cedula, email } = req.body
  try {
    const query = await clientsModel.create({
      firstName,
      lastName,
      cedula,
      email,
    })
    return res.status(200).send(query)
  } catch (error) {
    return res.status(400).send(error)
  }
}

export const clientUpdate = async (req: Request, res: Response) => {
  const { firstName, lastName, cedula, email } = req.body
  const { client } = req.params
  try {
    const query = await clientsModel.update( 
      {
        firstName,
        lastName,
        cedula,
        email,
      },
      {
        where: {
          id: client,
        },
      }
    )
    return res.status(200).send(query)
  } catch (error) {
    return res.status(400).send(error)
  }
}

export const clientDelete = async (req: Request, res: Response) => {
  const { client } = req.params
  try {
    const query = await clientsModel.destroy({
      where: {
        id: client,
      },
    })
    return res.status(204).send("Eliminado con exito")
  } catch (error) {
    return res.status(400).send(error)
  }
}

export const clientAddService = (req: Request, res: Response) => {
  return
}
