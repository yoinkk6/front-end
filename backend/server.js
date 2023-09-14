const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

/**
 * routes and middleware imports
 */
const userRouter = require('./routes/user');
const { auth } = require('./middleware/auth')


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
app.use('/user', userRouter)

app.listen(process.env.PORT, () => console.log('server running'));

app.get('/', (req, res) => {
  res.send({
  "products":[
    {
      "title": "Ninja Tee, Black",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel et nesciunt tempore nobis fugit dolorum ipsam exercitationem beatae impedit, ipsum tenetur officia iste architecto eligendi illum dolores minus cumque commodi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel et nesciunt tempore nobis fugit dolorum ipsam exercitationem beatae impedit, ipsum tenetur officia iste architecto eligendi illum dolores minus cumque commodi?",
      "price": 12,
    },
    {
      "title": "Ninja Tee, White",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel et nesciunt tempore nobis fugit dolorum ipsam exercitationem beatae impedit, ipsum tenetur officia iste architecto eligendi illum dolores minus cumque commodi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel et nesciunt tempore nobis fugit dolorum ipsam exercitationem beatae impedit, ipsum tenetur officia iste architecto eligendi illum dolores minus cumque commodi?",
      "price": 12,
    },
    {
      "title": "Ninja Hoodie, Black",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel et nesciunt tempore nobis fugit dolorum ipsam exercitationem beatae impedit, ipsum tenetur officia iste architecto eligendi illum dolores minus cumque commodi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel et nesciunt tempore nobis fugit dolorum ipsam exercitationem beatae impedit, ipsum tenetur officia iste architecto eligendi illum dolores minus cumque commodi?",
      "price": 21,
    },
    {
      "title": "Ninja Hoodie, White",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel et nesciunt tempore nobis fugit dolorum ipsam exercitationem beatae impedit, ipsum tenetur officia iste architecto eligendi illum dolores minus cumque commodi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel et nesciunt tempore nobis fugit dolorum ipsam exercitationem beatae impedit, ipsum tenetur officia iste architecto eligendi illum dolores minus cumque commodi?",
      "price": 21,
    },
    {
      "title": "Ninja Cushion",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel et nesciunt tempore nobis fugit dolorum ipsam exercitationem beatae impedit, ipsum tenetur officia iste architecto eligendi illum dolores minus cumque commodi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel et nesciunt tempore nobis fugit dolorum ipsam exercitationem beatae impedit, ipsum tenetur officia iste architecto eligendi illum dolores minus cumque commodi?",
      "price": 7,
    },
    {
      "title": "Ninja Tote Bag",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel et nesciunt tempore nobis fugit dolorum ipsam exercitationem beatae impedit, ipsum tenetur officia iste architecto eligendi illum dolores minus cumque commodi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel et nesciunt tempore nobis fugit dolorum ipsam exercitationem beatae impedit, ipsum tenetur officia iste architecto eligendi illum dolores minus cumque commodi?",
      "price": 8,
    },
    {
      "title": "Ninja Cup",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel et nesciunt tempore nobis fugit dolorum ipsam exercitationem beatae impedit, ipsum tenetur officia iste architecto eligendi illum dolores minus cumque commodi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel et nesciunt tempore nobis fugit dolorum ipsam exercitationem beatae impedit, ipsum tenetur officia iste architecto eligendi illum dolores minus cumque commodi?",
      "price": 12,
    },
    {
      "title": "Alright Then Gang Tee",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel et nesciunt tempore nobis fugit dolorum ipsam exercitationem beatae impedit, ipsum tenetur officia iste architecto eligendi illum dolores minus cumque commodi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel et nesciunt tempore nobis fugit dolorum ipsam exercitationem beatae impedit, ipsum tenetur officia iste architecto eligendi illum dolores minus cumque commodi?",
      "price": 12,
    }
  ]
})
})