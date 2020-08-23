const mongoose = require("mongoose");

const BootcampSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "please add a name"],
    unique: true,
    trim: true,
    maxlength: [50, "Name can not be more than 50 characters"],
  },
  slug: String,
description: {
    type: String,
    require: [true, "please add a description"],
    unique: true,
    trim: true,
    maxlength: [500, "Name can not be more than 500 characters"],
},
website : {
    type: String,
    match: [
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
        'Please use a valid URL with HTTP or HTTPS'
    ]
},
phone: {
    type: String,
    maxlength: [20, 'Phone numbe can not be longer than 20 characters']
},

email: {
    type: String,
    match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please add a valid email'
    ]
},
address: {
    type: String,
    require: [true, 'Please add an address']
},
location: {
    //GeoJSON Point
    type: {
        type: String,
        enum: ['Point'],
        required: true
      },
      coordinates: {
        type: [Number],
        required: true,
        index: '2dsphere'

      },
      formattedAdress: String,
      Street: String,
      city: String,
      state: String,
      zipcode: String,
      country: String
},
carrer: {
    //Array pf strings
    type: [String],
    required: true,
    // enum mean only avialable values
    enum: [
        'Web Development',
        'Mobile Development',
        'UI/UX',
        'Data Science',
        'Business',
        'Other'
    ]
},
averageRating: {
    type: Number,
    min: [1, 'Rating must be at least 1'],
    max: [10, 'Rating can not be more than 10 ']
},
averageCost: Number,

photo: {
    type: 'String',
    default: 'no-photo.jpg'
},
housing: {
    type: Boolean,
    default: false
},
jobAssistance: {
    type: Boolean,
    default: false
},
jobGuarantee: {
    type: Boolean,
    default: false
},
acceptGi: {
    type: Boolean,
    default: false
},
createdAt: {
    type: Date,
    default: Date.now
}
});

module.exports = mongoose.model('Bootcamp', BootcampSchema)