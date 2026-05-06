import  {prisma} from '../lib/prisma.js'

export const createKategori = async (req, res) => {
    const {name, description} = req.body;

    await prisma.kategori.create({
        data: { name, description }
    })

    res.json({
        message: 'Category created successfully'
    })
}
