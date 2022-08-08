import React from 'react';
import BlogPostItemHeaderTitle from '@theme/BlogPostItem/Header/Title';
import BlogPostItemHeaderInfo from '@theme/BlogPostItem/Header/Info';
import BlogPostItemHeaderAuthors from '@theme/BlogPostItem/Header/Authors';
export default function BlogPostItemHeader() {
    return (
        <header>
            <BlogPostItemHeaderTitle className="dblog-item-header-title" />
            <BlogPostItemHeaderInfo />
            <BlogPostItemHeaderAuthors className="dblog-item-header-authors" />
        </header>
    );
}
