"use server"

import {connectToDatabase} from "@/lib/mongoose";
import User from "@/database/user.model";


export async function getUserById (params:any) {
    try {
        connectToDatabase();

        const {userId} = params;

        return await User.findOne({clerkId: userId});
    }catch (error) {
        console.log(error);
        throw error;
    }
}