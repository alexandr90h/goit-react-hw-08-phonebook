import {
  FaJsSquare,
  FaCss3Alt,
  FaReact,
  FaGithubSquare,
  FaHtml5,
  FaSass,
} from 'react-icons/fa';
import { BsFillBootstrapFill } from 'react-icons/bs';
import { SiRedux } from 'react-icons/si';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function Home() {
  return (
    <>
      <h1 className="titel-home">Phonebook application</h1>
      <p className="us-app">Used in the application:</p>
      <ul className="list-dev-icon">
        <li>
          <OverlayTrigger placement="right" overlay={<Tooltip>HTML 5</Tooltip>}>
            <FaHtml5 />
          </OverlayTrigger>
        </li>
        <li>
          <OverlayTrigger placement="right" overlay={<Tooltip>CSS 3</Tooltip>}>
            <FaCss3Alt />
          </OverlayTrigger>
        </li>
        <li>
          <OverlayTrigger
            placement="right"
            overlay={<Tooltip>Java Script</Tooltip>}
          >
            <FaJsSquare />
          </OverlayTrigger>
        </li>
        <li>
          <OverlayTrigger placement="right" overlay={<Tooltip>React</Tooltip>}>
            <FaReact />
          </OverlayTrigger>
        </li>
        <li>
          <OverlayTrigger placement="right" overlay={<Tooltip>Sass</Tooltip>}>
            <FaSass />
          </OverlayTrigger>
        </li>
        <li>
          <OverlayTrigger
            placement="right"
            overlay={<Tooltip>Bootstrap</Tooltip>}
          >
            <BsFillBootstrapFill />
          </OverlayTrigger>
        </li>
        <li>
          <OverlayTrigger placement="right" overlay={<Tooltip>Github</Tooltip>}>
            <FaGithubSquare />
          </OverlayTrigger>
        </li>
        <li>
          <OverlayTrigger placement="right" overlay={<Tooltip>Redux</Tooltip>}>
            <SiRedux />
          </OverlayTrigger>
        </li>
      </ul>
    </>
  );
}
