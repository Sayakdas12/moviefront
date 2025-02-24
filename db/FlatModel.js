import mongoose from 'mongoose';

const nearestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    distance: {
        type: Number,
        required: true,
    },
},{ _id: false });

const flatSchema = new mongoose.Schema({
    PROPERTY_TYPE: {
        type: String,
        required: true,
    },
    SOCIETY_NAME: {
        type: String,
        required: true,
    },
    CITY: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    BEDROOM_NUM: {
        type: Number,
        required: true,
    },
    BALCONY_NUM: {
        type: Number,
        required: true,
    },
    AREA: {
        type: Number,
        required: true,
    },
    Price_per_sqft: {
        type: Number,
        required: true,
    },
    PRICE: {
        type: Number,
        required: true,
    },
    AGE: {
        type: String,
        required: true,
    },
    FURNISH: {
        type: String,
        required: true,
    },
    amenity_luxury: {
        type: String, 
        required: true,
    },
    FLOOR_NUM: {
        type: String,
        required: true,
    },
    LATITUDE: {
        type: Number,
        required: true,
    },
    LONGITUDE: {
        type: Number,
        required: true,
    },
    TOTAL_FLOOR: {
        type: Number,
        required: true,
    },
    
    DESCRIPTION: {
        type: String,
        required: true,
    },
    Facing_Direction: {
        type: String,
        required: true,
    },
    Image: {
        type: String,
        required: true,
    },
    Loan_Availability: {
        type: Boolean,
        required: true,
    },
    Estimated_Monthly_EMI: {
        type: Number,
        required: true,
    },
    Maintenance_Fees: {
        type: Number,
        required: true,
    },
    Property_Tax: {
        type: Number,
        required: true,
    },
    Stamp_Duty_Registration_Costs: {
        type: Number,
        required: true,
    },
    Nearest_Schools: {
        type: nearestSchema,
        default: [],
    },
    Nearest_Colleges: {
        type: nearestSchema, 
        default: [],
    },
    Nearest_Hospitals: {
        type: nearestSchema, 
        default: [],
    },
    Nearest_Markets: {
        type: nearestSchema, 
        default: [],
    },
    Nearest_Public_Transport: {
        type: nearestSchema, 
        default: [],
    },
    Nearest_Restaurants: {
        type: nearestSchema,
        default: [],
    },
    Nearest_Railway_Stations: {
        type: nearestSchema, 
        default: [],
    },
    Nearest_Malls: {
        type: nearestSchema,
        default: [],
    },
    Swimming_Pool: {
        type: Boolean,
        required: true,
    },
    Playground: {
        type: Boolean,
        required: true,
    },
    RERA_Registration_Number: {
        type: Number,
        required: true,
    },
    '24x7_Security': {
        type: Boolean,
        required: true,
    },
    Visitor_Parking: {
        type: Boolean,
        required: true,
    },
    Intercom_Facility: {
        type: Boolean,
        required: true,
    },
    Power_Backup: {
        type: Boolean,
        required: true,
    },
    Water_Supply: {
        type: String,
        required: true,
    },
    Pet_Friendly: {
        type: Boolean,
        required: true,
    },
    Fire_Safety_Installed: {
        type: Boolean,
        required: true,
    },
});

// Create a model for the flat data
const FlatData = mongoose.model('Flat', flatSchema, 'Flat_Data');

export default FlatData;
