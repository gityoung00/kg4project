<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html>

<html lang="ko">
<head>
    <meta charset="UTF-8" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,user-scalable=yes" />

    <meta name="title" content="청와대, 국민 품으로" />
    <meta name="description" content="청와대, 국민 품으로" />
    <meta name="keyword" content="청와대, 국민 품으로" />
    <meta name="author" content="청와대, 국민 품으로" />

    <!-- <meta property="og:type" content="website" />
    <meta property="og:site_name" content="청와대, 국민 품으로" />
    <meta property="og:title" content="청와대, 국민 품으로" />
    <meta property="og:url" content="" />
    <meta property="og:description" content="청와대, 국민 품으로" /> -->

    <link rel="shortcut icon" href="img/favicon.png" type="image/x-icon">
    <title>청와대, 국민 품으로</title>
    <style>
        html, body {
            overflow: hidden;
        }


        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

        html {
            font-size: 10px;
        }

        html, body {
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            height: 100%
        }

        body {
            font-family: 'Pretendard Std', Pretendard,sans-serif;
            font-size: 1.8rem;
            line-height: 1.6;
            color: #333;
            letter-spacing: -.05rem
        }

        * {
            margin: 0;
            padding: 0
        }

        a {
            text-decoration: none;
            cursor:pointer;
        }

        li {
            list-style: none
        }

        img {
            border: 0;
            max-width: 100%;
            height: auto
        }

        .landing {
            position: relative;
            min-height: 100%;
            padding-bottom: 3rem;
            background: url(img/landing_bg.jpg) center bottom -5rem no-repeat;
            background-size: cover;
            word-break: keep-all
        }

            .landing .logo {
                position: absolute;
                left: 3.6rem;
                top: 4.8rem
            }

        .landing_content {
            padding-top: 17.2rem;
            max-width: 84rem;
            margin: 0 auto;
            text-align: center
        }

            .landing_content .slogan {
                margin-bottom: 3.8rem
            }

            .landing_content > p {
                font-size: 2.2rem;
                line-height: 3.7rem;
                font-weight: 500
            }

        .landing .btns {
            margin-top: 5rem
        }

            .landing .btns .btns_l {
                float: left;
                width: 19.5rem;
                margin-right: 1.2rem
            }

            .landing .btns .btns_r {
                overflow: hidden
            }

            .landing .btns .btns_l .btn.def_btn {
                height: 9.4rem;
                line-height: 7.4rem
            }

            .landing .btns .btn {
                display: inline-block;
                padding: 1rem 2.8rem;
                border-radius: 1rem;
                text-align: center;
                font-size: 2rem;
                color: #fff;
                background: #0D9AB4;
                font-weight: 600;
                box-sizing: border-box;
            }

                .landing .btns .btn.c2 {
                    background: #F74763
                }

            .landing .btns.t2 {
                margin-top: 4rem
            }

                .landing .btns.t2 .btn {
                    width: 100%;
                    max-width: 30rem;
                    margin: .5rem;
                    padding: 3.5rem 2rem;
                    font-size: 2.8rem;
                    border: .2rem solid transparent;
                    transition: all .3s
                }

                    .landing .btns.t2 .btn:hover {
                        border-color: #0D9AB4;
                        background: #fff;
                        color: #0D9AB4
                    }

                    .landing .btns.t2 .btn.c2:hover {
                        border-color: #F74763;
                        color: #F74763
                    }

        .btns_r .list {
            padding: 2rem 2rem 2rem 5rem;
            border: 2px solid #189DB5;
            background: #fff;
            border-radius: 1.2rem
        }

            .btns_r .list:after {
                content: "";
                display: block;
                clear: both
            }

            .btns_r .list > li {
                float: left;
                width: 33.3%
            }

                .btns_r .list > li > a {
                    display: block;
                    overflow: hidden
                }

                    .btns_r .list > li > a > i {
                        float: left;
                        width: 5rem;
                        height: 5rem;
                        margin-right: 1.2rem
                    }

                    .btns_r .list > li > a > strong {
                        overflow: hidden;
                        display: block;
                        font-size: 1.9rem;
                        color: #222222;
                        line-height: 2.5rem;
                        font-weight: 600;
                        text-align: left
                    }


        @media (max-width: 1280px) {
            html {
                font-size: 9px
            }
        }

        @media (max-width: 768px) {
            html {
                font-size: 8px
            }
        }

        @media (max-width:690px) {
            .landing_content {
                padding: 12rem 1rem 0
            }

                .landing_content > p br {
                    display: none
                }
        }

        @media (max-width:640px) {
            .landing .logo {
                height: 3rem;
                left: 50%;
                top: 3rem;
                transform: translateX(-50%)
            }

            .landing_content > p br {
                display: none
            }

            .landing_content .slogan {
                height: 5rem
            }

            .landing .btns {
                padding: 0 1rem
            }

                .landing .btns .btns_l {
                    float: none;
                    width: 100%;
                    margin-bottom: 1rem
                }

                    .landing .btns .btns_l .btn.def_btn {
                        width: 100%
                    }

            .btns_r .list {
                padding: 2rem
            }

                .btns_r .list > li {
                    width: 100%;
                    margin-top: 1.5rem
                }

                    .btns_r .list > li:first-child {
                        margin-top: 0
                    }

                    .btns_r .list > li > a > strong {
                        padding-top: 1rem
                    }

                        .btns_r .list > li > a > strong br {
                            display: none
                        }
        }
    </style>
</head>
<body class="main_layout">


    <div class="landing">
        <img src="img/logo_black.png" alt="청와대, 국민 품으로" class="logo">

        <div class="landing_content">
            <img src="img/slogan.svg" alt="청와대, 국민 품으로" class="slogan">
            <p>
                청와대 개방 관람에 많은 관심을 가져주셔서 감사합니다.<br>
                관람을 희망하시는 분들의 편의를 위하여 관람신청 바로가기를 제공하고 있습니다.<br>
                청와대 개방에 대한 일반 안내를 원하시는 분은 아래 '홈페이지 바로가기’를 선택해주시고,<br>
                관람을 원하시는 분은 '관람신청 바로가기’를 선택해주시기바랍니다.
            </p>

            <div class="btns t2">
                <a href="https://www.opencheongwadae.kr/main/" class="btn def_btn">홈페이지 바로가기</a>
                <a id="reserve-link" class="btn def_btn c2">관람신청 바로가기</a>
            </div>
        </div>
    </div>

    <script src="https://cdn.opencheongwadae.kr/js/webgate-index.js?v=3"></script>
    <script>

        window.addEventListener("load", function () {
            document.getElementById("reserve-link").addEventListener("click",
                function () {
                    WG_StartWebGate(
                        1320,                   // GATE-ID, LIVE용은 1320 사용
                        function () {           // 대기완료 후 시작할 기존 업무로직
                            var res = $WG.lastResponse;
                            if (res.GateOperationMode == "ALERT") {
                                if (res.GateOperationMessageTitle == "NOT_OPEN") {
                                    setTimeout(function () {
                                        alert(res.GateOperationMessageDetail);
                                    }, 100);
                                }
                            }
                            else if (res.GateOperationMode == "GATE") {
                                window.location.href = res.GateOperationNextUrl;
                            }
                        },
                        "FRONTEND",             // fixed
                        "서비스 접속 중",       // UI Title
                        false,                  // fixed
                        function () {           // 유량제어 서비스 장애 시 처리 로직
                            alert("죄송합니다. 잠시 후 다시 시도해 주세요");
                        }
                    );
                });
        });
    </script>
</body>
</html>