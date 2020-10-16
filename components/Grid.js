import Link from "next/link";
import styles from "./styles.module.css";

export const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function PostCardGrid() {
  return (
    <div className={styles.postCardGridWrapper}>
      <h2>
        With QueryString Routing, and a reload will use the page with the layout
      </h2>
      <div className={styles.postCardGrid}>
        {data.map((id, index) => (
          <Link
            key={index}
            href={`/?postId=${id}`}
            as={`/post/${id}`}
            scroll={false}
          >
            <a className={styles.postCard}>{id}</a>
          </Link>
        ))}
      </div>

      <h2>
        With Dynamic Routing, and reloads will keep the modal but lose scroll
        position
      </h2>
      <h3>Clicking w/ Link will clientside render and keep scroll position</h3>
      <div className={styles.postCardGrid}>
        {data.map((id, index) => (
          <Link
            key={index}
            href="/article/[articleId]"
            as={`/article/${id}`}
            scroll={false}
          >
            <a className={styles.postCard}>{id}</a>
          </Link>
        ))}
      </div>
      <h4>Extra grid for more scrolling</h4>
      <div className={styles.postCardGrid}>
        {data.map((id, index) => (
          <Link
            key={index}
            href="/article/[articleId]"
            as={`/article/${id}`}
            scroll={false}
          >
            <a className={styles.postCard}>{id}</a>
          </Link>
        ))}
      </div>
      <h4>Extra grid for more scrolling</h4>

      <div className={styles.postCardGrid}>
        {data.map((id, index) => (
          <Link
            key={index}
            href="/article/[articleId]"
            as={`/article/${id}`}
            scroll={false}
          >
            <a className={styles.postCard}>{id}</a>
          </Link>
        ))}
      </div>
      <h4>Extra grid for more scrolling</h4>

      <div className={styles.postCardGrid}>
        {data.map((id, index) => (
          <Link
            key={index}
            href="/article/[articleId]"
            as={`/article/${id}`}
            scroll={false}
          >
            <a className={styles.postCard}>{id}</a>
          </Link>
        ))}
      </div>
    </div>
  );
}
