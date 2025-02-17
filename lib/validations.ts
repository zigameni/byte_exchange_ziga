import {z} from "zod";

export const QuestionsSchema = z.object({
    title: z.string()
        .min(5, { message: "Title must be at least 5 characters long" })
        .max(130, { message: "Title cannot exceed 130 characters" }),
    explanation: z.string()
        .min(100, { message: "Explanation must be at least 100 characters long" }),
    tags: z.array(z.string().min(1).max(15))
        .min(1, { message: "Please add at least one tag" })
        .max(3, { message: "Cannot add more than 3 tags" }),

})