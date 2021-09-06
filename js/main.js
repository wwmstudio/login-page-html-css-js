let currentTheme = localStorage.getItem('selectedTheme') || 'light';
const themeData = {
    light: [
        {key: '--brand-color', value: '#983ac9'},
        {key: '--brand-color-light', value: '#c862ff'},
        {key: '--brand-color-dark', value: '#600094'},
        {key: '--bg-color', value: '#fff'},
        {key: '--text-color-primary', value: '#300018'},
        {key: '--text-color-secondary', value: '#fff'},
        {key: '--shadow-color', value: '#bbb'},
        {key: '--bg-img', value: 'url(../imgs/bg.svg)'}
    ],
    dark: [
        {key: '--brand-color', value: '#983ac9'},
        {key: '--brand-color-light', value: '#c862ff'},
        {key: '--brand-color-dark', value: '#600094'},
        {key: '--bg-color', value: '#352b3a'},
        {key: '--text-color-primary', value: '#fff'},
        {key: '--text-color-secondary', value: '#300018'},
        {key: '--shadow-color', value: '#262626'},
        {key: '--bg-img', value: 'url(../imgs/bg-dark.svg)'}
    ]
};

function gotoRegisterPage () {
    const cardComponent = document.getElementById('cardComponent');
    cardComponent.classList.add('register-mode');
}

function gotoLoginPage () {
    const cardComponent = document.getElementById('cardComponent');
    cardComponent.classList.remove('register-mode');
}

function changeTheme () {
    const root = document.documentElement;
    themeData[currentTheme].forEach(item => {
        root.style.setProperty(item.key, item.value);
    });
}

function toggleTheme () {
    const themeButton = document.getElementById('themeButton');
    if(currentTheme === 'light') {
        currentTheme = 'dark';
        themeButton.classList.add('dark-mode');
    } else {
        currentTheme = 'light';
        themeButton.classList.remove('dark-mode');
    }
    localStorage.setItem('selectedTheme', currentTheme);
    changeTheme();
}

changeTheme();