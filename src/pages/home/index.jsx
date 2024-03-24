import ThreadList from "../../components/Thread/ThreadList";
import HomeTopBar from "./components/HomeTopBar";

const HomePage = () => {
  const ThreadDocs = [
    {
      id: "thread-1",
      title: "Thread Pertama",
      body: "Ini adalah thread pertama",
      category: "General",
      createdAt: "2021-06-21T07:00:00.000Z",
      ownerId: "users-1",
      upVotesBy: [],
      downVotesBy: [],
      totalComments: 0,
    },
    {
      id: "thread-2",
      title: "Thread Kedua",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi quisquam quasi nulla? Nesciunt amet ipsa atque! Hic error ex mollitia illum odit, provident maiores quod reprehenderit, velit aspernatur magni iusto!, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi quisquam quasi nulla? Nesciunt amet ipsa atque! Hic error ex mollitia illum odit, provident maiores quod reprehenderit, velit aspernatur magni iusto!,Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi quisquam quasi nulla? Nesciunt amet ipsa atque! Hic error ex mollitia illum odit, provident maiores quod reprehenderit, velit aspernatur magni iusto!",
      category: "General",
      createdAt: "2021-06-21T07:00:00.000Z",
      ownerId: "users-2",
      upVotesBy: [],
      downVotesBy: [],
      totalComments: 0,
    },
  ];

  return (
    <div className="mt-8 w-full">
      <HomeTopBar />
      <ThreadList threadData={ThreadDocs} />
    </div>
  );
};

HomePage.propTypes = {};

export default HomePage;
