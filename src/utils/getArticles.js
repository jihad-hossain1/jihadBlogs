import 'server-only'

// import { getCategoriesFromDatabase } from '@/services/category.service';
import { cache } from 'react';
import { getArticleFromDatabase } from '@/services/article.services';

const getArticles = cache(() => {
    return getArticleFromDatabase()
})

export default getArticles;