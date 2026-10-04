const Speech = require("../models/speech");

exports.get_all_speeches = async (req, res) => {
  try {
    const speech = await Speech.find();
    res.status(200).json(speech);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.get_speech_by_id = async (req, res) => {
  try {
    const speech = await Speech.findById(req.params.id);
    res.status(200).json(speech);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.get_speech_by_tag = async (req, res) => {
  try {
    let { tag } = req.params;
    const speech = await Speech.findOne({tag: tag });
    if (!speech) {
      return res.status(404).json({ message: "Speech not found" });
    }
    res.status(200).json(speech);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.get_speech_by_name = async (req, res) => {
  try {
    let { name } = req.params;
    const speech = await Speech.findOne({name: name });
    if (!speech) {
      return res.status(404).json({ message: "Speech not found" });
    }
    res.status(200).json(speech);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.add_speech = async (req, res) => {
  try {
    let {tag, name, value} = req.body;
    req.body.name = name.replace(/\s+/g, "_").toLowerCase();
    const speech = await Speech.create(req.body);
    res.status(200).json({ message: "Speech has been successfully added" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.edit_speech = async (req, res) => {
  try {
    let {tag, name, value} = req.body;
    req.body.name = name.replace(/\s+/g, "_").toLowerCase();
    const speech = await Speech.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "Speech has been successfully edited" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.edit_speech_tag = async (req, res) => {
  try {
    let { tag } = req.params;
    let {tag1, name, value} = req.body;
    req.body.name = name.replace(/\s+/g, "_").toLowerCase();
    const speech = await Speech.findOneAndUpdate({tag: tag }, req.body);
    if (!speech) {
      return res.status(404).json({ message: "Speech not found" });
    }
    res.status(200).json({ message: "Speech has been successfully edited" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete_speech = async (req, res) => {
  try {
    const speech = await Speech.findByIdAndDelete(req.params.id);
    if (!speech) {
      return res.status(404).json({ message: "Speech not found" });
    }
    res.status(200).json({ message: "Speech has successfully deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete_speech_tag = async (req, res) => {
  try {
    let { tag } = req.params;
    const speech = await Speech.findOneAndDelete({tag: tag }, req.body);
    if (!speech) {
      return res.status(404).json({ message: "Speech not found" });
    }
    res.status(200).json({ message: "Speech has successfully deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};