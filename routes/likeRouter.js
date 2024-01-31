const express = require('express');
const middleware = require('../middlewares/index')
const services = require('../services/likeServices')

const likeRouter = express.Router();

/**
 * @swagger
 * /likes:
 *   post:
 *     summary: Registra o like ou deslike
 *     tags: [Likes]
 *     security:
 *        - bearerAuth: []
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         required:
 *           - imageId
 *           - liked
 *         schema:
 *           type: object
 *           properties:
 *             imageId:
 *               type: uuid
 *               description: Id da imagem
 *             liked:
 *               type: boolean
 *               description: Like ou Deslike
 *           example:
 *             imageId: fcc40f61-b7cd-4813-88c0-4d7f907a9b19
 *             liked: true
 *     responses:
 *       201:
 *         content:
 *           application/json
 */
likeRouter.post('/', middleware.authMiddleware, services.manageLike)
/**
 * @swagger
 * /likes/counts/{id}:
 *   get:
 *     summary: Retorna a quantidade de likes
 *     tags: [Likes]
 *     security:
 *        - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Id da imagem
 *     responses:
 *       200:
 *         description: Retorna a quantidade de likes
 *         content:
 *           application/json:
 *             schema:
 *               type: int
 */
likeRouter.get('/counts/:id', middleware.authMiddleware, services.getCountsById)

module.exports = { likeRouter: likeRouter }
