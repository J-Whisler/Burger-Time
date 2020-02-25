const express = require('express');
const router = express.Router();
const burger = require('../models/burger')

router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  router.get('/burger/:id', function(req, res) {
    const burgerID = req.body.burgerID
    res.redirect('/burger')
  })

  router.get('/burger', (req, res) => {
    burger.all(function(data) {
      const hbsObject = {
        burgers: data
      }
      console.log(hbsObject)
      res.render('index', hbsObject)
    })
  })

  router.put('/burger/:id', (req, res) => {
      const condition = `devoured + ${req.params.devoured}`
      console.log('condition: ', condition)
      burger.update({
        devoured: true
      
      }, condition, function() {
        res.redirect('/burger')
      })
  })
  
  // router.post("/burger", function(req, res) {
  //   burger.create(["burgerName"], [req.body.burgerName], function() {
  //     res.redirect("/");
  //   });
  // });

  // router.put('/burgers', (req, res) => {
  //   console.log(req)
  //   const condition = 'burgerID = ' + req.params.burgerID;
  //   console.log('condition: ', condition)
  //   burger.update({
  //       devoured: req.body.devoured
  //   }, condition, function(result) {
  //       if (result.changedRows === 0) {
  //           return res.status(400).end()
  //       } else {
  //           res.status(200).end()
  //       }
  //   })
  //   })
  
  // router.post("eatBurger/:id", function (req, res) {
  //   console.log(req)
  //   var condition = "id = " + req.params.burgerID;
  //   burger.update({
  //     devoured: true
  //   }, condition, function () {
  //     res.redirect('/');
  //   });
  // });





module.exports = router;