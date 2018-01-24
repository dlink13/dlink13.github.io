(function () {
	var validation = {
        init: function () {
            _self = this;
            $('.js-phone').keydown(function (e) {
                if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
                    (e.keyCode == 65 && ( e.ctrlKey === true || e.metaKey === true ) ) ||
                    (e.keyCode >= 35 && e.keyCode <= 40)) {
                    return;
                }
                if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                    e.preventDefault();
                }
            });

            if ($('.js-submit').length) {
                $('body').delegate('.js-submit', 'click', function (event) {
                    var res = _self.checkForm($(this).closest('form'));
                    if (!res) return false;
                });
            }

        },
        checkForm: function (form) {
            var checkResult = true;
            form.find('.warning').removeClass('warning');
            form.find('input, textarea, select').each(function () {
                if ($(this).data('req')) {
                    switch ($(this).data('type')) {
                        case 'tel':
                            var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
                            if (!re.test($(this).val())) {
                                $(this).parents('.field').addClass('warning');
                                checkResult = false;
                            }
                            break;
                        case 'email':
                            var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
                            if (!re.test($(this).val())) {
                                $(this).parents('.field').addClass('warning');
                                checkResult = false;
                            }
                            break;
                        default:
                            if ($.trim($(this).val()) === '') {
                                $(this).parents('.field').addClass('warning');
                                checkResult = false;
                            }
                            break;
                    }
                }
            });
            return checkResult;
        }
    }.init();
	var $wrapper = $('#wrapper'),
		$body = $('body'),
		$footer = $('#footer'),
		$html = $('html');
	var all = {
		init: function() {
			
			$(window).on("load", function () {
				

				$body.on('click', '.js-map-icon, .js-close-map-opened', function(e) {
					$('.map-page').toggleClass('open-map');
				});
				//страницы
				var $other_pages = $('.about-page, .projects-page, .map-page, .callback-page');
				setInterval(function() {
					$other_pages.each(function() {
						if ($(this).css('visibility') == 'visible' && !$(this).hasClass('on-anim')) {
							$(this).addClass('on-anim');
							setTimeout(function (i) {
								$(i).removeClass('page-anim');
							},4500,this);
						}
					});
				},200);

				$body.on('click', '.js-about, .js-close-about', function(e) {
					e.preventDefault();
					if ($body.hasClass('oute-page')) {
						if ($body.attr('class').replace('oute-page','').trim() != 'open-about' && !$(this).hasClass('js-close-about')) {
							$body.removeAttr('class');
							setTimeout(function () {
								$body.addClass('oute-page').addClass('open-about');
							},1000);
						} else {
							$body.removeAttr('class');							
						}
					} else {
						$body.addClass('oute-page').addClass('open-about');
					}
				});

				$body.on('click', '.js-products, .js-close-products', function(e) {
					e.preventDefault();
					if ($body.hasClass('oute-page')) {
						if ($body.attr('class').replace('oute-page','').trim() != 'open-products' && !$(this).hasClass('js-close-products')) {
							$body.removeAttr('class');
							setTimeout(function () {
								$body.addClass('oute-page').addClass('open-products');
							},1000);
						} else {
							$body.removeAttr('class');							
						}
					} else {
						$body.addClass('oute-page').addClass('open-products');
					}
				});

				$body.on('click', '.js-header-map, .js-close-map', function(e) {
					e.preventDefault();
					if ($body.hasClass('oute-page')) {
						if ($body.attr('class').replace('oute-page','').trim() != 'open-map' && !$(this).hasClass('js-close-map')) {
							$body.removeAttr('class');
							setTimeout(function () {
								$body.addClass('oute-page').addClass('open-map');
							},1000);
						} else {
							$body.removeAttr('class');							
						}
					} else {
						$body.addClass('oute-page').addClass('open-map');
					}
				});

				$body.on('click', '.js-callback, .js-close-callback', function(e) {
					e.preventDefault();
					if ($body.hasClass('oute-page')) {
						if ($body.attr('class').replace('oute-page','').trim() != 'open-callback' && !$(this).hasClass('js-close-callback')) {
							$body.removeAttr('class');
							setTimeout(function () {
								$body.addClass('oute-page').addClass('open-callback');
							},1000);
						} else {
							$body.removeAttr('class');							
						}
					} else {
						$body.addClass('oute-page').addClass('open-callback');
					}
				});

				$body.on('click', '.js-main', function(e) {
					e.preventDefault();
					if ($body.hasClass('oute-page')) {
						$body.removeAttr('class');
						setTimeout(function () {
							$('.dot[data-page="0"]').trigger('click');
						},1000);
					} else {
						$('.dot[data-page="0"]').trigger('click');
					}
				});
				$body.on('click', '.js-equipment', function(e) {
					e.preventDefault();
					if ($body.hasClass('oute-page')) {
						$body.removeAttr('class');
						setTimeout(function () {
							$('.dot[data-page="1"]').trigger('click');
						},1000);
					} else {
						$('.dot[data-page="1"]').trigger('click');
					}
				});
				$body.on('click', '.js-3', function(e) {
					e.preventDefault();
					if ($body.hasClass('oute-page')) {
						$body.removeAttr('class');
						setTimeout(function () {
							$('.dot[data-page="2"]').trigger('click');
						},1000);
					} else {
						$('.dot[data-page="2"]').trigger('click');
					}
				});
				$body.on('click', '.js-4', function(e) {
					e.preventDefault();
					if ($body.hasClass('oute-page')) {
						$body.removeAttr('class');
						setTimeout(function () {
							$('.dot[data-page="3"]').trigger('click');
						},1000);
					} else {
						$('.dot[data-page="3"]').trigger('click');
					}
				});
				$body.on('click', '.js-5', function(e) {
					e.preventDefault();
					if ($body.hasClass('oute-page')) {
						$body.removeAttr('class');
						setTimeout(function () {
							$('.dot[data-page="4"]').trigger('click');
						},1000);
					} else {
						$('.dot[data-page="4"]').trigger('click');
					}
				});
				$body.on('click', '.js-6', function(e) {
					e.preventDefault();
					if ($body.hasClass('oute-page')) {
						$body.removeAttr('class');
						setTimeout(function () {
							$('.dot[data-page="5"]').trigger('click');
						},1000);
					} else {
						$('.dot[data-page="5"]').trigger('click');
					}
				});
				if ($('.screen-lg, .screen-md').is(':visible')) {
					$wrapper.addClass('animate-start');
					setTimeout(function(){
						$wrapper.removeClass('not-animate');
						$('.page0').addClass('on-anim');
						$('.footer-logo').addClass('anim-on');
						setTimeout(function(){
							$('.page0').addClass('end-anim').removeClass('page-anim');
						},4000);
					},6000);
				} else {
					$wrapper.removeClass('not-animate');
				}

				var owl_projects = $('.js-owlcarousel-projects');
				if (owl_projects.length) {
					owl_projects.owlCarousel({
						//loop: true,
						nav: true,
						items: 1,
						navText:false,
	                    mouseDrag:false,
	                    touchDrag:false,
	                    smartSpeed:800,
	                    autoWidth:true,
	                    animateOut: 'fadeOut',
    					animateIn: 'fadeIn',
					});
				}

				var owl = $('.js-owlcarousel');
				if (owl.length) {
				 	owl.owlCarousel({
				 		loop: false,
	                    nav: true,
	                    items: 3,
	                    navText:false,
	                    mouseDrag:false,
	                    smartSpeed:800,
	                    margin: 17,
	                    autoWidth:true,
	                    responsive : {
	                    	0: {
								items: 1,
								center:true
	                    	},
	                    	768: {
								items: 1,
	                    	},
	                    	1024: {
								items: 2,
	                    	},
	                    	1570: {
	                    		items: 3,
	                    	}
	                    },
                        onChanged: function(e){
                        	$(this._items).each(function(index, el) {
                        		$(this).removeClass('in-view');
                        	});
                        	for (var i = 0; i <= this.settings.items - 1; i++) {
                        		$(this._items[this._current + i]).addClass('in-view');
                        	}
	                        $('.owl-prev, .owl-next', owl).removeClass('disabled');
	                        if (this._current === null || this._current === 0) {
	                           $('.owl-prev', owl).addClass('disabled');
	                        }
	                        if (this._current === $('.owl-stage', owl).children().length - this.settings.items) {
	                    		$('.owl-next', owl).addClass('disabled');                            	
	                        }
                    }
				 	});
				 	var first_html = owl.find('.item.first').parent();
				 	owl.trigger('onChanged.owl.carousel');
				 	$(window).resize(function(event) {
					 	if ($('.screen-sm, .screen-xs').is(':visible')) {
						 	var indexToRemove = 0;
					 		if (owl.find('.item.first').length)
								owl.trigger('remove.owl.carousel', [indexToRemove]).trigger('refresh.owl.carousel');	
					 	} else {
					 		if (!owl.find('.item.first').length) {
					 			owl.trigger('add.owl.carousel', [first_html, 0]).trigger('refresh.owl.carousel');
					 		}
					 	}
				 	});
				 	$(window).trigger('resize');
				}
			});
			

			$('.js-toggle-menu').click(function(e) {
				e.preventDefault();
				$(this).toggleClass('active');
				if ($('.screen-lg, .screen-md').is(':visible')) {
					if ($(this).hasClass('active')) {
						$html.addClass('overflow-hidden');
					}	
					else {
						$html.removeClass('overflow-hidden');
					}				
				} 				

			});

			var $foot_menu = $('.footer-menu'),
				$foot_els = $foot_menu.find('li'),
				f_col = $foot_els.length;
			if ($foot_menu) {
				$('.footer-logo').addClass('anim'+ (f_col + 1));
				$foot_els.each(function(i, el) {
					$(this).addClass('anim'+(f_col - i));
				});
			}
		}
	}.init();

	var customScroll = {
		init: function () {
			$(window).on("load",function(){
	            $(".js-mCustomScrollbar").mCustomScrollbar();
	        });
		}
	}.init();

	var gallery = {
		init: function () {
			var $obj = $('.js-open-photo'),
				$gallery = $('.gallery');

			$body.on('click', '.js-open-gallery', function(e) {
				e.preventDefault();
				$('.popup[data-gallery="'+ $(this).data('gallery') +'"]').addClass('open');
			});

			$body.on('click', '.js-close-gallery', function(e) {
				e.preventDefault();
				$(this).closest('.popup').removeClass('open');
			});
			

			if ($obj.length) {
				$obj.each(function() {
					var $popup = $(this).closest('.popup');
					$obj.click(function(event) {
						event.preventDefault();
						$('.img-small',$popup).removeClass('active');
						$(this).addClass('active');
						$('.img-big',$popup).attr('src',$(this).data('href'));
					});					
				});
			}
		}
	}.init();

	var map = {
		init: function () {
			ymaps.ready(init);
		    var myMap,
		    	myPlacemark;

		    function init(){     
		        myMap = new ymaps.Map("map", {
		            center: [55.748938568988955,37.599246500000014],
		            zoom: 15,
		            controls:  ['zoomControl', 'searchControl'],
		        }, {
            	searchControlProvider: 'yandex#search'
            });
		        myPlacemark = new ymaps.Placemark([55.748938568988955,37.599246500000014], { balloonContent: 'ORIA' });
		    	myMap.geoObjects.add(myPlacemark);
		    }
		}
	}.init();

	var scrollPage = {
		init: function() {
			var $content = $('.js-scroll-page');
			if ($content.length) {
				var $pages = $content.find('.page');
				$pages.first().addClass('home');
				var Pcol = $('.page').filter(':not(.home)').length,
					$control = $('#control');
				$control.append(function(){
					var str = '';
					for (var i = 1; i <= Pcol; i++) {
						str = str + '<a href="#" class="dot anim'+ (i+1) +'" data-page="'+ i +'"></a>';
					}
					return str;
				});
				$control.find('.dot:first').addClass('active');
				var $dots = $('#control .dot');
				$dots.click(function(e) {
					e.preventDefault();
					if ($('#control').hasClass('onscroll')) return false;
					$dots.add($pages).removeClass('active');
					var $cur_page = $pages.filter('.page'+$(this).data('page'));
					$(this).add($cur_page).addClass('active');
					scrollPage();

					if ($cur_page.hasClass('scene2')) {
						$footer.addClass('hidden');
					} else {
						$footer.removeClass('hidden');
					}
				});
				function scrollPage(active_page) {
					var win_h = $(window).height();
						$cur_page = active_page ? active_page : $content.find('.page.active'),
						cur_coords = 0 + win_h * $cur_page.data('page');
						$control.addClass('onscroll');
					$content.stop().animate({
						'margin-top': "-" + cur_coords + 'px', 
					},1000,function(){
						$control.removeClass('onscroll');
					});


					if (!$cur_page.hasClass('on-anim')) 
						setTimeout(function(){
							$cur_page.addClass('on-anim');
							if (!$cur_page.hasClass('scene1')) {
								setTimeout(function(){
									$cur_page.addClass('end-anim').removeClass('page-anim');
								}, 4000);								
							}
						},1000);
				}
				var height = $(window).height();
				
				setInterval(function () {
					if (!$control.hasClass('onscroll')) {
						var win_h = $(window).height(),
							$cur_page = $content.find('.page.active'),
							cur_coords = 0 + win_h * $cur_page.data('page');
						$content.css({
							'margin-top': "-" + cur_coords + 'px', 
						});
					}
				},300);						

				if (document.addEventListener) {
				  if ('onwheel' in document) {
				    // IE9+, FF17+, Ch31+
				    document.addEventListener("wheel", onWheel);
				  } else if ('onmousewheel' in document) {
				    // устаревший вариант события
				    document.addEventListener("mousewheel", onWheel);
				  } else {
				    // Firefox < 17
				    document.addEventListener("MozMousePixelScroll", onWheel);
				  }
				} else { // IE8-
				  document.attachEvent("onmousewheel", onWheel);
				}

				isMobile = {
			        Android: function() {
			            return navigator.userAgent.match(/Android/i);
			        },
			        BlackBerry: function() {
			            return navigator.userAgent.match(/BlackBerry/i);
			        },
			        iOS: function() {
			            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
			        },
			        Opera: function() {
			            return navigator.userAgent.match(/Opera Mini/i);
			        },
			        Windows: function() {
			            return navigator.userAgent.match(/IEMobile/i);
			        },
			        any: function() {
			            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
			        }
			    };

				if (isMobile.any()) {
					$("#wrapper").swipe({
	        			//Generic swipe handler for all directions
				        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
				          onWheel(event, direction);
				        },
				        //Default is 75px, set to 0 for demo so any distance triggers swipe
				        //threshold:0
				    });
				}

				function onWheel(e,direction) {
					e = e || window.event;
					var delta = e.deltaY || e.detail || e.wheelDelta,
						$control = $('#control');
						$dot = $control.find('.active');
				    if ($(e.target).closest("#wrapper").length) {
				    	if (e.type == 'touchend') {
				    		if (direction == "up") {
			    				delta = 'down'
				    		} else {
				    			if (direction == "down") {
				    				delta = 'up';
				    			} else {
				    				delta = false;
				    			}
				    		}
						} else {
							if ($control.hasClass('onscroll')) return;
							if (delta > 0) {
								delta = 'down';
							} else {
								if (delta <= 0) {
									delta = 'up';
								}
							}							
						}

						var $PageActive = $('.page.active'),
							$ViewActive = $PageActive.find('.view.active');
						if ($ViewActive.length && !$ViewActive.hasClass('view-last') && delta == 'down') {
							if (!$PageActive.hasClass('onscroll')) {
								$PageActive.add($('#control')).addClass('onscroll');
								setTimeout(function(){
									$PageActive.add($('#control')).removeClass('onscroll');
								},2000);
								$PageActive.addClass('scene' + ($ViewActive.data('view') + 1)).removeClass('scene' + ($ViewActive.data('view')));
								
								$ViewActive.removeClass('active');
								$PageActive.find('.view' + ($ViewActive.data('view') + 1)).addClass('active');
								$footer.addClass('hidden');
								if (!$PageActive.hasClass('anim-' + ($ViewActive.data('view') + 1))) {
									$PageActive.addClass('anim-' + ($ViewActive.data('view') + 1));
								}
								if (!$PageActive.hasClass('end-anim') && $PageActive.find('.view.active').hasClass('view-last')) {
									setTimeout(function(){
										$PageActive.addClass('end-anim').removeClass('page-anim');
									},4000);								
								}
							}
						} else {
							if (delta == 'up' && !$ViewActive.hasClass('view1') && $ViewActive.length) {
								if (!$PageActive.hasClass('onscroll')) {
									$PageActive.add($('#control')).addClass('onscroll');
									setTimeout(function(){
										$PageActive.add($('#control')).removeClass('onscroll');
									},2000);

									$PageActive.removeClass('scene' + ($ViewActive.data('view'))).addClass('scene' +  ($ViewActive.data('view') - 1));		
									$ViewActive.removeClass('active');
									$PageActive.find('.view' + ($ViewActive.data('view') - 1)).addClass('active');

									$footer.removeClass('hidden');						
								}
							} else {
								if (!$('#control').hasClass('onscroll')) {
									if (delta == 'up' && $dot.prev().length) {
										$dot.prev().trigger('click');							
									} else {
										if (delta == 'down' && $dot.next().length) {
											if ($PageActive.find('.view.active')) {
												if ($PageActive.hasClass('end-anim')){
													$dot.next().trigger('click');
												}
											} else {
												$dot.next().trigger('click');
											}
										}
									}
								} 				
							}
						}				    	
				    }
				}
			}
		}
	}

	if ($('.screen-sm, .screen-xs').is(':visible')) {
		$('.page-anim').removeClass('page-anim');

		/*добавление aos для мобилок*/
		var css = "[data-aos][data-aos][data-aos-duration='50'],body[data-aos-duration='50'] [data-aos]{transition-duration:50ms}[data-aos][data-aos][data-aos-delay='50'],body[data-aos-delay='50'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='50'].aos-animate,body[data-aos-delay='50'] [data-aos].aos-animate{transition-delay:50ms}[data-aos][data-aos][data-aos-duration='100'],body[data-aos-duration='100'] [data-aos]{transition-duration:.1s}[data-aos][data-aos][data-aos-delay='100'],body[data-aos-delay='100'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='100'].aos-animate,body[data-aos-delay='100'] [data-aos].aos-animate{transition-delay:.1s}[data-aos][data-aos][data-aos-duration='150'],body[data-aos-duration='150'] [data-aos]{transition-duration:.15s}[data-aos][data-aos][data-aos-delay='150'],body[data-aos-delay='150'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='150'].aos-animate,body[data-aos-delay='150'] [data-aos].aos-animate{transition-delay:.15s}[data-aos][data-aos][data-aos-duration='200'],body[data-aos-duration='200'] [data-aos]{transition-duration:.2s}[data-aos][data-aos][data-aos-delay='200'],body[data-aos-delay='200'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='200'].aos-animate,body[data-aos-delay='200'] [data-aos].aos-animate{transition-delay:.2s}[data-aos][data-aos][data-aos-duration='250'],body[data-aos-duration='250'] [data-aos]{transition-duration:.25s}[data-aos][data-aos][data-aos-delay='250'],body[data-aos-delay='250'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='250'].aos-animate,body[data-aos-delay='250'] [data-aos].aos-animate{transition-delay:.25s}[data-aos][data-aos][data-aos-duration='300'],body[data-aos-duration='300'] [data-aos]{transition-duration:.3s}[data-aos][data-aos][data-aos-delay='300'],body[data-aos-delay='300'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='300'].aos-animate,body[data-aos-delay='300'] [data-aos].aos-animate{transition-delay:.3s}[data-aos][data-aos][data-aos-duration='350'],body[data-aos-duration='350'] [data-aos]{transition-duration:.35s}[data-aos][data-aos][data-aos-delay='350'],body[data-aos-delay='350'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='350'].aos-animate,body[data-aos-delay='350'] [data-aos].aos-animate{transition-delay:.35s}[data-aos][data-aos][data-aos-duration='400'],body[data-aos-duration='400'] [data-aos]{transition-duration:.4s}[data-aos][data-aos][data-aos-delay='400'],body[data-aos-delay='400'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='400'].aos-animate,body[data-aos-delay='400'] [data-aos].aos-animate{transition-delay:.4s}[data-aos][data-aos][data-aos-duration='450'],body[data-aos-duration='450'] [data-aos]{transition-duration:.45s}[data-aos][data-aos][data-aos-delay='450'],body[data-aos-delay='450'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='450'].aos-animate,body[data-aos-delay='450'] [data-aos].aos-animate{transition-delay:.45s}[data-aos][data-aos][data-aos-duration='500'],body[data-aos-duration='500'] [data-aos]{transition-duration:.5s}[data-aos][data-aos][data-aos-delay='500'],body[data-aos-delay='500'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='500'].aos-animate,body[data-aos-delay='500'] [data-aos].aos-animate{transition-delay:.5s}[data-aos][data-aos][data-aos-duration='550'],body[data-aos-duration='550'] [data-aos]{transition-duration:.55s}[data-aos][data-aos][data-aos-delay='550'],body[data-aos-delay='550'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='550'].aos-animate,body[data-aos-delay='550'] [data-aos].aos-animate{transition-delay:.55s}[data-aos][data-aos][data-aos-duration='600'],body[data-aos-duration='600'] [data-aos]{transition-duration:.6s}[data-aos][data-aos][data-aos-delay='600'],body[data-aos-delay='600'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='600'].aos-animate,body[data-aos-delay='600'] [data-aos].aos-animate{transition-delay:.6s}[data-aos][data-aos][data-aos-duration='650'],body[data-aos-duration='650'] [data-aos]{transition-duration:.65s}[data-aos][data-aos][data-aos-delay='650'],body[data-aos-delay='650'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='650'].aos-animate,body[data-aos-delay='650'] [data-aos].aos-animate{transition-delay:.65s}[data-aos][data-aos][data-aos-duration='700'],body[data-aos-duration='700'] [data-aos]{transition-duration:.7s}[data-aos][data-aos][data-aos-delay='700'],body[data-aos-delay='700'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='700'].aos-animate,body[data-aos-delay='700'] [data-aos].aos-animate{transition-delay:.7s}[data-aos][data-aos][data-aos-duration='750'],body[data-aos-duration='750'] [data-aos]{transition-duration:.75s}[data-aos][data-aos][data-aos-delay='750'],body[data-aos-delay='750'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='750'].aos-animate,body[data-aos-delay='750'] [data-aos].aos-animate{transition-delay:.75s}[data-aos][data-aos][data-aos-duration='800'],body[data-aos-duration='800'] [data-aos]{transition-duration:.8s}[data-aos][data-aos][data-aos-delay='800'],body[data-aos-delay='800'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='800'].aos-animate,body[data-aos-delay='800'] [data-aos].aos-animate{transition-delay:.8s}[data-aos][data-aos][data-aos-duration='850'],body[data-aos-duration='850'] [data-aos]{transition-duration:.85s}[data-aos][data-aos][data-aos-delay='850'],body[data-aos-delay='850'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='850'].aos-animate,body[data-aos-delay='850'] [data-aos].aos-animate{transition-delay:.85s}[data-aos][data-aos][data-aos-duration='900'],body[data-aos-duration='900'] [data-aos]{transition-duration:.9s}[data-aos][data-aos][data-aos-delay='900'],body[data-aos-delay='900'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='900'].aos-animate,body[data-aos-delay='900'] [data-aos].aos-animate{transition-delay:.9s}[data-aos][data-aos][data-aos-duration='950'],body[data-aos-duration='950'] [data-aos]{transition-duration:.95s}[data-aos][data-aos][data-aos-delay='950'],body[data-aos-delay='950'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='950'].aos-animate,body[data-aos-delay='950'] [data-aos].aos-animate{transition-delay:.95s}[data-aos][data-aos][data-aos-duration='1000'],body[data-aos-duration='1000'] [data-aos]{transition-duration:1s}[data-aos][data-aos][data-aos-delay='1000'],body[data-aos-delay='1000'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='1000'].aos-animate,body[data-aos-delay='1000'] [data-aos].aos-animate{transition-delay:1s}[data-aos][data-aos][data-aos-duration='1050'],body[data-aos-duration='1050'] [data-aos]{transition-duration:1.05s}[data-aos][data-aos][data-aos-delay='1050'],body[data-aos-delay='1050'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='1050'].aos-animate,body[data-aos-delay='1050'] [data-aos].aos-animate{transition-delay:1.05s}[data-aos][data-aos][data-aos-duration='1100'],body[data-aos-duration='1100'] [data-aos]{transition-duration:1.1s}[data-aos][data-aos][data-aos-delay='1100'],body[data-aos-delay='1100'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='1100'].aos-animate,body[data-aos-delay='1100'] [data-aos].aos-animate{transition-delay:1.1s}[data-aos][data-aos][data-aos-duration='1150'],body[data-aos-duration='1150'] [data-aos]{transition-duration:1.15s}[data-aos][data-aos][data-aos-delay='1150'],body[data-aos-delay='1150'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='1150'].aos-animate,body[data-aos-delay='1150'] [data-aos].aos-animate{transition-delay:1.15s}[data-aos][data-aos][data-aos-duration='1200'],body[data-aos-duration='1200'] [data-aos]{transition-duration:1.2s}[data-aos][data-aos][data-aos-delay='1200'],body[data-aos-delay='1200'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='1200'].aos-animate,body[data-aos-delay='1200'] [data-aos].aos-animate{transition-delay:1.2s}[data-aos][data-aos][data-aos-duration='1250'],body[data-aos-duration='1250'] [data-aos]{transition-duration:1.25s}[data-aos][data-aos][data-aos-delay='1250'],body[data-aos-delay='1250'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='1250'].aos-animate,body[data-aos-delay='1250'] [data-aos].aos-animate{transition-delay:1.25s}[data-aos][data-aos][data-aos-duration='1300'],body[data-aos-duration='1300'] [data-aos]{transition-duration:1.3s}[data-aos][data-aos][data-aos-delay='1300'],body[data-aos-delay='1300'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='1300'].aos-animate,body[data-aos-delay='1300'] [data-aos].aos-animate{transition-delay:1.3s}[data-aos][data-aos][data-aos-duration='1350'],body[data-aos-duration='1350'] [data-aos]{transition-duration:1.35s}[data-aos][data-aos][data-aos-delay='1350'],body[data-aos-delay='1350'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='1350'].aos-animate,body[data-aos-delay='1350'] [data-aos].aos-animate{transition-delay:1.35s}[data-aos][data-aos][data-aos-duration='1400'],body[data-aos-duration='1400'] [data-aos]{transition-duration:1.4s}[data-aos][data-aos][data-aos-delay='1400'],body[data-aos-delay='1400'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='1400'].aos-animate,body[data-aos-delay='1400'] [data-aos].aos-animate{transition-delay:1.4s}[data-aos][data-aos][data-aos-duration='1450'],body[data-aos-duration='1450'] [data-aos]{transition-duration:1.45s}[data-aos][data-aos][data-aos-delay='1450'],body[data-aos-delay='1450'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='1450'].aos-animate,body[data-aos-delay='1450'] [data-aos].aos-animate{transition-delay:1.45s}[data-aos][data-aos][data-aos-duration='1500'],body[data-aos-duration='1500'] [data-aos]{transition-duration:1.5s}[data-aos][data-aos][data-aos-delay='1500'],body[data-aos-delay='1500'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='1500'].aos-animate,body[data-aos-delay='1500'] [data-aos].aos-animate{transition-delay:1.5s}[data-aos][data-aos][data-aos-duration='1550'],body[data-aos-duration='1550'] [data-aos]{transition-duration:1.55s}[data-aos][data-aos][data-aos-delay='1550'],body[data-aos-delay='1550'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='1550'].aos-animate,body[data-aos-delay='1550'] [data-aos].aos-animate{transition-delay:1.55s}[data-aos][data-aos][data-aos-duration='1600'],body[data-aos-duration='1600'] [data-aos]{transition-duration:1.6s}[data-aos][data-aos][data-aos-delay='1600'],body[data-aos-delay='1600'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='1600'].aos-animate,body[data-aos-delay='1600'] [data-aos].aos-animate{transition-delay:1.6s}[data-aos][data-aos][data-aos-duration='1650'],body[data-aos-duration='1650'] [data-aos]{transition-duration:1.65s}[data-aos][data-aos][data-aos-delay='1650'],body[data-aos-delay='1650'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='1650'].aos-animate,body[data-aos-delay='1650'] [data-aos].aos-animate{transition-delay:1.65s}[data-aos][data-aos][data-aos-duration='1700'],body[data-aos-duration='1700'] [data-aos]{transition-duration:1.7s}[data-aos][data-aos][data-aos-delay='1700'],body[data-aos-delay='1700'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='1700'].aos-animate,body[data-aos-delay='1700'] [data-aos].aos-animate{transition-delay:1.7s}[data-aos][data-aos][data-aos-duration='1750'],body[data-aos-duration='1750'] [data-aos]{transition-duration:1.75s}[data-aos][data-aos][data-aos-delay='1750'],body[data-aos-delay='1750'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='1750'].aos-animate,body[data-aos-delay='1750'] [data-aos].aos-animate{transition-delay:1.75s}[data-aos][data-aos][data-aos-duration='1800'],body[data-aos-duration='1800'] [data-aos]{transition-duration:1.8s}[data-aos][data-aos][data-aos-delay='1800'],body[data-aos-delay='1800'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='1800'].aos-animate,body[data-aos-delay='1800'] [data-aos].aos-animate{transition-delay:1.8s}[data-aos][data-aos][data-aos-duration='1850'],body[data-aos-duration='1850'] [data-aos]{transition-duration:1.85s}[data-aos][data-aos][data-aos-delay='1850'],body[data-aos-delay='1850'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='1850'].aos-animate,body[data-aos-delay='1850'] [data-aos].aos-animate{transition-delay:1.85s}[data-aos][data-aos][data-aos-duration='1900'],body[data-aos-duration='1900'] [data-aos]{transition-duration:1.9s}[data-aos][data-aos][data-aos-delay='1900'],body[data-aos-delay='1900'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='1900'].aos-animate,body[data-aos-delay='1900'] [data-aos].aos-animate{transition-delay:1.9s}[data-aos][data-aos][data-aos-duration='1950'],body[data-aos-duration='1950'] [data-aos]{transition-duration:1.95s}[data-aos][data-aos][data-aos-delay='1950'],body[data-aos-delay='1950'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='1950'].aos-animate,body[data-aos-delay='1950'] [data-aos].aos-animate{transition-delay:1.95s}[data-aos][data-aos][data-aos-duration='2000'],body[data-aos-duration='2000'] [data-aos]{transition-duration:2s}[data-aos][data-aos][data-aos-delay='2000'],body[data-aos-delay='2000'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='2000'].aos-animate,body[data-aos-delay='2000'] [data-aos].aos-animate{transition-delay:2s}[data-aos][data-aos][data-aos-duration='2050'],body[data-aos-duration='2050'] [data-aos]{transition-duration:2.05s}[data-aos][data-aos][data-aos-delay='2050'],body[data-aos-delay='2050'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='2050'].aos-animate,body[data-aos-delay='2050'] [data-aos].aos-animate{transition-delay:2.05s}[data-aos][data-aos][data-aos-duration='2100'],body[data-aos-duration='2100'] [data-aos]{transition-duration:2.1s}[data-aos][data-aos][data-aos-delay='2100'],body[data-aos-delay='2100'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='2100'].aos-animate,body[data-aos-delay='2100'] [data-aos].aos-animate{transition-delay:2.1s}[data-aos][data-aos][data-aos-duration='2150'],body[data-aos-duration='2150'] [data-aos]{transition-duration:2.15s}[data-aos][data-aos][data-aos-delay='2150'],body[data-aos-delay='2150'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='2150'].aos-animate,body[data-aos-delay='2150'] [data-aos].aos-animate{transition-delay:2.15s}[data-aos][data-aos][data-aos-duration='2200'],body[data-aos-duration='2200'] [data-aos]{transition-duration:2.2s}[data-aos][data-aos][data-aos-delay='2200'],body[data-aos-delay='2200'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='2200'].aos-animate,body[data-aos-delay='2200'] [data-aos].aos-animate{transition-delay:2.2s}[data-aos][data-aos][data-aos-duration='2250'],body[data-aos-duration='2250'] [data-aos]{transition-duration:2.25s}[data-aos][data-aos][data-aos-delay='2250'],body[data-aos-delay='2250'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='2250'].aos-animate,body[data-aos-delay='2250'] [data-aos].aos-animate{transition-delay:2.25s}[data-aos][data-aos][data-aos-duration='2300'],body[data-aos-duration='2300'] [data-aos]{transition-duration:2.3s}[data-aos][data-aos][data-aos-delay='2300'],body[data-aos-delay='2300'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='2300'].aos-animate,body[data-aos-delay='2300'] [data-aos].aos-animate{transition-delay:2.3s}[data-aos][data-aos][data-aos-duration='2350'],body[data-aos-duration='2350'] [data-aos]{transition-duration:2.35s}[data-aos][data-aos][data-aos-delay='2350'],body[data-aos-delay='2350'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='2350'].aos-animate,body[data-aos-delay='2350'] [data-aos].aos-animate{transition-delay:2.35s}[data-aos][data-aos][data-aos-duration='2400'],body[data-aos-duration='2400'] [data-aos]{transition-duration:2.4s}[data-aos][data-aos][data-aos-delay='2400'],body[data-aos-delay='2400'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='2400'].aos-animate,body[data-aos-delay='2400'] [data-aos].aos-animate{transition-delay:2.4s}[data-aos][data-aos][data-aos-duration='2450'],body[data-aos-duration='2450'] [data-aos]{transition-duration:2.45s}[data-aos][data-aos][data-aos-delay='2450'],body[data-aos-delay='2450'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='2450'].aos-animate,body[data-aos-delay='2450'] [data-aos].aos-animate{transition-delay:2.45s}[data-aos][data-aos][data-aos-duration='2500'],body[data-aos-duration='2500'] [data-aos]{transition-duration:2.5s}[data-aos][data-aos][data-aos-delay='2500'],body[data-aos-delay='2500'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='2500'].aos-animate,body[data-aos-delay='2500'] [data-aos].aos-animate{transition-delay:2.5s}[data-aos][data-aos][data-aos-duration='2550'],body[data-aos-duration='2550'] [data-aos]{transition-duration:2.55s}[data-aos][data-aos][data-aos-delay='2550'],body[data-aos-delay='2550'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='2550'].aos-animate,body[data-aos-delay='2550'] [data-aos].aos-animate{transition-delay:2.55s}[data-aos][data-aos][data-aos-duration='2600'],body[data-aos-duration='2600'] [data-aos]{transition-duration:2.6s}[data-aos][data-aos][data-aos-delay='2600'],body[data-aos-delay='2600'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='2600'].aos-animate,body[data-aos-delay='2600'] [data-aos].aos-animate{transition-delay:2.6s}[data-aos][data-aos][data-aos-duration='2650'],body[data-aos-duration='2650'] [data-aos]{transition-duration:2.65s}[data-aos][data-aos][data-aos-delay='2650'],body[data-aos-delay='2650'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='2650'].aos-animate,body[data-aos-delay='2650'] [data-aos].aos-animate{transition-delay:2.65s}[data-aos][data-aos][data-aos-duration='2700'],body[data-aos-duration='2700'] [data-aos]{transition-duration:2.7s}[data-aos][data-aos][data-aos-delay='2700'],body[data-aos-delay='2700'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='2700'].aos-animate,body[data-aos-delay='2700'] [data-aos].aos-animate{transition-delay:2.7s}[data-aos][data-aos][data-aos-duration='2750'],body[data-aos-duration='2750'] [data-aos]{transition-duration:2.75s}[data-aos][data-aos][data-aos-delay='2750'],body[data-aos-delay='2750'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='2750'].aos-animate,body[data-aos-delay='2750'] [data-aos].aos-animate{transition-delay:2.75s}[data-aos][data-aos][data-aos-duration='2800'],body[data-aos-duration='2800'] [data-aos]{transition-duration:2.8s}[data-aos][data-aos][data-aos-delay='2800'],body[data-aos-delay='2800'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='2800'].aos-animate,body[data-aos-delay='2800'] [data-aos].aos-animate{transition-delay:2.8s}[data-aos][data-aos][data-aos-duration='2850'],body[data-aos-duration='2850'] [data-aos]{transition-duration:2.85s}[data-aos][data-aos][data-aos-delay='2850'],body[data-aos-delay='2850'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='2850'].aos-animate,body[data-aos-delay='2850'] [data-aos].aos-animate{transition-delay:2.85s}[data-aos][data-aos][data-aos-duration='2900'],body[data-aos-duration='2900'] [data-aos]{transition-duration:2.9s}[data-aos][data-aos][data-aos-delay='2900'],body[data-aos-delay='2900'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='2900'].aos-animate,body[data-aos-delay='2900'] [data-aos].aos-animate{transition-delay:2.9s}[data-aos][data-aos][data-aos-duration='2950'],body[data-aos-duration='2950'] [data-aos]{transition-duration:2.95s}[data-aos][data-aos][data-aos-delay='2950'],body[data-aos-delay='2950'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='2950'].aos-animate,body[data-aos-delay='2950'] [data-aos].aos-animate{transition-delay:2.95s}[data-aos][data-aos][data-aos-duration='3000'],body[data-aos-duration='3000'] [data-aos]{transition-duration:3s}[data-aos][data-aos][data-aos-delay='3000'],body[data-aos-delay='3000'] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay='3000'].aos-animate,body[data-aos-delay='3000'] [data-aos].aos-animate{transition-delay:3s}[data-aos][data-aos][data-aos-easing=linear],body[data-aos-easing=linear] [data-aos]{transition-timing-function:cubic-bezier(.25,.25,.75,.75)}[data-aos][data-aos][data-aos-easing=ease],body[data-aos-easing=ease] [data-aos]{transition-timing-function:ease}[data-aos][data-aos][data-aos-easing=ease-in],body[data-aos-easing=ease-in] [data-aos]{transition-timing-function:ease-in}[data-aos][data-aos][data-aos-easing=ease-out],body[data-aos-easing=ease-out] [data-aos]{transition-timing-function:ease-out}[data-aos][data-aos][data-aos-easing=ease-in-out],body[data-aos-easing=ease-in-out] [data-aos]{transition-timing-function:ease-in-out}[data-aos][data-aos][data-aos-easing=ease-in-back],body[data-aos-easing=ease-in-back] [data-aos]{transition-timing-function:cubic-bezier(.6,-.28,.735,.045)}[data-aos][data-aos][data-aos-easing=ease-out-back],body[data-aos-easing=ease-out-back] [data-aos]{transition-timing-function:cubic-bezier(.175,.885,.32,1.275)}[data-aos][data-aos][data-aos-easing=ease-in-out-back],body[data-aos-easing=ease-in-out-back] [data-aos]{transition-timing-function:cubic-bezier(.68,-.55,.265,1.55)}[data-aos][data-aos][data-aos-easing=ease-in-sine],body[data-aos-easing=ease-in-sine] [data-aos]{transition-timing-function:cubic-bezier(.47,0,.745,.715)}[data-aos][data-aos][data-aos-easing=ease-out-sine],body[data-aos-easing=ease-out-sine] [data-aos]{transition-timing-function:cubic-bezier(.39,.575,.565,1)}[data-aos][data-aos][data-aos-easing=ease-in-out-sine],body[data-aos-easing=ease-in-out-sine] [data-aos]{transition-timing-function:cubic-bezier(.445,.05,.55,.95)}[data-aos][data-aos][data-aos-easing=ease-in-quad],body[data-aos-easing=ease-in-quad] [data-aos]{transition-timing-function:cubic-bezier(.55,.085,.68,.53)}[data-aos][data-aos][data-aos-easing=ease-out-quad],body[data-aos-easing=ease-out-quad] [data-aos]{transition-timing-function:cubic-bezier(.25,.46,.45,.94)}[data-aos][data-aos][data-aos-easing=ease-in-out-quad],body[data-aos-easing=ease-in-out-quad] [data-aos]{transition-timing-function:cubic-bezier(.455,.03,.515,.955)}[data-aos][data-aos][data-aos-easing=ease-in-cubic],body[data-aos-easing=ease-in-cubic] [data-aos]{transition-timing-function:cubic-bezier(.55,.085,.68,.53)}[data-aos][data-aos][data-aos-easing=ease-out-cubic],body[data-aos-easing=ease-out-cubic] [data-aos]{transition-timing-function:cubic-bezier(.25,.46,.45,.94)}[data-aos][data-aos][data-aos-easing=ease-in-out-cubic],body[data-aos-easing=ease-in-out-cubic] [data-aos]{transition-timing-function:cubic-bezier(.455,.03,.515,.955)}[data-aos][data-aos][data-aos-easing=ease-in-quart],body[data-aos-easing=ease-in-quart] [data-aos]{transition-timing-function:cubic-bezier(.55,.085,.68,.53)}[data-aos][data-aos][data-aos-easing=ease-out-quart],body[data-aos-easing=ease-out-quart] [data-aos]{transition-timing-function:cubic-bezier(.25,.46,.45,.94)}[data-aos][data-aos][data-aos-easing=ease-in-out-quart],body[data-aos-easing=ease-in-out-quart] [data-aos]{transition-timing-function:cubic-bezier(.455,.03,.515,.955)}[data-aos^=fade][data-aos^=fade]{opacity:0;transition-property:opacity,transform}[data-aos^=fade][data-aos^=fade].aos-animate{opacity:1;transform:translate(0)}[data-aos=fade-up]{transform:translateY(100px)}[data-aos=fade-down]{transform:translateY(-100px)}[data-aos=fade-right]{transform:translate(-100px)}[data-aos=fade-left]{transform:translate(100px)}[data-aos=fade-up-right]{transform:translate(-100px,100px)}[data-aos=fade-up-left]{transform:translate(100px,100px)}[data-aos=fade-down-right]{transform:translate(-100px,-100px)}[data-aos=fade-down-left]{transform:translate(100px,-100px)}[data-aos^=zoom][data-aos^=zoom]{opacity:0;transition-property:opacity,transform}[data-aos^=zoom][data-aos^=zoom].aos-animate{opacity:1;transform:translate(0) scale(1)}[data-aos=zoom-in]{transform:scale(.6)}[data-aos=zoom-in-up]{transform:translateY(100px) scale(.6)}[data-aos=zoom-in-down]{transform:translateY(-100px) scale(.6)}[data-aos=zoom-in-right]{transform:translate(-100px) scale(.6)}[data-aos=zoom-in-left]{transform:translate(100px) scale(.6)}[data-aos=zoom-out]{transform:scale(1.2)}[data-aos=zoom-out-up]{transform:translateY(100px) scale(1.2)}[data-aos=zoom-out-down]{transform:translateY(-100px) scale(1.2)}[data-aos=zoom-out-right]{transform:translate(-100px) scale(1.2)}[data-aos=zoom-out-left]{transform:translate(100px) scale(1.2)}[data-aos^=slide][data-aos^=slide]{transition-property:transform}[data-aos^=slide][data-aos^=slide].aos-animate{transform:translate(0)}[data-aos=slide-up]{transform:translateY(100%)}[data-aos=slide-down]{transform:translateY(-100%)}[data-aos=slide-right]{transform:translateX(-100%)}[data-aos=slide-left]{transform:translateX(100%)}[data-aos^=flip][data-aos^=flip]{backface-visibility:hidden;transition-property:transform}[data-aos=flip-left]{transform:perspective(2500px) rotateY(-100deg)}[data-aos=flip-left].aos-animate{transform:perspective(2500px) rotateY(0)}[data-aos=flip-right]{transform:perspective(2500px) rotateY(100deg)}[data-aos=flip-right].aos-animate{transform:perspective(2500px) rotateY(0)}[data-aos=flip-up]{transform:perspective(2500px) rotateX(-100deg)}[data-aos=flip-up].aos-animate{transform:perspective(2500px) rotateX(0)}[data-aos=flip-down]{transform:perspective(2500px) rotateX(100deg)}[data-aos=flip-down].aos-animate{transform:perspective(2500px) rotateX(0)}",
			head = document.head || document.getElementsByTagName('head')[0],
			style = document.createElement('style');

		style.type = 'text/css';
		if (style.styleSheet){
		  style.styleSheet.cssText = css;
		} else {
		  style.appendChild(document.createTextNode(css));
		}
		head.appendChild(style);
		!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AOS=t():e.AOS=t()}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var o={};return t.m=e,t.c=o,t.p="dist/",t(0)}([function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},a=o(1),r=(n(a),o(5)),c=n(r),u=o(6),s=n(u),d=o(7),f=n(d),l=o(8),m=n(l),p=o(9),b=n(p),v=o(10),g=n(v),y=o(13),w=n(y),h=[],k=!1,x=document.all&&!window.atob,j={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded"},O=function(){var e=arguments.length<=0||void 0===arguments[0]?!1:arguments[0];return e&&(k=!0),k?(h=(0,g["default"])(h,j),(0,b["default"])(h,j.once),h):void 0},_=function(){h=(0,w["default"])(),O()},z=function(){h.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},A=function(e){return e===!0||"mobile"===e&&m["default"].mobile()||"phone"===e&&m["default"].phone()||"tablet"===e&&m["default"].tablet()||"function"==typeof e&&e()===!0},E=function(e){return j=i(j,e),h=(0,w["default"])(),A(j.disable)||x?z():(document.querySelector("body").setAttribute("data-aos-easing",j.easing),document.querySelector("body").setAttribute("data-aos-duration",j.duration),document.querySelector("body").setAttribute("data-aos-delay",j.delay),"DOMContentLoaded"===j.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?O(!0):"load"===j.startEvent?window.addEventListener(j.startEvent,function(){O(!0)}):document.addEventListener(j.startEvent,function(){O(!0)}),window.addEventListener("resize",(0,s["default"])(O,50,!0)),window.addEventListener("orientationchange",(0,s["default"])(O,50,!0)),window.addEventListener("scroll",(0,c["default"])(function(){(0,b["default"])(h,j.once)},99)),document.addEventListener("DOMNodeRemoved",function(e){var t=e.target;t&&1===t.nodeType&&t.hasAttribute&&t.hasAttribute("data-aos")&&(0,s["default"])(_,50,!0)}),(0,f["default"])("[data-aos]",_),h)};e.exports={init:E,refresh:O,refreshHard:_}},function(e,t){},,,,function(e,t,o){"use strict";function n(e,t,o){var n=!0,a=!0;if("function"!=typeof e)throw new TypeError(c);return i(o)&&(n="leading"in o?!!o.leading:n,a="trailing"in o?!!o.trailing:a),r(e,t,{leading:n,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":a(e);return!!e&&("object"==t||"function"==t)}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},r=o(6),c="Expected a function";e.exports=n},function(e,t){"use strict";function o(e,t,o){function n(t){var o=b,n=v;return b=v=void 0,O=t,y=e.apply(n,o)}function a(e){return O=e,w=setTimeout(d,t),_?n(e):y}function r(e){var o=e-h,n=e-O,i=t-o;return z?x(i,g-n):i}function u(e){var o=e-h,n=e-O;return!h||o>=t||0>o||z&&n>=g}function d(){var e=j();return u(e)?f(e):void(w=setTimeout(d,r(e)))}function f(e){return clearTimeout(w),w=void 0,A&&b?n(e):(b=v=void 0,y)}function l(){void 0!==w&&clearTimeout(w),h=O=0,b=v=w=void 0}function m(){return void 0===w?y:f(j())}function p(){var e=j(),o=u(e);if(b=arguments,v=this,h=e,o){if(void 0===w)return a(h);if(z)return clearTimeout(w),w=setTimeout(d,t),n(h)}return void 0===w&&(w=setTimeout(d,t)),y}var b,v,g,y,w,h=0,O=0,_=!1,z=!1,A=!0;if("function"!=typeof e)throw new TypeError(s);return t=c(t)||0,i(o)&&(_=!!o.leading,z="maxWait"in o,g=z?k(c(o.maxWait)||0,t):g,A="trailing"in o?!!o.trailing:A),p.cancel=l,p.flush=m,p}function n(e){var t=i(e)?h.call(e):"";return t==f||t==l}function i(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function a(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||a(e)&&h.call(e)==m}function c(e){if("number"==typeof e)return e;if(r(e))return d;if(i(e)){var t=n(e.valueOf)?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(p,"");var o=v.test(e);return o||g.test(e)?y(e.slice(2),o?2:8):b.test(e)?d:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},s="Expected a function",d=NaN,f="[object Function]",l="[object GeneratorFunction]",m="[object Symbol]",p=/^\s+|\s+$/g,b=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,g=/^0o[0-7]+$/i,y=parseInt,w=Object.prototype,h=w.toString,k=Math.max,x=Math.min,j=Date.now;e.exports=o},function(e,t){"use strict";function o(e,t){r.push({selector:e,fn:t}),!c&&a&&(c=new a(n),c.observe(i.documentElement,{childList:!0,subtree:!0,removedNodes:!0})),n()}function n(){for(var e,t,o=0,n=r.length;n>o;o++){e=r[o],t=i.querySelectorAll(e.selector);for(var a,c=0,u=t.length;u>c;c++)a=t[c],a.ready||(a.ready=!0,e.fn.call(a,a))}}Object.defineProperty(t,"__esModule",{value:!0});var i=window.document,a=window.MutationObserver||window.WebKitMutationObserver,r=[],c=void 0;t["default"]=o},function(e,t){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),i=function(){function e(){o(this,e)}return n(e,[{key:"phone",value:function(){var e=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e}},{key:"mobile",value:function(){var e=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t["default"]=new i},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t,o){var n=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof n&&("false"===n||!o&&"true"!==n)&&e.node.classList.remove("aos-animate")},n=function(e,t){var n=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,a){o(e,i+n,t)})};t["default"]=n},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(11),a=n(i),r=function(e,t){return e.forEach(function(e,o){e.node.classList.add("aos-init"),e.position=(0,a["default"])(e.node,t.offset)}),e};t["default"]=r},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(12),a=n(i),r=function(e,t){var o=0,n=0,i=window.innerHeight,r={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(r.offset&&!isNaN(r.offset)&&(n=parseInt(r.offset)),r.anchor&&document.querySelectorAll(r.anchor)&&(e=document.querySelectorAll(r.anchor)[0]),o=(0,a["default"])(e).top,r.anchorPlacement){case"top-bottom":break;case"center-bottom":o+=e.offsetHeight/2;break;case"bottom-bottom":o+=e.offsetHeight;break;case"top-center":o+=i/2;break;case"bottom-center":o+=i/2+e.offsetHeight;break;case"center-center":o+=i/2+e.offsetHeight/2;break;case"top-top":o+=i;break;case"bottom-top":o+=e.offsetHeight+i;break;case"center-top":o+=e.offsetHeight/2+i}return r.anchorPlacement||r.offset||isNaN(t)||(n=t),o+n};t["default"]=r},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){for(var t=0,o=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),o+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:o,left:t}};t["default"]=o},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){e=e||document.querySelectorAll("[data-aos]");var t=[];return[].forEach.call(e,function(e,o){t.push({node:e})}),t};t["default"]=o}])});
		//# sourceMappingURL=aos.js.map
		AOS.init();	
		/*КОНЕЦ добавление aos для мобилок*/

		/*fancybox*/
		!function(t,e,n,o){"use strict";function s(t){var e=t.currentTarget,o=t.data?t.data.options:{},s=t.data?t.data.items:[],i="",a=0;t.preventDefault(),t.stopPropagation(),n(e).attr("data-fancybox")&&(i=n(e).data("fancybox")),i?(s=s.length?s.filter('[data-fancybox="'+i+'"]'):n("[data-fancybox="+i+"]"),a=s.index(e)):s=[e],n.fancybox.open(s,o,a)}if(!n)return o;var i={speed:330,loop:!0,opacity:"auto",margin:[44,0],gutter:30,infobar:!0,buttons:!0,slideShow:!0,fullScreen:!0,thumbs:!0,closeBtn:!0,smallBtn:"auto",image:{preload:"auto",protect:!1},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',preload:!0,scrolling:"no",css:{}},baseClass:"",slideClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-controls"><div class="fancybox-infobar"><button data-fancybox-previous class="fancybox-button fancybox-button--left" title="Previous"></button><div class="fancybox-infobar__body"><span class="js-fancybox-index"></span>&nbsp;/&nbsp;<span class="js-fancybox-count"></span></div><button data-fancybox-next class="fancybox-button fancybox-button--right" title="Next"></button></div><div class="fancybox-buttons"><button data-fancybox-close class="fancybox-button fancybox-button--close" title="Close (Esc)"></button></div></div><div class="fancybox-slider-wrap"><div class="fancybox-slider"></div></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>The requested content cannot be loaded. <br /> Please try again later.<p></div>',closeTpl:'<button data-fancybox-close class="fancybox-close-small"></button>',parentEl:"body",touch:!0,keyboard:!0,focus:!0,closeClickOutside:!0,beforeLoad:n.noop,afterLoad:n.noop,beforeMove:n.noop,afterMove:n.noop,onComplete:n.noop,onInit:n.noop,beforeClose:n.noop,afterClose:n.noop,onActivate:n.noop,onDeactivate:n.noop},a=n(t),r=n(e),c=0,l=function(t){return t&&t.hasOwnProperty&&t instanceof n},u=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(e){t.setTimeout(e,1e3/60)}}(),d=function(o){var s;return"function"==typeof n&&o instanceof n&&(o=o[0]),s=o.getBoundingClientRect(),s.bottom>0&&s.right>0&&s.left<(t.innerWidth||e.documentElement.clientWidth)&&s.top<(t.innerHeight||e.documentElement.clientHeight)},p=function(t,o,s){var a=this;a.opts=n.extend(!0,{index:s},i,o||{}),a.id=a.opts.id||++c,a.group=[],a.currIndex=parseInt(a.opts.index,10)||0,a.prevIndex=null,a.prevPos=null,a.currPos=0,a.firstRun=null,a.createGroup(t),a.group.length&&(a.$lastFocus=n(e.activeElement).blur(),a.slides={},a.init(t))};n.extend(p.prototype,{init:function(){var t,e,o=this,s=!1;o.scrollTop=r.scrollTop(),o.scrollLeft=r.scrollLeft(),n.fancybox.getInstance()||(t=n("body").width(),n("html").addClass("fancybox-enabled"),n.fancybox.isTouch?(n.each(o.group,function(t,e){if("image"!==e.type&&"iframe"!==e.type)return s=!0,!1}),s&&n("body").css({position:"fixed",width:t,top:o.scrollTop*-1})):(t=n("body").width()-t,t>1&&n('<style id="fancybox-noscroll" type="text/css">').html(".compensate-for-scrollbar, .fancybox-enabled body { margin-right: "+t+"px; }").appendTo("head"))),e=n(o.opts.baseTpl).attr("id","fancybox-container-"+o.id).data("FancyBox",o).addClass(o.opts.baseClass).hide().prependTo(o.opts.parentEl),o.$refs={container:e,bg:e.find(".fancybox-bg"),controls:e.find(".fancybox-controls"),buttons:e.find(".fancybox-buttons"),slider_wrap:e.find(".fancybox-slider-wrap"),slider:e.find(".fancybox-slider"),caption:e.find(".fancybox-caption")},o.trigger("onInit"),o.activate(),o.current||o.jumpTo(o.currIndex)},createGroup:function(t){var e=this,s=n.makeArray(t);n.each(s,function(t,s){var i,a,r,c,l={},u={},d=[];n.isPlainObject(s)?(l=s,u=s.opts||{}):"object"===n.type(s)&&n(s).length?(i=n(s),d=i.data(),u="options"in d?d.options:{},u="object"===n.type(u)?u:{},l.type="type"in d?d.type:u.type,l.src="src"in d?d.src:u.src||i.attr("href"),u.width="width"in d?d.width:u.width,u.height="height"in d?d.height:u.height,u.thumb="thumb"in d?d.thumb:u.thumb,u.selector="selector"in d?d.selector:u.selector,"srcset"in d&&(u.image={srcset:d.srcset}),u.$orig=i):l={type:"html",content:s+""},l.opts=n.extend(!0,{},e.opts,u),a=l.type,r=l.src||"",a||(l.content?a="html":r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?a="image":r.match(/\.(pdf)((\?|#).*)?$/i)?a="pdf":"#"===r.charAt(0)&&(a="inline"),l.type=a),l.index=e.group.length,l.opts.$orig&&!l.opts.$orig.length&&delete l.opts.$orig,!l.opts.$thumb&&l.opts.$orig&&(l.opts.$thumb=l.opts.$orig.find("img:first")),l.opts.$thumb&&!l.opts.$thumb.length&&delete l.opts.$thumb,"function"===n.type(l.opts.caption)?l.opts.caption=l.opts.caption.apply(s,[e,l]):"caption"in d?l.opts.caption=d.caption:u.$orig&&(l.opts.caption=i.attr("title")),l.opts.caption=l.opts.caption===o?"":l.opts.caption+"","ajax"===a&&(c=r.split(/\s+/,2),c.length>1&&(l.src=c.shift(),l.opts.selector=c.shift())),"auto"==l.opts.smallBtn&&(n.inArray(a,["html","inline","ajax"])>-1?(l.opts.buttons=!1,l.opts.smallBtn=!0):l.opts.smallBtn=!1),"pdf"===a&&(l.type="iframe",l.opts.closeBtn=!0,l.opts.smallBtn=!1,l.opts.iframe.preload=!1),l.opts.modal&&n.extend(!0,l.opts,{infobar:0,buttons:0,keyboard:0,slideShow:0,fullScreen:0,closeClickOutside:0}),e.group.push(l)})},addEvents:function(){var e=this;e.removeEvents(),e.$refs.container.on("click.fb-close","[data-fancybox-close]",function(t){t.stopPropagation(),t.preventDefault(),e.close(t)}).on("click.fb-previous","[data-fancybox-previous]",function(t){t.stopPropagation(),t.preventDefault(),e.previous()}).on("click.fb-next","[data-fancybox-next]",function(t){t.stopPropagation(),t.preventDefault(),e.next()}),n(t).on("orientationchange.fb resize.fb",function(t){u(function(){t&&t.originalEvent&&"resize"===t.originalEvent.type?e.update():(e.$refs.slider_wrap.hide(),u(function(){e.$refs.slider_wrap.show(),e.update()}))})}),r.on("focusin.fb",function(t){var o=n.fancybox?n.fancybox.getInstance():null;!o||n(t.target).hasClass("fancybox-container")||n.contains(o.$refs.container[0],t.target)||(t.stopPropagation(),o.focus(),a.scrollTop(e.scrollTop).scrollLeft(e.scrollLeft))}),r.on("keydown.fb",function(t){var o=e.current,s=t.keyCode||t.which;if(o&&o.opts.keyboard&&!n(t.target).is("input")&&!n(t.target).is("textarea")){if(8===s||27===s)return t.preventDefault(),void e.close(t);switch(s){case 37:case 38:t.preventDefault(),e.previous();break;case 39:case 40:t.preventDefault(),e.next();break;case 80:case 32:t.preventDefault(),e.SlideShow&&(t.preventDefault(),e.SlideShow.toggle());break;case 70:e.FullScreen&&(t.preventDefault(),e.FullScreen.toggle());break;case 71:e.Thumbs&&(t.preventDefault(),e.Thumbs.toggle())}}})},removeEvents:function(){a.off("scroll.fb resize.fb orientationchange.fb"),r.off("keydown.fb focusin.fb click.fb-close"),this.$refs.container.off("click.fb-close click.fb-previous click.fb-next")},previous:function(t){this.jumpTo(this.currIndex-1,t)},next:function(t){this.jumpTo(this.currIndex+1,t)},jumpTo:function(t,e){var n,s,i,a,r=this;if(n=r.firstRun=null===r.firstRun,s=i=t=parseInt(t,10),a=!!r.current&&r.current.opts.loop,!r.isAnimating&&(s!=r.currIndex||n)){if(r.group.length>1&&a)s%=r.group.length,s=s<0?r.group.length+s:s,2==r.group.length?i=t-r.currIndex+r.currPos:(i=s-r.currIndex+r.currPos,Math.abs(r.currPos-(i+r.group.length))<Math.abs(r.currPos-i)?i+=r.group.length:Math.abs(r.currPos-(i-r.group.length))<Math.abs(r.currPos-i)&&(i-=r.group.length));else if(!r.group[s])return void r.update(!1,!1,e);r.current&&(r.current.$slide.removeClass("fancybox-slide--current fancybox-slide--complete"),r.updateSlide(r.current,!0)),r.prevIndex=r.currIndex,r.prevPos=r.currPos,r.currIndex=s,r.currPos=i,r.current=r.createSlide(i),r.group.length>1&&((r.opts.loop||i-1>=0)&&r.createSlide(i-1),(r.opts.loop||i+1<r.group.length)&&r.createSlide(i+1)),r.current.isMoved=!1,r.current.isComplete=!1,e=parseInt(e===o?1.5*r.current.opts.speed:e,10),r.trigger("beforeMove"),r.updateControls(),n&&(r.current.$slide.addClass("fancybox-slide--current"),r.$refs.container.show(),u(function(){r.$refs.bg.css("transition-duration",r.current.opts.speed+"ms"),r.$refs.container.addClass("fancybox-container--ready")})),r.update(!0,!1,n?0:e,function(){r.afterMove()}),r.loadSlide(r.current),n&&r.current.$ghost||r.preload()}},createSlide:function(t){var e,o,s,i=this;if(o=t%i.group.length,o=o<0?i.group.length+o:o,!i.slides[t]&&i.group[o]){if(i.opts.loop&&i.group.length>2)for(var a in i.slides)if(i.slides[a].index===o)return s=i.slides[a],s.pos=t,i.slides[t]=s,delete i.slides[a],i.updateSlide(s),s;e=n('<div class="fancybox-slide"></div>').appendTo(i.$refs.slider),i.slides[t]=n.extend(!0,{},i.group[o],{pos:t,$slide:e,isMoved:!1,isLoaded:!1})}return i.slides[t]},zoomInOut:function(t,e,o){var s,i,a,r=this,c=r.current,l=c.$placeholder,u=c.opts.opacity,p=c.opts.$thumb,h=p?p.offset():0,f=c.$slide.offset();return!!(l&&c.isMoved&&h&&d(p))&&(!("In"===t&&!r.firstRun)&&(n.fancybox.stop(l),r.isAnimating=!0,s={top:h.top-f.top+parseFloat(p.css("border-top-width")||0),left:h.left-f.left+parseFloat(p.css("border-left-width")||0),width:p.width(),height:p.height(),scaleX:1,scaleY:1},"auto"==u&&(u=Math.abs(c.width/c.height-s.width/s.height)>.1),"In"===t?(i=s,a=r.getFitPos(c),a.scaleX=a.width/i.width,a.scaleY=a.height/i.height,u&&(i.opacity=.1,a.opacity=1)):(i=n.fancybox.getTranslate(l),a=s,c.$ghost&&(c.$ghost.show(),c.$image&&c.$image.remove()),i.scaleX=i.width/a.width,i.scaleY=i.height/a.height,i.width=a.width,i.height=a.height,u&&(a.opacity=0)),r.updateCursor(a.width,a.height),delete a.width,delete a.height,n.fancybox.setTranslate(l,i),l.show(),r.trigger("beforeZoom"+t),l.css("transition","all "+e+"ms"),n.fancybox.setTranslate(l,a),setTimeout(function(){var e;l.css("transition","none"),e=n.fancybox.getTranslate(l),e.scaleX=1,e.scaleY=1,n.fancybox.setTranslate(l,e),r.trigger("afterZoom"+t),o.apply(r),r.isAnimating=!1},e),!0))},canPan:function(){var t=this,e=t.current,n=e.$placeholder,o=!1;return n&&(o=t.getFitPos(e),o=Math.abs(n.width()-o.width)>1||Math.abs(n.height()-o.height)>1),o},isScaledDown:function(){var t=this,e=t.current,o=e.$placeholder,s=!1;return o&&(s=n.fancybox.getTranslate(o),s=s.width<e.width||s.height<e.height),s},scaleToActual:function(t,e,s){var i,a,r,c,l,u=this,d=u.current,p=d.$placeholder,h=parseInt(d.$slide.width(),10),f=parseInt(d.$slide.height(),10),g=d.width,b=d.height;p&&(u.isAnimating=!0,t=t===o?.5*h:t,e=e===o?.5*f:e,i=n.fancybox.getTranslate(p),c=g/i.width,l=b/i.height,a=.5*h-.5*g,r=.5*f-.5*b,g>h&&(a=i.left*c-(t*c-t),a>0&&(a=0),a<h-g&&(a=h-g)),b>f&&(r=i.top*l-(e*l-e),r>0&&(r=0),r<f-b&&(r=f-b)),u.updateCursor(g,b),n.fancybox.animate(p,null,{top:r,left:a,scaleX:c,scaleY:l},s||d.opts.speed,function(){u.isAnimating=!1}))},scaleToFit:function(t){var e,o=this,s=o.current,i=s.$placeholder;i&&(o.isAnimating=!0,e=o.getFitPos(s),o.updateCursor(e.width,e.height),n.fancybox.animate(i,null,{top:e.top,left:e.left,scaleX:e.width/i.width(),scaleY:e.height/i.height()},t||s.opts.speed,function(){o.isAnimating=!1}))},getFitPos:function(t){var e,o,s,i,r,c,l,u=t.$placeholder||t.$content,d=t.width,p=t.height,h=t.opts.margin;return!(!u||!u.length||!d&&!p)&&("number"===n.type(h)&&(h=[h,h]),2==h.length&&(h=[h[0],h[1],h[0],h[1]]),a.width()<800&&(h=[0,0,0,0]),e=parseInt(t.$slide.width(),10)-(h[1]+h[3]),o=parseInt(t.$slide.height(),10)-(h[0]+h[2]),s=Math.min(1,e/d,o/p),c=Math.floor(s*d),l=Math.floor(s*p),i=Math.floor(.5*(o-l))+h[0],r=Math.floor(.5*(e-c))+h[3],{top:i,left:r,width:c,height:l})},update:function(t,e,o,s){var i,a=this;a.isAnimating!==!0&&a.current&&(i=a.current.pos*Math.floor(a.current.$slide.width())*-1-a.current.pos*a.current.opts.gutter,o=parseInt(o,10)||0,n.fancybox.stop(a.$refs.slider),t===!1?a.updateSlide(a.current,e):n.each(a.slides,function(t,n){a.updateSlide(n,e)}),o?n.fancybox.animate(a.$refs.slider,null,{top:0,left:i},o,function(){a.current.isMoved=!0,"function"===n.type(s)&&s.apply(a)}):(n.fancybox.setTranslate(a.$refs.slider,{top:0,left:i}),a.current.isMoved=!0,"function"===n.type(s)&&s.apply(a)))},updateSlide:function(t,e){var o,s=this,i=t.$placeholder;t=t||s.current,t&&!s.isClosing&&(o=t.pos*Math.floor(t.$slide.width())+t.pos*t.opts.gutter,o!==t.leftPos&&(n.fancybox.setTranslate(t.$slide,{top:0,left:o}),t.leftPos=o),e!==!1&&i&&(n.fancybox.setTranslate(i,s.getFitPos(t)),t.pos===s.currPos&&s.updateCursor()),t.$slide.trigger("refresh"),s.trigger("onUpdate",t))},updateCursor:function(t,e){var n,s=this,i=s.$refs.container.removeClass("fancybox-controls--canzoomIn fancybox-controls--canzoomOut fancybox-controls--canGrab");!s.isClosing&&s.opts.touch&&(n=t!==o&&e!==o?t<s.current.width&&e<s.current.height:s.isScaledDown(),n?i.addClass("fancybox-controls--canzoomIn"):s.group.length<2?i.addClass("fancybox-controls--canzoomOut"):i.addClass("fancybox-controls--canGrab"))},loadSlide:function(t){var e,o,s,i=this;if(t&&!t.isLoaded&&!t.isLoading){switch(t.isLoading=!0,i.trigger("beforeLoad",t),e=t.type,o=t.$slide,o.off("refresh").trigger("onReset").addClass("fancybox-slide--"+(e||"unknown")).addClass(t.opts.slideClass),e){case"image":i.setImage(t);break;case"iframe":i.setIframe(t);break;case"html":i.setContent(t,t.content);break;case"inline":n(t.src).length?i.setContent(t,n(t.src)):i.setError(t);break;case"ajax":i.showLoading(t),s=n.ajax(n.extend({},t.opts.ajax.settings,{url:t.src,success:function(e,n){"success"===n&&i.setContent(t,e)},error:function(e,n){e&&"abort"!==n&&i.setError(t)}})),o.one("onReset",function(){s.abort()});break;default:i.setError(t)}return!0}},setImage:function(e){var o,s,i,a,r=this,c=e.opts.image.srcset;if(e.isLoaded&&!e.hasError)return void r.afterLoad(e);if(c){i=t.devicePixelRatio||1,a=t.innerWidth*i,s=c.split(",").map(function(t){var e={};return t.trim().split(/\s+/).forEach(function(t,n){var o=parseInt(t.substring(0,t.length-1),10);return 0===n?e.url=t:void(o&&(e.value=o,e.postfix=t[t.length-1]))}),e}),s.sort(function(t,e){return t.value-e.value});for(var l=0;l<s.length;l++){var u=s[l];if("w"===u.postfix&&u.value>=a||"x"===u.postfix&&u.value>=i){o=u;break}}!o&&s.length&&(o=s[s.length-1]),o&&(e.src=o.url,e.width&&e.height&&"w"==o.postfix&&(e.height=e.width/e.height*o.value,e.width=o.value))}e.$placeholder=n('<div class="fancybox-placeholder"></div>').hide().appendTo(e.$slide),e.opts.preload!==!1&&e.opts.width&&e.opts.height&&(e.opts.thumb||e.opts.$thumb)?(e.width=e.opts.width,e.height=e.opts.height,e.$ghost=n("<img />").one("load error",function(){r.isClosing||(n("<img/>")[0].src=e.src,r.revealImage(e,function(){r.setBigImage(e),r.firstRun&&e.index===r.currIndex&&r.preload()}))}).addClass("fancybox-image").appendTo(e.$placeholder).attr("src",e.opts.thumb||e.opts.$thumb.attr("src"))):r.setBigImage(e)},setBigImage:function(t){var e=this,o=n("<img />");t.$image=o.one("error",function(){e.setError(t)}).one("load",function(){clearTimeout(t.timouts),t.timouts=null,e.isClosing||(t.width=this.naturalWidth,t.height=this.naturalHeight,t.opts.image.srcset&&o.attr("sizes","100vw").attr("srcset",t.opts.image.srcset),e.afterLoad(t),t.$ghost&&(t.timouts=setTimeout(function(){t.$ghost.hide()},350)))}).addClass("fancybox-image").attr("src",t.src).appendTo(t.$placeholder),o[0].complete?o.trigger("load"):o[0].error?o.trigger("error"):t.timouts=setTimeout(function(){o[0].complete||t.hasError||e.showLoading(t)},150),t.opts.image.protect&&n('<div class="fancybox-spaceball"></div>').appendTo(t.$placeholder).on("contextmenu.fb",function(t){return 2==t.button&&t.preventDefault(),!0})},revealImage:function(t,e){var o=this;return e=e||n.noop,"image"!==t.type||t.hasError||t.isRevealed===!0?void e.apply(o):(t.isRevealed=!0,void(t.pos===o.currPos&&o.zoomInOut("In",t.opts.speed,e)||(t.$ghost&&!t.isLoaded&&o.updateSlide(t,!0),t.pos===o.currPos?n.fancybox.animate(t.$placeholder,{opacity:0},{opacity:1},300,e):t.$placeholder.show(),e.apply(o))))},setIframe:function(t){var e,s=this,i=t.opts.iframe,a=t.$slide;t.$content=n('<div class="fancybox-content"></div>').css(i.css).appendTo(a),e=n(i.tpl.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",n.fancybox.isTouch?"auto":i.scrolling).appendTo(t.$content),i.preload?(t.$content.addClass("fancybox-tmp"),s.showLoading(t),e.on("load.fb error.fb",function(e){this.isReady=1,t.$slide.trigger("refresh"),s.afterLoad(t)}),a.on("refresh.fb",function(){var n,s,a,r,c,l=t.$content;if(1===e[0].isReady){try{n=e.contents(),s=n.find("body")}catch(t){}s&&s.length&&(i.css.width===o||i.css.height===o)&&(a=e[0].contentWindow.document.documentElement.scrollWidth,r=Math.ceil(s.outerWidth(!0)+(l.width()-a)),c=Math.ceil(s.outerHeight(!0)),l.css({width:i.css.width===o?r+(l.outerWidth()-l.innerWidth()):i.css.width,height:i.css.height===o?c+(l.outerHeight()-l.innerHeight()):i.css.height})),l.removeClass("fancybox-tmp")}})):this.afterLoad(t),e.attr("src",t.src),t.opts.smallBtn&&t.$content.prepend(t.opts.closeTpl),a.one("onReset",function(){try{n(this).find("iframe").hide().attr("src","//about:blank")}catch(t){}n(this).empty(),t.isLoaded=!1})},setContent:function(t,e){var o=this;o.isClosing||(o.hideLoading(t),t.$slide.empty(),l(e)&&e.parent().length?(e.data("placeholder")&&e.parents(".fancybox-slide").trigger("onReset"),e.data({placeholder:n("<div></div>").hide().insertAfter(e)}).css("display","inline-block")):("string"===n.type(e)&&(e=n("<div>").append(e).contents(),3===e[0].nodeType&&(e=n("<div>").html(e))),t.opts.selector&&(e=n("<div>").html(e).find(t.opts.selector))),t.$slide.one("onReset",function(){var o=l(e)?e.data("placeholder"):0;o&&(e.hide().replaceAll(o),e.data("placeholder",null)),t.hasError||(n(this).empty(),t.isLoaded=!1)}),t.$content=n(e).appendTo(t.$slide),t.opts.smallBtn===!0&&t.$content.find(".fancybox-close-small").remove().end().eq(0).append(t.opts.closeTpl),this.afterLoad(t))},setError:function(t){t.hasError=!0,this.setContent(t,t.opts.errorTpl)},showLoading:function(t){var e=this;t=t||e.current,t&&!t.$spinner&&(t.$spinner=n(e.opts.spinnerTpl).appendTo(t.$slide))},hideLoading:function(t){var e=this;t=t||e.current,t&&t.$spinner&&(t.$spinner.remove(),delete t.$spinner)},afterMove:function(){var t=this,e=t.current,o={};e&&(e.$slide.siblings().trigger("onReset"),n.each(t.slides,function(e,n){n.pos>=t.currPos-1&&n.pos<=t.currPos+1?o[n.pos]=n:n&&n.$slide.remove()}),t.slides=o,t.trigger("afterMove"),e.isLoaded&&t.complete())},afterLoad:function(t){var e=this;e.isClosing||(t.isLoading=!1,t.isLoaded=!0,e.trigger("afterLoad",t),e.hideLoading(t),t.$ghost||e.updateSlide(t,!0),t.index===e.currIndex&&t.isMoved?e.complete():t.$ghost||e.revealImage(t))},complete:function(){var t=this,e=t.current;t.revealImage(e,function(){e.isComplete=!0,e.$slide.addClass("fancybox-slide--complete"),t.updateCursor(),t.trigger("onComplete"),e.opts.focus&&"image"!==e.type&&"iframe"!==e.type&&t.focus()})},preload:function(){var t,e,n=this;n.group.length<2||(t=n.slides[n.currPos+1],e=n.slides[n.currPos-1],t&&"image"===t.type&&n.loadSlide(t),e&&"image"===e.type&&n.loadSlide(e))},focus:function(){var t,e=this.current;t=e&&e.isComplete?e.$slide.find('button,:input,[tabindex],a:not(".disabled")').filter(":visible:first"):null,t&&t.length||(t=this.$refs.container),t.focus(),this.$refs.slider_wrap.scrollLeft(0),e&&e.$slide.scrollTop(0)},activate:function(){var t=this;n(".fancybox-container").each(function(){var e=n(this).data("FancyBox");e&&e.uid!==t.uid&&!e.isClosing&&e.trigger("onDeactivate")}),t.current&&(t.$refs.container.index()>0&&t.$refs.container.prependTo(e.body),t.updateControls()),t.trigger("onActivate"),t.addEvents()},close:function(t){var e=this,o=e.current,s=o.opts.speed,i=n.proxy(function(){e.cleanUp(t)},this);return!e.isAnimating&&!e.isClosing&&(e.trigger("beforeClose",t)===!1?(n.fancybox.stop(e.$refs.slider),void u(function(){e.update(!0,!0,150)})):(e.isClosing=!0,o.timouts&&clearTimeout(o.timouts),t!==!0&&n.fancybox.stop(e.$refs.slider),e.$refs.container.removeClass("fancybox-container--active").addClass("fancybox-container--closing"),o.$slide.removeClass("fancybox-slide--complete").siblings().remove(),o.isMoved||o.$slide.css("overflow","visible"),e.removeEvents(),e.hideLoading(o),e.hideControls(),e.updateCursor(),e.$refs.bg.css("transition-duration",s+"ms"),this.$refs.container.removeClass("fancybox-container--ready"),void(t===!0?setTimeout(i,s):e.zoomInOut("Out",s,i)||n.fancybox.animate(e.$refs.container,null,{opacity:0},s,"easeInSine",i))))},cleanUp:function(t){var e,o=this;o.$refs.slider.children().trigger("onReset"),o.$refs.container.empty().remove(),o.trigger("afterClose",t),o.current=null,e=n.fancybox.getInstance(),e?e.activate():(n("html").removeClass("fancybox-enabled"),n("body").removeAttr("style"),a.scrollTop(o.scrollTop).scrollLeft(o.scrollLeft),n("#fancybox-noscroll").remove()),o.$lastFocus&&o.$lastFocus.focus()},trigger:function(t,o){var s,i=Array.prototype.slice.call(arguments,1),a=this,r=o&&o.opts?o:a.current;return r?i.unshift(r):r=a,i.unshift(a),n.isFunction(r.opts[t])&&(s=r.opts[t].apply(r,i)),s===!1?s:void("afterClose"===t?n(e).trigger(t+".fb",i):a.$refs.container.trigger(t+".fb",i))},toggleControls:function(t){this.isHiddenControls?this.updateControls(t):this.hideControls()},hideControls:function(){this.isHiddenControls=!0,this.$refs.container.removeClass("fancybox-show-controls"),this.$refs.container.removeClass("fancybox-show-caption")},updateControls:function(t){var e=this,o=e.$refs.container,s=e.$refs.caption,i=e.current,a=i.index,r=i.opts,c=r.caption;this.isHiddenControls&&t!==!0||(this.isHiddenControls=!1,o.addClass("fancybox-show-controls").toggleClass("fancybox-show-infobar",!!r.infobar&&e.group.length>1).toggleClass("fancybox-show-buttons",!!r.buttons).toggleClass("fancybox-is-modal",!!r.modal),n(".fancybox-button--left",o).toggleClass("fancybox-button--disabled",!r.loop&&a<=0),n(".fancybox-button--right",o).toggleClass("fancybox-button--disabled",!r.loop&&a>=e.group.length-1),n(".fancybox-button--play",o).toggle(!!(r.slideShow&&e.group.length>1)),n(".fancybox-button--close",o).toggle(!!r.closeBtn),n(".js-fancybox-count",o).html(e.group.length),n(".js-fancybox-index",o).html(a+1),i.$slide.trigger("refresh"),s&&s.empty(),c&&c.length?(s.html(c),this.$refs.container.addClass("fancybox-show-caption "),e.$caption=s):this.$refs.container.removeClass("fancybox-show-caption"))}}),n.fancybox={version:"3.0.47",defaults:i,getInstance:function(t){var e=n('.fancybox-container:not(".fancybox-container--closing"):first').data("FancyBox"),o=Array.prototype.slice.call(arguments,1);return e instanceof p&&("string"===n.type(t)?e[t].apply(e,o):"function"===n.type(t)&&t.apply(e,o),e)},open:function(t,e,n){return new p(t,e,n)},close:function(t){var e=this.getInstance();e&&(e.close(),t===!0&&this.close())},isTouch:e.createTouch!==o&&/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),use3d:function(){var n=e.createElement("div");return t.getComputedStyle(n).getPropertyValue("transform")&&!(e.documentMode&&e.documentMode<=11)}(),getTranslate:function(t){var e,n;return!(!t||!t.length)&&(e=t.get(0).getBoundingClientRect(),n=t.eq(0).css("transform"),n&&n.indexOf("matrix")!==-1?(n=n.split("(")[1],n=n.split(")")[0],n=n.split(",")):n=[],n.length?(n=n.length>10?[n[13],n[12],n[0],n[5]]:[n[5],n[4],n[0],n[3]],n=n.map(parseFloat)):n=[0,0,1,1],{top:n[0],left:n[1],scaleX:n[2],scaleY:n[3],opacity:parseFloat(t.css("opacity")),width:e.width,height:e.height})},setTranslate:function(t,e){var n="",s={};if(t&&e)return e.left===o&&e.top===o||(n=(e.left===o?t.position().top:e.left)+"px, "+(e.top===o?t.position().top:e.top)+"px",n=this.use3d?"translate3d("+n+", 0px)":"translate("+n+")"),e.scaleX!==o&&e.scaleY!==o&&(n=(n.length?n+" ":"")+"scale("+e.scaleX+", "+e.scaleY+")"),n.length&&(s.transform=n),e.opacity!==o&&(s.opacity=e.opacity),e.width!==o&&(s.width=e.width),e.height!==o&&(s.height=e.height),t.css(s)},easing:{easeOutCubic:function(t,e,n,o){return n*((t=t/o-1)*t*t+1)+e},easeInCubic:function(t,e,n,o){return n*(t/=o)*t*t+e},easeOutSine:function(t,e,n,o){return n*Math.sin(t/o*(Math.PI/2))+e},easeInSine:function(t,e,n,o){return-n*Math.cos(t/o*(Math.PI/2))+n+e}},stop:function(t){t.removeData("animateID")},animate:function(t,e,s,i,a,r){var c,l,d,p=this,h=null,f=0,g=function(){s.scaleX!==o&&s.scaleY!==o&&e&&e.width!==o&&e.height!==o&&(s.width=e.width*s.scaleX,s.height=e.height*s.scaleY,s.scaleX=1,s.scaleY=1),p.setTranslate(t,s),r()},b=function(n){if(c=[],l=0,t.length&&t.data("animateID")===d){if(n=n||Date.now(),h&&(l=n-h),h=n,f+=l,f>=i)return void g();for(var r in s)s.hasOwnProperty(r)&&e[r]!==o&&(e[r]==s[r]?c[r]=s[r]:c[r]=p.easing[a](f,e[r],s[r]-e[r],i));p.setTranslate(t,c),u(b)}};p.animateID=d=p.animateID===o?1:p.animateID+1,t.data("animateID",d),r===o&&"function"==n.type(a)&&(r=a,a=o),a||(a="easeOutCubic"),r=r||n.noop,e?this.setTranslate(t,e):e=this.getTranslate(t),i?(t.show(),u(b)):g()}},n.fn.fancybox=function(t){return this.off("click.fb-start").on("click.fb-start",{items:this,options:t||{}},s),this},n(e).on("click.fb-start","[data-fancybox]",s)}(window,document,window.jQuery),function(t){"use strict";var e=function(e,n,o){if(e)return o=o||"","object"===t.type(o)&&(o=t.param(o,!0)),t.each(n,function(t,n){e=e.replace("$"+t,n||"")}),o.length&&(e+=(e.indexOf("?")>0?"&":"?")+o),e},n={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"//www.youtube.com/embed/$4",thumb:"//img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1,api:1},paramPlace:3,type:"iframe",url:"//player.vimeo.com/video/$2"},metacafe:{matcher:/metacafe.com\/watch\/(\d+)\/(.*)?/,type:"iframe",url:"//www.metacafe.com/embed/$1/?ap=1"},dailymotion:{matcher:/dailymotion.com\/video\/(.*)\/?(.*)/,params:{additionalInfos:0,autoStart:1},type:"iframe",url:"//www.dailymotion.com/embed/video/$1"},vine:{matcher:/vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,type:"iframe",url:"//vine.co/v/$1/embed/simple"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},google_maps:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/?ll="+(t[9]?t[9]+"&z="+Math.floor(t[10])+(t[12]?t[12].replace(/^\//,"&"):""):t[12])+"&output="+(t[12]&&t[12].indexOf("layer=c")>0?"svembed":"embed")}}};t(document).on("onInit.fb",function(o,s){t.each(s.group,function(o,s){var i,a,r,c,l,u,d=s.src||"",p=!1;s.type||(t.each(n,function(n,o){if(a=d.match(o.matcher),l={},u=n,a){if(p=o.type,o.paramPlace&&a[o.paramPlace]){c=a[o.paramPlace],"?"==c[0]&&(c=c.substring(1)),c=c.split("&");for(var h=0;h<c.length;++h){var f=c[h].split("=",2);2==f.length&&(l[f[0]]=decodeURIComponent(f[1].replace(/\+/g," ")))}}return r=t.extend(!0,{},o.params,s.opts[n],l),d="function"===t.type(o.url)?o.url.call(this,a,r,s):e(o.url,a,r),i="function"===t.type(o.thumb)?o.thumb.call(this,a,r,s):e(o.thumb,a),"vimeo"===u&&(d=d.replace("&%23","#")),!1}}),p?(s.src=d,s.type=p,s.opts.thumb||s.opts.$thumb&&s.opts.$thumb.length||(s.opts.thumb=i),"iframe"===p&&(t.extend(!0,s.opts,{iframe:{preload:!1,scrolling:"no"},smallBtn:!1,closeBtn:!0,fullScreen:!1,slideShow:!1}),s.opts.slideClass+=" fancybox-slide--video")):s.type="iframe")})})}(window.jQuery),function(t,e,n){"use strict";var o=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(e){t.setTimeout(e,1e3/60)}}(),s=function(e){var n=[];e=e.originalEvent||e||t.e,e=e.touches&&e.touches.length?e.touches:e.changedTouches&&e.changedTouches.length?e.changedTouches:[e];for(var o in e)e[o].pageX?n.push({x:e[o].pageX,y:e[o].pageY}):e[o].clientX&&n.push({x:e[o].clientX,y:e[o].clientY});return n},i=function(t,e,n){return e&&t?"x"===n?t.x-e.x:"y"===n?t.y-e.y:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)):0},a=function(t){return t.is("a")||t.is("button")||t.is("input")||t.is("select")||t.is("textarea")||n.isFunction(t.get(0).onclick)},r=function(e){var n=t.getComputedStyle(e)["overflow-y"],o=t.getComputedStyle(e)["overflow-x"],s=("scroll"===n||"auto"===n)&&e.scrollHeight>e.clientHeight,i=("scroll"===o||"auto"===o)&&e.scrollWidth>e.clientWidth;return s||i},c=function(t){for(var e=!1;;){if(e=r(t.get(0)))break;if(t=t.parent(),!t.length||t.hasClass("fancybox-slider")||t.is("body"))break}return e},l=function(t){var e=this;e.instance=t,e.$wrap=t.$refs.slider_wrap,e.$slider=t.$refs.slider,e.$container=t.$refs.container,e.destroy(),e.$wrap.on("touchstart.fb mousedown.fb",n.proxy(e,"ontouchstart"))};l.prototype.destroy=function(){this.$wrap.off("touchstart.fb mousedown.fb touchmove.fb mousemove.fb touchend.fb touchcancel.fb mouseup.fb mouseleave.fb")},l.prototype.ontouchstart=function(e){var o=this,r=n(e.target),l=o.instance,u=l.current,d=u.$content||u.$placeholder;return o.startPoints=s(e),o.$target=r,o.$content=d,o.canvasWidth=Math.round(u.$slide[0].clientWidth),o.canvasHeight=Math.round(u.$slide[0].clientHeight),o.startEvent=e,e.originalEvent.clientX>o.canvasWidth+u.$slide.offset().left||(a(r)||a(r.parent())||c(r)?void 0:u.opts.touch?void(e.originalEvent&&2==e.originalEvent.button||(e.stopPropagation(),e.preventDefault(),!u||o.instance.isAnimating||o.instance.isClosing||!o.startPoints||o.startPoints.length>1&&!u.isMoved||(o.$wrap.off("touchmove.fb mousemove.fb",n.proxy(o,"ontouchmove")),o.$wrap.off("touchend.fb touchcancel.fb mouseup.fb mouseleave.fb",n.proxy(o,"ontouchend")),o.$wrap.on("touchend.fb touchcancel.fb mouseup.fb mouseleave.fb",n.proxy(o,"ontouchend")),o.$wrap.on("touchmove.fb mousemove.fb",n.proxy(o,"ontouchmove")),o.startTime=(new Date).getTime(),o.distanceX=o.distanceY=o.distance=0,o.canTap=!1,o.isPanning=!1,o.isSwiping=!1,o.isZooming=!1,o.sliderStartPos=n.fancybox.getTranslate(o.$slider),o.contentStartPos=n.fancybox.getTranslate(o.$content),o.contentLastPos=null,1!==o.startPoints.length||o.isZooming||(o.canTap=u.isMoved,"image"===u.type&&(o.contentStartPos.width>o.canvasWidth+1||o.contentStartPos.height>o.canvasHeight+1)?(n.fancybox.stop(o.$content),o.isPanning=!0):(n.fancybox.stop(o.$slider),o.isSwiping=!0),o.$container.addClass("fancybox-controls--isGrabbing")),2===o.startPoints.length&&u.isMoved&&!u.hasError&&"image"===u.type&&(u.isLoaded||u.$ghost)&&(o.isZooming=!0,o.isSwiping=!1,o.isPanning=!1,n.fancybox.stop(o.$content),o.centerPointStartX=.5*(o.startPoints[0].x+o.startPoints[1].x)-n(t).scrollLeft(),o.centerPointStartY=.5*(o.startPoints[0].y+o.startPoints[1].y)-n(t).scrollTop(),o.percentageOfImageAtPinchPointX=(o.centerPointStartX-o.contentStartPos.left)/o.contentStartPos.width,o.percentageOfImageAtPinchPointY=(o.centerPointStartY-o.contentStartPos.top)/o.contentStartPos.height,o.startDistanceBetweenFingers=i(o.startPoints[0],o.startPoints[1]))))):(o.endPoints=o.startPoints,o.ontap()))},l.prototype.ontouchmove=function(t){var e=this;t.preventDefault(),e.newPoints=s(t),e.newPoints&&e.newPoints.length&&(e.distanceX=i(e.newPoints[0],e.startPoints[0],"x"),e.distanceY=i(e.newPoints[0],e.startPoints[0],"y"),e.distance=i(e.newPoints[0],e.startPoints[0]),e.distance>0&&(e.isSwiping?e.onSwipe():e.isPanning?e.onPan():e.isZooming&&e.onZoom()))},l.prototype.onSwipe=function(){var e,s=this,i=s.isSwiping,a=s.sliderStartPos.left;i===!0?Math.abs(s.distance)>10&&(s.instance.group.length<2?s.isSwiping="y":!s.instance.current.isMoved||s.instance.opts.touch.vertical===!1||"auto"===s.instance.opts.touch.vertical&&n(t).width()>800?s.isSwiping="x":(e=Math.abs(180*Math.atan2(s.distanceY,s.distanceX)/Math.PI),
		s.isSwiping=e>45&&e<135?"y":"x"),s.canTap=!1,s.instance.current.isMoved=!1,s.startPoints=s.newPoints):("x"==i&&(!s.instance.current.opts.loop&&0===s.instance.current.index&&s.distanceX>0?a+=Math.pow(s.distanceX,.8):!s.instance.current.opts.loop&&s.instance.current.index===s.instance.group.length-1&&s.distanceX<0?a-=Math.pow(-s.distanceX,.8):a+=s.distanceX),s.sliderLastPos={top:"x"==i?0:s.sliderStartPos.top+s.distanceY,left:a},o(function(){n.fancybox.setTranslate(s.$slider,s.sliderLastPos)}))},l.prototype.onPan=function(){var t,e,s,i=this;i.canTap=!1,t=i.contentStartPos.width>i.canvasWidth?i.contentStartPos.left+i.distanceX:i.contentStartPos.left,e=i.contentStartPos.top+i.distanceY,s=i.limitMovement(t,e,i.contentStartPos.width,i.contentStartPos.height),s.scaleX=i.contentStartPos.scaleX,s.scaleY=i.contentStartPos.scaleY,i.contentLastPos=s,o(function(){n.fancybox.setTranslate(i.$content,i.contentLastPos)})},l.prototype.limitMovement=function(t,e,n,o){var s,i,a,r,c=this,l=c.canvasWidth,u=c.canvasHeight,d=c.contentStartPos.left,p=c.contentStartPos.top,h=c.distanceX,f=c.distanceY;return s=Math.max(0,.5*l-.5*n),i=Math.max(0,.5*u-.5*o),a=Math.min(l-n,.5*l-.5*n),r=Math.min(u-o,.5*u-.5*o),n>l&&(h>0&&t>s&&(t=s-1+Math.pow(-s+d+h,.8)||0),h<0&&t<a&&(t=a+1-Math.pow(a-d-h,.8)||0)),o>u&&(f>0&&e>i&&(e=i-1+Math.pow(-i+p+f,.8)||0),f<0&&e<r&&(e=r+1-Math.pow(r-p-f,.8)||0)),{top:e,left:t}},l.prototype.limitPosition=function(t,e,n,o){var s=this,i=s.canvasWidth,a=s.canvasHeight;return n>i?(t=t>0?0:t,t=t<i-n?i-n:t):t=Math.max(0,i/2-n/2),o>a?(e=e>0?0:e,e=e<a-o?a-o:e):e=Math.max(0,a/2-o/2),{top:e,left:t}},l.prototype.onZoom=function(){var e=this,s=e.contentStartPos.width,a=e.contentStartPos.height,r=e.contentStartPos.left,c=e.contentStartPos.top,l=i(e.newPoints[0],e.newPoints[1]),u=l/e.startDistanceBetweenFingers,d=Math.floor(s*u),p=Math.floor(a*u),h=(s-d)*e.percentageOfImageAtPinchPointX,f=(a-p)*e.percentageOfImageAtPinchPointY,g=(e.newPoints[0].x+e.newPoints[1].x)/2-n(t).scrollLeft(),b=(e.newPoints[0].y+e.newPoints[1].y)/2-n(t).scrollTop(),m=g-e.centerPointStartX,y=b-e.centerPointStartY,v=r+(h+m),x=c+(f+y),w={top:x,left:v,scaleX:e.contentStartPos.scaleX*u,scaleY:e.contentStartPos.scaleY*u};e.canTap=!1,e.newWidth=d,e.newHeight=p,e.contentLastPos=w,o(function(){n.fancybox.setTranslate(e.$content,e.contentLastPos)})},l.prototype.ontouchend=function(t){var e=this,o=e.instance.current,i=Math.max((new Date).getTime()-e.startTime,1),a=e.isSwiping,r=e.isPanning,c=e.isZooming;return e.endPoints=s(t),e.$container.removeClass("fancybox-controls--isGrabbing"),e.$wrap.off("touchmove.fb mousemove.fb",n.proxy(this,"ontouchmove")),e.$wrap.off("touchend.fb touchcancel.fb mouseup.fb mouseleave.fb",n.proxy(this,"ontouchend")),e.isSwiping=!1,e.isPanning=!1,e.isZooming=!1,e.canTap?e.ontap():(e.velocityX=e.distanceX/i*.5,e.velocityY=e.distanceY/i*.5,e.speed=o.opts.speed||330,e.speedX=Math.max(.75*e.speed,Math.min(1.5*e.speed,1/Math.abs(e.velocityX)*e.speed)),e.speedY=Math.max(.75*e.speed,Math.min(1.5*e.speed,1/Math.abs(e.velocityY)*e.speed)),void(r?e.endPanning():c?e.endZooming():e.endSwiping(a)))},l.prototype.endSwiping=function(t){var e=this;"y"==t&&Math.abs(e.distanceY)>50?(n.fancybox.animate(e.$slider,null,{top:e.sliderStartPos.top+e.distanceY+150*e.velocityY,left:e.sliderStartPos.left,opacity:0},e.speedY),e.instance.close(!0)):"x"==t&&e.distanceX>50?e.instance.previous(e.speedX):"x"==t&&e.distanceX<-50?e.instance.next(e.speedX):e.instance.update(!1,!0,150)},l.prototype.endPanning=function(){var t,e,o,s=this;s.contentLastPos&&(t=s.contentLastPos.left+s.velocityX*s.speed*2,e=s.contentLastPos.top+s.velocityY*s.speed*2,o=s.limitPosition(t,e,s.contentStartPos.width,s.contentStartPos.height),o.width=s.contentStartPos.width,o.height=s.contentStartPos.height,n.fancybox.animate(s.$content,null,o,s.speed,"easeOutSine"))},l.prototype.endZooming=function(){var t,e,o,s,i=this,a=i.instance.current,r=i.newWidth,c=i.newHeight;i.contentLastPos&&(t=i.contentLastPos.left,e=i.contentLastPos.top,s={top:e,left:t,width:r,height:c,scaleX:1,scaleY:1},n.fancybox.setTranslate(i.$content,s),r<i.canvasWidth&&c<i.canvasHeight?i.instance.scaleToFit(150):r>a.width||c>a.height?i.instance.scaleToActual(i.centerPointStartX,i.centerPointStartY,150):(o=i.limitPosition(t,e,r,c),n.fancybox.animate(i.$content,null,o,i.speed,"easeOutSine")))},l.prototype.ontap=function(){var t=this,e=t.instance,o=e.current,s=t.endPoints[0].x,i=t.endPoints[0].y;if(s-=t.$wrap.offset().left,i-=t.$wrap.offset().top,e.SlideShow&&e.SlideShow.isActive&&e.SlideShow.stop(),!n.fancybox.isTouch)return o.opts.closeClickOutside&&t.$target.is(".fancybox-slide")?void e.close(t.startEvent):void("image"==o.type&&o.isMoved&&(e.canPan()?e.scaleToFit():e.isScaledDown()?e.scaleToActual(s,i):e.group.length<2&&e.close(t.startEvent)));if(t.tapped){if(clearTimeout(t.tapped),t.tapped=null,Math.abs(s-t.x)>50||Math.abs(i-t.y)>50||!o.isMoved)return this;"image"==o.type&&(o.isLoaded||o.$ghost)&&(e.canPan()?e.scaleToFit():e.isScaledDown()&&e.scaleToActual(s,i))}else t.x=s,t.y=i,t.tapped=setTimeout(function(){t.tapped=null,e.toggleControls(!0)},300);return this},n(e).on("onActivate.fb",function(t,e){e&&!e.Guestures&&(e.Guestures=new l(e))}),n(e).on("beforeClose.fb",function(t,e){e&&e.Guestures&&e.Guestures.destroy()})}(window,document,window.jQuery),function(t,e){"use strict";var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{timer:null,isActive:!1,$button:null,speed:3e3,init:function(){var t=this;t.$button=e('<button data-fancybox-play class="fancybox-button fancybox-button--play" title="Slideshow (P)"></button>').appendTo(t.instance.$refs.buttons),t.instance.$refs.container.on("click","[data-fancybox-play]",function(){t.toggle()})},set:function(){var t=this;t.instance&&t.instance.current&&(t.instance.current.opts.loop||t.instance.currIndex<t.instance.group.length-1)?t.timer=setTimeout(function(){t.instance.next()},t.instance.current.opts.slideShow.speed||t.speed):t.stop()},clear:function(){var t=this;clearTimeout(t.timer),t.timer=null},start:function(){var t=this;t.stop(),t.instance&&t.instance.current&&(t.instance.current.opts.loop||t.instance.currIndex<t.instance.group.length-1)&&(t.instance.$refs.container.on({"beforeLoad.fb.player":e.proxy(t,"clear"),"onComplete.fb.player":e.proxy(t,"set")}),t.isActive=!0,t.instance.current.isComplete&&t.set(),t.instance.$refs.container.trigger("onPlayStart"),t.$button.addClass("fancybox-button--pause"))},stop:function(){var t=this;t.clear(),t.instance.$refs.container.trigger("onPlayEnd").off(".player"),t.$button.removeClass("fancybox-button--pause"),t.isActive=!1},toggle:function(){var t=this;t.isActive?t.stop():t.start()}}),e(t).on("onInit.fb",function(t,e){e&&e.group.length>1&&e.opts.slideShow&&!e.SlideShow&&(e.SlideShow=new n(e))}),e(t).on("beforeClose.fb onDeactivate.fb",function(t,e){e&&e.SlideShow&&e.SlideShow.stop()})}(document,window.jQuery),function(t,e){"use strict";var n=function(){var e,n,o,s=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],i={};for(n=0;n<s.length;n++)if(e=s[n],e&&e[1]in t){for(o=0;o<e.length;o++)i[s[0][o]]=e[o];return i}return!1}();if(n){var o={request:function(e){e=e||t.documentElement,e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)},exit:function(){t[n.exitFullscreen]()},toggle:function(t){this.isFullscreen()?this.exit():this.request(t)},isFullscreen:function(){return Boolean(t[n.fullscreenElement])},enabled:function(){return Boolean(t[n.fullscreenEnabled])}};e(t).on({"onInit.fb":function(t,n){var s;n&&n.opts.fullScreen&&!n.FullScreen&&(s=n.$refs.container,n.$refs.button_fs=e('<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="Full screen (F)"></button>').appendTo(n.$refs.buttons),s.on("click.fb-fullscreen","[data-fancybox-fullscreen]",function(t){t.stopPropagation(),t.preventDefault(),o.toggle(s[0])}),n.opts.fullScreen.requestOnStart===!0&&o.request(s[0]))},"beforeMove.fb":function(t,e){e&&e.$refs.button_fs&&e.$refs.button_fs.toggle(!!e.current.opts.fullScreen)},"beforeClose.fb":function(){o.exit()}}),e(t).on(n.fullscreenchange,function(){var t=e.fancybox.getInstance(),n=t?t.current.$placeholder:null;n&&(n.css("transition","none"),t.isAnimating=!1,t.update(!0,!0,0))})}}(document,window.jQuery),function(t,e){"use strict";var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,init:function(){var t=this;t.$button=e('<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="Thumbnails (G)"></button>').appendTo(this.instance.$refs.buttons).on("touchend click",function(e){e.stopPropagation(),e.preventDefault(),t.toggle()})},create:function(){var t,n,o=this.instance;this.$grid=e('<div class="fancybox-thumbs"></div>').appendTo(o.$refs.container),t="<ul>",e.each(o.group,function(e,o){n=o.opts.thumb||(o.opts.$thumb?o.opts.$thumb.attr("src"):null),n||"image"!==o.type||(n=o.src),n&&n.length&&(t+='<li data-index="'+e+'"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="'+n+'" /></li>')}),t+="</ul>",this.$list=e(t).appendTo(this.$grid).on("click touchstart","li",function(){o.jumpTo(e(this).data("index"))}),this.$list.find("img").hide().one("load",function(){var t,n,o,s,i=e(this).parent().removeClass("fancybox-thumbs-loading"),a=i.outerWidth(),r=i.outerHeight();t=this.naturalWidth||this.width,n=this.naturalHeight||this.height,o=t/a,s=n/r,o>=1&&s>=1&&(o>s?(t/=s,n=r):(t=a,n/=o)),e(this).css({width:Math.floor(t),height:Math.floor(n),"margin-top":Math.min(0,Math.floor(.3*r-.3*n)),"margin-left":Math.min(0,Math.floor(.5*a-.5*t))}).show()}).each(function(){this.src=e(this).data("src")})},focus:function(){this.instance.current&&this.$list.children().removeClass("fancybox-thumbs-active").filter('[data-index="'+this.instance.current.index+'"]').addClass("fancybox-thumbs-active").focus()},close:function(){this.$grid.hide()},update:function(){this.instance.$refs.container.toggleClass("fancybox-container--thumbs",this.isVisible),this.isVisible?(this.$grid||this.create(),this.$grid.show(),this.focus()):this.$grid&&this.$grid.hide(),this.instance.update()},hide:function(){this.isVisible=!1,this.update()},show:function(){this.isVisible=!0,this.update()},toggle:function(){this.isVisible?this.hide():this.show()}}),e(t).on("onInit.fb",function(t,e){var o=e.group[0],s=e.group[1];e.opts.thumbs&&!e.Thumbs&&e.group.length>1&&("image"==o.type||o.opts.thumb||o.opts.$thumb)&&("image"==s.type||s.opts.thumb||s.opts.$thumb)&&(e.Thumbs=new n(e))}),e(t).on("beforeMove.fb",function(t,e,n){var o=e&&e.Thumbs;o&&(n.modal?(o.$button.hide(),o.hide()):(e.opts.thumbs.showOnStart===!0&&e.firstRun&&o.show(),o.$button.show(),o.isVisible&&o.focus()))}),e(t).on("beforeClose.fb",function(t,e){e&&e.Thumbs&&(e.Thumbs.isVisible&&e.opts.thumbs.hideOnClosing!==!1&&e.Thumbs.close(),e.Thumbs=null)})}(document,window.jQuery),function(t,e,n){"use strict";function o(){var t=e.location.hash.substr(1),n=t.split("-"),o=n.length>1&&/^\+?\d+$/.test(n[n.length-1])?parseInt(n.pop(-1),10)||1:1,s=n.join("-");return o<1&&(o=1),{hash:t,index:o,gallery:s}}function s(t){var e;""!==t.gallery&&(e=n("[data-fancybox='"+n.escapeSelector(t.gallery)+"']").eq(t.index-1),e.length?e.trigger("click"):n("#"+n.escapeSelector(t.gallery)).trigger("click"))}function i(t){var e;return!!t&&(e=t.current?t.current.opts:t.opts,e.$orig?e.$orig.data("fancybox"):e.hash||"")}n.escapeSelector||(n.escapeSelector=function(t){var e=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,n=function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t};return(t+"").replace(e,n)});var a=null;n(function(){setTimeout(function(){n.fancybox.defaults.hash!==!1&&(n(e).on("hashchange.fb",function(){var t=o();n.fancybox.getInstance()?a&&a!==t.gallery+"-"+t.index&&(a=null,n.fancybox.close()):""!==t.gallery&&s(t)}),n(t).on({"onInit.fb":function(t,e){var n=o(),s=i(e);s&&n.gallery&&s==n.gallery&&(e.currIndex=n.index-1)},"beforeMove.fb":function(n,o,s){var r=i(o);r&&""!==r&&(e.location.hash.indexOf(r)<0&&(o.opts.origHash=e.location.hash),a=r+(o.group.length>1?"-"+(s.index+1):""),"pushState"in history?history.pushState("",t.title,e.location.pathname+e.location.search+"#"+a):e.location.hash=a)},"beforeClose.fb":function(n,o,s){var r=i(o),c=o&&o.opts.origHash?o.opts.origHash:"";r&&""!==r&&("pushState"in history?history.pushState("",t.title,e.location.pathname+e.location.search+c):e.location.hash=c),a=null}}),s(o()))},50)})}(document,window,window.jQuery);		
		/**/
		$("[data-fancybox]").fancybox({
		// Options will go here
		});
		$body.on('click', '.js-sm-0, .js-sm-1, .js-sm-2, .js-sm-3, .js-sm-4, .js-sm-5, .js-sm-6', function(event) {
			event.preventDefault();
			$('.js-toggle-menu').removeClass('active')
			$("body, html").animate({scrollTop: $('.page' + $(this).data('sm')).offset().top}, 1000);
		});
	} else {
		scrollPage.init();
	}
	$(window).trigger('resize');
})();