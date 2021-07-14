import React from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';
import Link from '@docusaurus/Link';
import styles from './BioCard.module.css';

const BioCard = ( { name, role, profileImage, description, to } ) => {
    const { isDarkTheme } = useThemeContext();

    return (
        <div className="col col--4">
            <Link to={ to } className={ isDarkTheme ? styles.linkDarkStyle : styles.linkStyle }>
                <div className="card">
                    <div className="card__header">
                        <div className="avatar">
                            <img
                                className="avatar__photo"
                                src={ require( '@site/static' + profileImage ).default }
                            />
                            <div className="avatar__intro">
                                <div className="avatar__name">{ name }</div>
                                <small className="avatar__subtitle">
                                    { role }
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="card__body">
                        <p>{ description }</p>
                    </div>
                </div>
            </Link>
        </div>
    )
};

export default BioCard;