<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    


<script>
	// 예약 현황 관련 처리 
	$(function() {
		var cp = $("#to-home").data("cp");
		var state = null;
		var timeTable = [];
		$("#state-table thead").find("th").each(function(i, th) {
			var txt = $(th).text();
			var time = $(th).data("time")
			timeTable[i] = {txt: txt, time: time}
		})
		function limitBySe(se) {
			if (se === "P") {
				return parseInt($("#P").data("no"));
			} else if (se === "G") {
				return parseInt($("#G").data("no"));
			} else if (se === "Q") {
				return parseInt($("#Q").data("no"));
			}
		}
		function setState() {
			var se = $("#state-tab").find("button.on").prop("id");
			$("#state-table").find("tbody tr").each(function(i, tr) {
				$(tr).find("td span").each(function(j, span) {
					var no = state[se][i][j];
					var limit =  limitBySe(se);
					var leftNo = limit - no;

					if (leftNo > 0) {
						$(span).closest("td").addClass("on");
						$(span).text(leftNo.toLocaleString());
					} else {
						$(span).closest("td").removeClass("on");
						$(span).text("예약완료");
					}
				});
			});
		}
		$("#booking-date").closest(".inner-list").on("click", function() {
			$("#btn-daily-state").trigger("click");	
		});
		$("#btn-daily-state").on("click", function() {
			$("#popup-daily-state").addClass("on");
			if (!state) {
				var bookingId = $("#booking-id").val();
				var url = cp + "/reservation/state/" + bookingId; 
				$.get(url).done(function(res){
					if (res && res.code == 200 && res.data) {
						state = res.data;
						setState();
					}
				});				
			} else {
				setState();
			}
		});
		$("#state-tab").find("button").on("click", function() {
			$(this).addClass("on").siblings().removeClass("on");
			setState();
		});
		$("#state-table").on("click", "td.on", function() {
			var date = $(this).closest("tr").data("date");
			var idx = $(this).index();
			var se = $("#state-tab").find("button.on").prop("id");
			var seDisplay = $("#" + se).text();
			$("#booking-se-display").val(seDisplay);
			$("#booking-se").val(se);
			$("#booking-date").val(date);
			$("#booking-time-display").val(timeTable[idx].txt);
			$("#booking-time").val(timeTable[idx].time);
			$("#popup-daily-state").removeClass("on");
			$("#booking-se-display").closest(".inner-list").addClass("val");
			$("#booking-date").closest(".inner-list").addClass("val");
			$("#booking-time-display").closest(".inner-list").addClass("val");
            // 구분에 따른 인원설정
            if (se == "P" || se == "Q") {
                var seePersons = 1;
                $("#see-persons").val(seePersons);
                $("#see-persons-txt").text(seePersons);
            } else if (se == "G") {
                var seePersons = 20;
                $("#see-persons").val(seePersons);
                $("#see-persons-txt").text(seePersons);                
            }
            // 예약 현황 처리후 validation
            $.validate();
		});
		
	})
	// 인증관련처리
	$(function() {
	    window.name = "blue_house_reservation";
	    $("#btn-certify").on("click", function() {
	    	var UserAgent = navigator.userAgent;

	    	// 모바일인 경우 (변동사항 있을경우 추가 필요)
	    	if (UserAgent.match(/iPhone|iPad|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null)
	    	{
	    		KMCIS_window = window.open('', 'KMCISWindow');
	    	}
	    	// 모바일이 아닌 경우
	    	else
	    	{
	    		// 기본 팝업 size
	    		var jwidth	= "425";
	    		var jHeight	= "600";

	    		var UserAgent = navigator.userAgent.toLowerCase();

	    		if(UserAgent.indexOf("chrome") != -1){
	    			var jwidth	= "560";
	    			var jHeight	= "770";
	    		}else if(UserAgent.indexOf("safari") != -1){
	    			jwidth	= "441";
	    			jHeight	= "588";
	    		}

	    		KMCIS_window = window.open('', 'KMCISWindow', 'width='+jwidth+', height='+jHeight+', resizable=0, scrollbars=no, status=0, titlebar=0, toolbar=0, left=435, top=250' );
	    	}

	    	if(KMCIS_window == null){
	    		alert(" ※ 윈도우 XP SP2 또는 인터넷 익스플로러 7 사용자일 경우에는 \n    화면 상단에 있는 팝업 차단 알림줄을 클릭하여 팝업을 허용해 주시기 바랍니다. \n\n※ MSN,야후,구글 팝업 차단 툴바가 설치된 경우 팝업허용을 해주시기 바랍니다.");
	    	}
	    	$("#form-certify").submit();
	    });
	    window.afterSetvalue = function(name, phone) {
			$("#phone-name").val(name).trigger("focusout");
			$("#phone-no").val(phone).trigger("focusout");
			// 인증 종료후 validation
			$.validate();
	    }
	})
    $(function() {
        var $form = $("#form-reservation");
        var $formNumber = $form.find(".inner-list.inner-list2");
        var $formInput = $form.find(".inner-list").not(".sel").not(".inner-list2");
        
        var pMin = 1;
        var pMax = 6;
        var gMin = 20;
        var gMax = 50;
        $("#minus-see-persons").on("click", function() {
            var bookingSe = $("#booking-se").val();
            var seePersons = parseInt($("#see-persons").val());
            if (bookingSe == "P" || bookingSe == "Q") {
                if (seePersons > pMin) {
                    seePersons = seePersons - 1;
                } else {
                    seePersons = pMin;
                }
            } else if (bookingSe == "G") {
                if (seePersons > gMin) {
                    seePersons = seePersons - 1;
                } else {
                    seePersons = gMin;
                }
            }
            $("#see-persons").val(seePersons);
            $("#see-persons-txt").text(seePersons);
        })

        $("#plus-see-persons").on("click", function() {
            var bookingSe = $("#booking-se").val();
            var seePersons = parseInt($("#see-persons").val());
            if (bookingSe == "P" || bookingSe == "Q") {
                if (seePersons < pMax) {
                    seePersons = seePersons + 1;
                } else {
                    seePersons = pMax;
                }
            } else if (bookingSe == "G") {
                if (seePersons < gMin) {
                    seePersons = gMin;
                } else if (seePersons < gMax) {
                    seePersons = seePersons + 1;
                } else {
                    seePersons = gMax;
                }
            }
            $("#see-persons").val(seePersons);
            $("#see-persons-txt").text(seePersons);
        })

        $formNumber.focusin(function() {
            var $this = $(this);
            if (!$this.hasClass("focus")) {
                $this.addClass("focus");
            }
        });

        $formNumber.on("focusout", function() {
            $(this).removeClass("focus");
            var val = parseInt($(this).find("input").val());
            if (val) {
                $(this).addClass("val");
            } else {
                $(this).removeClass("val");
            }
        });

        $formInput.find("input").on("focus", function() {
            $formInput.removeClass("focus");
            $(this).closest(".inner-list").addClass("focus");
        });

        $formInput.find("input").on("focusout", function() {
            var $comp = $(this).closest(".inner-list");
            $comp.removeClass("focus");
            var val = $(this).val();
            if (val) {
                $comp.addClass("val");
            } else {
                $comp.removeClass("val");
            }
        });

    });
	// 약관동의
	$(function() {
		
        $(".agreement-box").find("a").on("click", function() {
    		if ($(this).parent().next(".agree-txt").is(":hidden")) {
    			$(".agree-txt").slideUp(300);
    			$(this).parent().next(".agree-txt").slideDown(300);
    			$(this).text("상세내용 닫기");
    		} else {
    			$(this).parent().next(".agree-txt").slideUp(300);
    			$(this).text("상세내용 펼침");
    		}
        });
        $("#agree-all").on("change", function() {
            var checked = $(this).prop("checked");
            if (checked) {
                $(".agreement-box").find("input").prop("checked", true);
            } else {
                $(".agreement-box").find("input").prop("checked", false);
            }
        });
        $(".agreement-box").find("input").on("change", function() {
        	var checked = $(this).prop("checked");
        	if (checked) {
        		var inputs = $(".agreement-box").find("input").filter(function() {
        			return $(this).prop("checked");
        		});
				if (inputs.length == 3) $("#agree-all").prop("checked", true);        		
        	} else {
        		$("#agree-all").prop("checked", false);		
        	}
        });
        
    });
    $(function() {
        var cp = $("#to-home").data("cp");
        $("#btn-booking").on("click", function() {
        	var isDisabled = $("#btn-booking").hasClass("disabled");
        	if (!isDisabled) {
            	// 입력이 모두 끝난경우
    			var pwd = $("#booking-pwd").val();
    			var repwd = $("#re-booking-pwd").val();
            	if (pwd == repwd) {
                    var data = $("#form-reservation").serializeObject();
                    var url = $("#form-reservation").prop("action");
                    
                    $.rta.post(url, data).done(function(res) {
                        if (res && res.code == 200 && res.data.successYn) {
                        	location.href = cp + "/reserved/" + res.data.bookingId;
                        } else if (res && res.code == 501) {
                        	alert("관람이 끝나지 않은 예약이 존재합니다. 관람 후 다시 예약해 주세요!!!");
                        } else if (res && res.code == 502) {
                        	alert("현재보다 과거를 예약할 수 없습니다 !!!");
                        } else if (res && res.code == 503) {
                        	alert("예약가능한 인원수를 범위가 아닙니다 !!!");
                        } else {
                        	alert("예약 중에 에러가 발생하였습니다. 잠시 후에 다시 시도해 주세요!!!");
                        }
                    });
            	} else {
            		alert("패스워드가 일치하지 않습니다.")
            	}
        	} else {
        		var agree = ["privacy-collection", "privacy-offer", "alarm-reception"];
        		// 입력이 끝나지 않은 경우의 알림
        		var bookerId = $("#booker-id").val();
        		var bookingSe = $("#booking-se").val();
        		var bookingTime = $("#booking-time").val();
				var agreeResult = agree.every(function(id) {
					var checked = $("#" + id).prop("checked");
					return checked;
				});
        		if (!bookingSe || !bookingTime) {
        			alert("날짜별 신청현황을 클릭하시셔서 예약일시를 선택하셔야 예약을 하실 수 있습니다.");	
        		} else if (!bookerId) {
        			alert("본인인증을 하셔야 예약을 하실 수 있습니다.");
        		} else if (!agreeResult) {
        			alert("약관에 모두 동의를 하셔야 예약을 하실 수 있습니다.");
        		}
        	}
        });
    });
    
	/*	1. 본인인증시 // validation
		2. 날짜
		3. 비밀번호
		4. 약관 동의시	*/
	$(function() {
		var inputs = ["phone-name", "phone-no", "booking-se", "booking-time"]
		var pwds = ["booking-pwd", "re-booking-pwd"];
		var agree = ["privacy-collection", "privacy-offer", "alarm-reception"];
		function validate() {
			// input
			var inputResult = inputs.every(function(id) {
				var val = $("#" + id).val();
				if (!val) {
					return false;	
				}
				return true;
			})
			// 패스워드
			var pwdResult = pwds.every(function(id) {
				var val = $("#" + id).val();
				if (val && val.length == 4) return true;
				return false;	
			});

			// 동의
			var agreeResult = agree.every(function(id) {
				var checked = $("#" + id).prop("checked");
				return checked;
			});
			
			if (inputResult && pwdResult && agreeResult)  {
				$("#btn-booking").removeClass("disabled");
			} else {
				$("#btn-booking").addClass("disabled");
			}
		}
		$.validate = validate;
		
		$("#booking-pwd, #re-booking-pwd").on("input", function(e) {
			var key = e.originalEvent.keyCode;
			var val = $(this).val();
			$(this).val(val.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, ''));
			// 패스워드 처리후 validation
			$.validate();
		});
		$("#booking-pwd, #re-booking-pwd").on("keypress", function(e) {
			var key = e.originalEvent.keyCode;
			if (key < 48 || key > 57) {
				return false;
			}
		});
		
		$(".agreement-box").find("input").on("change", function() {
			var checked = $(this).prop("checked");
			// 동의 체크 후 validation
			$.validate();
		});
	});
	
	$(document).ready(function(){
        $('.close_btn').on('click',function(){
            $('.wrap1').removeClass('on')
        })
    })

	window.addEventListener('beforeunload', function() {
		$(".content").empty();
		$("#popup-daily-state").remove();
		$("#page-expired").show();
	});
	$("#btn-to-reserve").on("click", function(){
		location.href="https://reserve.opencheongwadae.kr/"
	});
</script>