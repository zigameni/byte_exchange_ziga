"use server"

import {connectToDatabase} from "@/lib/mongoose";
import {GetAllTagsParams, GetTopInteractedTagsParams} from "@/lib/actions/shared.types";
import User from "@/database/user.model";
import Tag from "@/database/tag.model";

// top interected tags for specific user
export async function getTopInterectedTags(params: GetTopInteractedTagsParams){
    try {
        await connectToDatabase();

        const {userId} = params;

        const user = User.findById(userId);

        if(!user) throw new Error("User not found!");

        // Find interactions for the user and group by tags
        // Interaction... a bit out of scope at the moment

        return [{_id: '1', name:'tag1'}, {_id: '2', name:'tag2'}, {_id: '3', name:'tag3'}];
    }catch (error) {
        console.log(error);
        throw error;
    }
}

export async function getAllTags(params: GetAllTagsParams){
    try {
        await connectToDatabase();

        const tags = await Tag.find({});

        return {tags}
    }catch (error) {
        console.log(error);
        throw error;
    }
}