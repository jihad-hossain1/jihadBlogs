import 'server-only';
import DatabaseConnect from './DatabaseConnect';


export const getCategoriesFromDatabase = async () => {
    const db = await DatabaseConnect();
    const categoriesCollection = db.collection('categories');
    return categoriesCollection.find({}).toArray();
}