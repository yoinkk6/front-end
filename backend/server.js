const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();


/**
 * Connection To MongoDB
 */
mongoose.connect(process.env.MONGOOSE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.once('open', () => console.log('conected to the database'))


/**
 * Middlewares
 */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(process.env.PORT, () => console.log('server running'));

app.get('/', (req, res) => {
  res.send({
  "products":[
    {
      "id": 1,
      "title": "Ninja Tee, Black",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel et nesciunt tempore nobis fugit dolorum ipsam exercitationem beatae impedit, ipsum tenetur officia iste architecto eligendi illum dolores minus cumque commodi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel et nesciunt tempore nobis fugit dolorum ipsam exercitationem beatae impedit, ipsum tenetur officia iste architecto eligendi illum dolores minus cumque commodi?",
      "price": 12,
      "img": "https://mockup-api.teespring.com/v3/image/2NgQ1ZAAW-l7xCRHhBDvI1B1C8U/800/800.jpg"
    },
    {
      "id": 2,
      "title": "Ninja Tee, White",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel et nesciunt tempore nobis fugit dolorum ipsam exercitationem beatae impedit, ipsum tenetur officia iste architecto eligendi illum dolores minus cumque commodi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel et nesciunt tempore nobis fugit dolorum ipsam exercitationem beatae impedit, ipsum tenetur officia iste architecto eligendi illum dolores minus cumque commodi?",
      "price": 12,
      "img": "https://mockup-api.teespring.com/v3/image/wcNwkS4Y-rtOKAuqwCsYaOw8Cv8/800/800.jpg"
    },
    {
      "id": 3,
      "title": "Ninja Hoodie, Black",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel et nesciunt tempore nobis fugit dolorum ipsam exercitationem beatae impedit, ipsum tenetur officia iste architecto eligendi illum dolores minus cumque commodi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel et nesciunt tempore nobis fugit dolorum ipsam exercitationem beatae impedit, ipsum tenetur officia iste architecto eligendi illum dolores minus cumque commodi?",
      "price": 21,
      "img": "https://mockup-api.teespring.com/v3/image/_IvBZ0jhry5FAXEOWFw3ynpo8ig/800/800.jpg"
    },
    {
      "id": 4,
      "title": "Ninja Hoodie, White",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel et nesciunt tempore nobis fugit dolorum ipsam exercitationem beatae impedit, ipsum tenetur officia iste architecto eligendi illum dolores minus cumque commodi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel et nesciunt tempore nobis fugit dolorum ipsam exercitationem beatae impedit, ipsum tenetur officia iste architecto eligendi illum dolores minus cumque commodi?",
      "price": 21,
      "img": "https://mockup-api.teespring.com/v3/image/NGjr8zyNw7FCHuQYoryOEcl4GNk/800/800.jpg"
    },
    {
      "id": 5,
      "title": "Ninja Cushion",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel et nesciunt tempore nobis fugit dolorum ipsam exercitationem beatae impedit, ipsum tenetur officia iste architecto eligendi illum dolores minus cumque commodi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel et nesciunt tempore nobis fugit dolorum ipsam exercitationem beatae impedit, ipsum tenetur officia iste architecto eligendi illum dolores minus cumque commodi?",
      "price": 7,
      "img": "https://mockup-api.teespring.com/v3/image/btGArnfFfvESjsCyqh-RcuO3rr8/800/800.jpg"
    },
    {
      "id": 6,
      "title": "Ninja Tote Bag",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel et nesciunt tempore nobis fugit dolorum ipsam exercitationem beatae impedit, ipsum tenetur officia iste architecto eligendi illum dolores minus cumque commodi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel et nesciunt tempore nobis fugit dolorum ipsam exercitationem beatae impedit, ipsum tenetur officia iste architecto eligendi illum dolores minus cumque commodi?",
      "price": 8,
      "img": "https://mockup-api.teespring.com/v3/image/9DxUJ2cP_LXHylWgTmXs6z84NXY/800/800.jpg"
    },
    {
      "id": 7,
      "title": "Ninja Cup",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel et nesciunt tempore nobis fugit dolorum ipsam exercitationem beatae impedit, ipsum tenetur officia iste architecto eligendi illum dolores minus cumque commodi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel et nesciunt tempore nobis fugit dolorum ipsam exercitationem beatae impedit, ipsum tenetur officia iste architecto eligendi illum dolores minus cumque commodi?",
      "price": 12,
      "img": "https://mockup-api.teespring.com/v3/image/eTcnVM9q_1-2jF_0bJ4NBa_rFKM/800/800.jpg"
    },
    {
      "id": 8,
      "title": "Alright Then Gang Tee",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel et nesciunt tempore nobis fugit dolorum ipsam exercitationem beatae impedit, ipsum tenetur officia iste architecto eligendi illum dolores minus cumque commodi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel et nesciunt tempore nobis fugit dolorum ipsam exercitationem beatae impedit, ipsum tenetur officia iste architecto eligendi illum dolores minus cumque commodi?",
      "price": 12,
      "img": "https://mockup-api.teespring.com/v3/image/aM870qcrxVLvHLnJPwu6w2olWKU/800/800.jpg"
    }
  ]
})
})