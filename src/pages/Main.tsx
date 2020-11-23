import React from 'react';
import { profileImageUrl } from 'etc/consts';
import Header from './Header';

function Main() {
    return (
        <>
            <div className='background' />
            <img src={profileImageUrl} className='profileImage' />
            <div className='title center'>
                김준원
            </div>
            <div className='subtitle center'>
                서울대학교 자유전공학부
            </div>
            <div className='buttonContainer'>
                <button onClick={() => window.location.href = 'https://junie.s3.ap-northeast-2.amazonaws.com/CV.pdf' }>
                    CV
                </button>
                <button onClick={() => window.location.href = 'https://blog.junie.land' }>
                    Blog
                </button>
                <button onClick={() => window.location.href = 'https://github.com/junis3' }>
                    Github
                </button>
                <button onClick={() => window.location.href = 'https://www.acmicpc.net/user/junie' }>
                    Baekjoon Online Judge
                </button>
                <button onClick={() => window.location.href = 'https://codeforces.com/profile/junie' }>
                    Codeforces
                </button>
            </div>
        </>
    );
}

export default Main;