import {Schema, models, model, Document} from 'mongoose';

export interface ITag extends Document {
    name: string;
    description: string;
    questions: Schema.Types.ObjectId[]; // array of questions to which these tags are connected to
    followers: Schema.Types.ObjectId[]; // array of users following this tag
    createdOn: Date;
}

const TagSchema: Schema = new Schema({
    name: { type: String, required: true, unique: true }, // Tags should likely be unique and trimmed
    description: { type: String, required: true },
    questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }], // Reference to Question model
    followers: [{ type: Schema.Types.ObjectId, ref: 'User' }], // Reference to User model
    createdOn: { type: Date, default: Date.now }, // Default createdOn to current time
});

const Tag = models.Tag || model('Tag', TagSchema);

export default Tag;
