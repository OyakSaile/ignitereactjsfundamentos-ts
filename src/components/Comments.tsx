import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comments.module.css";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}
export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://www.github.com/oyaksaile.png" alt=""/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Kayo Elias</strong>
              <time
                title="11 de Maio as 08:13:38"
                dateTime="2022-05-11 08:13:38"
              >
                Cerca de 1h Atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar Comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
