import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    pris: String,
    beskrivning: String,
    namn: String,
    selectedFile: String,

})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;