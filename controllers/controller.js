// const multer = require('multer');
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

exports.getindex=(req, res, next) => {
  res.render('index');
}
exports.postUpdate =(req, res, next) => {
  const inputText = req.body;
  const hexRepresentation = Buffer.from(inputText, 'utf-8').toString('hex');
  const binaryRepresentation = Array.from(Buffer.from(inputText, 'utf-8')).map(byte => byte.toString(2).padStart(8, '0')).join(' ');

  res.json({
    hex: hexRepresentation,
    binary: binaryRepresentation,
  });
};



exports.getindex1=(req, res) => {
  res.render('index1');
}

exports.postUpdate1 = (req, res) => {
  const fileBuffer = req.file.buffer;
  const hexRepresentation = fileBuffer.toString('hex');
  const asciiRepresentation = fileBuffer.toString('ascii');

  res.json({
    hex: hexRepresentation,
    ascii: asciiRepresentation,
  });
};



// edit the file then save it in storage so i think i can do it in one day