
export default class Core {

    constructor() {
		this.sideNav();
		this.pfScrollBar();
		this.tooltipInit();
		this.popOverInit();
		this.toastInit();
	}
	
    sideNav() {
		const appLayout =  $('.app');
		const isFolded = 'is-folded';
		const isExpand = 'is-expand';
		const active = 'active';
		const drodpDownItem = '.side-nav .side-nav-menu .nav-item .dropdown-menu li'

		
			if ($(drodpDownItem).hasClass('active')) {
				$( drodpDownItem + '.' + active).parent().parent().addClass('open') 
			}

        $('.side-nav .side-nav-menu li a').on('click', (e) => {
			const $this = $(e.currentTarget);
			
			if ($this.parent().hasClass("open")) {

				$this.parent().children('.dropdown-menu').slideUp(200, ()=> {
					$this.parent().removeClass("open");
				});

			} else {
				$this.parent().parent().children('li.open').children('.dropdown-menu').slideUp(200);
				$this.parent().parent().children('li.open').children('a').removeClass('open');
				$this.parent().parent().children('li.open').removeClass("open");
				$this.parent().children('.dropdown-menu').slideDown(200, ()=> {
					$this.parent().addClass("open");
				});
			}
		});

		$('.header .nav-left .desktop-toggle').on('click', () => {
			appLayout.toggleClass(isFolded)
		});

		$('.header .nav-left .mobile-toggle').on('click', () => {
			appLayout.toggleClass(isExpand)
		});
	} 

	pfScrollBar() {
		$('.scrollable').perfectScrollbar();
	}
	
	tooltipInit() {
		$('[data-toggle="tooltip"]').tooltip()
	}

	popOverInit() {
		$('[data-toggle="popover"]').popover({
			trigger: 'focus'
		})
	}

	toastInit() {
		$('.toast').toast();
	}
}    