import GridLayout from "../../layouts/grid-with-modal";
import { data } from "../../components/Grid";

const ArticlePage = ({ articleId }) => {
  return <GridLayout articleId={articleId} />;
};

export default ArticlePage;

export function getStaticProps({ params: { articleId } }) {
  return { props: { articleId: articleId } };
}

export function getStaticPaths() {
  return {
    paths: data.map((articleId) => ({
      params: { articleId: articleId.toString() },
    })),
    fallback: false,
  };
}
