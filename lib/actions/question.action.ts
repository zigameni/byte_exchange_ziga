"use server"


import {connectToDatabase} from "@/lib/mongoose";
import Question from "@/database/question.model";
import Tag from "@/database/tag.model";

export async function createQuestion(params:any) {
    // eslint-disable-next-line no-empty
    try {
        await connectToDatabase();

        const {title, content, tags, author, path} = params;

        // create question
        const question = await Question.create({
            title,
            content,
            author
        });

        const tagDocuments = [];

        // create the tags or get them from the database if they already exist
        for(const tag of tags){
            const existingTag = await Tag.findOneAndUpdate(
                {name: {$regex: new RegExp(`^${tag}$`, "i")}},
                {$setOnInsert: {name:tag}, $push: {questions: question._id}},
                {upsert: true, new: true}
            )

            tagDocuments.push(existingTag);
        }

        await Question.findByIdAndUpdate(question._id, {
            $push: {tags:{$each: tagDocuments}}
        });

        // Create an interaction record for the user's ask_question action

        // Increment author's reputation by +5 for creating a question

    } catch (error) {

    }
}