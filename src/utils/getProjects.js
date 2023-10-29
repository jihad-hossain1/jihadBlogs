import 'server-only'

import { cache } from 'react';
import { getProjectsFromDatabase } from '@/services/projects.services';


const getProjects = cache(() => {
    return getProjectsFromDatabase()
})

export default getProjects;