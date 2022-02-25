import clsx from 'clsx'
import styles from './Banner.module.scss'

function Banner({ title, backgroundUrl }) {

    const bannerStyle = backgroundUrl
        ? { backgroundImage: `url(${backgroundUrl})`}
        : {}

    return (
        <div className={clsx(styles.banner)} style={bannerStyle}>
            <h1 className={clsx(styles.banner__title)}>{title}</h1>
        </div>
    )
}

export default Banner