import React, { useEffect } from "react";
import styled from "@emotion/styled";
import firebase from "firebase";
import uuid from "react-uuid";

//firebaseの設定
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
firebase
  .auth()
  .signInAnonymously()
  .catch((error) => console.log(error));

//作者名ごとのデータベースを作成するため、作者名を宣言
interface Props {
  author: string;
}

const Comment: React.FC<Props> = ({ author }) => {
  //ユーザが書いたコメントを格納
  const [comment, setComment] = React.useState("");
  const [imgFile, setImgFile] = React.useState("");

  //いいねのチェックボックスの値(boolean)
  const [checkbox0, setCheckbox0] = React.useState(false);
  const [checkbox1, setCheckbox1] = React.useState(false);
  const [checkbox2, setCheckbox2] = React.useState(false);

  //データベースよりランダムに抜き出された三つのコメント
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

  //コメント、いいねの送信イベント
  const handleSubmit = (e) => {
    e.preventDefault();

    //新しいコメントの文字列をデータベースに格納
    if (comment !== "") {
      if (comment.length > 100) {
        alert("コメントは100文字以内にしてください。");
      } else {
        firebase.database().ref(author).push({ content: comment, good: 0 });
        setComment("");
      }
    }

    //いいねをデータベースに反映
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
  };

  //画像アップロードイベント
  const handleImageSet = (e) => {
    const file = e.target.files[0]; //選ばれたファイル
    const storageRef = firebase.storage().ref(); //firebase storageのrootパス
    if (file.size > 1e7) {
      alert("画像サイズは10Mb以内に収めてください");
    } else {
      const uploadTask = storageRef
        .child(`${author}/comments/${uuid()}`) //ファイル名をuniqueにするためuuidで指定
        .put(file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          console.log("snapshot", snapshot);
        },
        (error) => {
          console.log("err", error);
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            console.log("File available at", downloadURL);
          });
        }
      );
    }
  };
  const handleImageSubmit = (e) => {};
  //データベースよりランダムにコメントを抜粋し、stateとして格納する
  useEffect(() => {
    firebase
      .database()
      .ref(author)
      .once("value")
      .then((snap) => {
        let databaseRef: Object;
        databaseRef = snap.val();
        let comments = Object.entries(databaseRef); //データベースのobjectを配列として格納(シャッフルするため)

        //シャッフル
        for (let i = comments.length - 1; i > 0; i--) {
          let r = Math.floor(Math.random() * (i + 1));
          let tmp = comments[i];
          comments[i] = comments[r];
          comments[r] = tmp;
        }

        let commentsSelected: [string, { content: string; good: number }][];
        commentsSelected = comments.slice(0, 3); //シャッフルされた配列から三つ取り出す
        setcomment0({
          ...comment0,
          key: `${author}/${commentsSelected[0][0]}`,
          content: commentsSelected[0][1].content,
        });
        setcomment1({
          ...comment1,
          key: `${author}/${commentsSelected[1][0]}`,
          content: commentsSelected[1][1].content,
        });
        setcomment2({
          ...comment2,
          key: `${author}/${commentsSelected[2][0]}`,
          content: commentsSelected[2][1].content,
        });
      });
  }, []);

  //出力jsx
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
      <UploadButton onChange={handleImageSet} onSubmit={handleImageSubmit}>
        <input type="file" accept="image/*" required id="fileform" />
        <input type="submit" name="save" value="画像を送信" />
      </UploadButton>
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
const UploadButton = styled.form`
  width: 200px;
  height: 200px;
  text-align: center;
  line-height: 100px;
  color: white;
  background-color: #222222;
`;
export default Comment;

/*
const file = e.target.files[0]; //選ばれたファイル
    const storageRef = firebase.storage().ref(); //firebase storageのrootパス
    if (file.size > 1e7) {
      alert("画像サイズは10Mb以内に収めてください");
    } else {
      const uploadTask = storageRef
        .child(`${author}/comments/${uuid()}`) //ファイル名をuniqueにするためuuidで指定
        .put(file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          console.log("snapshot", snapshot);
        },
        (error) => {
          console.log("err", error);
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            console.log("File available at", downloadURL);
          });
        }
      );
    }
    */
