interface IContact {
  image: string
  title: string
  info: Information
}

type Information = String[]

export const contact: (lang: any) => IContact[] = (dict) => {
  return [
    {
      image: 'phone.png',
      title: `${dict.contact.phone}`,
      info: ['Tell Free México 01-800-099-0634', 'Tell free USA-Canadá 01-700-910-4276'],
    },
    {
      image: 'email.png',
      title: `${dict.contact.email}`,
      info: ['atencion@absorber.com', 'atencion2@absorber.com'],
    },
    {
      image: 'location.png',
      title: `${dict.contact.address}`,
      info: ['Calle Huachinango MZ-5 LT2 No.15 SMZ-3CP 775000. Cancún, Quintana Roo. México'],
    },
  ]
}
export default contact
