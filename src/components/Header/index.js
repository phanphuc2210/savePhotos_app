import { Col, Container, Row } from "reactstrap"
import { NavLink } from "react-router-dom"
import styles from './Header.module.scss';
import clsx from "clsx";

function Header() {
    return (
        <header className={clsx(styles.header)}>
            <Container>
                <Row className="justify-content-between">
                    <Col xs="auto">
                        <NavLink
                            className={clsx(styles.header__link, styles.header__title)}
                            to="/photos"
                        >
                            savePhotos.
                        </NavLink>
                    </Col>

                    <Col xs="auto">
                        <NavLink
                            to="/sign-in"
                            //navData.isActive ? 'header__link header__link--active' : 'header__link'
                            className={(navData) => clsx(styles.header__link, {
                                [styles.header__link_active]: navData.isActive
                            })}
                        >
                            Sign In
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header