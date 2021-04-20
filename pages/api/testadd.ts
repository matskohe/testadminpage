import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({})

async function main(){
const testelsa = await prisma.testuser.create({
  data: {
    email: 'elsa@prisma.io',
    name: 'Elsa Prisma',
    content: 'test'
  },
})
}

main()