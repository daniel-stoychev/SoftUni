import Cast from "../models/Cast.js"

export default {
    create(castData) {
        return Cast.create(castData);
    },
    getAll(filter = {}) {
        let query = Cast.find();

        if (filter.includes) {
            query = query.in('_id', filter.includes); //Mongoose

        }
        return query;
    }

}