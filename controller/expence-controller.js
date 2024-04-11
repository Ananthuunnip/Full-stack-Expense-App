const path = require('path');
const Expence = require('../models/expence-model')
const rootDir = require('../util/path');

exports.getexpencelist = (req, res, next) => {
  res.sendFile(path.join(rootDir,"view", "index.html"));
};

exports.getfetchexpence = (req, res, next) => {
  Expence.findAll()
    .then((users4) => {
      res.json(users4);
    })
    .catch((err) => console.log(err));
};

exports.addexpence = (req, res, next) => {
  const amound = req.body.amound;
  const discription = req.body.discription;
  const category = req.body.category;

  Expence.create({
    amound: amound,
    discription: discription,
    category: category,
  })
    .then((result) => {
      console.log("Added to User");
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.deleteUser = (req, res, next) => {
  const id = req.params.id ;
  console.log(id);
  Expence.findByPk(id)
    .then((users) => {
      return users.destroy();
    })
    .then((result) => {
      console.log("User Deleted");
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.editExpense = (req, res, next) => {
  const id = req.params.id;
  // console.log("body : " + req.body);
  const amount = req.body.amount;
  const discription = req.body.discription;
  const category = req.body.category;
  console.log(
    "controller main enter kar gya or yeh rhii values : ",
    id,
    amount,
    discription,
    category
  );
  Expence.findByPk(id)
    .then((expense) => {
      expense.amount = amount;
      expense.description = discription;
      expense.category = category;
      return expense.save();
    })
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};