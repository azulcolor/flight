export const routes = (lang: string) => {
  return {
    login: `/${lang}`,
    register: `/${lang}/register`,
    forgotPassword: `/${lang}/forgotPassword`,
    contact: `/${lang}/contact`,
    about: `/${lang}/about`,
    tickets: `/${lang}/tickets`,
    ticket: `/${lang}/ticket`,
    bankData: `/${lang}/bankData`,
    successBank: `/${lang}/bankData/success`,
    changePassword: `/${lang}/changePassword`,
    successPassword: `/${lang}/changePassword/success`,
    redeemTicket: `/${lang}/redeemTicket`,
    successRedeem: `/${lang}/redeemTicket/success`,
  }
}

export default routes
