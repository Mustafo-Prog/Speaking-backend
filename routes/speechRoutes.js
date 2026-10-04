const express = require("express");
const controllers = require("../controllers/controllers");
const router = express.Router();
const schema = require("../schemas/zodSchema");
const validation = require("../middlewares/validation");

router.get("/speech", controllers.get_all_speeches);
router.get("/speech/find/:tag", controllers.get_speech_by_tag);
router.get("/speech/findn/:name", controllers.get_speech_by_name);
router.get("/speech/:id", controllers.get_speech_by_id);
router.post("/speech", validation(schema), controllers.add_speech);
router.put("/speech/:id", validation(schema), controllers.edit_speech);
router.put("/speech/edit/:tag", validation(schema), controllers.edit_speech);
router.delete("/speech/:id", controllers.delete_speech);
router.delete("/speech/delete/:tag", controllers.delete_speech_tag);

module.exports = router;
