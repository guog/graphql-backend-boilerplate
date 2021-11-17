import prisma from '../../prismaClient'

export async function userIsExit(name: string) {
  const count = await prisma.user.count({
    where: {
      name: { equals: name }
    }
  })

  return count > 0
}
