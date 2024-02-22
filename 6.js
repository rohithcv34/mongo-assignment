db.products.find({}, {_id:0, productname: 1, price: 1 })
= [
  { productname: 'Laptop', price: 1000 },
  { productname: 'Smartphone', price: 800 },
  { productname: 'Tablet', price: 500 },
  { productname: 'TV', price: 1500 }
]
