document.addEventListener("DOMContentLoaded", () => {
    /* ===================== Close Header Top./start ===================== */
    // C1: Dung addEventListener("DOMContentLoaded"), () => {};
    const removeTopBar = () => {
        const closeTop = document.querySelector(`.close-top-header`);
        const topHeader = document.querySelector(`.top-header`);


        closeTop.addEventListener('click', () => {
            // topHeader.style.display = "none";
            topHeader.remove();
        });
    };
    removeTopBar();
    // C2: Dung onload
    // window.onload = () => {
    //     const TopHeader = document.querySelector(`.top-header`);
    //     const closeTopHeader = document.querySelector(`.close-top-header`);

    //     closeTopHeader.addEventListener('click', () => {
    //         TopHeader.style.display = "none";
    //     });
    // }


    // Tabs Menu main./start
    const tabsMenuMain = () => {
        const btnMenu = document.querySelectorAll(".button-menu button");
        const menunMain = document.querySelectorAll(".menu-main");


        btnMenu.forEach((button, index) => {
            button.addEventListener("click", () => {
                // xoa het tat ca active (button & menu)
                btnMenu.forEach((item) => {
                    item.classList.remove('active');
                });
                //  Xoa het class active o main-menu hien tai
                menunMain.forEach((item) => {
                    item.classList.remove('active');
                })

                // Them active vao ki bam button
                button.classList.add("active");
                // them active vao menu voi gia tri button da bam
                menunMain[index].classList.add('active');

            })
        });

    };
    tabsMenuMain();


    // Tabs Hot Deals./start
    const tabsHotDeals = () => {
        const btnHotDeal = document.querySelectorAll(".wrap-button button");
        const tabsHotDeal = document.querySelectorAll(".content-tabs");

        btnHotDeal.forEach((button, index) => {
            button.addEventListener("click", () => {
                // Xoa class active cua button
                btnHotDeal.forEach((item) => {
                    item.classList.remove('active');
                })
                // Xoas class active cua content-tabs
                tabsHotDeal.forEach((item) => {
                    item.classList.remove('active');
                })

                button.classList.add("active");
                tabsHotDeal[index].classList.add("active");
            })
        });
    };
    tabsHotDeals();


    // countDown fn./start
    const countDown = () => {
        // Ngay het truong tinh so voi 1/1/1970
        let countDownDate = new Date("Aug 12, 2024 16:43:25").getTime();
        // console.log(countDownDate); // 1/1/1970

        let timerFn = setInterval(() => {
            // Ngay hien taij cua minh so voi 1-1-1970
            let now = new Date().getTime();

            // Khoang thoi gia tu ngay chuong trinh dien ra toi ngay hien tai cua minh
            let distance = countDownDate - now;


            // Cong thuc tinh Ngay thang nam va phut con lai
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);


            // hien thi no ra ben ngoai
            document.querySelector(".hours").innerHTML = hours;
            document.querySelector(".minutes").innerHTML = minutes;
            document.querySelector(".seconds").innerHTML = seconds;


            // Het thoi gian

            if (distance < 0) {
                clearInterval(timerFn);
              }
        }, 1000);
    }
    countDown();


});







