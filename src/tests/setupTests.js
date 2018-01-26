import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DotEnv from 'dotenv';

DotEnv.config({
    path : '.env.test'
});

enzyme.configure({
    adapter : new Adapter()
});