// controller/uploadController.js
const Video = require('../model/upload');

const handleUpload = async (req, res) => {
  const { title, description } = req.body;
  const thumbnailUrl = req.files.thumbnail[0].path;
  const videoUrl = req.files.video[0].path;

  const newVideo = new Video({
    title,
    description,
    thumbnailUrl,
    videoUrl,
  });

  try {
    await newVideo.save();
    res.status(201).json(newVideo);
  } catch (error) {
      console.log('lfafd a dkls ')
    res.status(500).json({ error: error.message });
  }
};

const handleGetAllVideo = async (req, res) => {
    try {
      const video = await Video.find();
      res.json(video);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

const handleGetVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    res.json(video);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  handleUpload,
    handleGetVideo,
  handleGetAllVideo
};
