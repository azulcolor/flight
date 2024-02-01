import { flightApi } from '@/api'

export const getDocuments = async (setDocuments: any) => {
  const documents = await flightApi.get('documents')
  setDocuments(documents.data)
}
