exports.getindex=(req, res, next) => {
  res.render('index');
}
exports.postUpdate =(req, res, next) => {
  const inputText = req.body;
  const hexRepresentation = Buffer.from(inputText, 'utf-8').toString('hex');
  const asciiRepresentation = Buffer.from(inputText, 'utf-8').toString('ascii');

  res.json({
    hex: hexRepresentation,
    ascii: asciiRepresentation
  });
};
