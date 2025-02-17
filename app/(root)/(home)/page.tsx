import QuestionCard from "@/components/card/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";


const questions = [
  {
    _id: '1',
    title: 'Cascading deletes in SQLAlchemy?',
    tags: [
      { _id: '1', name: 'python' },
      { _id: '2', name: 'sql' },
      { _id: '3', name: 'database' }
    ],
    author: {
      _id: 'a1',
      name: 'John Doe',
      picture: 'https://example.com/john_doe.jpg'
    },
    upvotes: 10,
    views: 100,
    answers: [{}, {}],
    createdAt: new Date('2021-09-01T12:00:00.000Z')
  },
  {
    _id: '2',
    title: 'How to handle exceptions in Python?',
    tags: [
      { _id: '4', name: 'python' },
      { _id: '5', name: 'error-handling' }
    ],
    author: {
      _id: 'a2',
      name: 'Jane Smith',
      picture: 'https://example.com/jane_smith.jpg'
    },
    upvotes: 15,
    views: 150,
    answers: [{}, {}, {}],
    createdAt: new Date('2021-09-10T15:30:00.000Z')
  },
  {
    _id: '3',
    title: 'Best practices for responsive web design?',
    tags: [
      { _id: '6', name: 'css' },
      { _id: '7', name: 'web-development' },
      { _id: '8', name: 'design' }
    ],
    author: {
      _id: 'a3',
      name: 'Alice Brown',
      picture: 'https://example.com/alice_brown.jpg'
    },
    upvotes: 25,
    views: 300,
    answers: [{}, {}, {}, {}, {}],
    createdAt: new Date('2021-10-05T10:15:00.000Z')
  },
  {
    _id: '4',
    title: 'What is the difference between SQL and NoSQL?',
    tags: [
      { _id: '9', name: 'database' },
      { _id: '10', name: 'sql' },
      { _id: '11', name: 'nosql' }
    ],
    author: {
      _id: 'a4',
      name: 'Chris Green',
      picture: 'https://example.com/chris_green.jpg'
    },
    upvotes: 354444440,
    views: 874440,
    answers: [{}, {}, {}, {}],
    createdAt: new Date('2021-11-20T08:45:00.000Z')
  },
  {
    _id: '5',
    title: 'How to optimize React application performance?',
    tags: [
      { _id: '12', name: 'react' },
      { _id: '13', name: 'javascript' },
      { _id: '14', name: 'performance' }
    ],
    author: {
      _id: 'a5',
      name: 'David White',
      picture: 'https://example.com/david_white.jpg'
    },
    upvotes: 20,
    views: 250,
    answers: [{}, {}, {}, {}, {}, {}],
    createdAt: new Date('2021-12-15T14:20:00.000Z')
  }
];



export default function Home() {
  return (
    <>

      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a question
          </Button>
        </Link>
      </div>
      {/* Search bar and filters. */}

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"

        />

        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {/* questions in the homepage */}
        {/* Loop through the questions and display a QuestionCard */}

        {questions.length > 0 ?
          questions.map((question) => (
            <QuestionCard 
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
          : <NoResult 
            title="No Questions Yet"
            description="Start the conversation! 🚀 Post a question and spark the discussion. Your curiosity could inspire others and lead to amazing insights. Join the conversation! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          /> }
      </div>
    </>
  )
}