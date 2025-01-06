import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import RenderTag from '../RenderTag';

const RightSidebar = () => {

    // temporary questions before database connection
    const hotQuestions = [
        { _id: 1, title: "What is React?", },
        { _id: 2, title: "What is a stupid question?" },
        { _id: 3, title: "What is google?", },
        { _id: 4, title: "What is hola?", },
        { _id: 5, title: "What is money?", },
    ];


    // temporary tags before connecting to db 
    const popularTags = [
        { _id: 1, name: "react", totalQuestions: 12 },
        { _id: 2, name: "javaScript", totalQuestions: 5 },
        { _id: 3, name: "python", totalQuestions: 4 },
        { _id: 4, name: "java", totalQuestions: 2 },
        { _id: 5, name: "vue", totalQuestions: 6 },
        { _id: 6, name: "next", totalQuestions: 10 },
    ];

    return (
        <section className="background-light900_dark200 light-border custom-scrollbar sticky left-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden lg:w-[276px]">

            {/* 2 parts */}
            {/* questions */}
            {/* tags */}

            <div >
                <h3 className="h3-bold text-dark200_light900">Top Questions</h3>

                <div className="mt-7 flex w-full flex-col gap-[30px]">
                    {hotQuestions.map((question) => (
                        <Link
                            key={question._id}
                            href={`/questions/${question._id}`}
                            className="flex cursor-pointer items-center justify-between gap-7"
                        >
                            <p className="body-medium text-dark500_light700">
                                {question.title}
                            </p>
                            <Image
                                src="/assets/icons/chevron-right.svg"
                                alt="chevron right"
                                width={20}
                                height={20}
                                className="invert-colors"
                            />
                        </Link>
                    ))}


                </div>
            </div>


            <div className="mt-16">
                <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>

                <div className="mt-7 flex flex-col gap-4">
                    {/* tags list  */}
                    {/* will make it as a component  */}

                    {popularTags.map((tag) => (
                        <RenderTag
                            key={tag._id}
                            _id={tag._id}
                            name={tag.name}
                            totalQuestions={tag.totalQuestions}
                            showCount
                        />

                    ))}

                </div>

            </div>
        </section>
    )
}

export default RightSidebar;