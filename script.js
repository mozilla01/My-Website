'use strict';
const themeToggle = document.getElementById('themeToggle');

// #FIXME
window.addEventListener('load', function(){
    if(!this.localStorage.getItem('theme')){
        this.localStorage.setItem('theme', 'light');
    }
    if(themeToggle.textContent == '🔆'){
        this.localStorage.setItem('theme', 'dark');
    }
    else{
        this.localStorage.setItem('theme', 'light');
    }

        

        if(this.localStorage.getItem('theme') === 'dark'){
                themeToggle.textContent = '🔆';
        }
        else{
                themeToggle.textContent = '🌙';
        }

        themeToggle.addEventListener('click', function(){
            if(localStorage.getItem('theme') === 'light'){
                localStorage.setItem('theme', 'dark');
                themeToggle.textContent = '🔆';
                document.getElementById('1').style.backgroundColor = '#000000';
                document.getElementById('2').style.backgroundColor = '#000000';
                document.getElementById('logo').style.backgroundColor = '#ffffff';
                document.getElementById('logo').style.color = '#000000';
                document.getElementById('resume').style.color = '#ffffff';
                document.getElementById('github').style.color = '#ffffff';
                document.getElementById('resumelink').style.backgroundColor = '#ffffff';
                document.getElementById('resumelink').style.color = '#000000';
                document.getElementById('themeToggle').style.backgroundColor = '#ffffff';
                document.getElementById('navig').style.backgroundColor = ' rgba(0, 0, 0, 0.8)';
            }
            else{
                localStorage.setItem('theme','light');
                themeToggle.textContent = '🌙';
                document.getElementById('1').style.backgroundColor = '#ffe4c4';
                document.getElementById('2').style.backgroundColor = '#ffe4c4';
                document.getElementById('logo').style.backgroundColor = '#000000';
                document.getElementById('logo').style.color = '#ffffff';
                document.getElementById('resume').style.color = '#000000';
                document.getElementById('github').style.color = '#000000';
                document.getElementById('resumelink').style.backgroundColor = '#000000';
                document.getElementById('resumelink').style.color = '#ffffff';
                document.getElementById('themeToggle').style.backgroundColor = '#000000';
                document.getElementById('navig').style.backgroundColor = ' rgba(255, 255, 255, 0.8)';
            }
        
            document.body.classList.toggle('dark');
        });
    });

