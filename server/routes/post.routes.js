// routes/post.routes.js
const express = require('express');
const { createPost, getPosts, getPostById, updatePost, deletePost } = require('../controllers/post.controller');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

// Create a new job post
router.post('/', protect, createPost);

// Get all job posts
router.get('/', getPosts);

// Get a single job post by ID
router.get('/:id', getPostById);

// Update a job post
router.put('/:id', protect, updatePost);

// Delete a job post
router.delete('/:id', protect, deletePost);

module.exports = router;

