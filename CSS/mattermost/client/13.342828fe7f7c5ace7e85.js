webpackJsonp([13],{1684:function(e,t,a){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(239),s=o(n),d=a(238),u=o(d),i=a(242),l=o(i),f=a(240),c=o(f),p=a(241),v=o(p),h=a(708),m=o(h),w=a(21),y=o(w),C=a(13),b=o(C),_=a(1685),g=a(736),k=a(715),L=r(k),E=a(968),U=r(E);a(772);var M=a(707),R=o(M),x=a(720),B=o(x),O=a(779),S=o(O),F=a(725),I=r(F),j=a(698),P=r(j),D=a(732),q=o(D),A=a(1110),V=a(247),W=o(V),z=W.default.dispatch,J=W.default.getState,N=function(e){function t(e){(0,u.default)(this,t);var a=(0,c.default)(this,(t.__proto__||(0,s.default)(t)).call(this,e));return a.onUserChanged=a.onUserChanged.bind(a),a.state={user:R.default.getCurrentUser()},document.getElementById("root").className+=" channel-view",a}return(0,v.default)(t,e),(0,l.default)(t,[{key:"isValidState",value:function(){return null!=this.state.user}},{key:"onUserChanged",value:function(){var e=R.default.getCurrentUser();P.areObjectsEqual(this.state.user,e)||this.setState({user:e})}},{key:"componentWillMount",value:function(){S.default.clearLastError()}},{key:"componentDidMount",value:function(){U.initialize(),(0,m.default)(window).on("beforeunload",function(){(0,m.default)(window).off("beforeunload"),document.cookie.indexOf("MMUSERID=")>-1&&(0,g.viewChannel)("",B.default.getCurrentId()||"")(z,J),U.close()}),R.default.addChangeListener(this.onUserChanged),window.addEventListener("focus",this.onFocusListener),window.addEventListener("blur",this.onBlurListener),I.isIos()?(0,m.default)("body").addClass("ios"):I.isAndroid()&&(0,m.default)("body").addClass("android"),this.state.user||((0,m.default)("#root").attr("class",""),L.emitUserLoggedOutEvent("/login?redirect_to="+encodeURIComponent(this.props.location.pathname))),(0,m.default)("body").on("mouseenter mouseleave",".post",function(e){"mouseenter"===e.type?((0,m.default)(this).parent("div").prev(".date-separator, .new-separator").addClass("hovered--after"),(0,m.default)(this).parent("div").next(".date-separator, .new-separator").addClass("hovered--before")):((0,m.default)(this).parent("div").prev(".date-separator, .new-separator").removeClass("hovered--after"),(0,m.default)(this).parent("div").next(".date-separator, .new-separator").removeClass("hovered--before"))}),(0,m.default)("body").on("mouseenter mouseleave",".search-item__container .post",function(e){"mouseenter"===e.type?((0,m.default)(this).closest(".search-item__container").find(".date-separator").addClass("hovered--after"),(0,m.default)(this).closest(".search-item__container").next("div").find(".date-separator").addClass("hovered--before")):((0,m.default)(this).closest(".search-item__container").find(".date-separator").removeClass("hovered--after"),(0,m.default)(this).closest(".search-item__container").next("div").find(".date-separator").removeClass("hovered--before"))}),(0,m.default)("body").on("mouseenter mouseleave",".post.post--comment.same--root",function(e){"mouseenter"===e.type?((0,m.default)(this).parent("div").prev(".date-separator, .new-separator").addClass("hovered--comment"),(0,m.default)(this).parent("div").next(".date-separator, .new-separator").addClass("hovered--comment")):((0,m.default)(this).parent("div").prev(".date-separator, .new-separator").removeClass("hovered--comment"),(0,m.default)(this).parent("div").next(".date-separator, .new-separator").removeClass("hovered--comment"))}),(0,m.default)(window).on("keydown.preventBackspace",function(e){8!==e.which||(0,m.default)(e.target).is("input, textarea")||e.preventDefault()})}},{key:"componentWillUnmount",value:function(){U.close(),R.default.removeChangeListener(this.onUserChanged),(0,m.default)("body").off("click.userpopover"),(0,m.default)("body").off("mouseenter mouseleave",".post"),(0,m.default)("body").off("mouseenter mouseleave",".post.post--comment.same--root"),(0,m.default)(".modal").off("show.bs.modal"),(0,m.default)(window).off("keydown.preventBackspace"),window.removeEventListener("focus",this.onFocusListener),window.removeEventListener("blur",this.onBlurListener)}},{key:"render",value:function(){return this.isValidState()?"/mfa/setup"!==this.props.location.pathname&&(0,A.checkIfMFARequired)(this.props.match.url)?b.default.createElement(_.Redirect,{to:"/mfa/setup"}):this.props.children:b.default.createElement(q.default,null)}},{key:"onFocusListener",value:function(){L.emitBrowserFocus(!0)}},{key:"onBlurListener",value:function(){L.emitBrowserFocus(!1)}}]),t}(b.default.Component);t.default=N,N.propTypes={children:y.default.object}},1685:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(260);a.d(t,"MemoryRouter",function(){return r.a});var o=a(261);a.d(t,"Prompt",function(){return o.a});var n=a(262);a.d(t,"Redirect",function(){return n.a});var s=a(167);a.d(t,"Route",function(){return s.a});var d=a(110);a.d(t,"Router",function(){return d.a});var u=a(263);a.d(t,"StaticRouter",function(){return u.a});var i=a(264);a.d(t,"Switch",function(){return i.a});var l=a(111);a.d(t,"matchPath",function(){return l.a});var f=a(265);a.d(t,"withRouter",function(){return f.a})}});
//# sourceMappingURL=13.342828fe7f7c5ace7e85.js.map