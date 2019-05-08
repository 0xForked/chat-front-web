const Items = [
  {
    "uuid":"7d910620-84e1-49fc-951e-d375587b8189",
    "name": "Jackeline",
    "jobTitle": "Sales Executive",
    "email": "Jackeline.Abshire_Dach@yahoo.com",
    "username": "Jackeline.Abshire",
    "phone": "(326) 903-5706 x6854",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/larrybolt/128.jpg",
    "address": {
      "street": "416 Cathy Spur",
      "suite": "Apt. 431",
      "city": "North Camila",
      "state": "Pennsylvania",
      "country": "Libyan Arab Jamahiriya",
      "zipcode": "31751",
      "geo": {
        "lat": "64.0673",
        "lng": "154.7671"
      }
    }
  },
  {
    "uuid": "60d07662-bfec-42c7-b044-c81bc4ff8c7a",
    "name": "Barton",
    "email": "Barton85_Emard@gmail.com",
    "jobTitle": "Web Developer",
    "username": "Barton85",
    "phone": "(979) 560-8322 x174",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/a_harris88/128.jpg",
    "address": {
      "street": "185 Florine Spurs",
      "suite": "Suite 178",
      "city": "Port Carrollburgh",
      "state": "Alaska",
      "country": "Saint Barthelemy",
      "zipcode": "30126",
      "geo": {
        "lat": "24.0545",
        "lng": "-88.8499"
      }
    }
  },
  {
    "uuid": "46d6f992-5729-4588-b7f8-ce74f21157ba",
    "name": "Olin",
    "jobTitle": "Finaice",
    "email": "Olin.Robel49.Schowalter24@yahoo.com",
    "username": "Olin.Robel49",
    "phone": "1-982-234-7756",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/jcubic/128.jpg",
    "address": {
      "street": "0813 Mayer Greens",
      "suite": "Apt. 551",
      "city": "Bergstromburgh",
      "state": "Ohio",
      "country": "Anguilla",
      "zipcode": "42502-9731",
      "geo": {
        "lat": "-48.2520",
        "lng": "60.6556"
      }
    }
  },
  {
    "uuid": "da95e977-cd54-4077-a767-1b7f33ef6919",
    "name": "Murl",
    "email": "Murl_Abshire41_Lakin@hotmail.com",
    "username": "Murl_Abshire41",
    "jobTitle": "Web Developer",
    "phone": "107-733-1219 x0615",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/stayuber/128.jpg",
    "address": {
      "street": "4880 Tanner Circles",
      "suite": "Apt. 994",
      "city": "Bauchside",
      "state": "Ohio",
      "country": "Uganda",
      "zipcode": "11259",
      "geo": {
        "lat": "11.6209",
        "lng": "-45.1766"
      }
    }
  }
];

const getUserById = (uuid) => {
  return (uuid === undefined) ? Items[0] : Items.find(x => x.uuid === uuid);
};

const getUser = (limit) => {
  return (limit) ? Items.slice(0, limit) : Items;
};

export {
  Items,
  getUser,
  getUserById
};