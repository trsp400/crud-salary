import { response } from 'express';
import Yield from '../models/Yield';
import { format, getMonth, parseISO } from 'date-fns'

const monthlyYield = [];
const json = [];

class YieldController {
    create(request, response) {        
        const {name, date, yield: yield_} = request.body;

        monthlyYield.push(yield_);

        const parsedDate = format(parseISO(date), "MMMM");

        const totalYield = monthlyYield.reduce( (previous, current) => {
            return previous+current;
        }, 0);

        json.push({
            name,
            parsedDate,
            yield_,
            totalYield
        })

        return response.json({name, date, yield_, totalYield});
    }

    index(request, response){
        return response.json(json);
    }
}

export default YieldController;