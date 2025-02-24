import dotenv from 'dotenv'
import express from 'express'
import ClientDataRoute from './Routes/ClientDataRoute.js'
import allDataRoute from './Routes/allDataRoute.js'
import  singlePropertyRoute from './Routes/singlePropertyRoute.js'  
import { connectToDatabase } from './db/db.js'
import cors from 'cors'
import bodyParser from 'body-parser'
import FlatData from './db/FlatModel.js'
import SinglePropertyRecomendationRoute from './Routes/SinglePropertyRecomendationRoute.js'
import PredictionRecommendationRoute from './Routes/PredictionRecommendationRouter.js'



dotenv.config()
const app = express()
// Middleware
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())
// Connect to MongoDB
connectToDatabase()

// get search result at home
app.use('/api/clientData', ClientDataRoute)

//get all data at home
app.use('/api/allData',allDataRoute )

// getting single property
app.use('/api/singleProperty',singlePropertyRoute )

// Getting Recommmendation in single property page 
app.use('/api/recommendations', SinglePropertyRecomendationRoute);


// Prediction Recommendation
app.use('/api', PredictionRecommendationRoute);

// all filter data
app.get('/api/allfilteredData', async (req, res) => {
  
  try {
    const filteredData = await FlatData.find({}, {
      
        BEDROOM_NUM: 1,
        location: 1,
        CITY: 1,
        AREA: 1,
        Price_per_sqft: 1,
        PRICE: 1,
        AGE: 1,
        FURNISH: 1,
        amenity_luxury: 1,
        FLOOR_NUM: 1,
        TOTAL_FLOOR: 1,
      Facing_Direction: 1,
      LATITUDE: 1,
      LONGITUDE : 1
      
      
    }).exec();

    // Send the filtered data as JSON response
    res.status(200).json(filteredData);
       
  } catch (error) {
    console.error('Error fetching filtered data:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});







// Start the server
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
