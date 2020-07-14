import React, { useEffect } from "react";
import styled from "@emotion/styled";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDx9tzYwvDgTJOXIvkLrbqh1YAJ8XNOrys",
  authDomain: "yamlab-3f326.firebaseapp.com",
  databaseURL: "https://yamlab-3f326.firebaseio.com",
  projectId: "yamlab-3f326",
  storageBucket: "yamlab-3f326.appspot.com",
  messagingSenderId: "382361918818",
  appId: "1:382361918818:web:1c3f7d472b65485f86a03b",
  measurementId: "G-HKGYWJK3CB",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Comment: React.FC = () => {
  const [comment, setComment] = React.useState("");
  const [checkbox0, setCheckbox0] = React.useState(false);
  const [checkbox1, setCheckbox1] = React.useState(false);
  const [checkbox2, setCheckbox2] = React.useState(false);

  const [comment0, setcomment0] = React.useState({
    key: "",
    content: "",
  });
  const [comment1, setcomment1] = React.useState({
    key: "",
    content: "",
  });
  const [comment2, setcomment2] = React.useState({
    key: "",
    content: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment !== "") {
      firebase.database().ref().push({ content: comment, good: 0 });
      setComment("");
    }

    if (checkbox0 === true) {
      firebase
        .database()
        .ref(comment0.key)
        .once("value")
        .then((snap) => {
          const score = snap.val().good;
          firebase
            .database()
            .ref(comment0.key)
            .child("good")
            .set(score + 1);
        });
      setCheckbox0(false);
    }
    if (checkbox1 === true) {
      firebase
        .database()
        .ref(comment1.key)
        .once("value")
        .then((snap) => {
          const score = snap.val().good;
          firebase
            .database()
            .ref(comment1.key)
            .child("good")
            .set(score + 1);
        });
      setCheckbox1(false);
    }
    if (checkbox2 === true) {
      firebase
        .database()
        .ref(comment2.key)
        .once("value")
        .then((snap) => {
          const score = snap.val().good;
          firebase
            .database()
            .ref(comment2.key)
            .child("good")
            .set(score + 1);
        });
      setCheckbox2(false);
    }
    firebase
      .database()
      .ref()
      .once("value")
      .then((snap) => {
        console.log(snap.val());
      });
  };

  useEffect(() => {
    firebase
      .database()
      .ref()
      .once("value")
      .then((snap) => {
        let databaseRef: Object;
        databaseRef = snap.val();
        let comments = Object.entries(databaseRef);
        for (let i = comments.length - 1; i > 0; i--) {
          let r = Math.floor(Math.random() * (i + 1));
          let tmp = comments[i];
          comments[i] = comments[r];
          comments[r] = tmp;
        }
        let commentsSelected: [string, { content: string; good: number }][];
        commentsSelected = comments.slice(0, 3);
        setcomment0({
          ...comment0,
          key: commentsSelected[0][0],
          content: commentsSelected[0][1].content,
        });
        setcomment1({
          ...comment1,
          key: commentsSelected[1][0],
          content: commentsSelected[1][1].content,
        });
        setcomment2({
          ...comment2,
          key: commentsSelected[2][0],
          content: commentsSelected[2][1].content,
        });
      });
  }, []);
  return (
    <CommentBox>
      <form onSubmit={handleSubmit}>
        <CommentOptionWrapper>
          <div>共感するコメントにチェックしてください(複数可)</div>
          <CommentOptionIntro>
            観覧者が記入したコメントからランダムに三つ選び、選択肢として提供します。画面をリフレッシュすると選択肢が変わります。
          </CommentOptionIntro>
          <label>
            {comment0.content}
            <input
              type="checkbox"
              name={"0"}
              checked={checkbox0}
              onChange={(e) => setCheckbox0(e.target.checked)}
            />
          </label>
          <label>
            {comment1.content}
            <input
              type="checkbox"
              name={"1"}
              checked={checkbox1}
              onChange={(e) => setCheckbox1(e.target.checked)}
            />
          </label>
          <label>
            {comment2.content}
            <input
              type="checkbox"
              name={"2"}
              checked={checkbox2}
              onChange={(e) => setCheckbox2(e.target.checked)}
            />
          </label>
        </CommentOptionWrapper>
        <div>その他コメント等ございましたら、こちらにご記入ください。</div>
        <label>
          Comment:
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </label>
        <input type="submit" value="送信" />
      </form>
    </CommentBox>
  );
};

const CommentBox = styled.div`
  width: 100%;
  height: 50vh;
  background-color: black;
  color: white;
  font-weight: bold;
  font-size: 1.6rem;
  font-kerning: 3.5rem;
  line-height: 3rem;
  display: flex;

  justify-content: space-evenly;
  align-content: center;
`;

const CommentOptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin-bottom: 5%;
`;
const CommentOptionIntro = styled.div`
  margin-bottom: 2%;
`;
export default Comment;
