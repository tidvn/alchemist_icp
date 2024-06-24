export const getSiteUrl = (path) => {
  const { language = 'vn' } = window.TheAlchemistJS?.globals || {}

  return `/${language}${path}`
}

export const getFullSiteUrl = (path) => {
  let baseUrl = ''

  if (import.meta.env.VITE_APP_BASE_URL) {
    baseUrl = import.meta.env.VITE_APP_BASE_URL
  }

  const { language = 'vn' } = window.TheAlchemistJS?.globals || {}

  return `${baseUrl}/${language}${path}`
}
