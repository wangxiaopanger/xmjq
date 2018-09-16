$(function () {
    $("nav .top .right").mouseenter(function () {
        $("nav .top .box").clearQueue().slideDown();
    })
    $("nav .top .right").mouseleave(function () {
        $("nav .top .box").clearQueue().slideUp();
    })


    //选项卡
    let lis = $(".fu");
    let son = $(".son");
    lis.mouseenter(function () {
        let i = $(this).index();
        son.css("display", "none").eq(i).css("display", "block");
    })
    lis.mouseleave(function () {
        son.css("display", "none");
    })


    //轮播图
    let imgs = $(".imgs img");
    let bots = $(".bots .bot");
    let left = $(".banner .top .left");
    let right = $(".banner .top .right");
    let con = $(".banner .container");
    lunbo(imgs, bots, left, right, con);

    function lunbo(imgs, bots, left, right, con) {
        let num = 0;
        imgs.eq(0).css("opacity", "1");
        bots.eq(0).addClass("at");
        bots.mouseenter(function () {
            let i = $(this).index();
            imgs.css("opacity", "0").eq(i).css("opacity", "1");
            bots.removeClass("at").eq(i).addClass("at");
        })

        let t = setInterval(move, 2000);

        function move() {
            num++;
            if (num == imgs.length) {
                num = 0;
            }
            imgs.css("opacity", "0").eq(num).css("opacity", "1");
            bots.removeClass("at").eq(num).addClass("at");
        }

        function move_l() {
            num--;
            if (num < 0) {
                num = imgs.length - 1;
            }
            imgs.css("opacity", "0").eq(num).css("opacity", "1");
            bots.removeClass("at").eq(num).addClass("at");
        }

        con.mouseenter(function () {
            clearInterval(t);
        })
        con.mouseleave(function () {
            t = setInterval(move, 2000);
        })
        left.click(function () {
            move_l();
        })
        right.click(function () {
            move();
        })
    }


    //home选项卡
    let h_bot = $(".rights .right");
    let ols = $(".home .bottom ol");
    h_bot.mouseenter(function () {
        let i = $(this).index();
        ols.css("display", "none").eq(i).css("display", "flex");
        h_bot.removeClass("at").eq(i).addClass("at");
    })
    h_bot.triggerHandler("mouseenter");


    function p_y(box, l_btn, r_btn, w, num) {
        let i = 0;
        l_btn.removeClass("atv");
        r_btn.addClass("atv");
        l_btn.click(function () {
            i--;
            if (i == 0) {
                $(this).removeClass("atv");
            }
            if (i == -1) {
                i = 0;
            }
            $(this).addClass("atv");
            box.animate({left: -w * i}, 1000);
        })
        r_btn.click(function () {
            i++;
            if (i == num - 1) {
                $(this).removeClass("atv");
            }
            if (i == num) {
                i = num - 1;
            }
            $(this).addClass("atv");
            box.animate({left: -w * i}, 1000);
        })
    }

    let box = $(".bottom1 .gou");
    let l_btn = $(".bottom1 h1>.left");
    let r_btn = $(".bottom1 h1>.rt");
    let w = box.outerWidth() / 2 - 241;
    p_y(box, l_btn, r_btn, w, 2);

    let box1 = $(".you .bottom");
    let l_btn1 = $(".you .top h1 .left");
    let r_btn1 = $(".you .top h1 .rt");
    let w1 = box1.outerWidth() / 4;
    p_y(box1, l_btn1, r_btn1, w1, 4);


    $(window).scroll(function () {
        let gd = $(document.body).scrollTop() || $(document.documentElement).scrollTop();
        if (gd > 600) {
            $(".re").css("display", "block");
        }
        else {
            $(".re").css("display", "none");
        }
    })
    $(".re").click(function () {
        $(document.body).animate({scrollTop: 0}, 1000);
        $(document.documentElement).animate({scrollTop: 0}, 1000);
    })


    function c_py(c_lis, c_btn, c_left, c_right) {
        let c_w = $(".content ol").outerWidth();
        let i = 0;
        let j = 0;
        c_lis.first().css("left", 0);
        c_btn.first().addClass("at1");
        c_left.click(function () {
            i--;
            if (i < 0) {
                return;
            }
            c_btn.removeClass("at1").eq(i).addClass("at1");
            c_lis.eq(j).css("left", -c_w);
            c_lis.eq(j).css({left: c_w});
            c_lis.eq(i).animate({left: 0}, 1000);
            j = i;
        })
        c_right.click(function () {
            i++;
            if (i == c_lis.length) {
                return
            }
            c_btn.removeClass("at1").eq(i).addClass("at1");
            c_lis.eq(j).css("left", c_w);
            c_lis.eq(j).css({left: -c_w});
            c_lis.eq(i).animate({left: 0}, 1000);
            j = i;
        })
    }

    let c_lis = $(".content .l1");
    let c_btn = $(".content .bot1");
    let c_left = $(".content .left1");
    let c_right = $(".content .right1");
    c_py(c_lis, c_btn, c_left, c_right);

    let c_lis1 = $(".content .l2");
    let c_btn1 = $(".content .bot2");
    let c_left1 = $(".content .left2");
    let c_right1 = $(".content .right2");
    c_py(c_lis1, c_btn1, c_left1, c_right1);

    let c_lis2 = $(".content .l3");
    let c_btn2 = $(".content .bot3");
    let c_left2 = $(".content .left3");
    let c_right2 = $(".content .right3");
    c_py(c_lis2, c_btn2, c_left2, c_right2);

    let c_lis3 = $(".content .l4");
    let c_btn3 = $(".content .bot4");
    let c_left3 = $(".content .left4");
    let c_right3 = $(".content .right4");
    c_py(c_lis3, c_btn3, c_left3, c_right3);


    let s_t1 = s_time();
    setInterval(s_time, 1000);

    function s_time() {
        let s_arr = s_t();
        $(".box1").html(s_arr[0]);
        $(".box2").html(s_arr[1]);
        $(".box3").html(s_arr[2]);
    }

    function s_t() {
        let arr = new Array;
        let now = new Date();
        let next = new Date(2060, 9, 1, 18);
        let time = (next.getTime() - now.getTime()) / 1000;
        let tm = Math.floor((time % (30 * 24 * 60 * 60) % (24 * 60 * 60) / (60 * 60)));
        arr.push(tm);
        let min = Math.floor((time % (30 * 24 * 60 * 60) % (24 * 60 * 60) % (60 * 60) / 60));
        arr.push(min);
        let s = Math.floor((time % (30 * 24 * 60 * 60) % (24 * 60 * 60) % (60 * 60) % 60));
        arr.push(s);
        return arr;
    }
})

