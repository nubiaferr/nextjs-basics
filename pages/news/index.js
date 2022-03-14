// domain/NewsPage
import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <div>NewsPage</div>

      <ul>
        <li>
          <Link href="/news/next-js">NextJS</Link>
        </li>
        <li>
          <Link href="/news/else">Something else</Link>
        </li>
      </ul>
    </>
  );
};

export default NewsPage;
