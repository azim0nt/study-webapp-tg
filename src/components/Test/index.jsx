import './style.scss'
import { useContext } from 'react';
import { context } from '../../store';
function Test() {
    const { store } = useContext(context);
    function openLinkFn(link) {
        const option = {
            target: '_blank'
        }
        store.tg.openLink(link, option);
    }
    function showMainBtnFn(str){
        store.tg.MainButton.show()
        store.tg.MainButton.setText(str)
        
    }
    store.tg.onEvent('mainButtonClicked', ()=>{store.tg.close()})
    return (
        <>
            <div className="test-wrapper">
                <div className="test-content">
                    <h1>This is Test</h1>
                    <button onClick={() => { openLinkFn('https://youtu.be/dQw4w9WgXcQ?si=oH-CndaIq-3l8si3') }} className='link-btn' href="https://youtu.be/dQw4w9WgXcQ?si=oH-CndaIq-3l8si3">Free Money</button>
                    <button>Test Button</button>
                    <button onClick={()=>{showMainBtnFn('close')}}>Show close button</button>
                </div>
            </div>
        </>
    );
}

export default Test;