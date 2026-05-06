import { prisma } from '../lib/prisma.js'

export const createObat = async (req, res) => {
  
    const { name, description, price, stock } = req.body

    const data = await prisma.Obat.create({
      data: {
        name,
        description,
        price: parseInt(price),
        stock: parseInt(stock),
      },
    })

    res.status(201).json({
      message: 'Medicine added successfully!',
      data
    })

    console.log(error)
    res.status(500).json({ message: error.message })
  }
