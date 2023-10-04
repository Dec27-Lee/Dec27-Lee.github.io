/*
 * @Description: 即刻短文首页滚动
 * @LastEditors: 他们叫我跃总 Dec27-Lee
 * @Date: 2023-10-01 13:37:12
 * @LastEditTime: 2023-10-04 16:59:30
 * @FilePath: \Dec27-Lee.github.iof:\Develop_F\Blog\source\config\js\bbtime.js
 */
if (document.querySelector('#bber-talk')) {
    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        loop: true,
        autoplay: {
            delay: 3000,
            pauseOnMouseEnter: true
        },
    });
}