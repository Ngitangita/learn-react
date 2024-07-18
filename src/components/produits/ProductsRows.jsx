

export default function ProductsRows({product}) {
    const style = product.stocked ? undefined : {color: "red"}

  return (
    <div>
      <tr>
        <td style={style}>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    </div>
  )
}
