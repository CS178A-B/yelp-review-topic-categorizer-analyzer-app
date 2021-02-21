import mongoose from 'mongoose';

const postSchema = mongoose.Schema({

});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;