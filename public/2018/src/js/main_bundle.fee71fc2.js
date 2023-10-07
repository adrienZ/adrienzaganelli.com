webpackJsonp(
	[0],
	{
		12: function (e, t, n) {
			'use strict'
			Object.defineProperty(t, '__esModule', { value: !0 })
			var o =
					Object.assign ||
					function (e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t]
							for (var o in n)
								Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
						}
						return e
					},
				r = n(0)
			t.default = function (e) {
				return (0, r.h)(
					'a',
					o({}, e, { rel: 'noopener noreferrer', target: '_blank' }),
					e.children
				)
			}
		},
		13: function (e, t, n) {
			'use strict'
			function o(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function')
			}
			Object.defineProperty(t, '__esModule', { value: !0 })
			var r = (function () {
					function e(e, t) {
						for (var n = 0; n < t.length; n++) {
							var o = t[n]
							;(o.enumerable = o.enumerable || !1),
								(o.configurable = !0),
								'value' in o && (o.writable = !0),
								Object.defineProperty(e, o.key, o)
						}
					}
					return function (t, n, o) {
						return n && e(t.prototype, n), o && e(t, o), t
					}
				})(),
				s = (function () {
					function e(t) {
						o(this, e), (this.config = t), this.do()
					}
					return (
						r(e, [
							{
								key: 'getRoute',
								value: function () {
									return window.location.hash
										.replace(/\/[0-9]/g, '')
										.replace(/^#/, '')
										.split('/')[0]
								},
							},
							{
								key: 'setRoute',
								value: function (e) {
									this.clearRoute(), (window.location.hash = e)
								},
							},
							{
								key: 'clearRoute',
								value: function () {
									'pushState' in window.history
										? history.pushState(
												'',
												document.title,
												window.location.pathname
										  )
										: (window.location.hash = '')
								},
							},
							{
								key: 'do',
								value: function () {
									var e = this.getRoute(),
										t = this.config
									t.hasOwnProperty(e) && 'function' == typeof t[e] && t[e]()
								},
							},
						]),
						e
					)
				})()
			t.default = s
		},
		17: function (e, t, n) {
			'use strict'
			Object.defineProperty(t, '__esModule', { value: !0 })
			var o = n(0),
				r = n(3)
			t.default = function (e) {
				return (0, o.h)(
					'div',
					{ class: 'carousel__arrow' },
					(0, o.h)(
						'button',
						{ onClick: e.previous, class: 'carousel__arrow--prev' },
						(0, o.h)(r.arrowSvg)
					),
					(0, o.h)(
						'button',
						{ onClick: e.next, class: 'carousel__arrow--next' },
						(0, o.h)(r.arrowSvg)
					)
				)
			}
		},
		27: function (e, t, n) {
			e.exports = n(28)
		},
		28: function (e, t, n) {
			'use strict'
			function o(e) {
				return e && e.__esModule ? e : { default: e }
			}
			var r = n(0),
				s = n(29),
				i = o(s),
				a = n(70)
			o(a)
			window.onload = function () {
				var e = document.querySelector('.loader')
				e.classList.add('loaded'),
					setTimeout(function () {
						return e.remove()
					}, 1e3),
					(0, r.render)(
						(0, r.h)(i.default, null),
						document.getElementById('app')
					)
			}
		},
		29: function (e, t, n) {
			'use strict'
			function o(e) {
				return e && e.__esModule ? e : { default: e }
			}
			function r(e) {
				if (Array.isArray(e)) {
					for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]
					return n
				}
				return Array.from(e)
			}
			function s(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function')
			}
			function i(e, t) {
				if (!e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					)
				return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
			}
			function a(e, t) {
				if ('function' != typeof t && null !== t)
					throw new TypeError(
						'Super expression must either be null or a function, not ' +
							typeof t
					)
				;(e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0,
					},
				})),
					t &&
						(Object.setPrototypeOf
							? Object.setPrototypeOf(e, t)
							: (e.__proto__ = t))
			}
			Object.defineProperty(t, '__esModule', { value: !0 })
			var l = (function () {
					function e(e, t) {
						for (var n = 0; n < t.length; n++) {
							var o = t[n]
							;(o.enumerable = o.enumerable || !1),
								(o.configurable = !0),
								'value' in o && (o.writable = !0),
								Object.defineProperty(e, o.key, o)
						}
					}
					return function (t, n, o) {
						return n && e(t.prototype, n), o && e(t, o), t
					}
				})(),
				c = n(0),
				u = n(30),
				h = o(u),
				d = n(64),
				p = o(d),
				f = n(65),
				m = o(f),
				v = n(26),
				b = o(v),
				g = n(3),
				y = n(13),
				w = o(y),
				_ = n(12),
				k = o(_),
				x = (function (e) {
					function t() {
						s(this, t)
						var e = i(
							this,
							(t.__proto__ || Object.getPrototypeOf(t)).call(this)
						)
						return (
							(document.body.scrollTop = 0),
							(document.documentElement.scrollTop = 0),
							(e.state = { expandedView: null, menu: !1, about: !1 }),
							(e.router = new w.default({
								projects: e.preActivateProject.bind(e),
							})),
							e
						)
					}
					return (
						a(t, e),
						l(t, [
							{
								key: 'enableExpandedView',
								value: function (e, t, n) {
									this.setState({ expandedView: e }),
										(this.props = Object.assign(this.props, {
											project: p.default[t - 1],
											previousProject:
												p.default[t - 2] || p.default[p.default.length - 1],
											nextProject: p.default[t] || p.default[0],
											onClosePost: n,
										}))
								},
							},
							{
								key: 'disableExpandedView',
								value: function () {
									var e = this
									this.backToTop(
										{
											after: function () {
												return e.setState({ expandedView: null })
											},
										},
										!0
									)
								},
							},
							{
								key: 'backToTop',
								value: function () {
									var e =
											arguments.length > 0 && void 0 !== arguments[0]
												? arguments[0]
												: {},
										t = arguments[1],
										n = this.base.querySelector('.post')
									!(function (e) {
										e.animateScroll(t ? 0 : n.offsetTop || 0, {
											easing: 'easeInOutQuart',
										})
									})(new b.default(null, e)),
										this.base.querySelector('.app-to-top').classList.add('hide')
								},
							},
							{
								key: 'preActivateProject',
								value: function () {
									var e = window.location.hash.split('/'),
										t = e.slice(-1)[0],
										n = p.default.filter(function (e) {
											return e.slug === t
										})
									if ((n = !!n.length && n[0])) return p.default.indexOf(n) + 1
								},
							},
							{
								key: 'easterEgg',
								value: function () {
									this.setState({ easterEgg: !0 }),
										this.carouselMethods.setPosition(0)
								},
							},
							{
								key: 'getCarousel',
								value: function (e) {
									this.carouselMethods = e
								},
							},
							{
								key: 'toggleMenu',
								value: function () {
									this.setState({ menu: !this.state.menu }),
										this.state.menu
											? this.carouselMethods.scrollManager.destroy()
											: this.carouselMethods.scrollManager.start()
								},
							},
							{
								key: 'toggleAbout',
								value: function () {
									this.setState({ about: !this.state.about }),
										this.state.menu
											? this.carouselMethods.scrollManager.destroy()
											: this.carouselMethods.scrollManager.start()
								},
							},
							{
								key: 'loadProject',
								value: function (e) {
									var t = parseInt(e.target.dataset.id)
									this.state.expandedView && this.carouselMethods.onClosePost(),
										this.carouselMethods.setPosition(t),
										this.toggleMenu()
								},
							},
							{
								key: 'render',
								value: function () {
									var e = this
									return (0, c.h)(
										'div',
										{ class: 'app__container' },
										(0, c.h)(
											'p',
											{
												onClick: this.easterEgg.bind(this),
												class:
													'brandname animated ' +
													(this.state.easterEgg ? 'hinge' : ''),
											},
											'ADRIEN ZAGANELLI'
										),
										(0, c.h)(
											'div',
											{
												class:
													'app__menu big-modal ' +
													(this.state.menu ? 'open' : ''),
											},
											(0, c.h)(
												'button',
												{
													class: 'close app__menu--close',
													onClick: this.toggleMenu.bind(this),
												},
												(0, g.closeIcon)()
											),
											(0, c.h)(
												'ul',
												{ class: 'app__menu--list big-modal__container' },
												(0, c.h)(
													'li',
													{
														class: 'app__menu--item',
														onClick: this.toggleAbout.bind(this),
													},
													' CONTACT & ABOUT'
												),
												(0, c.h)(
													'li',
													{
														'data-id': '0',
														onClick: this.loadProject.bind(this),
														class: 'app__menu--item active',
													},
													'HOME'
												),
												p.default.map(function (t, n) {
													return (0,
													c.h)('li', { 'data-id': n + 1, class: 'app__menu--item' }, (0, c.h)('button', { 'data-id': n + 1, onClick: e.loadProject.bind(e) }, t.name.toUpperCase()))
												})
											)
										),
										(0, c.h)(
											'div',
											{
												class:
													'app__about big-modal ' +
													(this.state.about ? 'open' : ''),
											},
											(0, c.h)(
												'button',
												{
													class: 'close app__about--close',
													onClick: this.toggleAbout.bind(this),
												},
												(0, g.closeIcon)(),
												' '
											),
											(0, c.h)(
												'div',
												{ class: 'app__about--container big-modal__container' },
												(0, c.h)(
													'div',
													{ class: 'app__about--text' },
													(0, c.h)('h3', null, 'ABOUT ME'),
													(0, c.h)(
														'p',
														null,
														'Hi, my name is Adrien Zaganelli, nice to meet you!'
													),
													(0, c.h)(
														'p',
														null,
														'I am doing my final year at HETIC, learning how to code, design and do business on the Web. I like to try new things everyday to master new skills.'
													),
													(0, c.h)(
														'p',
														null,
														"From Paris to Montréal, I've worked in several nice companies like ",
														(0, c.h)(
															k.default,
															{ href: 'https://agence-me.com' },
															(0, c.h)('i', null, 'AgenceMe')
														),
														', ',
														(0, c.h)(
															k.default,
															{ href: 'https://sketchfab.com' },
															(0, c.h)('i', null, 'Sketchfab')
														),
														', ',
														(0, c.h)(
															k.default,
															{ href: 'https://akufen.ca' },
															(0, c.h)('i', null, 'Akufen Studio')
														),
														'.'
													),
													(0, c.h)(
														'p',
														null,
														(0, c.h)(
															'b',
															null,
															"I'm looking for a new job in 2020 in Paris."
														)
													),
													(0, c.h)(
														'p',
														null,
														'When I can, I write some articles for tech publishers, find them below: '
													),
													(0, c.h)(
														'ul',
														{ style: 'font-size: 90%' },
														(0, c.h)(
															'li',
															null,
															(0, c.h)(
																k.default,
																{
																	href: 'https://medium.com/free-code-camp/time-saving-css-techniques-to-create-responsive-images-ebb1e84f90d5',
																},
																'Time-saving CSS techniques to create responsive images'
															)
														),
														(0, c.h)(
															'li',
															null,
															(0, c.h)(
																k.default,
																{
																	href: 'https://medium.com/free-code-camp/how-to-make-your-app-work-offline-with-the-power-of-javascript-685d968bcfbb',
																},
																'How to make your app work offline with the power of JavaScript'
															)
														)
													),
													(0, c.h)(
														'p',
														null,
														'Last but not least, Iʼm available for freelance: ',
														(0, c.h)(
															k.default,
															{ href: 'mailto:adrienzaganelli@gmail.com' },
															'adrienzaganelli@gmail.com'
														)
													),
													(0, c.h)(
														'div',
														{ class: 'app__about--networks' },
														g.socialIcons.map(function (e) {
															return (0,
															c.h)(k.default, { href: e.href, class: 'app__about--icon' }, e.svg)
														})
													)
												)
											)
										),
										(0, c.h)(h.default, {
											forcedFocus: this.preActivateProject(),
											projects: ['me'].concat(r(p.default)),
											expandViewHandler: this.enableExpandedView.bind(this),
											interval: 15e3,
											toggleMenu: this.toggleMenu.bind(this),
											onClosePost: this.props.onClosePost,
											sendMethods: this.getCarousel.bind(this),
											disableExpandedView: this.disableExpandedView.bind(this),
										}),
										!this.state.expandedView &&
											(0, c.h)(
												'button',
												{
													class: 'contact animated fadeIn',
													onClick: this.toggleAbout.bind(this),
												},
												'contact & about'
											),
										this.state.expandedView &&
											(0, c.h)(m.default, {
												project: this.props.project,
												previousProject: this.props.previousProject,
												carouselMethods: this.carouselMethods,
												nextProject: this.props.nextProject,
												onClosePost: this.props.onClosePost,
												expandedView: this.state.expandedView,
											}),
										this.state.expandedView &&
											(0, c.h)(
												'button',
												{
													class: 'app-to-top',
													onClick: this.backToTop.bind(this),
												},
												(0, c.h)(g.arrowSvg)
											)
									)
								},
							},
						]),
						t
					)
				})(c.Component)
			t.default = x
		},
		3: function (e, t, n) {
			'use strict'
			function o(e, t, n) {
				return (
					t in e
						? Object.defineProperty(e, t, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (e[t] = n),
					e
				)
			}
			Object.defineProperty(t, '__esModule', { value: !0 }),
				(t.socialIcons =
					t.closeIcon =
					t.glowButtonStyle =
					t.hex2rgb =
					t.footerSvg =
					t.detectMedia =
					t.carouselMask =
					t.arrowSvg =
						void 0)
			var r = n(0),
				s =
					((t.arrowSvg = function () {
						var e =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: ''
						return (0, r.h)(
							'svg',
							{
								class: 'previous',
								version: '1.1',
								id: e,
								xmlns: 'http://www.w3.org/2000/svg',
								xmlnsXlink: 'http://www.w3.org/1999/xlink',
								x: '0px',
								y: '0px',
								viewBox: '0 0 40 22',
								style: 'enable-background:new 0 0 40 22;',
							},
							(0, r.h)(
								'g',
								{ id: 'Symbols' },
								(0, r.h)(
									'g',
									{
										id: 'arrow-nav',
										transform: 'translate(20.000000, -1.000000)',
									},
									(0, r.h)(
										'g',
										{
											id: 'Group-6-Copy',
											transform: 'translate(-20.000000, 0.000000)',
										},
										(0, r.h)(
											'g',
											{
												transform:
													'translate(20.000000, 11.582563) scale(1, -1) translate(-20.000000, -11.582563) translate(0.000000, 0.582563)',
											},
											(0, r.h)(
												'g',
												{
													id: 'Group',
													transform:
														'translate(19.978560, 10.563606) scale(-1, 1) rotate(90.000000) translate(-19.978560, -10.563606) translate(9.478560, -8.936394)',
												},
												(0, r.h)('path', {
													id: 'Shape',
													class: 'st0',
													d: 'M20.1,20.2c-0.2,0-0.4-0.1-0.6-0.2L0.3,1.4C0,1.1,0,0.6,0.3,0.3s0.8-0.3,1.1,0l19.2,18.5 c0.3,0.3,0.3,0.8,0,1.1C20.5,20.1,20.3,20.2,20.1,20.2z',
												}),
												(0, r.h)('path', {
													id: 'Shape_1_',
													class: 'st0',
													d: 'M0.9,38.8c-0.2,0-0.4-0.1-0.6-0.2c-0.3-0.3-0.3-0.8,0-1.1l19.2-18.7c0.3-0.3,0.8-0.3,1.1,0 c0.3,0.3,0.3,0.8,0,1.1L1.4,38.6C1.3,38.8,1.1,38.8,0.9,38.8z',
												})
											)
										)
									)
								)
							)
						)
					}),
					(t.carouselMask = function () {
						return (0, r.h)(
							'svg',
							null,
							(0, r.h)(
								'defs',
								null,
								(0, r.h)(
									'clipPath',
									{ id: 'carousel__mask' },
									(0, r.h)('polygon', {
										id: 'Mask',
										points: '259.694836 0 851 0 851 648 1.13686838e-13 648',
									})
								)
							)
						)
					}),
					(t.detectMedia = function (e) {
						var t =
								arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
							n = arguments[2]
						if ('mp4' === /(?:\.([^.]+))?$/.exec(e)[1])
							return t
								? '<video class="carousel__main--video" src=' +
										e +
										' autoplay muted></video>'
								: (0, r.h)(
										'video',
										{
											key: n ? n.key : 0,
											class: 'carousel__main--video animated',
											autoplay: !0,
											loop: !0,
											muted: !0,
										},
										(0, r.h)('source', { src: e, type: 'video/mp4' })
								  )
						var s
						return t
							? '<img class="carousel__main--img" src=' + e + ' />'
							: (0, r.h)(
									'img',
									((s = {
										key: n ? n.key : 0,
										class: 'carousel__main--img animated',
									}),
									o(s, 'key', ''),
									o(s, 'src', e),
									s)
							  )
					}),
					(t.footerSvg = function () {
						return (0, r.h)(
							'svg',
							{
								'data-name': 'Calque 1',
								xmlns: 'http://www.w3.org/2000/svg',
								viewBox: '0 0 412.17 464.41',
							},
							(0, r.h)('polygon', {
								class: 'cls-1',
								points: '22.7 395.8 197.6 2 390 395.8 22.7 395.8',
							}),
							(0, r.h)('polyline', {
								class: 'cls-2',
								points: '197.6 2 277 164.6 302.5 216.8',
							}),
							(0, r.h)('polyline', {
								class: 'cls-2',
								points: '197.6 2 125.6 164.2 102.2 216.8',
							}),
							(0, r.h)('line', {
								class: 'cls-3',
								x1: '125.6',
								y1: '164.2',
								x2: '277',
								y2: '164.2',
							}),
							(0, r.h)('line', {
								class: 'cls-2',
								x1: '125.6',
								y1: '395.8',
								x2: '277',
								y2: '395.8',
							}),
							(0, r.h)('line', {
								class: 'cls-2',
								x1: '277',
								y1: '164.6',
								x2: '125.6',
								y2: '395.8',
							}),
							(0, r.h)(
								'text',
								{ class: 'cls-4', transform: 'translate(0 452.03)' },
								'ADRIEN Z'
							),
							(0, r.h)(
								'text',
								{ class: 'cls-5', transform: 'translate(201.26 452.03)' },
								'A'
							),
							(0, r.h)(
								'text',
								{ class: 'cls-4', transform: 'translate(229.87 452.03)' },
								'GANELLI'
							)
						)
					}),
					(t.hex2rgb = function (e) {
						return [
							('0x' + e[1] + e[2]) | 0,
							('0x' + e[3] + e[4]) | 0,
							('0x' + e[5] + e[6]) | 0,
						]
					}))
			;(t.glowButtonStyle = function (e, t) {
				return (
					'\n  background: linear-gradient(to right, ' +
					e[0] +
					', ' +
					e[1] +
					'), ' +
					e[1] +
					';\n  outline-color: ' +
					e[0] +
					';\n  ' +
					(t
						? 'box-shadow:\n      -.5rem 0 2rem .1rem rgba(' +
						  s(e[0]) +
						  ', .35),\n      -.5rem 0 4rem .1rem rgba(' +
						  s(e[0]) +
						  ', .15),\n      .5rem 0 2rem .1rem rgba(' +
						  s(e[1]) +
						  ', .35),\n      .5rem 0 4rem .1rem rgba(' +
						  s(e[1]) +
						  ', .15);'
						: '') +
					'\n'
				)
			}),
				(t.closeIcon = function () {
					return (0, r.h)(
						'svg',
						{
							version: '1.1',
							id: 'Layer_1',
							xmlns: 'http://www.w3.org/2000/svg',
							x: '0px',
							y: '0px',
							viewBox: '0 0 256 256',
							style: 'enable-background:new 0 0 256 256;',
						},
						(0, r.h)('path', {
							class: 'st0',
							d: 'M137.1,128l75.5-75.5c2.5-2.5,2.5-6.6,0-9.1s-6.6-2.5-9.1,0L128,118.9L52.5,43.5C50,41,46,41,43.5,43.5 s-2.5,6.6,0,9.1l75.5,75.5l-75.5,75.5c-2.5,2.5-2.5,6.6,0,9.1c1.2,1.2,2.9,1.9,4.5,1.9s3.3-0.6,4.5-1.9l75.5-75.5l75.5,75.5 c1.2,1.2,2.9,1.9,4.5,1.9s3.3-0.6,4.5-1.9c2.5-2.5,2.5-6.6,0-9.1L137.1,128z',
						})
					)
				}),
				(t.socialIcons = [
					{
						svg: (0, r.h)(
							'svg',
							{
								version: '1.1',
								x: '0px',
								y: '0px',
								viewBox: '0 0 24 24',
								style: 'enable-background:new 0 0 24 24;',
							},
							(0, r.h)('rect', {
								x: '3',
								y: '9',
								class: 'st0',
								width: '4',
								height: '11',
							}),
							(0, r.h)('circle', { class: 'st0', cx: '5', cy: '5', r: '2' }),
							(0, r.h)('path', {
								class: 'st0',
								d: 'M16.5,8.2c-1.4,0-2.7,0.6-3.5,1.7V9H9v11h4v-7c0-1.1,0.9-2,2-2s2,0.9,2,2v7h4v-7.2C21,10.3,19,8.2,16.5,8.2z',
							})
						),
						href: 'https://www.linkedin.com/in/adrienzaganelli',
					},
					{
						svg: (0, r.h)(
							'svg',
							{
								version: '1.1',
								x: '0px',
								y: '0px',
								viewBox: '0 0 32 32',
								style: 'enable-background:new 0 0 32 32;',
							},
							(0, r.h)('path', {
								class: 'st0',
								d: 'M16,0C7.2,0,0,7.2,0,16c0,7.1,4.6,13.1,10.9,15.2c0.8,0.1,1.1-0.3,1.1-0.8c0-0.4,0-1.4,0-2.8 c-4.4,1-5.4-2.1-5.4-2.1c-0.7-1.8-1.8-2.3-1.8-2.3c-1.5-1,0.1-1,0.1-1c1.6,0.1,2.5,1.6,2.5,1.6c1.4,2.4,3.7,1.7,4.7,1.3 c0.1-1,0.6-1.7,1-2.1c-3.6-0.4-7.3-1.8-7.3-7.9c0-1.7,0.6-3.2,1.6-4.3c-0.2-0.4-0.7-2,0.2-4.2c0,0,1.3-0.4,4.4,1.6 c1.3-0.4,2.6-0.5,4-0.5c1.4,0,2.7,0.2,4,0.5c3.1-2.1,4.4-1.6,4.4-1.6c0.9,2.2,0.3,3.8,0.2,4.2c1,1.1,1.6,2.5,1.6,4.3 c0,6.1-3.7,7.5-7.3,7.9c0.6,0.5,1.1,1.5,1.1,2.9c0,2,0,3.9,0,4.4c0,0.4,0.3,0.9,1.1,0.7C27.4,29.1,32,23.1,32,16C32,7.2,24.8,0,16,0 z',
							})
						),
						href: 'https://github.com/adrienZ',
					},
					{
						svg: (0, r.h)(
							'svg',
							{
								version: '1.1',
								x: '0px',
								y: '0px',
								viewBox: '0 0 24 24',
								style: 'enable-background:new 0 0 24 24;',
							},
							(0, r.h)('path', {
								class: 'st0',
								d: 'M15.5,3h-7C5.5,3,3,5.5,3,8.5v7c0,3,2.5,5.5,5.5,5.5h7c3,0,5.5-2.5,5.5-5.5v-7C21,5.5,18.5,3,15.5,3z M19.5,15.5c0,2.2-1.8,4-4,4h-7c-2.2,0-4-1.8-4-4v-7c0-2.2,1.8-4,4-4h7c2.2,0,4,1.8,4,4V15.5z',
							}),
							(0, r.h)('path', {
								class: 'st0',
								d: 'M12,7.5c-2.5,0-4.5,2-4.5,4.5s2,4.5,4.5,4.5s4.5-2,4.5-4.5S14.5,7.5,12,7.5z M12,15c-1.7,0-3-1.3-3-3s1.3-3,3-3 s3,1.3,3,3S13.7,15,12,15z',
							}),
							(0, r.h)('circle', {
								class: 'st0',
								cx: '16.7',
								cy: '7.3',
								r: '1',
							})
						),
						href: 'https://www.instagram.com/adrienzag/',
					},
					{
						svg: (0, r.h)(
							'svg',
							{
								version: '1.1',
								x: '0px',
								y: '0px',
								viewBox: '0 0 56.7 56.7',
								style: 'enable-background:new 0 0 56.7 56.7;',
							},
							(0, r.h)('path', {
								class: 'st0',
								d: 'M52.8,15.1c-1.8,0.8-3.8,1.3-5.8,1.6c2.1-1.2,3.7-3.2,4.4-5.6c-2,1.2-4.1,2-6.4,2.5c-1.8-2-4.5-3.2-7.4-3.2 c-5.6,0-10.1,4.5-10.1,10.1c0,0.8,0.1,1.6,0.3,2.3C19.4,22.3,12,18.3,7,12.2c-0.9,1.5-1.4,3.2-1.4,5.1c0,3.5,1.8,6.6,4.5,8.4 c-1.7-0.1-3.2-0.5-4.6-1.3c0,0,0,0.1,0,0.1c0,4.9,3.5,9,8.1,9.9c-0.8,0.2-1.7,0.4-2.7,0.4c-0.7,0-1.3-0.1-1.9-0.2c1.3,4,5,6.9,9.4,7 C15.1,44.3,10.7,46,6,46c-0.8,0-1.6,0-2.4-0.1c4.5,2.9,9.8,4.5,15.5,4.5c18.6,0,28.8-15.4,28.8-28.8c0-0.4,0-0.9,0-1.3 C49.8,18.9,51.5,17.1,52.8,15.1z',
							})
						),
						href: 'https://twitter.com/adri_zag',
					},
					{
						svg: (0, r.h)(
							'svg',
							{
								version: '1.1',
								xmlns: 'http://www.w3.org/2000/svg',
								x: '0px',
								y: '0px',
								viewBox: '0 0 128 128',
								style: 'enable-background:new 0 0 128 128;',
							},
							(0, r.h)(
								'g',
								{ id: '_x36__stroke' },
								(0, r.h)(
									'g',
									{ id: 'Codepen' },
									(0, r.h)('rect', {
										class: 'st0',
										width: '128',
										height: '128',
										style: 'fill: transparent;',
									}),
									(0, r.h)('path', {
										id: 'Codepen_1_',
										class: 'st1',
										d: 'M117,73.2L103.2,64l13.8-9.2V73.2z M69.5,112.2V86.6l23.8-15.9l19.2,12.9L69.5,112.2z M64,77 L44.5,64L64,51l19.5,13L64,77z M58.5,112.2L15.4,83.5l19.3-12.9l23.8,15.9V112.2z M11,54.8L24.8,64L11,73.2V54.8z M58.5,15.8v25.7 l-23.8,16L15.4,44.5L58.5,15.8z M69.5,15.8l43.1,28.7L93.3,57.4l-23.8-16V15.8z M128,43.8c0-0.1,0-0.2,0-0.2 c0-0.2-0.1-0.3-0.1-0.5c0-0.1-0.1-0.2-0.1-0.3c0-0.1-0.1-0.3-0.1-0.4c0-0.1-0.1-0.2-0.1-0.3c-0.1-0.1-0.1-0.2-0.2-0.4 c0-0.1-0.1-0.2-0.2-0.3c-0.1-0.1-0.1-0.2-0.2-0.3c-0.1-0.1-0.1-0.2-0.2-0.2c-0.1-0.1-0.2-0.2-0.3-0.3c-0.1-0.1-0.1-0.1-0.2-0.2 c-0.1-0.1-0.2-0.2-0.3-0.3c-0.1-0.1-0.2-0.1-0.2-0.2c0,0-0.1,0-0.1-0.1l-58.5-39c-1.8-1.2-4.3-1.2-6.1,0l-58.5,39 c0,0-0.1,0-0.1,0.1c-0.1,0.1-0.2,0.1-0.2,0.2c-0.1,0.1-0.2,0.2-0.3,0.3c-0.1,0.1-0.1,0.1-0.2,0.2c-0.1,0.1-0.2,0.2-0.3,0.3 c-0.1,0.1-0.1,0.2-0.2,0.2C1,41.3,1,41.4,0.9,41.5c-0.1,0.1-0.1,0.2-0.2,0.3c-0.1,0.1-0.1,0.2-0.2,0.4c0,0.1-0.1,0.2-0.1,0.3 c-0.1,0.1-0.1,0.3-0.1,0.4c0,0.1-0.1,0.2-0.1,0.3c0,0.1-0.1,0.3-0.1,0.5c0,0.1,0,0.2,0,0.2C0,44,0,44.3,0,44.5v39 c0,0.2,0,0.5,0.1,0.7c0,0.1,0,0.2,0,0.2c0,0.2,0.1,0.3,0.1,0.5c0,0.1,0.1,0.2,0.1,0.3c0,0.1,0.1,0.3,0.1,0.4 c0,0.1,0.1,0.2,0.1,0.3c0.1,0.1,0.1,0.2,0.2,0.4c0.1,0.1,0.1,0.2,0.2,0.3C1,86.6,1,86.7,1.1,86.8C1.2,86.9,1.2,87,1.3,87 c0.1,0.1,0.2,0.2,0.3,0.3c0.1,0.1,0.1,0.1,0.2,0.2c0.1,0.1,0.2,0.2,0.3,0.3c0.1,0.1,0.2,0.1,0.2,0.2c0,0,0.1,0,0.1,0.1l58.5,39 c0.9,0.6,2,0.9,3.1,0.9c1.1,0,2.1-0.3,3.1-0.9l58.5-39c0,0,0.1,0,0.1-0.1c0.1-0.1,0.2-0.1,0.2-0.2c0.1-0.1,0.2-0.2,0.3-0.3 c0.1-0.1,0.1-0.1,0.2-0.2c0.1-0.1,0.2-0.2,0.3-0.3c0.1-0.1,0.1-0.2,0.2-0.2c0.1-0.1,0.2-0.2,0.2-0.3c0.1-0.1,0.1-0.2,0.2-0.3 c0.1-0.1,0.1-0.2,0.2-0.4c0-0.1,0.1-0.2,0.1-0.3c0.1-0.1,0.1-0.3,0.1-0.4c0-0.1,0.1-0.2,0.1-0.3c0-0.2,0.1-0.3,0.1-0.5 c0-0.1,0-0.2,0-0.2c0-0.2,0-0.5,0-0.7v-39C128,44.3,128,44,128,43.8z',
									})
								)
							)
						),
						href: 'https://codepen.io/adri_zag/',
					},
					{
						svg: (0, r.h)(
							'svg',
							{
								version: '1.1',
								xmlns: 'http://www.w3.org/2000/svg',
								x: '0px',
								y: '0px',
								viewBox: '0 0 1000 1000',
								'enable-background': 'new 0 0 1000 1000',
							},
							(0, r.h)(
								'g',
								null,
								(0, r.h)(
									'g',
									{
										transform:
											'translate(0.000000,511.000000) scale(0.100000,-0.100000)',
									},
									(0, r.h)('path', {
										d: 'M8951.2,3476.5c-448.2-165.4-2596.9-942.4-4774.8-1727.7C-160.8,182.2,103.1,286.9,103.1,113.1c0-60.7,14.7-98.4,58.6-144.5c58.6-67,1392.7-984.3,1451.3-1001c25.1-6.3,5285.8,2745.5,6318.3,3304.7c81.7,46.1,150.8,79.6,150.8,75.4c0-6.3-1229.3-927.8-2733-2048.2l-2733-2039.8l6.3-850.3c4.2-804.2,6.3-854.4,44-896.3c23-25.1,64.9-44,94.2-44c35.6,0,263.9,140.3,666,408.4c337.2,224.1,617.8,408.4,624.1,408.4c4.2,0,284.8-188.5,622-418.8c557.1-379,622-418.8,701.6-418.8c69.1,0,102.6,12.6,150.8,58.6c33.5,31.4,228.3,335.1,433.5,674.4c312,519.4,2437.7,4025.1,3614.6,5962.3c184.3,303.7,330.9,567.5,326.7,586.4c-4.2,25.1-27.2,39.8-69.1,41.9C9795.2,3773.8,9416.2,3646.1,8951.2,3476.5z',
									})
								)
							)
						),
						href: 'mailto:adrienzaganelli@gmail.com',
					},
				])
		},
		30: function (e, t, n) {
			'use strict'
			function o(e) {
				return e && e.__esModule ? e : { default: e }
			}
			function r(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function')
			}
			function s(e, t) {
				if (!e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					)
				return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
			}
			function i(e, t) {
				if ('function' != typeof t && null !== t)
					throw new TypeError(
						'Super expression must either be null or a function, not ' +
							typeof t
					)
				;(e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0,
					},
				})),
					t &&
						(Object.setPrototypeOf
							? Object.setPrototypeOf(e, t)
							: (e.__proto__ = t))
			}
			Object.defineProperty(t, '__esModule', { value: !0 })
			var a = (function () {
					function e(e, t) {
						for (var n = 0; n < t.length; n++) {
							var o = t[n]
							;(o.enumerable = o.enumerable || !1),
								(o.configurable = !0),
								'value' in o && (o.writable = !0),
								Object.defineProperty(e, o.key, o)
						}
					}
					return function (t, n, o) {
						return n && e(t.prototype, n), o && e(t, o), t
					}
				})(),
				l = (n(0), n(31)),
				c = o(l),
				u = n(45),
				h = o(u),
				d = n(46),
				p = o(d),
				f = n(63),
				m = o(f),
				v = n(13),
				b = o(v),
				g = new b.default({}),
				y = (function (e) {
					function t(e) {
						r(this, t)
						var n = s(
							this,
							(t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
						)
						return (n._xhr = { markdown: 'src/media/markdown/' }), n
					}
					return (
						i(t, e),
						a(t, [
							{
								key: 'onKeyUp',
								value: function (e) {
									if (this.state.stopTimer) return !1
									switch (e.keyCode ? e.keyCode : e.which) {
										case 37:
										case 40:
											this.previous()
											break
										case 38:
										case 39:
											this.next()
									}
								},
							},
							{
								key: 'onLoadMoreHandler',
								value: function (e) {
									var t = this
									return (
										e.preventDefault(),
										p.default
											.get(this._xhr.markdown + this.state.activeItem.file, {
												onDownloadProgress: function (e) {
													if (e.lengthComputable)
														return (e.loaded / e.total) * 100
												},
											})
											.then(function (e) {
												t.props.expandViewHandler(
													e.data,
													t.state.index,
													t.onClosePost.bind(t)
												),
													t._timer.stop(),
													t.scrollManager.destroy(),
													(t.state.stopTimer = !0),
													t.hammer &&
														((t.hammer = t.hammer.destroy()),
														(t.base.style = null))
											})
									)
								},
							},
							{
								key: 'onClosePost',
								value: function () {
									this.props.disableExpandedView(),
										this.scrollManager.start(),
										(this.state.stopTimer = !1),
										this.resetTimeout(),
										(this.hammer = this.hammerTime()),
										g.setRoute('')
								},
							},
							{
								key: 'colorArrow',
								value: function () {
									var e = this.base.querySelector('.carousel__arrow--prev'),
										t = this.base.querySelector('.carousel__arrow--next')
									if (!e || !t) return !1
									e.classList.remove('active'), t.classList.remove('active')
									var n = this.state.direction > 0 ? t : e,
										o = this.state.direction > 0 ? 1 : 0,
										r =
											0 === this.state.index
												? '#D81B60'
												: this.state.activeItem.gradient[o]
									n.classList.add('active'),
										(n.style.stroke = r),
										setTimeout(function () {
											n.classList.remove('active'), (n.style.stroke = null)
										}, 150)
								},
							},
							{
								key: 'componentDidUpdate',
								value: function () {
									this.state.stopTimer
										? document.body.classList.remove('no-scroll')
										: document.body.classList.add('no-scroll'),
										this.colorArrow()
								},
							},
							{
								key: 'componentWillUnmount',
								value: function () {
									window.onkeyup = null
								},
							},
							{
								key: 'hammerTime',
								value: function () {
									var e = this,
										t = new m.default(this.base, { velocity: 0.8 })
									return (
										t.on('swipe', function (t) {
											t.deltaY < 0 ? e.next() : e.previous()
										}),
										t.get('pinch').set({ enable: !0 }),
										t.get('rotate').set({ enable: !0 }),
										t.get('pan').set({ direction: m.default.DIRECTION_ALL }),
										t
											.get('swipe')
											.set({ direction: m.default.DIRECTION_VERTICAL }),
										t
									)
								},
							},
							{
								key: 'setMenuItem',
								value: function (e) {
									Array.from(
										document.body.querySelectorAll('.app__menu--item')
									).map(function (t) {
										t.classList.remove('active'),
											parseInt(t.dataset.id) === e && t.classList.add('active')
									})
								},
							},
							{
								key: 'componentWillMount',
								value: function () {
									;(this.scrollManager = new h.default(
										document.body,
										this.onChange.bind(this)
									)),
										this.props.sendMethods({
											next: this.next.bind(this),
											previous: this.previous.bind(this),
											onClosePost: this.onClosePost.bind(this),
											setPosition: this.setPosition.bind(this),
											scrollManager: this.scrollManager,
											onLoadMoreHandler: this.onLoadMoreHandler.bind(this),
										})
								},
							},
							{
								key: 'componentDidMount',
								value: function () {
									this.scrollManager.start(),
										(this.hammer = this.hammerTime()),
										(window.onkeyup = this.onKeyUp.bind(this)),
										this.props.forcedFocus &&
											(this.setPosition(this.props.forcedFocus),
											this.onLoadMoreHandler(
												document.createEvent('Event')
											).then(function () {
												g.clearRoute()
											}))
								},
							},
						]),
						t
					)
				})(c.default)
			t.default = y
		},
		31: function (e, t, n) {
			'use strict'
			function o(e) {
				return e && e.__esModule ? e : { default: e }
			}
			function r(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function')
			}
			function s(e, t) {
				if (!e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					)
				return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
			}
			function i(e, t) {
				if ('function' != typeof t && null !== t)
					throw new TypeError(
						'Super expression must either be null or a function, not ' +
							typeof t
					)
				;(e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0,
					},
				})),
					t &&
						(Object.setPrototypeOf
							? Object.setPrototypeOf(e, t)
							: (e.__proto__ = t))
			}
			Object.defineProperty(t, '__esModule', { value: !0 })
			var a = (function () {
					function e(e, t) {
						for (var n = 0; n < t.length; n++) {
							var o = t[n]
							;(o.enumerable = o.enumerable || !1),
								(o.configurable = !0),
								'value' in o && (o.writable = !0),
								Object.defineProperty(e, o.key, o)
						}
					}
					return function (t, n, o) {
						return n && e(t.prototype, n), o && e(t, o), t
					}
				})(),
				l = n(0),
				c = n(32),
				u = o(c),
				h = n(14),
				d = n(42),
				p = o(d),
				f = n(44),
				m = o(f),
				v = (function (e) {
					function t(e) {
						r(this, t)
						var n = s(
							this,
							(t.__proto__ || Object.getPrototypeOf(t)).call(this)
						)
						return (
							(n._timer = new u.default(
								n.onTimeoutHandler.bind(n),
								e.interval
							)),
							(n._projectsLength = e.projects.length),
							(n.state = {
								activeItem: e.projects[0],
								index: 0,
								stopTimer: !1,
								direction: 0,
							}),
							n
						)
					}
					return (
						i(t, e),
						a(t, [
							{
								key: 'onChange',
								value: function (e) {
									var t = this.state.index + e.direction,
										n = t
									t < 0
										? (n = this._projectsLength - 1)
										: t >= this._projectsLength && (n = 0),
										this.setPosition(n),
										(this.state.direction = e.direction)
								},
							},
							{
								key: 'setPosition',
								value: function (e) {
									if (
										-1 === this.props.projects.indexOf(this.props.projects[e])
									)
										throw new Error(
											'Wrong index value sent, this.projects contains ' +
												this.__projectsLength__ +
												' items. value sent: ' +
												e
										)
									this.setMenuItem(e),
										this.setState({
											index: e,
											activeItem: this.props.projects[e],
										}),
										this.resetTimeout()
								},
							},
							{
								key: 'previous',
								value: function () {
									this.onChange({ direction: -1 })
								},
							},
							{
								key: 'next',
								value: function () {
									this.onChange({ direction: 1 })
								},
							},
							{
								key: 'resetTimeout',
								value: function () {
									this._timer.reset(this.props.interval)
								},
							},
							{
								key: 'onTimeoutHandler',
								value: function () {
									this.onChange({ direction: 1 })
								},
							},
							{
								key: 'render',
								value: function () {
									var e = this
									return (0, l.h)(
										'section',
										{ class: 'carousel' },
										(0, l.h)(
											'div',
											{ class: 'carousel__content' },
											(0, l.h)(
												'aside',
												{ class: 'carousel__aside' },
												(0, l.h)(
													'div',
													{ class: 'pagination' },
													(0, l.h)(
														h.Motion,
														{ key: this.state.index, style: {} },
														function (t) {
															return (0, l.h)(
																'p',
																{
																	'data-id': e.state.index,
																	key: t.key,
																	class: 'number big',
																},
																(0, l.h)(
																	'span',
																	{ class: 'animated fadeInDown' },
																	'0'
																),
																(0, l.h)(
																	'span',
																	{ class: 'animated fadeInUp' },
																	e.state.index + 1
																)
															)
														}
													),
													(0, l.h)(
														'p',
														{ class: 'number divider' },
														'/0',
														this._projectsLength
													)
												),
												(0, l.h)(
													'div',
													{ class: 'carousel__menu--container' },
													(0, l.h)(
														'div',
														{
															class: 'carousel__menu',
															tabindex: '1',
															onClick: this.props.toggleMenu,
														},
														(0, l.h)('div', { class: 'carousel__menu--line' }),
														(0, l.h)('div', { class: 'carousel__menu--line' }),
														(0, l.h)('div', { class: 'carousel__menu--line' })
													)
												)
											),
											(0, l.h)(
												'main',
												{ class: 'carousel__main' },
												0 === this.state.index
													? (0, l.h)(m.default, {
															stopTimer: this.state.stopTimer,
															next: this.next.bind(this),
															direction: this.state.direction,
															interval: this.props.interval,
															previous: this.previous.bind(this),
													  })
													: (0, l.h)(p.default, {
															stopTimer: this.state.stopTimer,
															project: this.state.activeItem,
															index: this.state.index,
															onClosePost: this.props.onClosePost,
															interval: this.props.interval,
															next: this.next.bind(this),
															previous: this.previous.bind(this),
															onClickHandler: this.onLoadMoreHandler.bind(this),
													  })
											)
										),
										(0, l.h)('footer', { class: 'carousel__footer' })
									)
								},
							},
						]),
						t
					)
				})(l.Component)
			t.default = v
		},
		32: function (e, t, n) {
			'use strict'
			function o(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function')
			}
			Object.defineProperty(t, '__esModule', { value: !0 })
			var r = (function () {
					function e(e, t) {
						for (var n = 0; n < t.length; n++) {
							var o = t[n]
							;(o.enumerable = o.enumerable || !1),
								(o.configurable = !0),
								'value' in o && (o.writable = !0),
								Object.defineProperty(e, o.key, o)
						}
					}
					return function (t, n, o) {
						return n && e(t.prototype, n), o && e(t, o), t
					}
				})(),
				s = (function () {
					function e(t, n) {
						o(this, e),
							(this.timerObj = setInterval(t, n)),
							(this.t = n),
							(this.fn = t)
					}
					return (
						r(e, [
							{
								key: 'stop',
								value: function () {
									return (
										this.timerObj &&
											(clearInterval(this.timerObj), (this.timerObj = null)),
										this
									)
								},
							},
							{
								key: 'start',
								value: function () {
									return (
										this.timerObj ||
											(this.stop(),
											(this.timerObj = setInterval(this.fn, this.t))),
										this
									)
								},
							},
							{
								key: 'reset',
								value: function (e) {
									return (this.t = e), this.stop().start()
								},
							},
						]),
						e
					)
				})()
			t.default = s
		},
		42: function (e, t, n) {
			'use strict'
			function o(e) {
				return e && e.__esModule ? e : { default: e }
			}
			function r(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function')
			}
			function s(e, t) {
				if (!e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					)
				return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
			}
			function i(e, t) {
				if ('function' != typeof t && null !== t)
					throw new TypeError(
						'Super expression must either be null or a function, not ' +
							typeof t
					)
				;(e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0,
					},
				})),
					t &&
						(Object.setPrototypeOf
							? Object.setPrototypeOf(e, t)
							: (e.__proto__ = t))
			}
			Object.defineProperty(t, '__esModule', { value: !0 })
			var a = (function () {
					function e(e, t) {
						for (var n = 0; n < t.length; n++) {
							var o = t[n]
							;(o.enumerable = o.enumerable || !1),
								(o.configurable = !0),
								'value' in o && (o.writable = !0),
								Object.defineProperty(e, o.key, o)
						}
					}
					return function (t, n, o) {
						return n && e(t.prototype, n), o && e(t, o), t
					}
				})(),
				l = n(0),
				c = n(43),
				u = o(c),
				h = n(17),
				d = o(h),
				p = n(3),
				f = n(14),
				m = (function (e) {
					function t() {
						return (
							r(this, t),
							s(
								this,
								(t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
							)
						)
					}
					return (
						i(t, e),
						a(t, [
							{
								key: 'resetPogressBar',
								value: function () {
									var e = Array.from(
										this.base.querySelectorAll('.carousel__progress')
									)
									if (e.length) {
										var t = e[0].cloneNode(!0),
											n = e[0].parentNode
										e.map(function (e) {
											return e.remove()
										}),
											n.appendChild(t)
									}
								},
							},
							{
								key: 'componentDidUpdate',
								value: function () {
									this.resetPogressBar()
								},
							},
							{
								key: 'render',
								value: function () {
									var e = this
									return (0, l.h)(
										'div',
										{ class: 'carousel__main--container' },
										(0, l.h)(
											'div',
											{ class: 'carousel__main--text' },
											(0, l.h)(
												'div',
												{ class: 'carousel__main--wrapper' },
												(0, l.h)(
													'div',
													{ class: 'carousel__main--text-line' },
													!this.props.stopTimer &&
														(0, l.h)(d.default, {
															gradient: this.props.project.gradient,
															next: this.props.next,
															previous: this.props.previous,
														}),
													(0, l.h)(
														f.Motion,
														{ key: this.props.index, style: {} },
														function (t) {
															return (0, l.h)(
																'h1',
																{
																	'data-id': e.props.index,
																	key: t.key,
																	class: 'carousel__title animated',
																},
																e.props.project.name.toUpperCase()
															)
														}
													)
												),
												!this.props.stopTimer &&
													(0, l.h)(
														'p',
														{ class: 'carousel__description' },
														this.props.project.description
													),
												(0, l.h)(
													'div',
													{ style: 'display: inline-block; margin: 0 auto;' },
													this.props.stopTimer
														? (0, l.h)(
																'button',
																{
																	class: 'btn close',
																	onClick: this.props.onClosePost.bind(this),
																},
																(0, p.closeIcon)(),
																'Close'
														  )
														: (0, l.h)(
																u.default,
																{
																	id: this.props.project.slug,
																	gradient: this.props.project.gradient,
																	onClickHandler: this.props.onClickHandler,
																},
																'case study'
														  )
												)
											)
										),
										(0, l.h)(
											'div',
											{
												class:
													'carousel__main--img-container ' +
													this.props.project.slug,
												onClick: this.props.onClickHandler,
											},
											(0, l.h)(
												f.Motion,
												{ key: this.props.index, style: {} },
												function (t) {
													return (0, p.detectMedia)(
														e.props.project.cover,
														!1,
														t
													)
												}
											),
											(0, l.h)('div', {
												class: 'carousel__progress',
												style: {
													'animation-duration': this.props.interval + 'ms',
													'animation-play-state': this.props.stopTimer
														? 'paused'
														: 'running',
												},
											})
										)
									)
								},
							},
						]),
						t
					)
				})(l.Component)
			t.default = m
		},
		43: function (e, t, n) {
			'use strict'
			Object.defineProperty(t, '__esModule', { value: !0 })
			var o = n(0),
				r = n(3)
			t.default = function (e) {
				return (0, o.h)(
					'a',
					{
						href: '#',
						id: e.id,
						class: 'btn cta carousel__load-more animated zoomIn',
						onClick: e.onClickHandler,
						style: (0, r.glowButtonStyle)(e.gradient, !0),
					},
					(0, o.h)(
						'style',
						null,
						'.carousel__load-more#',
						e.id,
						':before ',
						'{' + (0, r.glowButtonStyle)(e.gradient.slice(0).reverse(), !0, !0)
					),
					e.children || 'load more'
				)
			}
		},
		44: function (e, t, n) {
			'use strict'
			function o(e) {
				return e && e.__esModule ? e : { default: e }
			}
			Object.defineProperty(t, '__esModule', { value: !0 })
			var r = n(0),
				s = n(17),
				i = o(s),
				a = n(12),
				l = o(a),
				c = n(3),
				u = c.socialIcons.filter(function (e, t) {
					return [0, 1, 3, 5].indexOf(t) > -1
				})
			t.default = function (e) {
				return (0, r.h)(
					'div',
					{ class: 'me' },
					(0, r.h)(
						'div',
						{ class: 'me__text' },
						!e.stopTimer &&
							(0, r.h)(i.default, {
								gradient: [null, null],
								next: e.next,
								previous: e.previous,
							}),
						(0, r.h)(
							'p',
							null,
							'I’m a french Web developer and a final year student at ',
							(0, r.h)(
								l.default,
								{ href: 'https://hetic.net/', title: 'HETIC, école web' },
								'HETIC'
							),
							' currently working at ',
							(0, r.h)(
								l.default,
								{ href: 'https://hki.paris/', title: 'hki.paris' },
								'HelloHikimori'
							),
							'. I work mostly with Javascript and CSS, building fast and reliable website.',
							(0, r.h)('br', null),
							(0, r.h)(
								l.default,
								{
									href: 'mailto:adrienzaganelli@gmail.com',
									target: '_blank',
									class: 'underline',
									title: 'adrienzaganelli@gmail.com',
								},
								'Hire me'
							),
							'.'
						)
					),
					(0, r.h)(
						'div',
						{ class: 'me__networks' },
						(0, r.h)(
							'div',
							{ class: 'me__networks--container' },
							u.map(function (e) {
								return (0,
								r.h)(l.default, { href: e.href, class: 'me__networks--icon animated fadeIn' }, e.svg)
							})
						)
					),
					(0, r.h)('div', {
						class: 'carousel__progress',
						style: {
							'animation-duration': e.interval + 'ms',
							'animation-play-state': e.stopTimer ? 'paused' : 'running',
						},
					})
				)
			}
		},
		45: function (e, t, n) {
			'use strict'
			function o(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function')
			}
			Object.defineProperty(t, '__esModule', { value: !0 })
			var r = (function () {
					function e(e, t) {
						for (var n = 0; n < t.length; n++) {
							var o = t[n]
							;(o.enumerable = o.enumerable || !1),
								(o.configurable = !0),
								'value' in o && (o.writable = !0),
								Object.defineProperty(e, o.key, o)
						}
					}
					return function (t, n, o) {
						return n && e(t.prototype, n), o && e(t, o), t
					}
				})(),
				s = (function () {
					function e(t, n, r) {
						return (
							o(this, e),
							(this._target = t),
							(this._delay = void 0),
							(this._force = r || 0.8),
							(this.watch = this.getScroll.bind(this)),
							(this._callback = n || void 0),
							this
						)
					}
					return (
						r(e, [
							{
								key: 'destroy',
								value: function () {
									this._target.removeEventListener('mousewheel', this.watch),
										this._target.removeEventListener(
											'DOMMouseScroll',
											this.watch
										)
								},
							},
							{
								key: 'start',
								value: function () {
									this._target.addEventListener('mousewheel', this.watch),
										this._target.addEventListener('DOMMouseScroll', this.watch)
								},
							},
							{
								key: 'getScroll',
								value: function (e) {
									var t =
										arguments.length > 1 && void 0 !== arguments[1]
											? arguments[1]
											: {}
									if ((e && !t && e.preventDefault(), !this._delay)) {
										var n = e || window.event,
											o = t.speed || 0
										;(e = n),
											n.wheelDelta && (o = n.wheelDelta / 120),
											n.detail && (o = -n.detail / 3)
										var r = o >= 0 ? -1 : 1
										if (((o = Math.abs(o)), this._force < o)) {
											var s = this.resetDelay.bind(this)
											this._callback({ speed: o, direction: r }),
												(this._delay = setTimeout(s, 700))
										}
									}
								},
							},
							{
								key: 'resetDelay',
								value: function () {
									this._delay = clearInterval(this._delay)
								},
							},
							{
								key: 'setScrollHandler',
								value: function (e) {
									this._callback = e.bind(this)
								},
							},
						]),
						e
					)
				})()
			t.default = s
		},
		64: function (e, t, n) {
			'use strict'
			Object.defineProperty(t, '__esModule', { value: !0 })
			var o = [
					{ fullname: 'Suong Kévin Tan', link: 'http://suongkevintan.com/' },
					{ fullname: 'Jennyfer Millet', link: 'http://jennyfermillet.com/' },
					{
						fullname: 'Aymeric Chappuy',
						link: 'https://www.behance.net/achappuy',
					},
					{ fullname: 'Aude Ficheux', link: 'http://www.audeficheux.com/' },
					{ fullname: 'Corentin Marzin', link: 'http://corentinmarzin.fr/' },
					{
						fullname: 'Michael Zaccardi',
						link: 'https://www.michaelzaccardi.com/',
					},
					{
						fullname: 'Emmanuel Naim',
						link: 'https://www.behance.net/emmanuelna31d3',
					},
					{ fullname: 'Alexandre Autret', link: 'http://www.hackhours.co/' },
					{
						fullname: 'Barthelemy Chalvet',
						link: 'https://dribbble.com/barthelemychalvet',
					},
					{
						fullname: 'Marine Legrand',
						link: 'https://dribbble.com/marine_legrand',
					},
					{
						fullname: 'Léonard Chalvet',
						link: 'https://www.malt.fr/profile/leonardchalvet1',
					},
					{
						fullname: 'Atika Koffy',
						link: 'https://www.linkedin.com/in/atika-koffy-9a7659b7/',
					},
					{
						fullname: 'Félix LaFeuille',
						link: 'https://twitter.com/FLaFeuille',
					},
					{
						fullname: 'Pierre Trotsky',
						link: 'https://www.linkedin.com/in/pierre-trotsky-9969a2123/',
					},
					{
						fullname: 'Margaux Tellier',
						link: 'https://dribbble.com/margauxtell',
					},
					{
						fullname: 'Claire Zunda',
						link: 'https://www.linkedin.com/in/claire-zunda-6b6a54a6/',
					},
					{
						fullname: 'Yohan Atlan',
						link: 'https://www.malt.fr/profile/yohanatlan',
					},
					{
						fullname: 'Raphael Piacitelli',
						link: 'https://www.linkedin.com/in/raphael-piacitelli-4649a7106/',
					},
					{
						fullname: 'Guillaume Gouessan',
						link: 'https://guillaumegouessan.com/',
					},
					{
						fullname: 'Mathilde Lier',
						link: 'https://fr.linkedin.com/in/mathilde-lier-1407a771',
					},
				],
				r = function (e, t) {
					return Object.assign(o[e], { role: t })
				}
			t.default = [
				{
					slug: 'devialet',
					name: 'Devialet',
					file: 'devialet.html',
					description:
						'Promotional page for the new Devialet speaker: Phantom Premier',
					cover: 'src/media/img/carousel-img/devialet.mp4',
					period: 'September 2019',
					myRole: 'front-end developer',
					link: 'https://www.devialet.com/fr-fr/phantom-premier-implosive-sound',
					collaborators: [r(18, 'WebGL developer'), r(19, 'Designer')],
					gradient: ['#5398C9', '#E32845'],
				},
				{
					slug: 'pulsar',
					name: 'Pulsar One [Ø]',
					file: 'pulsar.html',
					description:
						'Pulsar one is a text-based game where the story evolves depending on your choices. You are the chosen one who has to save the world.',
					cover: 'src/media/img/carousel-img/pulsar.jpg',
					period: 'May 2016',
					myRole: 'Lead developer',
					link: 'https://adrienzaganelli.com/projects/pulsar_one/',
					collaborators: [
						r(0, 'Leader/UI designer'),
						r(1, 'Data manager'),
						r(2, 'Sound & Game designer'),
						r(3, 'Javascript developer'),
					],
					gradient: ['#3f5efb', '#FC466B'],
				},
				{
					slug: 'marketme',
					name: 'MARKET-ME.FR',
					file: 'marketme.html',
					description:
						'The AgenceMe team (2 developers, 2 designers, 1 marketing) and I build a creative marketplace from scratch in 2 months.',
					cover: 'src/media/img/carousel-img/marketme.mp4',
					period: 'July-September 2016',
					myRole: 'Intern full stack developer',
					link: 'https://www.market-me.fr/',
					collaborators: [
						r(7, 'Back-end developper'),
						r(8, 'UI Designer'),
						r(9, 'UX Designer'),
						r(10, 'Front-end Developper'),
						r(11, 'Marketing'),
					],
					gradient: ['#FF6A00', '#EE0979'],
				},
				{
					slug: 'skfb',
					name: 'Sketchfab',
					file: 'skfb.html',
					description:
						'3 months dive into the WebGL world and the startup ecosystem. Sketchfab is all about 3D and community.',
					cover: 'src/media/img/carousel-img/skfb.jpg',
					period: 'July-October 2017',
					myRole: 'Intern front-end developer',
					link: 'https://sketchfab.com',
					collaborators: [],
					gradient: ['#00c6ff', '#0072ff'],
				},
				{
					slug: 'alium',
					name: 'Alium',
					file: 'alium.html',
					description:
						'One semester to build a high quality bike brand. Modern design and a custom wordpress theme.',
					cover: 'src/media/img/carousel-img/alium.mp4',
					period: 'April-May 2017',
					myRole: 'Front-end developer',
					link: 'https://www.aliumbikes.fr/fr/',
					collaborators: [
						r(13, 'Leader'),
						r(14, 'UI & UX Designer'),
						r(15, 'Back-end developer'),
						r(16, 'Front-end Developper'),
						r(17, 'Marketing & SEO'),
					],
					gradient: ['#4e54c8', '#8f94fb'],
				},
				{
					slug: 'cnje',
					name: 'CNJE',
					file: 'cnje.html',
					description:
						"Freelance project for the french Junior-Enterprise confederation's website.",
					cover: 'src/media/img/carousel-img/cnje.jpg',
					period: 'July-August 2017',
					myRole: 'Front end Developer',
					link: 'https://junior-entreprises.com/',
					collaborators: [r(12, 'Back-end developer')],
					gradient: ['#cb2d3e', '#ef473a'],
				},
			].map(function (e, t) {
				return Object.assign(e, { index: t })
			})
		},
		65: function (e, t, n) {
			'use strict'
			function o(e) {
				return e && e.__esModule ? e : { default: e }
			}
			function r(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function')
			}
			function s(e, t) {
				if (!e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					)
				return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
			}
			function i(e, t) {
				if ('function' != typeof t && null !== t)
					throw new TypeError(
						'Super expression must either be null or a function, not ' +
							typeof t
					)
				;(e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0,
					},
				})),
					t &&
						(Object.setPrototypeOf
							? Object.setPrototypeOf(e, t)
							: (e.__proto__ = t))
			}
			Object.defineProperty(t, '__esModule', { value: !0 })
			var a = (function () {
					function e(e, t) {
						for (var n = 0; n < t.length; n++) {
							var o = t[n]
							;(o.enumerable = o.enumerable || !1),
								(o.configurable = !0),
								'value' in o && (o.writable = !0),
								Object.defineProperty(e, o.key, o)
						}
					}
					return function (t, n, o) {
						return n && e(t.prototype, n), o && e(t, o), t
					}
				})(),
				l = n(0),
				c = n(66),
				u = o(c),
				h = n(12),
				d = o(h),
				p = n(26),
				f = o(p),
				m = n(13),
				v = o(m),
				b = n(3),
				g = window.Waypoint,
				y = new v.default({}),
				w = new f.default(),
				_ = (function (e) {
					function t() {
						r(this, t)
						var e = s(
							this,
							(t.__proto__ || Object.getPrototypeOf(t)).call(this)
						)
						return (e.state.modal = {}), e
					}
					return (
						i(t, e),
						a(t, [
							{
								key: 'openModal',
								value: function (e) {
									e.stopPropagation(),
										this.setState({ modal: { src: e.target.src, open: !0 } })
								},
							},
							{
								key: 'closeModal',
								value: function () {
									this.setState({ modal: {} })
								},
							},
							{
								key: 'onScrollHandler',
								value: function () {
									document.body.scrollTop < this.base.offsetTop
										? document.body
												.querySelector('.app-to-top')
												.classList.add('hide')
										: document.body
												.querySelector('.app-to-top')
												.classList.remove('hide')
								},
							},
							{
								key: 'next',
								value: function () {
									this.props.carouselMethods.next(), this.props.onClosePost()
								},
							},
							{
								key: 'previous',
								value: function () {
									this.props.carouselMethods.previous(),
										this.props.onClosePost()
								},
							},
							{
								key: 'refreshImportedDom',
								value: function () {
									var e = this
									;(this.base.querySelector('#blogPostContainer').innerHTML =
										this.props.expandedView),
										w.animateScroll(this.base.offsetTop, {
											easing: 'easeInOutQuart',
										}),
										window.twttr && window.twttr.widgets.load(),
										Array.from(
											this.base
												.querySelector('#blogPostContainer')
												.querySelectorAll(
													'img, .sketchfab-embed-wrapper, video'
												)
										).map(function (t) {
											t.classList.add('animated'),
												'IMG' === t.nodeName
													? (t.addEventListener('click', e.openModal.bind(e)),
													  (t.onload = function () {
															new g({
																element: t,
																handler: function () {
																	return t.classList.add('fadeIn')
																},
																offset: 175 + 1.5 * t.height,
															})
													  }))
													: new g({
															element: t,
															handler: function () {
																return t.classList.add('fadeIn')
															},
															offset: 175 + 1.5 * t.clientHeight,
													  })
										}),
										Array.from(
											this.base.querySelectorAll('#blogPostContainer a')
										).map(function (e) {
											e.setAttribute('target', '_blank'),
												e.setAttribute('rel', 'noopener noreferrer')
										})
								},
							},
							{
								key: 'footerPrevious',
								value: function () {
									var e = this
									this.props.carouselMethods.onClosePost(),
										this.props.carouselMethods.setPosition(
											this.props.previousProject.index + 1
										),
										setTimeout(function () {
											document.body.querySelector('.carousel__load-more') &&
												e.props.carouselMethods.onLoadMoreHandler(
													document.createEvent('event')
												)
										}, 750)
								},
							},
							{
								key: 'footerNext',
								value: function () {
									var e = this
									this.props.carouselMethods.onClosePost(),
										this.props.carouselMethods.setPosition(
											this.props.nextProject.index + 1
										),
										setTimeout(function () {
											document.body.querySelector('.carousel__load-more') &&
												e.props.carouselMethods.onLoadMoreHandler(
													document.createEvent('event')
												)
										}, 750)
								},
							},
							{
								key: 'componentDidMount',
								value: function () {
									this.refreshImportedDom(),
										y.setRoute('projects/' + this.props.project.slug)
								},
							},
							{
								key: 'render',
								value: function () {
									return (0, l.h)(
										'section',
										{ class: 'post', onWheel: this.onScrollHandler.bind(this) },
										this.state.modal.open &&
											(0, l.h)(
												'section',
												{
													class: 'post__modal animated fadeIn',
													onClick: this.closeModal.bind(this),
												},
												(0, l.h)('p', null),
												(0, l.h)('img', {
													class: 'post__modal--img animated fadeIn',
													src: this.state.modal.src,
												})
											),
										(0, l.h)(
											u.default,
											null,
											(0, l.h)(
												'header',
												{ class: 'post__header' },
												(0, l.h)(
													'div',
													{ class: 'post__header--links' },
													(0, l.h)(
														'button',
														{
															class: 'btn close',
															onClick: this.props.onClosePost,
														},
														(0, b.closeIcon)(),
														'CLOSE'
													),
													(0, l.h)(
														d.default,
														{
															href: this.props.project.link,
															class: 'btn visit',
															style: (0, b.glowButtonStyle)(
																this.props.project.gradient
															),
														},
														'WEBSITE'
													)
												),
												(0, l.h)(
													'h4',
													{ class: 'post__header--title' },
													this.props.project.name
												),
												(0, l.h)(
													'div',
													{ class: 'post__header--controls' },
													(0, l.h)(
														'button',
														{
															class: 'btn',
															onClick: this.footerPrevious.bind(this),
														},
														'PREVIOUS'
													),
													(0, l.h)(
														'button',
														{
															class: 'btn',
															onClick: this.footerNext.bind(this),
														},
														'NEXT'
													)
												)
											)
										),
										(0, l.h)('div', { id: 'blogPostContainer' }),
										(0, l.h)(
											'div',
											{ class: 'post__collaborators' },
											this.props.project.collaborators.map(function (e) {
												return (0,
												l.h)('div', { class: 'post__collaborator' }, (0, l.h)('p', null, e.role), (0, l.h)(d.default, { href: e.link }, e.fullname))
											})
										),
										(0, l.h)(
											'footer',
											{ class: 'post__footer' },
											(0, l.h)(
												'button',
												{
													class: 'post__footer--prev',
													onClick: this.footerPrevious.bind(this),
												},
												(0, l.h)('span', null, 'Previous: '),
												(0, l.h)(
													'a',
													null,
													this.props.previousProject.name.toUpperCase()
												)
											),
											(0, l.h)(
												'button',
												{
													class: 'post__footer--next',
													onClick: this.footerNext.bind(this),
												},
												(0, l.h)('span', null, 'Next: '),
												(0, l.h)(
													'a',
													null,
													this.props.nextProject.name.toUpperCase()
												)
											)
										),
										(0, l.h)(
											'div',
											{ class: 'post__footer--end' },
											(0, l.h)(b.footerSvg)
										)
									)
								},
							},
						]),
						t
					)
				})(l.Component)
			t.default = _
		},
		70: function (e, t) {},
	},
	[27]
)
