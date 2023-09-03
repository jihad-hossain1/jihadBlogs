import 'server-only';
import DatabaseConnect from './DatabaseConnect';


export const getArticleFromDatabase = async () => {
    const db = await DatabaseConnect();
    const articlesCollection = db.collection('Articles');
    return articlesCollection.find({}).toArray();
}