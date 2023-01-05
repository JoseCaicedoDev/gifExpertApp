import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

export const App = () => {

  const [categories, setCategories] = useState(['Dragon ball'])


  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory.toLowerCase())) return;

    setCategories([...categories, newCategory])
  }
  return (
    <>
      {/* Titulo */}
      <h1>GifExpert</h1>

      {/* Input */}
      <AddCategory onNewCategory={onAddCategory} />

      {/* Listado de Gif */}
      <GifGrid />

      {categories.map(category =>
        <GifGrid key={category}
          category={category} />
      )}
    </>
  )
}
