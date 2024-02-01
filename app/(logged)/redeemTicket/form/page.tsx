'use client'

import { flightApi } from '@/api'
import Button, { ButtonCupon, ButtonFile } from '@/components/common/Button'
import AvailableCouponsModal from '@/components/logged/redeemTicket/AvailableCouponsModal'
import { SendingsButton } from '@/components/logged/redeemTicket/InfoButton'
import { useCertificates } from '@/hooks/useCoupons'
import { routes } from '@/utils/constants'
import { useRef, useState } from 'react'

export default function Form() {
  const [pdfFile, setPdfFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [idCoupons, setIdCoupons] = useState([])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    setPdfFile(file || null)
  }

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [certificate, setCertificate] = useState('' as string | null)
  const [choosenCertificates, setChoosenCertificates] = useState<string[]>([])

  const { certificates } = useCertificates()

  const sendForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!pdfFile || !idCoupons) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      certificate ? alert('Por favor, sube un archivo PDF') : alert('Por favor, selecciona un cupón')

      return
    }

    const formData = new FormData()

    formData.append('document', pdfFile)
    formData.append('certificates', JSON.stringify(choosenCertificates))
    formData.append('coupons', JSON.stringify(idCoupons))

    await flightApi.post('documents', formData, {
      headers: {
        'Content-type': 'multipart/form-data',
      },
    })

    alert('Formulario enviado')

    window.location.href = routes.successRedeem
  }

  return (
    <>
      <SendingsButton />
      <div className='lg:px-1 px-11'>
        <div className='lg:flex lg:gap-20 justify-center'>
          <section className='lg:w-1/4'>
            <h2 className='mt-12'>Escoge los cupones de los certificados que quieras usar</h2>
            <p className='mb-6 mt-6'>Certificados</p>

            {certificates.map((aCertificate: string, index) => {
              return (
                <div className='flex items-center gap-14 mb-8' key={index}>
                  <p className=' col-span-1 ml-4'>{aCertificate}</p>
                  <ButtonCupon
                    buttonFunction={() => {
                      setIsModalOpen(true)
                      setCertificate(aCertificate)
                    }}
                    hasValor={choosenCertificates.includes(aCertificate) ?? false}
                  />
                </div>
              )
            })}
          </section>
          <section className='lg:w-1/4'>
            <h2 className=' mt-12 lg:mb-6'>Sube la documentación requerida de los cupones que escogiste</h2>
            <div className='relative flex items-center space-x-2'>
              <input type='file' id='file' accept='.pdf' onChange={handleFileChange} className='sr-only' ref={fileInputRef} />
              <ButtonFile buttonFunction={handleButtonClick} hasValor={pdfFile ? true : false}>
                {pdfFile ? `${pdfFile.name}` : 'Seleccionar archivo PDF'}
              </ButtonFile>
            </div>
          </section>

          <section className='lg:w-1/4'>
            <h2 className=' mt-12 w-auto lg:mb-6'>Recuerda verificar tus datos antes de realizar el envío</h2>
            <Button buttonFunction={sendForm}>Realizar envío</Button>
          </section>
          <AvailableCouponsModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            certificate={certificate}
            setIdCoupons={setIdCoupons}
            idCoupons={idCoupons}
            setChoosenCertificates={setChoosenCertificates}
          />
        </div>
      </div>
    </>
  )
}
