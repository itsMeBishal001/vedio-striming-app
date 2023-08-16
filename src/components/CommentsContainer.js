import React from "react";

// dummy commends data
const commentsData = [
  {
    name: "Bishal Datta",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Bishal Datta",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Bishal Datta",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Bishal Datta",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Bishal Datta",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Bishal Datta",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Bishal Datta",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Bishal Datta",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Bishal Datta",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Bishal Datta",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Bishal Datta",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Bishal Datta",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Bishal Datta",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

// how we want to show the commands data i mean a single commend
const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  // Disclaimer: Don't use indexes as keys
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};
export const CommentsContainer = () => {
 return (
   <div className="m-5 p-2">
     <h1 className="text-2xl font-bold">Comments: </h1>
     <CommentsList comments={commentsData} />
   </div>
 );
};
