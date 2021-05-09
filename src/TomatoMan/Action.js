export const addproduct=(data)=>{
  console.log(data)
    return{
        type: 'ADD_PRODUCT',
        payload: data
      }
}

export const deleteproduct=(product_id)=>{
  return{
      type: 'DELETE_PRODUCT',
      product_id: product_id
    }
}

export const gettotal=(total)=>{
  return{
    type: 'TOTAL_PRICE',
    payload: total
  }
}