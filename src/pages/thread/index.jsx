import CommentList from "../../components/Comment/CommentList";
import ThreadWithComment from "../../components/Thread/ThreadWithComment";

const ThreadPage = () => {
  const data = {
    id: "thread-1",
    title: "Thread Pertama",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus, maxime excepturi eum autem at veritatis repellat commodi eligendi nostrum, laboriosam iure pariatur doloremque nihil adipisci libero cupiditate natus assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aliquid inventore eligendi natus. Vero cupiditate ut culpa commodi facilis excepturi sunt, a iure iste quas consequuntur omnis recusandae veniam assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cum suscipit, quis eaque fuga autem, nisi mollitia aperiam neque impedit veniam minus dolorum recusandae officiis repellat error nihil saepe sunt.",
    category: "General",
    createdAt: "2021-06-21T07:00:00.000Z",
    owner: {
      id: "users-1",
      name: "John Doe",
      avatar: "https://generated-image-url.jpg",
    },
    upVotesBy: [],
    downVotesBy: [],
    comments: [
      {
        id: "comment-1",
        content: "Ini adalah komentar pertama",
        createdAt: "2021-06-21T07:00:00.000Z",
        owner: {
          id: "users-1",
          name: "John Doe",
          avatar: "https://generated-image-url.jpg",
        },
        upVotesBy: [],
        downVotesBy: [],
      },
      {
        id: "comment-1",
        content: "Ini adalah komentar pertama",
        createdAt: "2021-06-21T07:00:00.000Z",
        owner: {
          id: "users-1",
          name: "John Doe",
          avatar: "https://generated-image-url.jpg",
        },
        upVotesBy: [],
        downVotesBy: [],
      },
      {
        id: "comment-1",
        content: "Ini adalah komentar pertama",
        createdAt: "2021-06-21T07:00:00.000Z",
        owner: {
          id: "users-1",
          name: "John Doe",
          avatar: "https://generated-image-url.jpg",
        },
        upVotesBy: [],
        downVotesBy: [],
      },
    ],
  };

  return (
    <div className="mb-5 mt-8 w-full px-5">
      <ThreadWithComment data={data} />
      <CommentList commentData={data.comments} />
    </div>
  );
};

ThreadPage.propTypes = {};

export default ThreadPage;
