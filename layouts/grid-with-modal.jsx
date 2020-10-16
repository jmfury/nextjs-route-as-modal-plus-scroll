import { useEffect } from "react";
import { useRouter } from "next/router";
import Modal from "react-modal";
import Article from "../components/Article";
import Post from "../components/Post";
import Grid from "../components/Grid";

Modal.setAppElement("#__next");

const GridLayout = ({ articleId }) => {
  const router = useRouter();
  const { postId } = router.query;

  useEffect(() => {
    router.prefetch("/");
  }, []);

  useEffect(() => {
    function printScroll(e) {
      console.log(e);
    }
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", printScroll);
    }

    return () => window.removeEventListener("scroll", printScroll);
  }, []);

  if (postId)
    return (
      <>
        <Modal
          isOpen={true} // The modal should always be shown on page load, it is the 'page'
          onRequestClose={() => router.push("/", "/", { shallow: true })}
          contentLabel="Post modal"
        >
          <Post id={postId} pathname={router.pathname} />
        </Modal>
        <Grid />
      </>
    );

  return (
    <>
      {articleId !== "index" && (
        <>
          <Modal
            isOpen={true} // The modal should always be shown on page load, it is the 'page'
            onRequestClose={() => router.push("/", "/", { shallow: true })}
            contentLabel="Article modal"
          >
            <Article id={articleId} pathname={router.pathname} />
          </Modal>
        </>
      )}
      <Grid />
    </>
  );
};

export default GridLayout;
