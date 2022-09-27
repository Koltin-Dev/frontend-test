export default async function getBlogs (url) {
    const response = await fetch(url)
    return await response.json()
  }