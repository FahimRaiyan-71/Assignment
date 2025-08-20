import React, { useState } from "react";
import Badge from "react-bootstrap/Badge";
import "./Articles.css";
const dummyArticles = [
  {
    title: "The Art of Storytelling: A Guide to Captivating Your Audience",
    status: "Published",
    lastEdited: "2 days ago",
  },
  {
    title: "Crafting Compelling Characters: A Step-by-Step Approach",
    status: "Draft",
    lastEdited: "1 week ago",
  },
  {
    title: "Mastering Dialogue in Fiction: Techniques for Realistic Conversations",
    status: "Published",
    lastEdited: "2 weeks ago",
  },
  {
    title: "Dream big & achieve",
    status: "Draft",
    lastEdited: "1 month ago",
  },
  {
    title: "Coding in an infinite loop",
    status: "Published",
    lastEdited: "1 month ago",
  },
   {
    title: "Hello world !",
    status: "Draft",
    lastEdited: "2 days ago",
  },
   {
    title: "Morning",
    status: "Draft",
    lastEdited: "3 month ago",
  },
];
function Articles() {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 3;
  const indexOfLast = currentPage * articlesPerPage;
  const indexOfFirst = indexOfLast - articlesPerPage;
  const currentArticles = dummyArticles.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(dummyArticles.length / articlesPerPage);
  return (
    <div className="articles-container">
      <h2>My Articles</h2>
      <table className="articles-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Last Edited</th>
          </tr>
        </thead>
        <tbody>
          {currentArticles.map((article, index) => (
            <tr key={index}>
              <td>{article.title}</td>
              <td>
                <Badge
                  bg={article.status==="Published" ? "success":"warning"}
                  pill
                  text={article.status==="Published" ? "light":"dark"}
                >
                  {article.status}
                </Badge>
              </td>
              <td>{article.lastEdited}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
  <div className="pagination">
  <button
    className="page-btn arrow"
    onClick={() => setCurrentPage(Math.max(currentPage-1,1))}
    disabled={currentPage === 1}
  >
    &lt;
  </button>
  {Array.from({ length: totalPages }, (_, i) => (
    <button
      key={i}
      className={`page-btn ${currentPage === i+1?"active":""}`}
      onClick={() => setCurrentPage(i + 1)}
    >
      {i + 1}
    </button>
  ))}
  <button
    className="page-btn arrow"
    onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
    disabled={currentPage === totalPages}
  >
    &gt;
  </button>
  </div>
  </div>
</div>
  );
}
export default Articles;
