// Partendo dal markup della versione svolta in js plain,
// rifare lo slider ma questa volta usando Vue.
// Bonus:
// 1- al click su una thumb, visualizzare in grande l'immagine corrispondente

Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            activeSlide: 0,
            sliders: [
                {
                    image: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
                },
                {
                    image: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum'
                },
                {
                    image: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    image: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam'
                },
                {
                    image: 'img/05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam'
                }
            ],
            timeSlideChange: 0,
            timeSlideChange: null
        },
        methods: {
            nextSlide: function() {
                if ( this.activeSlide < this.sliders.length - 1 ) {
                    this.activeSlide++;
                } else {
                    this.activeSlide = 0;
                }
            },
            previousSlide: function() {
                if ( this.activeSlide > 0 ) {
                    this.activeSlide--;
                } else {
                    this.activeSlide = this.sliders.length - 1;
                }
            },
            thisSlide: function(clickThisSlide) {
                this.activeSlide = clickThisSlide;
            }
        }
    }
);