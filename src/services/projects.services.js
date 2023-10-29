import 'server-only';
import DatabaseConnect from './DatabaseConnect';


export const getProjectsFromDatabase = async () => {
    const db = await DatabaseConnect();
    const projectsCollection = db.collection('Projects');
    return projectsCollection.find({}).toArray();
}