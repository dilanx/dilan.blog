import React from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/outline';
import Translate, { translate } from '@docusaurus/Translate';
import PaginatorNavLink from '@theme/PaginatorNavLink';
export default function BlogPostPaginator(props) {
    const { nextItem, prevItem } = props;
    return (
        <nav
            className="pagination-nav docusaurus-mt-lg"
            aria-label={translate({
                id: 'theme.blog.post.paginator.navAriaLabel',
                message: 'Blog post page navigation',
                description: 'The ARIA label for the blog posts pagination',
            })}
        >
            {prevItem && (
                <PaginatorNavLink
                    {...prevItem}
                    subLabel={
                        <div className="dblog-pagination-sublabel dblog-left">
                            <ArrowLeftIcon className="dblog-arrow" />
                            Newer Post
                        </div>
                    }
                />
            )}
            {nextItem && (
                <PaginatorNavLink
                    {...nextItem}
                    subLabel={
                        <div className="dblog-pagination-sublabel dblog-right">
                            Older Post
                            <ArrowRightIcon className="dblog-arrow" />
                        </div>
                    }
                    isNext
                />
            )}
        </nav>
    );
}
