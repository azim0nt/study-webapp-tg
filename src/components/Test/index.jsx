import './style.scss'
import { useContext } from 'react';
import { context } from '../../store';
function Test() {
    const { store } = useContext(context);
    function openLinkFn(link){
        const option = {
            target:'_blank'
        }
        store.tg.openLink(link, option);
    }
    return (
        <>
            <div className="test-wrapper">
                <div className="test-content">
                    <h1>This is Test</h1>
                    <button onClick={openLinkFn} className='link-btn' href="https://youtu.be/dQw4w9WgXcQ?si=oH-CndaIq-3l8si3">Free Money</button>
                    <button>Test Button</button>
                </div>
            </div>
        </>
    );
}

export default Test;