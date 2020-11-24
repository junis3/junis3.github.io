import React from 'react';
import { blogUrl, bojUrl, codeforcesUrl, cvUrl, githubUrl, profileImageUrl } from 'etc/consts';
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
                <button onClick={() => window.location.href = cvUrl }>
                    CV
                </button>
                <button onClick={() => window.location.href = blogUrl }>
                    Blog
                </button>
                <button onClick={() => window.location.href = githubUrl }>
                    Github
                </button>
                <button onClick={() => window.location.href = bojUrl }>
                    Baekjoon Online Judge
                </button>
                <button onClick={() => window.location.href = codeforcesUrl }>
                    Codeforces
                </button>
            </div>
        </>
    );
}

export default Main;