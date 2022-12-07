const courseWrap = document.getElementById('course-contents') // 전체 슬라이드 컨테이너
const courseContents = document.querySelectorAll('#course-contents .course') // 모든 슬라이드들
const courseSliderBtn = document.querySelectorAll('#course-slider-btn li') // 모든 슬라이드 버튼


const coursePrev = courseSliderBtn[0]; // 슬라이드 왼쪽 버튼
const courseNext = courseSliderBtn[1]; // 슬라이드 오른쪽 버튼

let courseIndex = 0; // 현재 슬라이드 index
const courseCount = courseContents.length; // 슬라이드 개수

const courseWidth = 400; // 한개의 슬라이드 넓이
const courseMargin = 50; // 슬라이드간의 margin 값

//전체 슬라이드 컨테이너 넓이 설정
courseWrap.style.width = (courseWidth + courseMargin) * courseCount + 'px';

courseContents[0].classList.add('on-course')

const moveCourseSlide = (num) => {
  courseWrap.style.left = -num * (courseWidth + courseMargin) + 'px';
  courseIndex = num ;
  courseContents.forEach((item, index) => {
    if(index === courseIndex) {
      item.classList.add('on-course')
    }else{
      item.classList.remove('on-course')
    }
  })
}

coursePrev.addEventListener('click', () => {
  if (courseIndex !== 0) {
    moveCourseSlide(courseIndex - 1);
  }
})

courseNext.addEventListener('click', () => {
  if (courseIndex !== courseCount - 1) {
    moveCourseSlide(courseIndex + 1);
  }
})