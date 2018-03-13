import { Router } from 'express'
import axios from 'axios';

const router = Router()

/* GET users listing. */
router.get('/topics', function (req, res, next) {

	const { page, tab, limit } = req.query

	axios.get(`https://cnodejs.org/api/v1/topics?page=${page}&tab=${tab}&limit=${limit}`)
		.then(resp => {
			res.json(resp.data.data)
		})
		.catch(function (error) {
    	console.log(error);
  	});
})

export default router
