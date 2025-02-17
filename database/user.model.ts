import {Schema, models, model, Document} from 'mongoose';

export interface IUser extends Document {
    clerkId: string;
    name: string;
    username: string;
    email: string;
    password?: string;
    bio?: string;
    picture: string;
    location?: string;
    portfolioWebsite?: string;
    reputation?: string;
    saved: Schema.Types.ObjectId[]; // saved questions and the like
    joinedAt: Date;
}

const UserSchema: Schema = new Schema({
    clerkId: { type: String, required: true }, // Assuming clerkId is unique
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true }, // Assuming username should be unique
    email: { type: String, required: true, unique: true }, // Assuming email should be unique
    password: { type: String }, // Optional password field
    bio: { type: String }, // Optional bio
    picture: { type: String, required: true },
    location: { type: String }, // Optional location
    portfolioWebsite: { type: String }, // Optional portfolio website
    reputation: { type: Number, default: 0 }, // Default reputation to 0, changed to Number type
    saved: [{ type: Schema.Types.ObjectId, ref: 'Question' }], // Assuming saving questions, reference to 'Question' model
    joinedAt: { type: Date, default: Date.now }, // Default joinedAt to current time
});

const User = models.User || model('User', UserSchema);

export default User;