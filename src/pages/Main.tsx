import React from 'react';
import { blogUrl, bojUrl, codeforcesUrl, cvUrl, emailFront, emailDomain, githubUrl, profileImageUrl } from 'etc/consts';
import Header from './Header';

function Main() {
    return (
        <>
            <div className='background' />
            <img src={profileImageUrl} className='profileImage' />
            <div className='title center'>
                Junwon Kim
            </div>
            <div className='subtitle center'>
                In the site, you can either...
            </div>
            <div className='buttonContainer'>
                <button onClick={() => window.location.href = 'mailto:' + emailFront + '@' + emailDomain }>
                    Mail me
                </button>
                <button onClick={() => window.location.href = cvUrl }>
                    Take a look at my CV
                </button>
                <button onClick={() => window.location.href = blogUrl }>
                    Visit my blog
                </button>
                <button onClick={() => window.location.href = githubUrl }>
                    Visit my Github profile
                </button>
                <button onClick={() => window.location.href = bojUrl }>
                    Visit my Baekjoon Online Judge profile
                </button>
                <button onClick={() => window.location.href = codeforcesUrl }>
                    Visit my Codeforces profile
                </button>
            </div>
        </>
    );
}

export default Main;