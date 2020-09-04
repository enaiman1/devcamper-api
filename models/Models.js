const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "Please add a title for the review"],
    maxlength: 100
  },
  text: {
    type: String,
    required: [true, "Please add some text"],
  },
  rating: {
    type: String,
    required: [true, "Please add number of weeks"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  bootcamp: {
    type: mongoose.Schema.ObjectId,
    ref: "Bootcamp",
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});
// static method to get avg of course tuitions
CourseSchema.statics.getAverageCost = async function (bootcampId) {

  const obj = await this.aggregate([
    {
      $match: { bootcamp: bootcampId },
    },
    {
      $group: {
        _id: "$bootcamp",
        averageCost: { $avg: "$tuition" },
      },
    },
  ]);
  try {
      await this.model('Bootcamp').findById(bootcampId, {
          averageCost: Math.ceil(obj[0].averageCost / 10) * 10
      })
  } catch (err) {
      console.log(err);
  }
};



module.exports = mongoose.model("Review", ReviewSchema);
