interface ProductsReturn {
  category: string
  description: string
  id: number
  image: string
  price: number
  rating: { rate: number, count: number }
  title: string
  selectedCategory: string
}

export const products = async (): Promise<ProductsReturn | undefined> => {
  try {
    return await fetch('https://fakestoreapi.com/products')
      .then(async res => await res.json())
      .then(json => {
        return json
      })
  } catch (error) {
    console.error(error)
  }
}
