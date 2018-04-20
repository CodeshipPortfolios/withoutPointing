import HeadWithoutScroll from '../components/headWithoutScroll';
import Content from '../components/content';

import FontAwesomeIcon    from '@fortawesome/react-fontawesome'
import faAngleDoubleUp    from '@fortawesome/fontawesome-free-solid/faAngleDoubleUp'
import faAngleDoubleDown  from '@fortawesome/fontawesome-free-solid/faAngleDoubleDown'
import faAngleDoubleLeft  from '@fortawesome/fontawesome-free-solid/faAngleDoubleLeft'
import faAngleDoubleRight from '@fortawesome/fontawesome-free-solid/faAngleDoubleRight'
import faAddressBook      from '@fortawesome/fontawesome-free-solid/faAddressBook';
import faUser             from '@fortawesome/fontawesome-free-solid/faUser';
import faInfoCircle       from '@fortawesome/fontawesome-free-solid/faInfoCircle';
import faHome             from '@fortawesome/fontawesome-free-solid/faHome';

export default () => (
    <React.Fragment>
        <HeadWithoutScroll title="about"/>
        <Content
            up={{
                link: '/contact',
                section: (
                    <React.Fragment>
                        <FontAwesomeIcon icon={faAngleDoubleUp} />
                        <FontAwesomeIcon icon={faAddressBook} />
                    </React.Fragment>
                )
            }}
            down={{
                link: '/portfolio',
                section: (
                    <React.Fragment>
                        <FontAwesomeIcon icon={faAngleDoubleDown} />
                        <FontAwesomeIcon icon={faUser} />
                    </React.Fragment>
                )
            }}
            left={{
                link: '/about',
                section: (
                    <React.Fragment>
                        <FontAwesomeIcon icon={faAngleDoubleLeft} />
                        <FontAwesomeIcon icon={faInfoCircle} />
                    </React.Fragment>
                )
            }}
            right={{
                link: '/contact',
                section: (
                    <React.Fragment>
                        <FontAwesomeIcon icon={faAngleDoubleRight} />
                        <FontAwesomeIcon icon={faHome} />
                    </React.Fragment>
                )
            }}
            >
            <h1>About</h1>
            <p>Hi, here is "about" page.</p>
        </Content>
    </React.Fragment>
);