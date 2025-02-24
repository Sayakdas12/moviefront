

import FlatData from '../db/FlatModel.js';

export const singleProperty = async (req, res) => {
    try {
      const id = req.params.id
      const data = await FlatData.findById(id)
      return res.status(200).json(data)
    }
    catch (err) {
      console.log(err);
  
      res.status(500).json({ message: err.message });
    }
  }