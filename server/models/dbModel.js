import mongoose from "mongoose";

const shortClipsSchema = mongoose.Schema({
  url: String,
  userName: String,
  description: String,
  likes: String,
});

//collection inside the database
export default mongoose.model("Luff-ShortClips", shortClipsSchema)