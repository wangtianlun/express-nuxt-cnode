import { Router } from 'express'
import axios from 'axios';

const router = Router()

/* GET users listing. */
router.get('/topics', function (req, res, next) {
	const { page, tab, limit } = req.query

	axios.get(`https://cnodejs.org/api/v1/topics?page=${page}&tab=${tab}&limit=${limit}`)
		.then(resp => {
			res.cookie('access_token', 1, {
				expires: new Date(Date.now() + 9000000)
			})
			res.json(resp.data.data)
		})
		.catch(function (error) {
    	console.log(error);
  	});
})

router.get('/topic/:id', function (req, res, next) {
	axios.get(`https://cnodejs.org/api/v1/topic/${req.params.id}`)
		.then(resp => {
			res.json(resp.data.data)
		})
		.catch(err => {
			console.error(err)
		});
})

export default router
