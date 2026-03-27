
document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.vertic_item');
    const preview = document.querySelector('.prew_inner');
    const textContainer = document.getElementById('textContainer');

    // Данные для всех проектов
    const projectsData = {
        1: {
            title: "Иллюстрирование книги «Око мира»",
            tags: ["Иллюстрации", "web"],
            desc: "Создание иллюстраций и&nbsp;анимации к&nbsp;веб-книге Роберта Джордана. Проект включает проработку дизайна персонажей, разработку интерфейса и&nbsp;стилизованного названия. Масштабный мультимедийный проект в&nbsp;стилистике высокого фэнтези.",
            year: "2026",
            link: "oko.html",
            image: "assets/images/index/mo.png"
        },
        2: {
            title: "Визуализация <br> action-игры",
            tags: ["Игры", "Коннцепт-арт", "3D"],
            desc: "Визуализация в&nbsp;3D,&nbsp;расказывающая о&nbsp;фэнтезийном мире, где&nbsp;задолго до&nbsp;событий игры люди столкнулись с неведомой силой&nbsp;–&nbsp;порчей. Людям пришлось приспособились к&nbsp;жизни на&nbsp;летающих островах. Чтобы сохранить сообщение между землями они&nbsp;провели между ними канаты. Так&nbsp;появился особый класс людей&nbsp;–&nbsp;канатоходцы.",
            year: "2025",
            link: "game.html",
            image: "assets/images/index/re.png"
        },
        3: {
            title: "Создание обложки <br> для книги «Сюр»",
            tags: ["Иллюстрирование", "Печать"],
            desc: "Создание обложки для&nbsp;книги-триллера в&nbsp;сотрудничестве с автором произведения Анастасией Марковой и&nbsp;издательством «Мир детства». Отражение полного цикла производства от&nbsp;эскиза до&nbsp;допечатной подготовки.",
            year: "2025",
            link: "book.html",
            image: "assets/images/index/mouth.png"
        },
        4: {
            title: "Концепт-арт персонажей",
            tags: ["Концепт-арт"],
            desc: "Создать персонажей, которые живут антиутопичном мире будущего, переживающего губительную болезньи действующий по&nbsp;новым правилам. В&nbsp;мире,где&nbsp;временное лекарство использую вместо денег, каждый выживает как&nbsp;может.",
            year: "2024",
            link: "pers.html",
            image: "assets/images/index/ro.png"
        },
        5: {
            title: "Оформление <br> выставки Geely",
            tags: ["Иллюстрации", "Фирменный стиль"],
            desc: "Работа на&nbsp;проектом, меняющем привычное представление о&nbsp;бренде. Для&nbsp;всех автомобили связаны сo&nbsp;скоростью, дорогой, спешкой. Концепция выставки состоит в&nbsp;том,&nbsp;чтобы доказать людям, что&nbsp;машины Geely могут быть не&nbsp;только скоростными и&nbsp;комфортными средствами передвижения, но&nbsp;и&nbsp;проводниками в&nbsp;самые счастливые моменты человека.",
            year: "2024",
            link: "geely.html",
            image: "assets/images/index/ge.png"
        }
    };

    // Функция для обновления текстового контента
    function updateTextContent(data) {
        if (!textContainer) return;
        
        // Анимация выхода
        textContainer.classList.add('fade-out');
        
        setTimeout(() => {
            // Обновляем контент
            textContainer.innerHTML = `
                <h3>${data.title}</h3>
                <div class="tags">
                    ${data.tags.map(tag => `<div class="p_tags">${tag}</div>`).join('')}
                </div>
                <div class="desc">
                    <p>${data.desc}</p>
                </div>
                <div class="line_p"></div>
                <div class="year">${data.year}</div>
                <div class="pereyty">
                    <p style="font-size: 20px; font-family: 'CommissionerME'">ПЕРЕЙТИ</p>
                    <a href="${data.link}">
                        <div class="round right">
                            <svg width="36" height="23" viewBox="0 0 36 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M34.9068 12.1066C35.4926 11.5208 35.4926 10.571 34.9068 9.98524L25.3609 0.439297C24.7751 -0.14649 23.8253 -0.14649 23.2396 0.439297C22.6538 1.02508 22.6538 1.97483 23.2396 2.56062L31.7248 11.0459L23.2396 19.5312C22.6538 20.117 22.6538 21.0667 23.2396 21.6525C23.8253 22.2383 24.7751 22.2383 25.3609 21.6525L34.9068 12.1066ZM0 11.0459L-2.68527e-08 12.5459L33.8462 12.5459L33.8462 11.0459L33.8462 9.5459L2.68527e-08 9.5459L0 11.0459Z" fill="black"/>
                            </svg>                       
                        </div>
                    </a>
                </div>
            `;
            
            // Анимация входа
            textContainer.classList.remove('fade-out');
            textContainer.classList.add('fade-in');
            
            // Убираем класс анимации после завершения
            setTimeout(() => {
                textContainer.classList.remove('fade-in');
            }, 700);
        }, 300); // Время анимации выхода
    }

    // Функция для обновления изображения
    function updateImage(imageSrc) {
        if (!preview) return;
        
        const current = preview.querySelector('img.active');
        
        // Создаем новую картинку
        const next = document.createElement('img');
        next.src = imageSrc;
        next.classList.add('next');
        
        preview.appendChild(next);
        
        // Запускаем анимацию
        requestAnimationFrame(() => {
            next.classList.add('active');
            next.classList.remove('next');
            
            if (current) {
                current.classList.add('out');
                current.classList.remove('active');
            }
        });
        
        // Удаляем старую картинку после анимации
        setTimeout(() => {
            if (current && current.parentNode) {
                current.remove();
            }
        }, 500);
    }

    // Обработчик кликов (один обработчик для всех)
    items.forEach(item => {
        item.addEventListener('click', () => {
            // Убираем активный класс у всех элементов
            items.forEach(i => i.classList.remove('active'));
            // Добавляем активный класс текущему
            item.classList.add('active');
            
            // Получаем ID проекта
            const id = item.dataset.project;
            const data = projectsData[id];
            
            if (data) {
                // Обновляем текст с анимацией
                updateTextContent(data);
                // Обновляем изображение
                updateImage(data.image);
            } else {
                console.error(`Проект с ID ${id} не найден`);
            }
        });
    });
});



/*Анимации выезда */

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);

  let NumSkills = document.querySelectorAll('.skills_numbers');
  for (let elm of NumSkills) {
    observer.observe(elm);
  }

  let TextMe = document.querySelectorAll('.text_me');
  for (let elm of TextMe) {
      observer.observe(elm);
  }

  let imageElements = document.querySelectorAll('.image_pieces');
  for (let elm of imageElements) {
      observer.observe(elm);
  }

  let coverElements = document.querySelectorAll('.expirience_image');
  for (let elm of coverElements) {
      observer.observe(elm);
  }

  let expTextElements = document.querySelectorAll('.expirience_text');
  for (let elm of expTextElements) {
      observer.observe(elm);
  }

  /*Анимации выезда конец */





const horScrollContainer = document.querySelector('.hor_scroll');

if (horScrollContainer) {
    let velocity = 0;
    let isAnimating = false;
    let edgeScrollCount = 0;

    const FRICTION = 0.92;     // трение (0.9–0.98)
    const FORCE = 0.08;        // сила прокрутки
    const EDGE_THRESHOLD = 6;  // “дожатие” в тупике

    function animate() {
        if (Math.abs(velocity) < 0.1) {
            velocity = 0;
            isAnimating = false;
            return;
        }

        horScrollContainer.scrollLeft += velocity;
        velocity *= FRICTION;

        requestAnimationFrame(animate);
    }

    horScrollContainer.addEventListener('wheel', (e) => {
        const scrollLeft = horScrollContainer.scrollLeft;
        const maxScrollLeft = horScrollContainer.scrollWidth - horScrollContainer.clientWidth;

        const isRight = e.deltaY > 0;
        const isLeft = e.deltaY < 0;

        const atStart = scrollLeft <= 0;
        const atEnd = scrollLeft >= maxScrollLeft;

        const inDeadEnd =
            (isRight && atEnd) ||
            (isLeft && atStart);

        if (!inDeadEnd) {
            edgeScrollCount = 0;

            e.preventDefault();

            // 👉 добавляем "силу" к скорости
            velocity += e.deltaY * FORCE;

            // ограничим скорость (чтобы не улетало)
            velocity = Math.max(Math.min(velocity, 40), -40);

            if (!isAnimating) {
                isAnimating = true;
                requestAnimationFrame(animate);
            }
        } else {
            edgeScrollCount++;

            if (edgeScrollCount < EDGE_THRESHOLD) {
                e.preventDefault();
            }
            // дальше — даём странице скроллиться
        }
    }, { passive: false });
}



// Для вашего .vertic контейнера
const vertScrollContainer = document.querySelector('.vertic');

if (vertScrollContainer) {
    let velocity = 0;
    let isAnimating = false;
    let edgeScrollCount = 0;

    const FRICTION = 0.92;
    const FORCE = 0.08;
    const EDGE_THRESHOLD = 6;

    function animate() {
        if (Math.abs(velocity) < 0.1) {
            velocity = 0;
            isAnimating = false;
            return;
        }

        vertScrollContainer.scrollTop += velocity;
        velocity *= FRICTION;

        requestAnimationFrame(animate);
    }

    vertScrollContainer.addEventListener('wheel', (e) => {
        const scrollTop = vertScrollContainer.scrollTop;
        const maxScrollTop = vertScrollContainer.scrollHeight - vertScrollContainer.clientHeight;

        const isDown = e.deltaY > 0;
        const isUp = e.deltaY < 0;

        const atStart = scrollTop <= 0;
        const atEnd = scrollTop >= maxScrollTop;

        const inDeadEnd = (isDown && atEnd) || (isUp && atStart);

        if (!inDeadEnd) {
            edgeScrollCount = 0;
            e.preventDefault();

            velocity += e.deltaY * FORCE;
            velocity = Math.max(Math.min(velocity, 40), -40);

            if (!isAnimating) {
                isAnimating = true;
                requestAnimationFrame(animate);
            }
        } else {
            edgeScrollCount++;
            if (edgeScrollCount < EDGE_THRESHOLD) {
                e.preventDefault();
            }
        }
    }, { passive: false });
}


/*Анимации прокуртки до момента*/
// Добавляем проверку на существование всех элементов
document.addEventListener('DOMContentLoaded', function() {
    
    // Функция для плавной прокрутки
    function smoothScroll(targetElement) {
        if (!targetElement) return;
        
        targetElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start', // или 'center', 'end'
            inline: 'nearest'
        });
    }
    
    // scroll_itog
    const scrollItog = document.getElementById('scroll_itog');
    if (scrollItog) {
        scrollItog.addEventListener('click', function(e) {
            e.preventDefault(); // Отключаем стандартное поведение
            const target = document.getElementById('scroll_itog_end');
            smoothScroll(target);
        });
    }
    
    // scroll_up
    const scrollUp = document.getElementById('scroll_up');
    if (scrollUp) {
        scrollUp.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.getElementById('scroll_up_end');
            smoothScroll(target);
        });
    }
    
    // scroll_about
    const scrollAbout = document.getElementById('scroll_about');
    if (scrollAbout) {
        scrollAbout.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.getElementById('end_scroll_about'); // Исправлено: другой id
            smoothScroll(target);
        });
    }
    
    // scroll_proj - ИСПРАВЛЕНО
    const scrollProj = document.getElementById('scroll_proj');
    if (scrollProj) {
        scrollProj.addEventListener('click', function(e) {
            e.preventDefault();
            // Цель должна быть с другим id, не таким же как ссылка
            const target = document.getElementById('end_scroll_proj');
            smoothScroll(target);
        });
    }
    
    // scroll_info
    const scrollInfo = document.getElementById('scroll_info');
    if (scrollInfo) {
        scrollInfo.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.getElementById('end_scroll_info');
            smoothScroll(target);
        });
    }
    
    // Модальное окно
    const myModal = document.getElementById('myModal');
    const myInput = document.getElementById('myInput');
    
    if (myModal && myInput) {
        myModal.addEventListener('shown.bs.modal', () => {
            myInput.focus();
        });
    }
});
/*Анимации прокуртки до момента*/


/*СЛайдер*/

document.addEventListener('DOMContentLoaded', function() {
    // Слайдер 1
    const slider = document.getElementById('rangeSlider');
    const image = document.getElementById('sliderImage');
    
    if (slider && image) {
        const images = {
            1: 'assets/images/oko/shad_1.png',
            2: 'assets/images/oko/shad_2.png',
            3: 'assets/images/oko/shad_3.png',
            4: 'assets/images/oko/shad_4.png'
        };
        
        slider.addEventListener('input', () => {
            image.src = images[slider.value];
        });
    }
    
    // Слайдер 2
    const slider2 = document.getElementById('rangeSlider2');
    const image2 = document.getElementById('sliderImage2');
    
    if (slider2 && image2) {
        const images2 = {
            1: 'assets/images/book/monstr_1.png',
            2: 'assets/images/book/monstr_2.png',
            3: 'assets/images/book/monstr_3.png',
            4: 'assets/images/book/monstr_4.png'
        };
        
        slider2.addEventListener('input', () => {
            image2.src = images2[slider2.value];
            console.log('Слайдер2 изменился:', slider2.value); // Для отладки
        });
    } else {
        console.error('Слайдер2 или изображение не найдены!');
        console.log('slider2:', slider2);
        console.log('image2:', image2);
    }
});


/*КАРУСЕЛЬ*/

const ima = document.getElementById('karuselImage');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

const imag = [
    'assets/images/oko/kar_nay.png',
    'assets/images/oko/kar_per.png',
    'assets/images/oko/kar_vill.png'
];

let current = 0;

// вперёд
nextBtn.addEventListener('click', () => {
    current++;
    if (current >= imag.length) current = 0;

    ima.src = imag[current];
});

// назад
prevBtn.addEventListener('click', () => {
    current--;
    if (current < 0) current = imag.length - 1;

    ima.src = imag[current];
});