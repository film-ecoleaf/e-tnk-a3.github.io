import Highway from '@dogstudio/highway';
import Fade from './transition';
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from 'constants';

const H = new Highway.Core({
    transitions: {
        default: Fade
    }
});
