// POST

{
  "productName": "Wireless Headphones",
  "description": "Noise-cancelling wireless headphones with Bluetooth 5.0 and 20-hour battery life.",
  "brand": "SoundPro",
  "category": "Electronics",
  "price": 199.99,
  "currency": "USD",
  "stock": {
    "available": true,
    "quantity": 50
  },
  ////"images": [
    ////"https://example.com/products/1001/main.jpg",
    ////"https://example.com/products/1001/side.jpg"
  ////],
  "variants": [
    {
      "variantId": "1001_01",
      "color": "Black",
      "price": 199.99,
      "stockQuantity": 20
    },
    {
      "variantId": "1001_02",
      "color": "White",
      "price": 199.99,
      "stockQuantity": 30
    }
  ],
  "dimensions": {
    "weight": "0.5kg",
    "width": "18cm",
    "height": "20cm",
    "depth": "8cm"
  },
  "ratings": {
    "averageRating": 4.7,
    "numberOfReviews": 120
  },
 // "reviews": [
    //{
      //"reviewId": 501,
      //"userId": 101,
      //"username": "techguy123",
      //"rating": 5,
      //"comment": "Amazing sound quality and battery life!"
    //},
    //{
      //"reviewId": 502,
      //"userId": 102,
      //"username": "jane_doe",
      //"rating": 4,
      //"comment": "Great headphones but a bit pricey."
    //}
  //]
//}


//GET

[
  {
    "id": 1,
    "productName": "Wireless Headphones",
    "description": "Noise-cancelling wireless headphones with Bluetooth 5.0.",
    "price": 199.99,
    "category": "Electronics",
    "stock": 50
  },
  {
    "id": 2,
    "productName": "Smartphone",
    "description": "Latest model with 128GB storage and 6GB RAM.",
    "price": 799.99,
    "category": "Electronics",
    "stock": 30
  }
]

//DELETE

{
  "id": 2,
  "productName": "Smartphone",
  "description": "Latest model with 128GB storage and 6GB RAM.",
  "price": 799.99,
  "category": "Electronics",
  "stock": 30
}

//UPDATE

{
  "productName": "Computer",
  "description": "Latest model for all your electronic needs, and it gets the job done.",
  "price": 299.99,
  "category": "Electronics",
  "stock": 25
}
