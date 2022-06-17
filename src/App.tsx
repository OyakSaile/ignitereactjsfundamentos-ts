import { Header } from "./components/Header.jsx";
import "./global.css";
import styles from "./App.module.css";
import { Post } from "./components/Post.jsx";
import { SideBar } from "./components/Sidebar.jsx";

const posts = [
  {
    id: 1,
    author: {
      avatarURL: "https://www.github.com/oyaksaile.png",
      name: "Kayo Elias",
      role: "Front End Developer",
    },

    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz",
      },
      {
        type: "paragraph",
        content:
          "no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],

    publishedAt: new Date("2022-05-03 20:00"),
  },

  {
    id: 2,
    author: {
      avatarURL: "https://www.github.com/oyaksaile.png",
      name: "Kayo Elias G Verdan",
      role: "Back End Developer",
    },

    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz",
      },
      {
        type: "paragraph",
        content:
          "no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],

    publishedAt: new Date("2022-05-10 20:00"),
  },
];
function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}

export default App;
