import { prisma } from '../../../lib/db'

export default async function GetAllContacts(req, res) {
  const allContacts = await prisma.testuser.findMany()
  const contacts = JSON.parse(JSON.stringify(allContacts))
  res.json(contacts);
}