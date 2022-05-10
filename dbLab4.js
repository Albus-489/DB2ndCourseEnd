// 1 (5)
db.Cars.find({ year: { $gte: 1990 } }).sort({ year: 1 })
//

// 2 (6)
db.Cars.find({ brand: 'Audi', color: 'White' })
//

// 3 (7)
db.Cars.find({ price: { $lte: 25000 } }, {_id: false}).sort({ price: 1 }).limit(3)
//

// 4 (8)
db.Cars.find({ $or: [{ color: 'Black' }, { brand: 'Mercedes' }] }, {_id: false})
//

// 5 (9)
db.Cars.updateMany({ year: { $lte: 1991 } }, { $set: { discount: 30 } })
//

// 6 (10)
db.Cars.find({ brand: { $ne: 'BMW' } }, {_id: false})
//

// 7 (11)
db.Cars.aggregate([{ $match: { brand: 'Volvo' } }, {
  $group: {
    _id: 'Car',
    totalSum: { $sum: '$price' },
    avgSum: { $avg: '$price' },
    minSum: { $min: '$price' },
    maxSum: { $max: '$price' }
  }
}])

//////////////////
// 12-13 import //
//////////////////

// 10 (14)
db.Supplies.aggregate([
  {
    $lookup: {
      from: 'Suppliers',
      localField: 'supplier',
      foreignField: 'id',
      as: 'result'
    }
  },
  {
    $match: {
      result: {
        $elemMatch: {
          isActive: true
        }
      }
    }
  }
])
//

// 11 (15)
db.Supplies.aggregate([
  {
    $lookup: {
      from: 'Suppliers',
      localField: 'supplier',
      foreignField: 'id',
      as: 'result1'
    }
  },
  {
    $unwind: {
      path: "$result1"
    }
  },
  {
    $lookup: {
      from: 'Cars',
      localField: 'carID',
      foreignField: 'id',
      as: 'result2'
    }
  },
  {
    $unwind: {
      path: "$result2",
    }
  },
  {
    $match: {
      "result2.brand": "Mercedes"
    }
  },
  {
    $project: {

      "CompanyName": "$result1.companyName",
      "Address": "$result1.address",
      "Phone": "$result1.phone",
      date: {
        $dateFromString: {
          dateString: '$date',
          timezone: 'America/New_York'
        }
      }
    }

  },
  {
    $sort: {
      date: -1
    }
  }
])

//


// 12 (16)
db.Cars.distinct("color")
//

// 13 (17)
db.Cars.distinct("color", { brand: "BMW" })
//
// 14 (18)
db.Cars.aggregate({ $unwind: '$brand' }, { $group: { "_id": "$brand", "count": { $sum: 1 } } })
//
// 15 (19)
db.Cars.drop()
//

// 16 (20)
db.dropDatabase()
//

