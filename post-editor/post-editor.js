/* Imports */
import { createPost } from '../fetch-utils.js';
// this will check if we have a user and set signout link if it exists
import '../auth/user.js';

/* Get DOM Elements */
const postForm = document.getElementById('post-form');
const errorDisplay = document.getElementById('error-display');

/* State */
let error = null;
/* Events */
postForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(postForm);

    // const imageFile = formData.get('image');
    // const randomFolder = Math.floor(Date.now() * Math.random());
    // const imagePath = `posts/${randomFolder}/${imageFile.name}`;

    // const url = await uploadImage('post-images', imagePath, imageFile);

    const post = {
        title: formData.get('title'),
        description: formData.get('description'),
        category: formData.get('category'),
        contact: formData.get('contact'),
        // image_url: url
    };

    const response = createPost(post);
    error = response.error;

    if (error) {
        displayError();
    } else {
        // location.assign('/');
    }
});

/* Display Functions */
function displayError() {
    if (error) {
        errorDisplay.textContent = error.message;
    } else {
        errorDisplay.textContent = '';
    }
}
