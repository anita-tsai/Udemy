const Clarifai = require('clarifai');


const app = new Clarifai.App({
  apiKey: 'c2d799a9bdcf46cd947a8487df16d627'
 });

const handleApiCall = (req, res) => {
  // get imgurl from request and call clarifi api to get the face data
  app.models
    .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
    .then(data => {
      res.json(data);
    })
    .catch(err => res.status(400).json('unable to work with API'))
}

const handleImage = (req, res, db) => {
  const { id } = req.body;
  db('users').where('id', '=', id)
    .increment('entries', 1)
    .returning('entries')
    .then(entries => {
      res.json(entries[0]);
    })
    .catch(err => res.status(400).json('unable to get entries'))
}

module.exports = {
  handleImage: handleImage,
  handleApiCall: handleApiCall
}