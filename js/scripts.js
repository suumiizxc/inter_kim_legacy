/* Template: Aria - Business HTML Landing Page Template
   Author: Inovatik
   Created: Jul 2019
   Description: Custom JS file
*/


(function ($) {
    "use strict";


    const news = [
        {
            img: "news1.jpeg",
            title: "Хувьцаа эзэмшигчдийн ээлжит хурал хуралдлаа",
            desc:
                "“МИК Холдинг” ХК-ийн Төлөөлөн удирдах зөвлөлийн 2022 оны 03 дугаар сарын 18-ны өдрийн 22/0...",
            date: "2022-04-29",
            link: "https://mik.mn/mn/m299/news1297"
        },
        {
            img: "news2.jpeg",
            title: "“МИК ХОЛДИНГ” ХК-ийн хувьцаа эзэмшигчдийн ээлжит хурлын зар",
            desc:
                "Монголын эдийн засгийн форумын дэд хэлэлцүүлэг “Ногоон хөгжлийн сэргэлт” сэдвээр үргэлжилж...",
            date: "2021-03-23",
            link: "https://mik.mn/mn/m299/news1273"
        },
        {
            img: "news2.jpeg",
            title: "Төлөөлөн удирдах зөвлөлийн тогтоол",
            desc:
                "“МИК Холдинг” ХК-ийн Төлөөлөн удирдах зөвлөлийн 2022 оны 3 дугаар сарын 18-ны өдрийн 21/09...",
            date: "2021-03-21",
            link: "https://mik.mn/mn/m299/news1272"
        },
        {
            img: "news4.jpeg",
            title: "Хувьцаа эзэмшигчдийн ээлжит хурал хуралдлаа",
            desc:
                "“МИК Холдинг” ХК-ийн Төлөөлөн удирдах зөвлөлийн 2021 оны 03 дугаар сарын 19-ний өдрийн 21/...",
            date: "2021-04-29",
            link: "https://mik.mn/mn/m299/news1166"
        },
        {
            img: "news2.jpeg",
            title:
                "Хувьцаа эзэмшигчдийн ээлжит хуралд бүртгүүлэх болон оролцож, санал өгөх заавар",
            desc:
                "“МИК ХОЛДИНГ” ХК-ийн хувьцаа эзэмшигчдийн ээлжит хуралд бүртгүүлэх болон оролцож, санал ...",
            date: "2021-04-08",
            link: "https://mik.mn/mn/m299/news1162"
        },
        {
            img: "news1136.jpeg",
            title: "“МИК ХОЛДИНГ” ХК-ИЙН ХУВЬЦАА ЭЗЭМШИГЧДИЙН  ЭЭЛЖИТ ХУРЛЫН ЗАР....",
            desc: "“МИК ХОЛДИНГ” ХК-ИЙН ХУВЬЦАА ЭЗЭМШИГЧДИЙН ЭЭЛЖИТ ХУРЛЫН ЗАР...",
            date: "2021-03-24",
            link: "https://mik.mn/mn/m299/news1136"
        },
        {
            img: "news2.jpeg",
            title: "Төлөөлөн удирдах зөвлөлийн тогтоол",
            desc:
                "“МИК Холдинг” ХК-ийн Хувьцаа эзэмшигчдийн ээлжит хурлыг зохион байгуулж, хуралдуулах тухай...",
            date: "2021-03-22",
            link: "https://mik.mn/mn/m299/news1135"
        },

        //2020 start

        {
            img: "news2.jpeg",
            title: "ХУВЬЦАА ЭЗЭМШИГЧДИЙН ЭЭЛЖИТ ХУРАЛ ХУРАЛДЛАА",
            desc:
                "Хувьцаа эзэмшигчдийн ээлжит хурал 2020 оны 4 дүгээр сарын 30-ны өдөр  цахимаар шууд дамжуу...",
            date: "2020-04-30",
            link: "https://mik.mn/mn/m299/news1071"
        },
        {
            img: "news3.jpeg",
            title: "“МИК ХОЛДИНГ” ХК-ИЙН ХУВЬЦАА ЭЗЭМШИГЧДИЙН  ЭЭЛЖИТ ХУРЛЫН ЗАР...",
            desc: "“МИК ХОЛДИНГ” ХК-ИЙН ХУВЬЦАА ЭЗЭМШИГЧДИЙН ЭЭЛЖИТ ХУРЛЫН ЗАР...",
            date: "2020-04-09",
            link: "https://mik.mn/mn/m299/news1067"
        },
        {
            img: "news3.jpeg",
            title: "ХУВЬЦАА ЭЗЭМШИГЧДИЙН ЭЭЛЖИТ  ХУРАЛД ОРОЛЦОЖ, САНАЛ ӨГӨХ ЗААВАР...",
            desc: "ХУВЬЦАА ЭЗЭМШИГЧДИЙН ЭЭЛЖИТ  ХУРАЛД ОРОЛЦОЖ, САНАЛ ӨГӨХ ЗААВАР...",
            date: "2020-04-09",
            link: "https://mik.mn/mn/m299/news1066"
        },
        {
            img: "news3.jpeg",
            title: "Төлөөлөн удирдах зөвлөлийн тогтоол гарлаа",
            desc:
                "“МИК Холдинг” ХК-ийн Хувьцаа эзэмшигчдийн ээлжит хурлыг зохион байгуулж, хуралдуулах тухай...",
            date: "2020-03-20",
            link: "https://mik.mn/mn/m299/news1062"
        },

        {
            img: "news3.jpeg",
            title: "“МИК ХОЛДИНГ” ХК-ИЙН ХУВЬЦАА ЭЗЭМШИГЧДИЙН  ЭЭЛЖИТ ХУРЛЫН ЗАР...",
            desc: "“МИК ХОЛДИНГ” ХК-ИЙН ХУВЬЦАА ЭЗЭМШИГЧДИЙН ЭЭЛЖИТ ХУРЛЫН ЗАР...",
            date: "2020-03-24",
            link: "https://mik.mn/mn/m299/news1061"
        },

        {
            img: "news5.jpeg",
            title: "Хувьцаа эзэмшигчдийн ээлжит бус хурал хуралдлаа",
            desc:
                "“МИК Холдинг” ХК-ийн Төлөөлөн удирдах зөвлөлийн 2019 оны 10 дугаар сарын 30-ны өдрийн 19/2...",
            date: "2020-01-17",
            link: "https://mik.mn/mn/m299/news1048"
        },

        // 2019 start

        {
            img: "news3.jpeg",
            title: "“МИК ХОЛДИНГ” ХК-ИЙН ХУВЬЦАА ЭЗЭМШИГЧДИЙН ЭЭЛЖИТ БУС ХУРЛЫН ЗАР...",
            desc: "“МИК ХОЛДИНГ” ХК-ИЙН ХУВЬЦАА ЭЗЭМШИГЧДИЙН ЭЭЛЖИТ БУС ХУРЛЫН ЗАР...",
            date: "2019-11-04",
            link: "https://mik.mn/mn/m299/news1036"
        },

        {
            img: "news3.jpeg",
            title:
                "“МИК ХОЛДИНГ” ХК Хувьцаа эзэмшигчдийн ээлжит бус хурлыг хуралдуул...",
            desc:
                "2019 оны 10 дугаар сарын 30-ны өдрийн “МИК Холдинг” ХК-ийн Төлөөлөн удирдах зөвлөлийн 19/2...",
            date: "2019-10-31",
            link: "https://mik.mn/mn/m299/news1034"
        },
        {
            img: "news3.jpeg",
            title: "Хувьцаа эзэмшигчдийн ээлжит хурал боллоо",
            desc:
                "“МИК Холдинг” ХК-ийн 2019 оны 3 дугаар сарын 18-ны  өдрийн ТУЗ-ийн хурлын 19/08 тоот шийдв...",
            date: "2019-04-09",
            link: "https://mik.mn/mn/m299/news985"
        },
        {
            img: "news3.jpeg",
            title: "“МИК ХОЛДИНГ” ХК-ИЙН ХУВЬЦАА ЭЗЭМШИГЧДИЙН ЭЭЛЖИТ  ХУРЛЫН ЗАР....",
            desc: "“МИК ХОЛДИНГ” ХК-ИЙН ХУВЬЦАА ЭЗЭМШИГЧДИЙН ЭЭЛЖИТ  ХУРЛЫН ЗАР....",
            date: "2019-03-22",
            link: "https://mik.mn/mn/m299/news973"
        },
        {
            img: "news3.jpeg",
            title: "Төлөөлөн удирдах зөвлөлийн тогтоол гарлаа",
            desc:
                "“МИК Холдинг” ХК-ийн Хувьцаа эзэмшигчдийн ээлжит хурлыг зохион байгуулж, хуралдуулах тухай...",
            date: "2019-03-20",
            link: "https://mik.mn/mn/m299/news972"
        },

        // 2018 start

        {
            img: "news912.jpeg",
            title: "Хувьцаа эзэмшигчдийн ээлжит хурал боллоо",
            desc:
                "“МИК Холдинг” ХК-ийн 2018 оны 3 дугаар сарын 19-ний өдрийн ТУЗ-ийн хурлын 18/17 тоот шийдв...",
            date: "2018-04-30",
            link: "https://mik.mn/mn/m299/news912"
        },

        // 2017 start

        {
            img: "news2.jpeg",
            title: "Хувьцаа эзэмшигчдийн ээлжит хурал боллоо",
            desc: "“МИК Холдинг” ХК-ийн Хувьцаа эзэмшигчдийн ээлжит хурал боллоо...",
            date: "2017-04-28",
            link: "https://mik.mn/mn/m299/news786"
        },

        // 2016 start

        {
            img: "news690.jpeg",
            title: "Хувьцаа эзэмшигчдийн ээлжит хурал хуралдлаа",
            desc: "Хувьцаа эзэмшигчдийн ээлжит хурал хуралдлаа...",
            date: "2016-04-28",
            link: "https://mik.mn/mn/m299/news690"
        },
        {
            img: "news3.jpeg",
            title: "“МИК ХОЛДИНГ”ХК-ИЙН ХУВЬЦАА ЭЗЭМШИГЧДИЙН ЭЭЛЖИТ  ХУРЛЫН ЗАР",
            desc: "Компанийн нэр:  “МИК Холдинг” ХК...",
            date: "2016-03-21",
            link: "https://mik.mn/mn/m299/news674"
        },
        {
            img: "news3.jpeg",
            title: "ХУВЬЦАА ЭЗЭМШИГЧДИЙН ЭЭЛЖИТ БУС ХУРАЛ ХУРАЛДЛАА",
            desc:
                "“МИК Холдинг ХК”-ийн Төлөөлөн удирдах зөвлөлийн гишүүдийн бүрэлдэхүүнийг сонгох тухай Хувь...",
            date: "2016-03-21",
            link: "https://mik.mn/mn/m299/news658"
        }
    ];

    /* Preloader */
    $(window).on('load', function () {
        var preloaderFadeOutTime = 500;
        function hidePreloader() {
            var preloader = $('.spinner-wrapper');
            setTimeout(function () {
                preloader.fadeOut(preloaderFadeOutTime);
            }, 500);
        }
        hidePreloader();
        var iframe = document.getElementById('graph2');
        $("#reload-chart").click(function () {
            iframe.src = iframe.src;
        })

        var newsWrapper = $("#newsWrapper");

        $.each(news, function (key, value) {
            let item = `<div class="col-3">
    <div class="card card-block">
      <div class="content">
        <div class="card-image">
          <img class="img-fluid" src="img/news/${value.img}" alt="alternative">
            </div>
              <div class="card-body">
                <h3 class="news card-title">${value.title}</h3>
                <p>${value.desc}</p>
              </div>
        </div>
        <div class="button-container view-news">
          <a class="btn-solid-reg page-scroll" target="_blank"
              href="${value.link}">ҮЗЭХ</a>
        </div>
    </div>
   </div>`;
            newsWrapper.append(item);
        });

    });



    /* Navbar Scripts */
    // jQuery to collapse the navbar on scroll
    $(window).on('scroll load', function () {
        if ($(".navbar").offset().top > 20) {
            $(".fixed-top").addClass("top-nav-collapse");
        } else {
            $(".fixed-top").removeClass("top-nav-collapse");
        }
    });

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function () {
        $(document).on('click', 'a.page-scroll', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 600, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    // closes the responsive menu on menu item click
    $(".navbar-nav li a").on("click", function (event) {
        if (!$(this).parent().hasClass('dropdown'))
            $(".navbar-collapse").collapse('hide');
    });

    $('#myCollapsible').collapse({
        toggle: false
    })

    /* Rotating Text - Morphtext */
    $("#js-rotating").Morphext({
        // The [in] animation type. Refer to Animate.css for a list of available animations.
        animation: "fadeIn",
        // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
        separator: "|",
        // The delay between the changing of each phrase in milliseconds.
        speed: 3000,
        complete: function () {
            // Called after the entrance animation is executed.
        }
    });

    $("#teneg").Morphext({
        // The [in] animation type. Refer to Animate.css for a list of available animations.
        animation: "fadeIn",
        // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
        separator: "|",
        // The delay between the changing of each phrase in milliseconds.
        speed: 3000,
        complete: function () {
            // Called after the entrance animation is executed.
        }
    });

    /* Card Slider - Swiper */
    var cardSlider = new Swiper('.card-slider', {
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        slidesPerView: 3,
        spaceBetween: 20,
        breakpoints: {
            // when window is <= 992px
            992: {
                slidesPerView: 2
            },
            // when window is <= 768px
            768: {
                slidesPerView: 1
            }
        }
    });


    /* Lightbox - Magnific Popup */
    $('.popup-with-move-anim').magnificPopup({
        type: 'inline',
        fixedContentPos: false, /* keep it false to avoid html tag shift with margin-right: 17px */
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });


    /* Filter - Isotope */
    var $grid = $('.grid').isotope({
        // options
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
    });

    // filter items on button click
    $('.filters-button-group').on('click', 'a', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    // change is-checked class on buttons
    $('.button-group').each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'a', function () {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });


    /* Counter - CountTo */
    var a = 0;
    $(window).scroll(function () {
        if ($('#counter').length) { // checking if CountTo section exists in the page, if not it will not run the script and avoid errors	
            var oTop = $('#counter').offset().top - window.innerHeight;
            if (a == 0 && $(window).scrollTop() > oTop) {
                $('.counter-value').each(function () {
                    var $this = $(this),
                        countTo = $this.attr('data-count');
                    $({
                        countNum: $this.text()
                    }).animate({
                        countNum: countTo
                    },
                        {
                            duration: 2000,
                            easing: 'swing',
                            step: function () {
                                $this.text(Math.floor(this.countNum));
                            },
                            complete: function () {
                                if (this.countNum == 60000) {
                                    $this.text(this.countNum.toLocaleString('en-US') + "+");
                                }
                                else if (this.countNum == 6785) {
                                    $this.text(this.countNum.toLocaleString('en-US') + "+");
                                }
                                else {
                                    $this.text(this.countNum.toLocaleString('en-US'));
                                }


                                if ($this.attr('data-text')) {
                                    var t = $(`<p class='sub-text'></p>`);
                                    t.text($this.attr('data-text'));
                                    $this.append(t);
                                }
                                //alert('finished');
                            }
                        });
                });
                a = 1;
            }
        }
    });


    /* Move Form Fields Label When User Types */
    // for input and textarea fields
    $("input, textarea").keyup(function () {
        if ($(this).val() != '') {
            $(this).addClass('notEmpty');
        } else {
            $(this).removeClass('notEmpty');
        }
    });


    /* Call Me Form */
    $("#callMeForm").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            lformError();
            lsubmitMSG(false, "Please fill all fields!");
        } else {
            // everything looks good!
            event.preventDefault();
            lsubmitForm();
        }
    });

    function lsubmitForm() {
        // initiate variables with form content
        var name = $("#lname").val();
        var phone = $("#lphone").val();
        var email = $("#lemail").val();
        var select = $("#lselect").val();
        var terms = $("#lterms").val();

        $.ajax({
            type: "POST",
            url: "php/callmeform-process.php",
            data: "name=" + name + "&phone=" + phone + "&email=" + email + "&select=" + select + "&terms=" + terms,
            success: function (text) {
                if (text == "success") {
                    lformSuccess();
                } else {
                    lformError();
                    lsubmitMSG(false, text);
                }
            }
        });
    }

    function lformSuccess() {
        $("#callMeForm")[0].reset();
        lsubmitMSG(true, "Request Submitted!");
        $("input").removeClass('notEmpty'); // resets the field label after submission
    }

    function lformError() {
        $("#callMeForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass();
        });
    }

    function lsubmitMSG(valid, msg) {
        if (valid) {
            var msgClasses = "h3 text-center tada animated";
        } else {
            var msgClasses = "h3 text-center";
        }
        $("#lmsgSubmit").removeClass().addClass(msgClasses).text(msg);
    }


    /* Contact Form */
    $("#contactForm").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            cformError();
            csubmitMSG(false, "Please fill all fields!");
        } else {
            // everything looks good!
            event.preventDefault();
            csubmitForm();
        }
    });

    function csubmitForm() {
        // initiate variables with form content
        var name = $("#cname").val();
        var email = $("#cemail").val();
        var message = $("#cmessage").val();
        var terms = $("#cterms").val();
        $.ajax({
            type: "POST",
            url: "php/contactform-process.php",
            data: "name=" + name + "&email=" + email + "&message=" + message + "&terms=" + terms,
            success: function (text) {
                if (text == "success") {
                    cformSuccess();
                } else {
                    cformError();
                    csubmitMSG(false, text);
                }
            }
        });
    }

    function cformSuccess() {
        $("#contactForm")[0].reset();
        csubmitMSG(true, "Message Submitted!");
        $("input").removeClass('notEmpty'); // resets the field label after submission
        $("textarea").removeClass('notEmpty'); // resets the field label after submission
    }

    function cformError() {
        $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass();
        });
    }

    function csubmitMSG(valid, msg) {
        if (valid) {
            var msgClasses = "h3 text-center tada animated";
        } else {
            var msgClasses = "h3 text-center";
        }
        $("#cmsgSubmit").removeClass().addClass(msgClasses).text(msg);
    }


    /* Privacy Form */
    $("#privacyForm").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            pformError();
            psubmitMSG(false, "Please fill all fields!");
        } else {
            // everything looks good!
            event.preventDefault();
            psubmitForm();
        }
    });

    function psubmitForm() {
        // initiate variables with form content
        var name = $("#pname").val();
        var email = $("#pemail").val();
        var select = $("#pselect").val();
        var terms = $("#pterms").val();

        $.ajax({
            type: "POST",
            url: "php/privacyform-process.php",
            data: "name=" + name + "&email=" + email + "&select=" + select + "&terms=" + terms,
            success: function (text) {
                if (text == "success") {
                    pformSuccess();
                } else {
                    pformError();
                    psubmitMSG(false, text);
                }
            }
        });
    }

    function pformSuccess() {
        $("#privacyForm")[0].reset();
        psubmitMSG(true, "Request Submitted!");
        $("input").removeClass('notEmpty'); // resets the field label after submission
    }

    function pformError() {
        $("#privacyForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass();
        });
    }

    function psubmitMSG(valid, msg) {
        if (valid) {
            var msgClasses = "h3 text-center tada animated";
        } else {
            var msgClasses = "h3 text-center";
        }
        $("#pmsgSubmit").removeClass().addClass(msgClasses).text(msg);
    }


    /* Back To Top Button */
    // create the back to top button
    $('body').prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>');
    var amountScrolled = 700;
    $(window).scroll(function () {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('500');
        } else {
            $('a.back-to-top').fadeOut('500');
        }
    });


    /* Removes Long Focus On Buttons */
    $(".button, a, button").mouseup(function () {
        $(this).blur();
    });

})(jQuery);