import React from "react";
import { useRouter } from "next/router";

const SomethingImportant = () => {
  const router = useRouter();

  const newsId = router.query.newsId;

  return <div>SomethingImportant NEW</div>;
};

export default SomethingImportant;
