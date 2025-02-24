import FlatData from "../db/FlatModel.js";


export const allDataController = async (req, res) => {
    try {
  
      const page = parseInt(req.params.page) || 1
      const limit = 2
      const startIndex = (page - 1) * limit
  
      const fetchData = await FlatData.find().skip(startIndex).limit(limit)
      res.status(200).json(fetchData)
    }
    catch (err) {
      console.log(err);
  
      res.status(500).json({ message: err.message });
    }
  }
  
