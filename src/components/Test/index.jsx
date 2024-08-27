import './style.scss'
import { useContext, useEffect } from 'react';
import { context } from '../../store';
function Test() {
    const { store, setStore } = useContext(context);
    function openLinkFn(link) {
        const option = {
            target: '_blank'
        }
        store.tg.openLink(link, option);
    }
    function showMainBtnFn(str) {
        store.tg.MainButton.show()
        store.tg.MainButton.setText(str)

    }
    function getUserData() {
        const user = store.tg.initDataUnsafe.user
        if (user) {
            const userData = {
                id: user.id,
                firstname: user.first_name,
                lastnme: user.last_name || '',
                username: user.username || '',
                language: user.language_code || '',
                premium: user.is_premium || false,
                photo: user.photo_url || ''
            }
            setStore({type:'setUser', user:userData})
        }
    }
    useEffect(()=>{
        getUserData()
    },[store])
    // console.log(store.user)
    store.tg.onEvent('mainButtonClicked', () => { store.tg.close() })
    return (
        <>
            <div className="test-wrapper">
                <div className="test-content">
                    <h1>Hello {store.user.username}</h1>
                    <button onClick={() => { openLinkFn('https://youtu.be/dQw4w9WgXcQ?si=oH-CndaIq-3l8si3') }} className='link-btn' href="https://youtu.be/dQw4w9WgXcQ?si=oH-CndaIq-3l8si3">Free Money</button>
                    <button>Test Button</button>
                    <h1>нурик гей </h1>
                    <button onClick={() => { showMainBtnFn('close') }}>Show close button</button>
                </div>
            </div>
        </>
    );
}

export default Test;