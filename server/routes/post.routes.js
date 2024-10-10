// routes/post.routes.js
const express = require('express');
const { createPost, getPosts, getPostById, updatePost, deletePost } = require('../controllers/post.controller');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Create a new job post
router.post('/', authMiddleware, createPost);

// Get all job posts
router.get('/', getPosts);

// Get a single job post by ID
router.get('/:id', getPostById);

// Update a job post
router.put('/:id', authMiddleware, updatePost);

// Delete a job post
router.delete('/:id', authMiddleware, deletePost);

module.exports = router;

