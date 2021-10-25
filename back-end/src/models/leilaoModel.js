const connect = require('./connection');

const inserir = () => {
  connect().then((db) =>
    db
      .collection('leilao')
      .updateOne({ _id: ObjectId(id) }, { $inc: { votes: 1 } }),
  );
}

const getAll = () => {
  connect().then((db) => db.collection('leilao').find({}).toArray());
}

module.exports = {
  inserir,
  getAll
}