import { useState } from "react"
import Checkbox from "./components/inputs/Checkbox"
import Search from "./components/inputs/Search"
import ProductsCategoryRows from "./components/produits/ProductsCategoryRows"
import ProductsRows from "./components/produits/ProductsRows"

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "DragonFruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "PassionFruit" },
  { category: "Vegetable", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetable", price: "$4", stocked: false, name: "Punpkin" },
  { category: "Vegetable", price: "$1", stocked: true, name: "Peas" }
]

function App() {
  const[showStockOnly, setShowStockOnly] = useState(false)
  const[search, setSearch] = useState("")
  const visibleProduct = PRODUCTS.filter(product =>{
    if (showStockOnly && !product.stocked) {
      return false
    }
    if (search && !product.name.includes(search)) {
      return false
    }
    return true
  })

  return (
    <>
      <SearchBar 
      search={search}
      searchChange={setSearch}
      showStockOnly={showStockOnly} 
      showStockOnlyChange = {setShowStockOnly}/>
      <ProductsTable products={visibleProduct}/>
    </>
  )
}

function SearchBar({showStockOnly, showStockOnlyChange, search, searchChange}) {
  return (
    <div>
      <Search value={search} onChange={searchChange} placeholder="Recherchez..." />
      <Checkbox id="stocked" checked={showStockOnly} onChange={showStockOnlyChange} label={"affichez sellement les produits en stock"}/>
    </div>
  )
}

function ProductsTable({products}) {
  const rows = []
  let lastCategory = null

  for (let product of products) {
    if (product.category !== lastCategory) {
      rows.push(<ProductsCategoryRows key={product.category} name={product.category}/>)
    }
    lastCategory = product.category
    rows.push(<ProductsRows product={product} name={product.name}/>)
  }

  return(
    <table>
      <thead>
        <th>Name</th>
        <th>Price</th>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

export default App
