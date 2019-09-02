import Nav from '../components/nav';
import head from 'next/head';
// JSX : JavaScript + XML
// <Nav></Nav> -> <Nav/>로 표기. XML 규칙
export default () => (
    <div>

        <Nav/>  
        <h1>Second Page</h1>

        <button className="btn btn-primary">Button</button>
    </div>
);
// http://localhost:3000/second