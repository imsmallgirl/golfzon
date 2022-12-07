// 1. 오른쪽 버튼을 클릭하면 , 2번 슬라이더가 나오면서 1번 슬라이더는 사라짐.
// 2. 왼쪽 버튼을 클릭하면 , 지금 있던 슬라이더가 사라지고, 이전 슬라이더 나옴.

let bannerIndex = 0;
const bannerBtns = document.querySelectorAll('#ban_btns li')

const bannerLeftBtn = bannerBtns[0];
const bannerRightBtn = bannerBtns[1];

const bannerContents = document.querySelectorAll('#ban_contents .ban')

const bannerContent1 = bannerContents[0];
const bannerContent2 = bannerContents[1];



const bannerRender = () => {
    if(bannerIndex === 0) {
        bannerContent1.classList.remove('active')
        bannerContent2.classList.add('active')
    }else{
        bannerContent2.classList.remove('active')
        bannerContent1.classList.add('active')
    }
}

const bannerPrevHandler = () => {
    bannerIndex -= 1
    if(bannerIndex === -1) {
        bannerIndex = 1;
    }
    bannerRender();
}

const bannerNextHandler = () => {
    bannerIndex += 1
    if(bannerIndex >= 2) {
        bannerIndex = 0;
    }
    bannerRender();
}



bannerLeftBtn.addEventListener('click' , bannerPrevHandler);
bannerRightBtn.addEventListener('click' , bannerNextHandler);