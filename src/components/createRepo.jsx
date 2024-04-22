import axios from 'axios';
import { useState } from 'react';
import '../styles/createRepo.css';

// eslint-disable-next-line react/prop-types
const CreateRepoModal = ({ onSubmit, closeCreateRepo }) => {
  const [repoName, setRepoName] = useState('');
  const [description, setDescription] = useState('');
  const [language, setLanguage] = useState('');

  const handleCreateRepo = () => {
    onSubmit(repoName, description, language);
  };

  return (
    <div className="create-modal">
      <div className="modal-content">
        <h2>Create New Repository</h2>
        <input
          type="text"
          placeholder="Repository Name"
          value={repoName}
          onChange={(e) => setRepoName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        />
        <button className='button-7' onClick={handleCreateRepo}>Create Repository</button>
        <button className='button-7' onClick={closeCreateRepo}>Cancel</button>
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const CreateRepo = ({ closeCreateRepo }) => {
  const apiToken = import.meta.env.VITE_REACT_APP_API_TOKEN;

  const createRepo = (repoName, description, language) => {
    const repoData = {
      name: repoName,
      description: description,
      language: language,
      private: false,
      auto_init: true,
      license_template: 'mit',
    };

    axios.post('https://api.github.com/user/repos', repoData, {
      headers: {
        Authorization: "token " + apiToken,
        Accept: 'application/vnd.github.v3+json',
      },
    })
    .then(response => {
      console.log('Repository created successfully:', response.data);
    })
    .catch(error => {
      console.error('Error creating repository:', error);

    });
  };

  return (
    <div>
      <CreateRepoModal onSubmit={createRepo} closeCreateRepo={closeCreateRepo} />
    </div>
  );
};

export default CreateRepo;

