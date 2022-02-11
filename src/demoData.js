// const dateObj = new Date()

// const day = dateObj.getDate().toString()
// const year = dateObj.getFullYear().toString()
// const month = dateObj.getMonth().toString()

// const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// const date = `${day} ${months[month]} ${year}`

 export const demoData = [
  {
    "id": "RT3080",
    "createdAt": "2021-08-18",
    "paymentDue": "2021-08-19",
    "description": "Re-branding",
    "paymentTerms": 1,
    "clientName": "Ebuka Nkemenah",
    "clientEmail": "ebukakharis@gmail.com",
    "status": "paid",
    "senderAddress": {
      "street": "12 Charles Close",
      "city": "Enugu",
      "postCode": "E1 3EZ",
      "country": "Nigeria"
    },
    "clientAddress": {
      "street": "10 Azusa Street",
      "city": "Enugu",
      "postCode": "NR24 5WQ",
      "country": "Nigeria"
    },
    "items": [
      {
        "name": "Brand Guidelines",
        "quantity": 1,
        "price": 1800.90,
        "total": 1800.90
      }
    ],
    "total": 1800.90
  },
  {
    "id": "XM9141",
    "createdAt": "2021-08-21",
    "paymentDue": "2021-09-20",
    "description": "Graphic Design",
    "paymentTerms": 30,
    "clientName": "Alex Chinedu",
    "clientEmail": "alex@gmail.com",
    "status": "pending",
    "senderAddress": {
      "street": "12 Charles Close",
      "city": "Enugu",
      "postCode": "E1 3EZ",
      "country": "Nigeria"
    },
    "clientAddress": {
      "street": "2 Indinana Jones Terrace",
      "city": "Lagos",
      "postCode": "BD1 9PB",
      "country": "Nigeria"
    },
    "items": [
      {
        "name": "Banner Design",
        "quantity": 1,
        "price": 156.00,
        "total": 156.00
      },
      {
        "name": "Email Design",
        "quantity": 2,
        "price": 200.00,
        "total": 400.00
      }
    ],
    "total": 556.00
  },
  {
    "id": "RG0314",
    "createdAt": "2021-09-24",
    "paymentDue": "2021-10-01",
    "description": "Website Redesign",
    "paymentTerms": 7,
    "clientName": "Idris Sabi",
    "clientEmail": "sabi@asyncteq.com",
    "status": "paid",
    "senderAddress": {
      "street": "12 Charles Close",
      "city": "Enugu",
      "postCode": "E1 3EZ",
      "country": "Nigeria"
    },
    "clientAddress": {
      "street": "7 Sam Egwu Drive",
      "city": "Ikeja",
      "postCode": "IP19 3PF",
      "country": "Nigeria"
    },
    "items": [
      {
        "name": "Website Redesign",
        "quantity": 1,
        "price": 14002.33,
        "total": 14002.33
      }
    ],
    "total": 14002.33
  },
  {
    "id": "RT2080",
    "createdAt": "2021-10-11",
    "paymentDue": "2021-10-12",
    "description": "Logo Concept",
    "paymentTerms": 1,
    "clientName": "Melissa Tsado",
    "clientEmail": "melissa@email.co.uk",
    "status": "pending",
    "senderAddress": {
      "street": "12 Charles Close",
      "city": "Enugu",
      "postCode": "E1 3EZ",
      "country": "Nigeria"
    },
    "clientAddress": {
      "street": "63 Onwe Road",
      "city": "Abakaliki",
      "postCode": "CA20 2TG",
      "country": "Nigeria"
    },
    "items": [
      {
        "name": "Logo Sketches",
        "quantity": 1,
        "price": 102.04,
        "total": 102.04
      }
    ],
    "total": 102.04
  },
  {
    "id": "AA1449",
    "createdAt": "2021-10-7",
    "paymentDue": "2021-10-14",
    "description": "Re-branding",
    "paymentTerms": 7,
    "clientName": "Johnson Clarke",
    "clientEmail": "johnson.clarke@example.com",
    "status": "pending",
    "senderAddress": {
      "street": "12 Charles Close",
      "city": "Enugu",
      "postCode": "E1 3EZ",
      "country": "Nigeria"
    },
    "clientAddress": {
      "street": "46 Rumuokilishi",
      "city": "PortHarcourt",
      "postCode": "CB5 6EG",
      "country": "Nigeria"
    },
    "items": [
      {
        "name": "New Logo",
        "quantity": 1,
        "price": 1532.33,
        "total": 1532.33
      },
      {
        "name": "Brand Guidelines",
        "quantity": 1,
        "price": 2500.00,
        "total": 2500.00
      }
    ],
    "total": 4032.33
  },
  {
    "id": "TY9141",
    "createdAt": "2021-10-01",
    "paymentDue": "2021-10-31",
    "description": "Landing Page Design",
    "paymentTerms": 30,
    "clientName": "Kolawole Emmanuel",
    "clientEmail": "kolaem@dc.com",
    "status": "pending",
    "senderAddress": {
      "street": "12 Charles Close",
      "city": "Enugu",
      "postCode": "E1 3EZ",
      "country": "Nigeria"
    },
    "clientAddress": {
      "street": "21 Obasanjo Crescent",
      "city": "Abuja",
      "postCode": "60457",
      "country": "Nigeria"
    },
    "items": [
      {
        "name": "Web Design",
        "quantity": 1,
        "price": 6155.91,
        "total": 6155.91
      }
    ],
    "total": 6155.91
  },
  {
    "id": "FV2353",
    "createdAt": "2021-11-05",
    "paymentDue": "2021-11-12",
    "description": "Logo Re-design",
    "paymentTerms": 7,
    "clientName": "Tochukwu Ali",
    "clientEmail": "",
    "status": "draft",
    "senderAddress": {
      "street": "12 Charles Close",
      "city": "Enugu",
      "postCode": "E1 3EZ",
      "country": "Nigeria"
    },
    "clientAddress": {
      "street": "",
      "city": "",
      "postCode": "",
      "country": ""
    },
    "items": [
      {
        "name": "Logo Re-design",
        "quantity": 1,
        "price": 3102.04,
        "total": 3102.04
      }
    ],
    "total": 3102.04
  }
 ]