app.get('/multiply/:num1/:num2', function (req, res) {
    var num1 = parseInt(req.params.num1)
    var num2 = parseInt(req.params.num2)
    var product = (num1 * num2).toString()
    res.send(product)
  })