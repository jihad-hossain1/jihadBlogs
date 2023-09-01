import 'server-only'

import { getCategoriesFromDatabase } from '@/services/category.service';
import { cache } from 'react';

const getCategories = cache(() => {
    return getCategoriesFromDatabase()
})

export default getCategories;