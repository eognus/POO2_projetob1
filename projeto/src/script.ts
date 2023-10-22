import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const g1 = await prisma.grupos.create({
    data: {
      nomeGrupo:'TriEx',
      numEstd: 5
    },
  })
  console.log(g1)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })