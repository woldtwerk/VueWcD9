export const fetchDrupalPage = async(node, url = '') => {
  // import.meta.env.VITE_DRUPAL_URL
  const response = await fetch(`https://vuewcd9.localhost/${url}`)
  const text = await response.text()
  const regex = new RegExp(`<${node}.*>(.|\n)*<\/${node}>`)
  const filter = text.match(regex)[0]
  const template = filter
    .replaceAll('src="', 'src="https://vuewcd9.localhost')
    .replaceAll(/href=".*"/g, 'href="#" onclick="event.preventDefault()"')
  return template
}