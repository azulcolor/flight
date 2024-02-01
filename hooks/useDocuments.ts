import { useEffect, useState } from 'react'
import { getDocuments } from '@/services/documents'
import { IDocuments } from '@/types/logged'

export const useDocuments = () => {
  const [documents, setDocuments] = useState<IDocuments[]>([])

  useEffect(() => {
    getDocuments(setDocuments)
  }, [])

  return { documents }
}

export default useDocuments
