/* eslint-disable react/prop-types */
import axios from 'axios';
import { useState } from 'react';
import '../styles/createRepo.css';

// This component represents a modal for creating a new repository
const CreateRepoModal = ({ onSubmit, closeCreateRepo }) => {
  // Initialize the state variables for the repository name, description, and language
  const [repoName, setRepoName] = useState('');
  const [description, setDescription] = useState('');
  const [language, setLanguage] = useState('');

  // This function is called when the user clicks the "Create Repository" button
  const handleCreateRepo = () => {
    // Call the onSubmit function with the current values of the state variables
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

// This component renders the "Create Repository" button and the modal for creating a new repository
const CreateRepo = ({ closeCreateRepo }) => {
  // Get the API token from the environment variable
  const apiToken = import.meta.env.VITE_REACT_APP_API_TOKEN;

  // This function is called when the user clicks the "Create Repository" button in the modal
  const createRepo = (repoName, description, language) => {
    // Create an object with the repository data
    const repoData = {
      name: repoName,
      description: description,
      language: language,
      private: false,
      auto_init: true,
      license_template: 'mit'
    };

    // Make a POST request to the GitHub API to create a new repository
    axios.post('https://api.github.com/user/repos', repoData, {
      headers: {
        Authorization: "token " + apiToken,
        Accept: 'application/vnd.github.v3+json'
      }
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

