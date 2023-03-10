import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const App = () => {

  const [categories, setCategories] = useState(['Dragon ball'])


  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory.toLowerCase())) return;

    setCategories([newCategory, ...categories])
  }
  return (
    <>
      {/* Titulo */}
      <h1>GifExpert</h1>

      {/* Input */}
      <AddCategory onNewCategory={onAddCategory} />

      {/* Listado de Gif */}
      {categories.map(category =>
        <GifGrid key={category}
          category={category} />
      )}
    </>
  )
}
