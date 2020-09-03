import {Router} from 'express'
import Yield from './models/Yield';
import YieldController from './controllers/YieldController';

const routes = Router();

const yieldController = new YieldController();

routes.get('/', yieldController.index);

routes.post('/yield', yieldController.create);

// routes.put('/yield/:id', function(request, response) {
//     const {id} = request.params;
//     const {name, month, yield} = request.body;



// })

export default routes;