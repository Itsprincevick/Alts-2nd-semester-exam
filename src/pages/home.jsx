import "../styles/index.css";
import "../styles/modal.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CreateRepo from "../components/createRepo";

function Home() {
  const [user, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLanguage, setFilterLanguage] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [modal, setModal] = useState(false);
  const [selectedRepo, setSelectedRepo] = useState(null);
  const apiToken = import.meta.env.VITE_REACT_APP_API_TOKEN;
  const [showCreateRepo, setShowCreateRepo] = useState(false);

  useEffect(() => {
    fetchRepos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, searchTerm, filterLanguage]);

  const fetchRepos = () => {
    axios
      .get(`https://api.github.com/search/repositories`, {
        params: {
          q: `user:Itsprincevick ${searchTerm}`,
          per_page: 4,
          page: currentPage,
        },
        headers: {
          Authorization: `${apiToken}`,
        },
      })
      .then((response) => {
        const data = response.data.items;
        setUser(data);
        const totalItems = response.data.total_count;
        setTotalPages(Math.ceil(totalItems / 3)); 
      });
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleFilterLanguage = (event) => {
    setFilterLanguage(event.target.value);
    setCurrentPage(1);
  };
  const filteredUser = user.filter((userElement) => {
    return (
      userElement.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterLanguage === "" || userElement.language === filterLanguage)
    );
  });

  const userElements = filteredUser.map((userElement) => {
    return (
      <div className="repo-card" key={userElement.id}>
        <Link to={`/repoList/${userElement.name}`}>
          <h2 className="repo-name">{userElement.name}</h2>
        </Link>
        <p className="language">
          Language:{" "}
          {userElement.language === null ? "none" : userElement.language}
        </p>
        <p className="date">Start date & time: {userElement.created_at}</p>
        <p className="visibility">Visibility: {userElement.visibility}</p>
        <button onClick={() => openModal(userElement)}>Manage</button>
      </div>
    );
  });

  const openModal = (repo) => {
    document.body.classList.add("openModal");
    setSelectedRepo(repo);
    setModal(true);
  };

  const closeModal = () => {
    document.body.classList.remove("openModal");
    setModal(false);
  };

  const deleteRepo = async () => {
    try {
      await axios.delete(
        `https://api.github.com/repos/Itsprincevick/${selectedRepo.name}`,
        {
          headers: {
            Authorization: `${apiToken}`,
          },
        }
      );
      setModal(false);
      fetchRepos();
    } catch (error) {
      console.error("Error deleting repo:", error);
    }
  };

  return (
    <main className="main-repo">
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search by repo name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={filterLanguage}
          className="filter"
          onChange={handleFilterLanguage}
        >
          <option value="">Filter by language</option>
          <option value="JavaScript">JavaScript</option>
          <option value="CSS">CSS</option>
          <option value="HTML">HTML</option>
        </select>
      </div>
      <section className="repo-container">{userElements}</section>
      <div className="pagination">
        <button
          className="nav-btn"
          role="button"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          <span className="text">Prev</span>
        </button>
        <button
          className="nav-btn"
          role="button"
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          <span className="text">
            {currentPage === totalPages ? "End of Repos" : "Next"}
          </span>
        </button>
        {modal && (
          <div className="modal">
            <div className="modal-content manage">
              <span  className="span">
                <RiDeleteBin6Line className="del" />
                <h2>Delete Project</h2>
                <p>This action can&apos;t be undone</p>
              </span>
              <span>
                <button className="button-17 del-btn" onClick={deleteRepo}>
                  Delete
                </button>
                <button className="button-17" onClick={closeModal}>
                  Cancel
                </button>
              </span>
            </div>
          </div>
        )}
      </div>
      <button className="repo-btn" onClick={() => setShowCreateRepo(true)}>
        Create Repo
      </button>

      {showCreateRepo && (
        <CreateRepo closeCreateRepo={() => setShowCreateRepo(false)} />
      )}
    </main>
  );
}

export default Home;
