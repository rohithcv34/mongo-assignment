db.customers.find({},{_id:0,customername:1,city:1})
= [
  { customername: 'John Doe', city: 'New York' },
  { customername: 'Jane Smith', city: 'London' },
  { customername: 'David Wang', city: 'Beijing' },
  { customername: 'Lisa Chen', city: 'shanghai' }
]
