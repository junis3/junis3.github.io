import React from 'react';
import { profileImageUrl } from 'etc/consts';
import Header from './Header';

function Main() {
    return (
        <>
            <img src={profileImageUrl} className='profileImage' />
            <div className='title center'>
                김준원
            </div>
            <div className='subtitle center'>
                서울대학교 자유전공학부
            </div>
            <div className='link center'>
                <a href='https://junie.s3.ap-northeast-2.amazonaws.com/CV.pdf'>
                    CV
                </a>
            </div>
            <div className='link center'>
                <a href='https://blog.junie.land'>
                    Blog
                </a>
            </div>
            <div className='link center'>
                <a href='https://github.com/junis3'>
                    Github
                </a>
            </div>
            <div className='link center'>
                <a href='https://www.acmicpc.net/user/junie'>
                    Baekjoon Online Judge
                </a>
            </div>
            <div className='link center'>
                <a href='https://codeforces.com/profile/junie'>
                    Codeforces
                </a>
            </div>
        </>
    );
}

export default Main;