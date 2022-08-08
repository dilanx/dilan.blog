import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
export default function PaginatorNavLink(props) {
    const { permalink, title, subLabel, isNext } = props;
    return (
        <Link
            className={clsx(
                'pagination-nav__link',
                'dblog-pagination',
                isNext
                    ? 'pagination-nav__link--next'
                    : 'pagination-nav__link--prev'
            )}
            to={permalink}
        >
            {subLabel && (
                <div className="pagination-nav__sublabel">{subLabel}</div>
            )}
            <div className="dblog-pagination-label">{title}</div>
        </Link>
    );
}
