// routes/post.routes.js
const express = require('express');
const { createPost, getPosts, getPostById, updatePost, deletePost } = require('../controllers/post.controller');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

/**
 * @swagger
 * /api/posts:
 *   post:
 *     summary: Create a new job post
 *     tags: [Job Posts]
 *     security:
 *       - bearerAuth: []   
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               company:
 *                 type: string
 *               location:
 *                 type: string
 *               salary:
 *                 type: number
 *               jobType:
 *                 type: string
 *               requirements:
 *                 type: string
 *     responses:
 *       201:
 *         description: Job post created successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Error creating job post
 */
router.post('/', protect, createPost);

/**
 * @swagger
 * /api/posts:
 *   get:
 *     summary: Get all job posts
 *     tags: [Job Posts]
 *     responses:
 *       200:
 *         description: List of job posts
 *       500:
 *         description: Error fetching job posts
 */
router.get('/', getPosts);

/**
 * @swagger
 * /api/posts/{id}:
 *   get:
 *     summary: Get a single job post by ID
 *     tags: [Job Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the job post
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Job post details
 *       404:
 *         description: Job post not found
 *       500:
 *         description: Error fetching job post
 */
router.get('/:id', getPostById);

/**
 * @swagger
 * /api/posts/{id}:
 *   put:
 *     summary: Update a job post
 *     tags: [Job Posts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the job post
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               company:
 *                 type: string
 *               location:
 *                 type: string
 *     responses:
 *       200:
 *         description: Job post updated successfully
 *       404:
 *         description: Job post not found
 *       500:
 *         description: Error updating job post
 */
router.put('/:id', protect, updatePost);

/**
 * @swagger
 * /api/posts/{id}:
 *   delete:
 *     summary: Delete a job post
 *     tags: [Job Posts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the job post
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Job post deleted successfully
 *       404:
 *         description: Job post not found
 *       500:
 *         description: Error deleting job post
 */
router.delete('/:id', protect, deletePost);

module.exports = router;

