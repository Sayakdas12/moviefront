
import FlatData from '../db/FlatModel.js';


// Filtered data based on client query
export const searchFlats = async (req, res) => {
  const { location, bedroom, property } = req.body;

  let propertyType;

  switch (property) {
    case 'Flat/Apartment':
      propertyType = 'flat';
      break;
    case 'Farm House':
      propertyType = 'farm_house';
      break;
    case 'House/Villa':
      propertyType = 'house_villa';
      break;
    case 'Residential Land':
      propertyType = 'residential_land';
      break;
    default:
      propertyType = null;
  }

  // Build the query object based on provided filters
  const query = {};
  
  if (location) {
    query.location = location;
  }
  
  if (bedroom) {
    query.BEDROOM_NUM = bedroom;
  }
  
  if (propertyType) {
    query.PROPERTY_TYPE = propertyType;
  }

  try {
    const matchingFlats = await FlatData.find(query);

    if (matchingFlats.length > 0) {
      res.json({
        message: 'Data retrieved successfully!',
        result: matchingFlats,
      });
    } else {
      res.json({
        message: `No data available for the selected criteria at the moment. Please check back later.`,
      });
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Failed to fetch data.' });
  }
};
