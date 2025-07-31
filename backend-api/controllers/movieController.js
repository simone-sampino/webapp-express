function index(req, res) {
  res.send("show all movies inside the db");
}

function show(req, res) {
  res.send(`show the single movie ${req.params.id}`);
}

module.exports = { index, show };
