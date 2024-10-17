var inadmin = false; var ismobile = false; var globtimediff = false; var globnow = new Date(); var usecookiedifftime = false; var filters_profile_parameters = 'hash'; var filters_profile_thisurl = location.href; var filtersModel = false; var filtersModelReview = false; var usehash = false; var stateScroll = false; var defaultFilters = defaultFilters || {}; var galleryData = galleryData || {}; var navEscortList = navEscortList || {}; var navLocationList = navLocationList || {}; var localStorageAvailable = -1; var availability_now_interval = false; var SITE = {}; $(function () {
    $.onDocumentReady({
        debuglogger: 'elog', report: function (message, type, typeint) { notice(message, type); }, refresh: function () { notices_hide(); }, onload: function () { $('noscript').remove(); }, bootstrap: function () { $.putignoresubmodules(['tooltip', 'form', 'img-data-get-size', 'submit-data-confirm', 'data-badge-aggregate', 'data-active', 'data-cmd', 'data-tags', 'data-typeahead', 'data-autocomplete', 'data-sortable', 'data-draggable',]); $.putimageloadparents(['.body.scroll-custom', '.select-box-body']); }, init: function () {
            $.putpostcallmultiinit(['ini_set_var']); $.putpostcallpriority([{ func: 'ini_set_var', priority: 0 }, { func: 'init_carusel_profile', priority: 9 }, { func: 'init_carusel', priority: 10 }, { func: 'init_menu_select', priority: 11 }, { func: 'init_fheader', priority: 12 }, { func: 'init_desktop_menu', priority: 13 }, { func: 'init_popups', priority: 14 }, { func: 'init_filters_mobile', priority: 1002 }, { func: 'init_filters_desktop', priority: 1001 }, { func: 'init_filters_profile', priority: 1000 }, { func: 'init_filters_review', priority: 1010 }, { func: 'init_availability', priority: 801 }, { func: 'init_availability_now', priority: 802 }, { func: 'init_accordion', priority: 820 }, { func: 'init_content_with_max_height', priority: 821 }, { func: 'init_form_profile_write_review', priority: 830 }, { func: 'init_form_validation', priority: 900 }, { func: 'init_login', priority: 998 }, { func: 'init_fav', priority: 700 }, { func: 'init_fav_update_subnav', priority: 701 }, { func: 'init_loadmore', priority: 850 }, { func: 'init_affix_filters', priority: 851 }, { func: 'init_pagination', priority: 852 }, { func: 'init_searchbar', priority: 1003 }, { func: 'init_form_mauth', priority: 1004 }, { func: 'init_subscription', priority: 1005 }, { func: 'init_bannerimg', priority: 1006 }, { func: 'init_metadatainfo', priority: 10000 }, { func: 'init_contextmenu', priority: 10001 }, { func: 'init_gototop', priority: 10002 }, { func: 'init_profile_page', priority: 10003 }, { func: 'init_tabs', priority: 10010 }, { func: 'init_anchgoto', priority: 10020 }, { func: 'init_pagecontent_with_readmore', priority: 10021 }, { func: 'init_contactus', priority: 10022 }, { func: 'init_membership', priority: 10023 }, { func: 'init_slideimg', priority: 10024 }, { func: 'init_hash_nav', priority: 10025 }, { func: 'init_updphones', priority: 10026 }, { func: 'init_adm_inst', priority: 10030 },]); inadmin = $('body').attr('data-in-admin'); inadmin = inadmin == undefined ? false : (inadmin ? true : false); ismobile = $('.main-wrapper').hasClass('browser-mobile'); $('noscript').hide(); var rooturl = $('body').data('rooturl'); var rooturlcdn = $('body').data('rooturlcdn'); var rooturljs = rooturl + 'core/js/'; var rooturlcss = rooturl + 'core/css/'; if (typeof (rooturlcdn) === typeof ('')) { rooturljs = rooturlcdn + 'core/js/'; rooturlcss = rooturlcdn + 'core/css/'; }
            var ver = ''; $.setVar('appbaseurl', $('body').data('appbaseurl')); $.setVar('rooturlthis', $('body').data('rooturl')); $.setVar('rooturlver', ver); $.setVar('rooturl', rooturl); $.setVar('rooturljs', rooturljs); $.setVar('rooturlcss', rooturlcss); init_back_btn(); $.setVar('modeismember', $('.main-wrapper').hasClass('is-member')); $.setVar('modeisadmin', $('.main-wrapper').hasClass('is-admin')); $.ajaxSetup({ cache: true, }); var date = new Date(); var datenow = new Date(); date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000)); $.cookie('isjs', 1, { path: '/', expires: date }); var lastvisit = Math.floor(datenow.getTime() / 1000); $.cookie('lastvisit', lastvisit, { path: '/', expires: date }); $.setVar('lastvisit', lastvisit); var lastvisitnow = $.cookie('lastvisitnow'); if (lastvisitnow == undefined || lastvisitnow + (7 * 24 * 60 * 60 * 1000) < lastvisit) { lastvisitnow = lastvisit; }
            $.cookie('lastvisitnow', lastvisitnow, { path: '/' }); lastvisitnow = parseInt(lastvisitnow); $.setVar('lastvisitnow', lastvisitnow); if (QueryString.navstate != undefined) { $('body').addClass(QueryString.navstate); }
            notices_hide(); notices_init(); defaultFilters = getDataFromScript('var-defaultFilters'); galleryData = getDataFromScript('var-galleryData'); if (QueryString.__focusto != undefined) {
                var t = QueryString.__focusto; t = t.replace('^', '#'); t = t.split('+').join(' '); t = t.split('::').join('='); var tt = QueryString.__focustotext; if (tt != undefined) { tt = tt.split('+'); tt = tt.join(' '); }
                $(t).elementInFocus(tt);
            }
        }, usecache: true, usecache: false, usecachegoto: false, usetrans: true, usejstransport: usehash, usejstransport_ignorepath: ['imagecomments'], boot: true, imageload_max: 16, imageload_simple: true, imageload_webppathes_ignore_basename: ['members.jpg', 'preview.jpg',], imageload_webppathes: { 'https://media.divaescort.com/images/preview/': 'https://media.divaescort.com/images/webppreview/', 'https://media.divaescort.com/images/previewwl/': 'https://media.divaescort.com/images/webppreviewwl/', 'https://media.divaescort.com/images/media/': 'https://media.divaescort.com/images/webpmedia/', 'https://media.divaescort.com/images/mediasm/': 'https://media.divaescort.com/images/webpmediasm/', 'https://media.divaescort.com/images/large/': 'https://media.divaescort.com/images/webplarge/', },
    });
}); async function notices_init() { $('#notice .alert .close').unbind('click').click(function () { var $item = $(this).closest('.alert'); $item.animate({ opacity: 0, top: -100 }, 500, function () { $item.remove(); if (!$('#notice .alert').length) { $('#notice').html(''); } }); return false; }); $(document).keydown(function (e) { if (e.keyCode == 27) { $('#notice .alert').each(function () { $(this).animate({ opacity: 0, top: -100 }, 500, function () { $(this).remove(); if (!$('#notice .alert').length) { $('#notice').html(''); } }); }); } }); }
async function notices_hide() { $('#notice .alert:not([data-timeoutid])').each(function () { var item = $(this); var id = setTimeout(function () { $(item).css({ position: 'relative' }); $(item).animate({ opacity: 0, top: -100 }, 500, function () { $(item).remove(); if (!$('#notice .alert').length) { $('#notice').html(''); } }); }, 3000); $(item).attr('data-timeoutid', id); }); }
async function notice(message, type) {
    if (type == undefined || type == '' || type == 4 || type == 's') { type = 'success'; }
    if (type == 'error' || type == 1 || type == 'e') { type = 'danger'; }
    if (type == 'warning' || type == 2 || type == 'w') { type = 'warning'; }
    if (type == 'info' || type == 3 || type == 'i') { type = 'info'; }
    if (!$('#notice').length) { $('body').append('<div id="notice"></div>'); }
    if (!$('#notice-in').length) { $('#notice').append('<div id="notice-in"></div>'); }
    $('#notice-in').append('<div class="alert alert-' + type + ' fs-md fw-sb" role="alert"><a class="close" data-dismiss="alert" href="#" aria-hidden="true">&times</a><span>' + message + '</span></div>'); notices_init(); notices_hide();
}
async function elog(message, description, line, file) {
    var data = {}; if (!message) { return; }
    data.message = message; if (description) { data.description = description; }
    $.ajax({ type: 'POST', url: $.getVar('rooturlthis') + 'elog', data: data, });
}
function stucked_reviews($e, t0) { var t = $e.offset().top; if (t > t0) { $e.addClass('stucked'); } else { $e.removeClass('stucked'); } }
async function init_stucked_reviews() { var $e = $('.page-nav.page-nav-with-ctrl'); var t0 = $('.page-nav-with-ctrl-top').offset().top; stucked_reviews($e, t0); $(window).scroll(function () { stucked_reviews($e, t0); }); }
async function getFromTemplate(template, target, remove) {
    if (!$(template).length) { return false; }
    var content = $(template).prop('content'); if (target === true) { $(content).insertAfter(template); } else if (typeof (target) === typeof ('')) { if (target === 'body') { $('body').append(content); } else { $(content).insertAfter(target); } }
    if (remove !== false) { $(template).remove(); }
    init_btn_submit(); return content;
}
function setStateScroll(item) { var scrolltop = false; if (item === false || item === undefined) { stateScroll = false; } else { scrolltop = $(window).scrollTop(); stateScroll = { scrollTop: scrolltop, item: item, offset: item.offset().top }; } }
function returnStateScroll() {
    var res = false; if (stateScroll && typeof (stateScroll) == typeof ({}) && stateScroll.item && stateScroll.offset) { var item = stateScroll.item; if (item.length) { var scrollTop = stateScroll.scrollTop; var offset = item.offset().top; var diff = offset - stateScroll.offset; var scrollto = scrollTop + diff; if (scrollto >= 0) { $('html').addClass('scroll-behavior-auto'); $(window).scrollTop(scrollto); $('html').removeClass('scroll-behavior-auto'); res = true; } } }
    stateScroll = false; return res;
}
function getOffsetTop(item, offset, checkinwindow) {
    var top = $(item).offset().top + offset; if (checkinwindow) { if ($(window).scrollTop() > top) { return top; } else { return false; } }
    return top;
}
function animScrollTo(scrollto, time, callback) {
    if (scrollto === false) { return; }
    time = time === undefined || time === true ? 500 : time; $('html, body').stop().animate({ scrollTop: scrollto }, time, 'linear', function () { if (callback && typeof (callback) === 'function') { callback(); } });
}
async function init_gototop() { $(window).on('scroll', function () { if ($(window).scrollTop() > 100) { $('.gototop').css('opacity', 1); } else { $('.gototop').css('opacity', 0); } }); $('.gototop').click(function () { animScrollTo(0); }); }
function ga_send() { }
function normfavlist(list) {
    var newlist = []; for (var i in list) {
        var item = list[i]; var add = false; if (typeof (item) === typeof ('') && item.indexOf('-') !== -1) {
            var items = item.split('-'); items = items.sort(); add = true; for (var j in items) { var itemInt = parseInt(items[j]); if (isNaN(itemInt) || items[j] !== itemInt.toString()) { add = false; break; } }
            if (add) { item = items.join('-'); }
        } else if (typeof (item) === typeof ('')) { var itemInt = parseInt(item); if (!isNaN(itemInt) && item === itemInt.toString()) { add = true; } } else if (typeof (item) === typeof (0) && item > 0) { add = true; item = item.toString(); }
        if (add) { newlist.push(item); }
    }
    var res = []; for (var i in newlist) {
        for (var i in newlist) {
            var exists = false; for (var j in res) { if (res[j] == newlist[i]) { exists = true; break; } }
            if (!exists) { res.push(newlist[i]); }
        }
    }
    return res;
}
function favlistdata(value, put) {
    var list = $.cookie('favlist'); if (list == undefined) { list = ''; }
    list = list.split(','); list = normfavlist(list); if (value != undefined) {
        if (value !== true) { if (put == false) { list = $.removefromlist(value, list); $.get($.getVar('rooturlthis') + 'fav/remove/?id=' + value); } else { if (!$.inlist(value, list)) { list.push(value); $.get($.getVar('rooturlthis') + 'fav/add/?id=' + value); } } }
        var date = new Date(); date.setTime(date.getTime() + (90 * 24 * 60 * 60 * 1000)); $.cookie('favlist', list.join(','), { path: '/', expires: date });
    }
    if (filtersModel !== false) { filtersModel.setCacheKey(list.join(',')); }
    $.setVar('favlist', list); return list;
}
function favlistdatabypartner() {
    var result = {}; var favlist = $.getVar('favlist'); for (var i in favlist) {
        var count = 0; var item = favlist[i]; if (item === '') { continue; }
        if (item.indexOf('-') !== -1) { count = item.split('-').length; } else { count = 1; }
        if (result[count] == undefined) { result[count] = 0; }
        result[count]++;
    }
    return result;
}
async function init_searchbar() { $('input.searchbar-form:not(.iinited),input.searchbar:not(.iinited)').each(function () { $(this).uisearch(); $(this).addClass('iinited'); }); $('.search-btnclose:not(.iinited)').click(function () { $(this).closest('.tabsearch').find('input.searchbar').uisearch("hint", "reset"); $(this).closest('.tabsearch').find('input.searchbar-form').uisearch("hint", "reset"); $(this).addClass('iinited'); }); }
async function ini_set_var(name, value) { $.setVar(name, value); }
async function init_hash_nav() {
    if (filters_profile_parameters === 'hash') {
        var hash = $.url_hash(document.location.href); if (hash) {
            $('.cmd-nav-back-to-result,.cmd-nav-goto-prev,.cmd-nav-goto-next').each(function () {
                var href = $(this).attr('href'); var _href = href; var nhash = hash; var rurl = false; var backtoduo = false; if ($(this).hasClass('cmd-nav-back-to-result')) {
                    var hashargs = $.args2obj(hash); if (typeof (hashargs['rurl']) === typeof ('')) { rurl = hashargs['rurl']; delete hashargs['rurl']; }
                    if (typeof (hashargs['backurl']) === typeof ('')) {
                        if (hashargs['backurl'] && hashargs['backurl'].indexOf('duo-') === 0 && hashargs['backurl'].indexOf('-and-') !== -1) { backtoduo = true; }
                        var backurl = '/' + hashargs['backurl']; href = href + backurl; delete hashargs['backurl']; if (backtoduo && galleryData['duo']) { hashargs['backurl'] = galleryData['duo'].link; }
                    }
                    nhash = $.obj2args(hashargs, false, false);
                } else {
                    var hashargs = $.args2obj(hash); if (typeof (hashargs['rurl']) === typeof ('')) { delete hashargs['rurl']; }
                    nhash = $.obj2args(hashargs, false, false);
                }
                if ($(this).hasClass('cmd-nav-back-to-result')) {
                    if (rurl) { $(this).attr('href', $.getVar('appbaseurl') + rurl + (nhash ? '#' + nhash : '')); $(this).html('Back to Reviews'); } else {
                        if (backtoduo) { $(this).html('Back'); }
                        var name = $('.page .item-name .name').text(); name = name.toLowerCase().replace(' ', '-'); if (name && backtoduo === false) { $(this).attr('href', href + '#' + (nhash + (nhash ? '&' : '') + 'profile-' + name)); } else { $(this).attr('href', href + (nhash ? '#' : '') + nhash); }
                    }
                } else { $(this).attr('href', href + (nhash ? '#' + nhash : '')); }
            }); var pid = $('.page.page-profile-item').attr('data-itemid'); if (pid) {
                var _hash = $.args2obj(hash); var nhash = _hash; if (typeof (_hash['rurl']) === typeof ('')) { delete _hash['rurl']; } else { }
                nhash = $.obj2args(nhash, false, false); var u = $.getVar('rooturlthis') + 'girls/getprevnext/?' + nhash + '&id=' + pid; $.get(u, function (data) {
                    data = jQuery.parseJSON(data); if (data.next) { $('.cmd-nav-goto-next').attr('title', data.next.name); $('.cmd-nav-goto-next').attr('href', $.getVar('rooturlthis') + 'girls/' + data.next.link + (nhash ? '#' + nhash : '')); $('.cmd-nav-goto-next').removeClass('hide'); } else { $('.cmd-nav-goto-next').addClass('hide'); }
                    if (data.prev) { $('.cmd-nav-goto-prev').attr('title', data.prev.name); $('.cmd-nav-goto-prev').attr('href', $.getVar('rooturlthis') + 'girls/' + data.prev.link + (nhash ? '#' + nhash : '')); $('.cmd-nav-goto-prev').removeClass('hide'); } else { $('.cmd-nav-goto-prev').addClass('hide'); }
                })
            }
        }
    }
}
async function upd_alt_gallery() { if ($('.cmd-loadmore').length) { $('.altgallery-wrapper').addClass('hide'); } else { $('.altgallery-wrapper').removeClass('hide'); } }
async function init_recalc_counts() {
    var $page = $('.page'); var count = $('.list[data-items-found]').attr('data-items-found'); if (count && parseInt(count) > 0) { $('.page-subnav .count').html(count); if ($page.hasClass('page-review')) { $('.count-in-title').html(count).removeClass('hide'); } }
    $('.page-subnav .count').removeClass('hide');
}
async function init_back_btn() {
    $('.btn-back').each(function () {
        if (document.referrer && document.referrer.indexOf($.getVar('appbaseurl')) === 0) {
            var h = $.url_hash(window.location.href); if (h.length) { var href = document.referrer + '#' + h; } else { var href = document.referrer; }
            $(this).attr('href', href);
        }
    });
}
async function loadmore_remove_duplicates($element) { $element.find('.item-cell').each(function () { if ($(this).attr('data-isdup')) { } else { $(this).attr('data-chkdup', 1); var itemlink = $(this).attr('data-item-link'); $element.find('.item-cell[data-item-link="' + itemlink + '"]').not('[data-chkdup="1"]').attr('data-isdup', 1); $(this).removeAttr('data-chkdup'); } }); $element.find('.item-cell[data-isdup="1"]').remove(); }
async function filters_goto_profile() {
    var gotoprofile = false; var anch = window.location.hash.substr(1); var str_anch = anch; anch = $.args2obj(anch); for (var i in anch) { if (i.indexOf('profile-') !== -1) { gotoprofile = i.substr(8); } }
    if (gotoprofile) {
        if (str_anch.indexOf('&profile-' + gotoprofile) !== -1) { str_anch = str_anch.replace('&profile-' + gotoprofile, ''); } else if (str_anch.indexOf('?profile-' + gotoprofile) !== -1) { str_anch = str_anch.replace('?profile-' + gotoprofile, ''); }
        gotoprofile = gotoprofile.replace('%20', '-'); if ($('#profile-' + gotoprofile).length) {
            var scrollto = false; scrollto = $('#profile-' + gotoprofile).offset().top; var offset = 0; if ($('.page-subnav').length) { offset = offset + (ismobile ? $('.top-header .menu').outerHeight() : 0) + $('.page-subnav').outerHeight(); }
            if ($('.menu-float').length) { offset = offset + $('.menu-float').outerHeight(); }
            animScrollTo(scrollto - offset); window.location.hash = str_anch;
        }
    }
}
async function init_pagination() { $('.list-pagination').each(function () { if (!$(this).find('ul').length) { $(this).addClass('hide'); } }); }
async function init_loadmore_reviews() {
    $('.cmd-reviewloadmore').unbind('click').click(function () {
        var u = $(this).attr('data-url'); var $btn = $(this); $btn.addClass('loading').attr('disabled', 'disabled'); var wrapper = $('.all-reviews-wrapper'); wrapper.addClass('loading-more'); $.get(u, function (data) {
            $('body').append('<div id="pre-rlist" class="hide" style="content-visibility: hidden; display:none;">' + data + '</div>'); var $_btn = $('#pre-rlist').find('.all-reviews-wrapper .cmd-reviewloadmore'); if ($_btn.length) { $btn.attr('data-url', $_btn.attr('data-url')); $btn.attr('data-part', $_btn.attr('data-part')); $btn.find('.count').html($_btn.find('.count').html()); } else { $btn.closest('.loadmore-wrapper-btn').remove(); }
            wrapper.find('.review-list').append($('#pre-rlist').find('.all-reviews-wrapper .review-list').html()); $('#pre-rlist').remove(); $btn.removeClass('loading').removeAttr('disabled'); wrapper.removeClass('loading-more'); init_profile_modal_review();
        });
    }); init_profile_modal_review();
}
async function init_loadmore() {
    $('.cmd-gotoaltgallery').unbind('click').click(function () {
        var u = $(this).attr('data-url'); var args = $('#form-profile-filters').serialize().replace(/\+/g, '%20'); args = args.split('%5B').join('['); args = args.split('%5D').join(']'); if (filters_profile_parameters === 'url') { args = args ? '?' + args : ''; } else if (filters_profile_parameters === 'hash') { args = args ? '#' + args : ''; }
        document.location.href = u + args; return false;
    }); init_parts_state($('.cmd-loadmore')); $('.cmd-loadmore').unbind('click').on('click', function () { var u = $(this).attr('data-url'); var $this = $(this); loadParts(u, 'more', $this, $this); return false; }); if ($('.cmd-loadmore').closest('.page-content').find('.list .item-cell').length) { $('.cmd-loadmore').closest('.loadmore-and-pagination-wrapper').removeClass('hide'); } else { $('.cmd-loadmore').closest('.loadmore-and-pagination-wrapper').addClass('hide'); }
}
async function init_goto_filters() {
    if ($('.page .cmd-goto-filters').length) {
        $('.page .cmd-goto-filters').unbind('click').on('click', function () {
            if ($('#main-menu-item-filters').length) { $('#main-menu-item-filters').trigger('click'); } else {
                if (filtersModel) { filtersModel.setAllowFilters(true); }
                mobile_menu_wrapper_toggle_class($('body'), 'submenu-filters-m', 'show-galleries show-search show-contacts'); affix_check();
            }
            return false;
        });
    }
}
async function init_filters_pagination() {
    if (filtersModel) { filtersModel.updUrlPart(); }
    if (filtersModelReview) { filtersModelReview.updUrlPart(); }
    $('.list-pagination li a').unbind('click').click(function () {
        var u = $(this).attr('data-url'); var $this = $(this); var top = $(window).scrollTop(); var scrollto = false; var $list = $this.closest('.page').find('.list.page-list'); if ($list.length) { var offset = 0; offset = offset + $('.page-subnav').outerHeight(); offset = offset + $('.menu-float').outerHeight(); scrollto = $list.offset().top - offset; }
        var layout = $list.attr('data-layout'); u = u + (u.indexOf('?') === -1 ? '?' : '&') + 'layouts=' + layout; loadParts(u, 'part', $this, $('.cmd-loadmore')); return false;
    });
}
async function init_parts_state(btn) {
    var $btn = $(btn); if ($btn.closest('.page.page-profile').length) { return; }
    var args = fetchHrefArgs(); args = $.args2obj(args); var btn_part = $btn.attr('data-part'); var args_part = args.part ? parseInt(args.part) : false; btn_part = btn_part ? parseInt(btn_part) : false; if (args_part && btn_part && btn_part != args_part) { var url = $btn.attr('data-url'); url = changeArg(url, 'part', args.part); loadParts(url, 'part', $btn, $btn) }
}
async function loadParts(url, mode, context, btnLoadMore) {
    var $this = $(context); var $btnLoadMore = $(btnLoadMore); var top = $(window).scrollTop(); var scrollto = false; var $list = $this.closest('.page').find('.list.page-list'); if ($list.length) { var offset = 0; offset = offset + $('.page-subnav').outerHeight(); offset = offset + $('.menu-float').outerHeight(); scrollto = $list.offset().top - offset; }
    if (filtersModel) { filtersModel.loadingStatus(mode === 'part' ? 'start' : 'start-loadmore'); }
    if (filtersModelReview) { filtersModelReview.loadingStatus(mode === 'part' ? 'start' : 'start-loadmore'); }
    $btnLoadMore.addClass('loading').attr('disabled', 'disabled'); $.get(url, function (data) {
        $btnLoadMore.removeClass('loading').removeAttr('disabled'); if (filtersModel) { filtersModel.loadingStatus('finish'); }
        if (filtersModelReview) { filtersModelReview.loadingStatus('finish'); }
        var $page = $this.closest('.page'); $('body').append('<div id="pre-list" class="hide" style="content-visibility: hidden; display:none;">' + data + '</div>'); if (mode === 'part') { $page.find('.list.page-list').html($('body').find('#pre-list .list').html()); $page.find('.after-last-loadmore').html($('body').find('#pre-list .after-last-loadmore').html()); $page.find('.loadmore-wrapper').html($('body').find('#pre-list .loadmore-wrapper').html()); } else { $page.find('.list.page-list').append($('body').find('#pre-list .list').html()); $page.find('.after-last-loadmore').html($('body').find('#pre-list .after-last-loadmore').html()); }
        $page.find('.list-pagination').html($('body').find('#pre-list .list-pagination').html()); var part = $btnLoadMore.attr('data-part'); part = parseInt(part); if ($('body').find('#pre-list .cmd-loadmore').length) { $this.attr('data-url', $('body').find('#pre-list .cmd-loadmore').attr('data-url')); $btnLoadMore.attr('data-part', $('body').find('#pre-list .cmd-loadmore').attr('data-part')); part = $btnLoadMore.attr('data-part'); $btnLoadMore.find('.count').html($('body').find('#pre-list .cmd-loadmore .count').html()); } else { part = part + 1; $btnLoadMore.attr('data-part', part); $btnLoadMore.addClass('hide'); }
        $('noscript').remove(); $('body').find('#pre-list').remove(); updUrlPart(part); if ($page.hasClass('page-profile')) { loadmore_remove_duplicates($page.find('.list.page-list')); affix_filters(); }
        var _stateScroll = returnStateScroll(); if (_stateScroll === false) {
            var doscroll = false; if (filtersModel) { doscroll = filtersModel.isScrollOnUpdate(); }
            if (filtersModelReview) { doscroll = filtersModelReview.isScrollOnUpdate(); }
            if (doscroll) { if (mode === 'part') { animScrollTo(scrollto); } else { $(window).scrollTop(top); } }
            if (filtersModel) { filtersModel.setScrollOnUpdate(true); }
            if (filtersModelReview) { filtersModelReview.setScrollOnUpdate(true); }
        }
        init_slideimg(); init_availability(); init_availability_now(); init_fav(); upd_alt_gallery(); $.imageload(); init_pagination(); init_filters_pagination(); init_goto_filters(); if (mode === 'part') { init_loadmore(); }
        if ($page.hasClass('page-review')) { init_reviews_list(); init_content_with_max_height(); }
        if (typeof (init_contextmenu) === 'function') { init_contextmenu(); }
    });
}
async function updUrlPart(part) {
    if (!(part && parseInt(part) !== NaN)) { return; }
    var href = ''; var path = $.url_path(window.location.href); var prevargs = $.url_args(window.location.href); var args = fetchHrefArgs(); args = changeArg(args, 'part', part); switch (filters_profile_parameters) { case 'url': var prevhash = $.url_hash(window.location.href); href = path + (args ? '?' : '') + args + (prevhash ? '#' : '') + prevhash; window.history.pushState({ html: '', pageTitle: document.title, }, '', href); break; case 'hash': href = path + (prevargs ? '' : '?') + prevargs + (args ? '#' : '') + args; window.history.pushState({ html: '', pageTitle: document.title, }, '', href); break; }
}
function fetchHrefArgs() {
    var args = false; switch (filters_profile_parameters) { case 'url': args = $.url_args(window.location.href); break; case 'hash': args = $.url_hash(window.location.hash); break; }
    return leftTrimStrArgs(args);
}
function changeArg(args, name, value) {
    var p = -1; var end = ''; var start = ''; var prefix = ''; if (!args) { return name + '=' + value; }
    if ((p = args.indexOf('?' + name + '=')) !== -1) { prefix = '?'; start = args.substr(0, p); end = args.substr(p + name.length + 2); } else if ((p = args.indexOf('&' + name + '=')) !== -1) { prefix = '&'; start = args.substr(0, p); end = args.substr(p + name.length + 2); } else if ((p = args.indexOf('?' + name)) !== -1) { prefix = '?'; start = args.substr(0, p); end = args.substr(p + name.length + 1); } else if ((p = args.indexOf('&' + name)) !== -1) { prefix = '&'; start = args.substr(0, p); end = args.substr(p + name.length + 1); } else if ((p = args.indexOf(name + '=')) !== -1) { prefix = ''; start = args.substr(0, p); end = args.substr(p + name.length + 1); } else { return args + (args ? '&' : '') + name + '=' + value; }
    var val = ''; if ((p = end.indexOf('&')) !== -1) { val = end.substr(0, p); end = end.substr(p); } else { val = end; end = ''; }
    args = start + prefix + name + '=' + value + end; return args;
}
function leftTrimStrArgs(args) {
    if (args && (args.indexOf('&') !== -1 || args.indexOf('?') !== -1)) { while (args.substr(0, 1) === '&' || args.substr(0, 1) === '?') { args = args.substr(1); } }
    return args;
}
async function init_metadatainfo() {
    if (!inadmin) {
        $('.metadata').removeClass('hide'); $('.metadata .metadata-info').hide().addClass('scroll-custom'); var thisurl = ''; thisurl = encodeURI(location.href); var data = {}; data.Count_Nodes = document.getElementsByTagName('*').length; data.Title = $(document).find("title").text(); data.H1 = $('h1').first().html(); data.H2 = $('h2').first().html(); data.H3 = $('h3').first().html(); data.Keywords = $('meta[name=keywords]').attr("content"); data.Description = $('meta[name=description]').attr("content"); data.Canonical_URL = $('link[rel="canonical"]').attr("href"); data.OG_Image = $('meta[property="og:image"]').attr("content"); data.OG_Title = $('meta[property="og:title"]').attr("content"); data.OG_Description = $('meta[property="og:description"]').attr("content"); data.Current_Link = document.location.href; data.Current_Link = data.Current_Link.replace('/t2/', '/'); data.Favorites_List = $.cookie('favlist'); var _data = []; for (var i in data) {
            var prop = i; prop = prop.replace('_', ' '); if (data[i] == undefined) { data[i] = ''; }
            if (typeof (data[i]) === typeof ('')) { if (data[i].indexOf('//') === 0 || data[i].indexOf('https://') === 0 || data[i].indexOf('http://') === 0) { data[i] = '<a href="' + encodeURI(data[i]) + '" target="_blank">' + encodeURI(data[i]) + '</a>'; } }
            _data.push('<div class="metadata-item"><b>' + prop + '</b>: <span>' + data[i] + '</span></div>');
        }
        $('.metadata-info').html(_data.join(''));
    }
}
async function affix_header(offset) { var top = $(window).scrollTop(); if (top > offset && $(window).width() > 767 && $(window).height() > 500) { $('header .menu-float').addClass('fixed'); $('header .under-fixed').removeClass('hide'); } else { $('header .menu-float').removeClass('fixed'); $('header .under-fixed').addClass('hide'); } }
async function init_fheader() { var offset = $('header .menu-float').offset().top; var h = $('header .menu-float').outerHeight() + 0; $('<div></div>').insertAfter('header .menu-float').addClass('under-fixed').css({ height: h }).addClass('hide'); $(window).scroll(function () { affix_header(offset); }); if ($(window).scrollTop() > 0) { affix_header(offset); } }
async function create_select(el, data, url_suffix, text, _name, _value, url_value) {
    var $el = $(el); if (data && data.length) {
        var prefix = $el.attr('data-valueprefix'); var baseurl = $('body').data('rooturl') + $.getVar('rooturlver'); var _html = []; _html.push('<option disabled="disabled" selected="selected">' + text + '</option>'); for (var i in data) {
            var n = data[i][_name]; var v = data[i][_value]; if (url_value === true) { v = v.toLowerCase().replace(' ', '-'); }
            _html.push('<option value="' + prefix + v + '">' + n + '</option>');
        }
        $el.html(_html.join('')); $el.addClass('with-data'); $el.unbind('change').change(function (e) { if (usehash) { $.gotourl($(this).val()); } else { document.location.href = $(this).val(); } });
    }
}
async function init_menu_select() {
    if (typeof (navEscortList) !== 'undefined') {
        $('.select-list .select.select-by-name:not(.with-data)').each(function () {
            $(this).on('focus', function () {
                if (!navEscortList.length) { navEscortList = getDataFromScript('var-navEscortList'); }
                create_select($(this), navEscortList, 'girls/', 'Select by Name', 'n', 'l');
            })
        });
    }
    if (typeof (navLocationList) !== 'undefined') {
        $('.select-list .select.select-by-location:not(.with-data)').each(function () {
            $(this).on('focus', function () {
                if (!navLocationList.length) { navLocationList = getDataFromScript('var-navLocationList'); }
                create_select($(this), navLocationList, 'girls/location-london/', 'Select by Location', 'n', 'n', true);
            })
        });
    }
    $('.select-list select').unbind('change').change(function (e) {
        var $this = $(this); var prefix = $(this).attr('data-valueprefix'); if (!prefix) { prefix = ''; }
        if (usehash) { $.gotourl(prefix + $(this).val()); } else { document.location.href = prefix + $(this).val(); }
    }); var base = document.location.href; if ($.getVar('rooturlthis').length) { base = base.substring($.getVar('rooturlthis').length); $('.select-list[data-selectin]').each(function () { var selectin = $(this).attr('data-selectin'); if (base.indexOf(selectin) === 0 && base.length > selectin.length) { var sbase = base.substring(selectin.length); if (sbase.length) { if ($(this).find('select option[value="' + sbase + '"]').length) { $(this).find('select').val(sbase); } } } }); }
}
async function init_pagecontent_with_readmore() {
    $('.with-readmore').each(function () {
        var $this = $(this); $this.parent().find('.ctrl-read-more-less a').click(function () {
            $(this).addClass('hide'); if ($(this).hasClass('read-more')) { $this.addClass('view-more'); $(this).closest('.ctrl-read-more-less').find('.read-less').removeClass('hide'); } else { $this.removeClass('view-more'); $(this).closest('.ctrl-read-more-less').find('.read-more').removeClass('hide'); animScrollTo($this.offset().top - (ismobile ? 100 : 100)); }
            return false;
        });
    });
}
async function toggle_popups() { $('.is-pop-up').each(function () { var tp = $(this).attr('data-toggle-parent'); tp = tp && tp.indexOf('/') !== -1 ? tp.split('/') : [tp]; var _tp = tp.shift(); var _tm = tp.shift(); if (_tp && $(this).closest(_tp).hasClass('open')) { if (_tm) { $(this).closest(_tp).find(_tm).trigger('click'); } } }); if ($('#menu-item-galleries.active').length) { $('#menu-item-galleries').trigger('click'); } }
function dropdown_menu_item_get_text(item) {
    var text = ''; var isHtml = false; var $this = $(item); if ($this.attr('data-menuplaceholder')) { text = $this.attr('data-menuplaceholder'); } else if ($this.attr('data-menutextashtml')) { text = $this.html(); isHtml = true; } else { text = $this.text(); }
    var args = $this.attr('data-args'); var an = ''; var av = ''; if (args.indexOf('=') !== -1) { args = args.split('='); an = args.shift(); av = args.join('='); } else { an = args; }
    if (isHtml === false && text.indexOf(':') !== -1) { text = text.split(':'); text.shift(); text = text.join('').trim(' '); } else { text = text; }
    return { 'text': text, 'isHtml': isHtml, 'argName': an, 'argValue': av, }
}
async function dropdown_menu_item_set_active(item) {
    var itemData = dropdown_menu_item_get_text(item); var $this = $(item); var group = $(this).attr('data-menugroup'); if (group) { $this.closest('ul').find('li a[data-menugroup="' + group + '"]').each(function () { $(this).closest('li').removeClass('active'); }); } else { $this.closest('ul').find('li').removeClass('active'); }
    $this.closest('li').addClass('active'); var $sorting = $this.closest('.sorting'); $sorting.find('.sort-by-val').html(itemData.text); $sorting.find('.sorting-input').attr('name', itemData.argName).val(itemData.argValue)
}
async function dropdown_menu_upd(selector, args) {
    $(selector).each(function () {
        var $this = $(this); var item = false; $this.find('ul a').each(function () {
            for (var an in args) {
                if ($(this).attr('data-args') === an + '=' + args[an]) {
                    if (item === false) { item = dropdown_menu_item_get_text($(this)); }
                    dropdown_menu_item_set_active($(this)); $(this).closest(selector).find('.sorting-input').attr('name', an).val(args[an]);
                }
            }
        }); if (item) { $this.find('.sort-by-val').html(item.text); }
    });
}
async function init_bannerimg() { if (!$('.banner-list').attr('inited')) { } }
async function check_content_with_max_height() {
    $('.check-max-height:not(.inited)').each(function () {
        var $this = $(this); $this.addClass('inited'); if (!$this.find('.with-max-height').length) { return; }
        var height = 0; var cheight = 0; var oheight = 0; var bheight = 0; var $btn = $this.find('.view-more'); var $content = $this.find('.with-max-height'); $content.addClass('hide'); $btn.removeClass('hide'); bheight = $btn.height(); oheight = $this.closest('.item-content').height(); var $item = $this.closest('.item'); height = $item.height(); $item.attr('data-item-max-height', height); $item.attr('data-item-max-oheight', oheight); $content.removeClass('hide'); $content.css('max-height', ''); cheight = $content.height(); var coeff = 10; var toheight = height - oheight - coeff; var fontSize = $content.css('font-size'); var lhcoeff = 1.2; var lineHeight = Math.floor(parseInt(fontSize.replace('px', '')) * lhcoeff); if (toheight >= cheight - bheight - coeff - 5) { toheight = toheight + bheight + coeff; ctoheight = Math.floor(toheight / lineHeight); toheight = ctoheight * lineHeight; $btn.addClass('hide'); $content.css('max-height', toheight); } else if (cheight && cheight > toheight) { ctoheight = Math.floor(toheight / lineHeight); toheight = ctoheight * lineHeight; toheight = toheight <= lineHeight ? lineHeight : toheight; $content.css('max-height', toheight); $btn.removeClass('hide'); } else { $btn.addClass('hide'); }
    });
}
var init_content_with_max_height_resize = false; async function init_content_with_max_height() {
    check_content_with_max_height(); if (init_content_with_max_height_resize === false) { $(window).resize(function () { check_content_with_max_height(); }); init_content_with_max_height_resize = true; }
    $('.ctrl-view-more').unbind('click').click(function () {
        var $this = $(this); var $e = $this.closest('.check-max-height').find('.with-max-height'); $e.toggleClass('open'); if (!$e.hasClass('open')) {
            var scrollto = $e.closest('.item').offset().top; if ($('html').scrollTop() > scrollto) { animScrollTo(scrollto); }
            $this.closest('.item').removeClass('item-content-text-float');
        } else { $this.closest('.item').addClass('item-content-text-float'); }
        if ($this.closest('.owl-item').length) { if (typeof (owlcarusels) != 'undefined' && owlcarusels['review-list-promo'] != undefined) { var carusel = owlcarusels['review-list-promo']; if (carusel) { carusel.trigger('refresh.owl.carousel'); } } }
        return false;
    });
}
async function init_adm_inst() { $('.abtn-list a:not([data-submit])').each(function () { var $item = $(this); if ($item.attr('data-confirm')) { $item.on('click', function () { if (!confirm($(this).attr('data-confirm'))) { return false; } }); } }); }
async function init_btn_submit() {
    $('[data-submit]:not(.inited)').each(function () {
        $(this).click(function () {
            if ($(this).attr('data-confirm') && !confirm($(this).attr('data-confirm'))) { return false; }
            var target = $(this).attr('data-submit'); $(target).submit(); return false;
        });
    });
}
async function fav_remove(selection) {
    var favcount = $.getVar('favcount'); if (typeof (selection) === typeof ('')) { selection = [selection]; }
    var favlist = favlistdata(true); var removed = []; var newlist = []; for (var i in favlist) { var id = favlist[i]; var ids = id.split('-'); if ((id.length > 0 && selection.indexOf('all') !== -1) || (ids.length === 2 && selection.indexOf('duo') !== -1) || (ids.length === 1 && selection.indexOf('single') !== -1)) { removed.push(id); favcount--; } else { newlist.push(id); } }
    if (removed) { $.get($.getVar('rooturlthis') + 'fav/remove/?id=' + removed.join(','), function () { }); var favcount_date = new Date(); var sec = 0; favcount_date.setTime(favcount_date.getTime() + (sec * 1000)); var date = new Date(); date.setTime(date.getTime() + (90 * 24 * 60 * 60 * 1000)); $.cookie('favlist', newlist.join(','), { path: '/', expires: date }); $.cookie('favcount', favcount, { path: '/', expires: favcount_date }); $.setVar('favcount', favcount); init_fav(); init_fav_update(); }
}
async function init_fav_cmd(wrapper) {
    $('.cmd-clear-fav').unbind('click').click(function () {
        var clearfavselect = []; var rselection = []; var allitems = $('.custom-filters-partner-count input').length; $('.custom-filters-partner-count input:checked').each(function () { var n = $(this).attr('data-favname'); if (n) { clearfavselect.push(n); rselection.push(n.toLowerCase()); } }); if (!clearfavselect.length || allitems === clearfavselect.length) { if (!confirm('Are you sure want to clear favourites?')) { return false; } else { fav_remove('all'); } } else { if (!confirm('Are you sure want to clear ' + clearfavselect.join(' and ') + ' favourites?')) { return false; } else { fav_remove(rselection); } }
        return false;
    });
}
async function init_favcount_update() {
    var favcount = $.getVar('favcount'); if (!$('#main-menu-item-favourites .count').length && favcount > 0) { } else if ($('#main-menu-item-favourites .count').length) { $('#main-menu-item-favourites .count').html(favcount > 0 ? favcount : ''); }
    if (!$('#main-submenu-item-favourite-escorts .count').length && favcount > 0) { $('#main-submenu-item-favourite-escorts').append('<span class="count color-secondary rel">' + favcount + '</span>') }
    if ($('#data-infilters').length && $('#data-infilters').attr('data-filter-gallery') === 'favorites') { if ($('.page-subnav .title .count').length) { if (favcount > 0) { $('.page-subnav .title .count').html(favcount); } else { $('.page-subnav .title .count').html(''); } } }
    var favcount_by_partner = favlistdatabypartner(); var show_sorting_by_fav = true; var gallery_name = ''; var is_main_gallery = false; if ($('#data-infilters').length) { gallery_name = $('#data-infilters').attr('data-filter-gallery'); is_main_gallery = $('#data-infilters').attr('data-ismaingallery') == 1 ? true : false; }
    if (gallery_name == 'favorites') { show_sorting_by_fav = true; } else if (gallery_name == 'duo' && favcount_by_partner[2] !== undefined) { show_sorting_by_fav = true; } else if (gallery_name != 'duo' && favcount_by_partner[1] !== undefined) { show_sorting_by_fav = true; } else { show_sorting_by_fav = false; }
    if (favcount > 0 && show_sorting_by_fav === true) { $('.menu-sorting .menu-sorting-item-sort-fav-desc').removeClass('hide'); } else { $('.menu-sorting .menu-sorting-item-sort-fav-desc').addClass('hide'); }
}
async function init_fav_update_subnav(wrapper) { if ($('#data-infilters').length && $('#data-infilters').attr('data-filter-gallery') === 'favorites') { var favcount = $.getVar('favcount'); if (favcount != undefined && parseInt(favcount) > 0) { $('.page-subnav-fav').removeClass('hide'); } else { $('.page-subnav-fav').addClass('hide'); } } }
async function init_fav_update(wrapper, notinlist) {
    var selector = '.review-list .item .fav,.profile-list .item .fav,.page.page-profile-item .fav'; if (wrapper && typeof (wrapper) === '') { selector = wrapper + selector; }
    var favlist = favlistdata(true); $(selector).each(function (e) {
        var $this = $(this); var id = $this.attr('data-itemid'); var multiids = $this.attr('data-itemmultiids'); if (multiids) { id = multiids; }
        if (id && $.inlist(id, favlist)) { $this.addClass('selb'); $this.closest('.item-cell').addClass('is-fav'); } else { $this.removeClass('selb'); $this.closest('.item-cell').removeClass('is-fav'); }
    }); if ($('#data-infilters').length && $('#data-infilters').attr('data-filter-gallery') === 'favorites') {
        if (filtersModel !== false) {
            var list = $.cookie('favlist'); if (list == undefined) { list = ''; }
            filtersModel.setScrollOnUpdate(false); filtersModel.setCacheKey(list); filtersModel.refresh();
        }
    }
    init_fav_update_subnav();
}
async function init_fav(wrapper) {
    if (!$('#main-submenu-item-favourite-escorts .count').length) { $('#main-submenu-item-favourite-escorts').append('<span class="count color-darkred rel brad-df fw-b hide"></span>') }
    var favlist = favlistdata(true); var favcount = $.getVar('favcount', false); if (favcount === false) { favcount = $.cookie('favcount'); favcount = false; }
    var favcount_date = new Date(); var sec = 0; favcount_date.setTime(favcount_date.getTime() + (sec * 1000)); $('.menu-item-favorites .count').html(''); $('#main-submenu-item-favourite-escorts .count').html('').addClass('hide'); if ((!favcount || favcount === false || favcount === undefined) && favcount !== '0') {
        $.get($.getVar('rooturlthis') + 'favcount/?list=' + favlist.join(','), function (data) {
            data = parseInt(data); if (data > 0) { favcount = data; $('.menu-item-favorites .count').html(favcount); $('#main-submenu-item-favourite-escorts .count').html(favcount).removeClass('hide'); } else { favcount = 0; }
            $.cookie('favcount', favcount, { path: '/', expires: favcount_date }); $.setVar('favcount', favcount); init_favcount_update(); init_fav_update_subnav();
        });
    } else {
        favcount = parseInt(favcount); if (favcount > 0) { $('.menu-item-favorites .count').html(favcount); $('#main-submenu-item-favourite-escorts .count').html(favcount).removeClass('hide'); } else { favcount = 0; }
        $.cookie('favcount', favcount, { path: '/', expires: favcount_date }); $.setVar('favcount', favcount); init_favcount_update(); init_fav_update_subnav();
    }
    var selector = '.review-list .item .fav,.profile-list .item .fav,.page.page-profile-item .fav'; if (wrapper && typeof (wrapper) === '') { selector = wrapper + selector; }
    $(selector).not('.init').each(function (e) {
        var $this = $(this); $this.removeClass('prehide').addClass('init'); var id = $this.attr('data-itemid'); var name = $this.attr('data-item-name'); var multiids = $this.attr('data-itemmultiids'); if (multiids) { id = multiids; }
        if (id && $.inlist(id, favlist)) { $this.addClass('selb'); $this.closest('.item-cell').addClass('is-fav'); }
        $this.unbind("click").click(function (e) {
            setStateScroll($(this)); var favcount = $.getVar('favcount'); if (!$(this).hasClass('selb')) {
                favlistdata(id); ga_send('favorite', 'add', id); $(this).closest('.item-cell').addClass('is-fav'); var c = $(this).find('.favcount').html(); if (c != '') { c = parseInt(c) + 1; } else { c = 1; }
                $(this).find('.favcount').html(c); favcount = favcount + 1; $('.menu-item-favorites .count').html(favcount); $('#main-submenu-item-favourite-escorts .count').html(favcount).removeClass('hide'); $.cookie('favcount', favcount, { path: '/', expires: favcount_date }); $.setVar('favcount', favcount); notice('<b>' + name + '</b> added to your favourites', 4);
            } else {
                favlistdata(id, false); ga_send('favorite', 'remove', id); $(this).closest('.item-cell').removeClass('is-fav'); var c = $(this).find('.favcount').html(); if (c != '') { c = parseInt(c) - 1; }
                c = c <= 0 ? "" : c; $(this).find('.favcount').html(c); favcount = favcount - 1; if (favcount > 0) { $('.menu-item-favorites .count').html(favcount); $('#main-submenu-item-favourite-escorts .count').html(favcount).removeClass('hide'); } else { favcount = 0; $('.menu-item-favorites .count').html(''); $('#main-submenu-item-favourite-escorts .count').html(favcount).addClass('hide'); }
                $.cookie('favcount', favcount, { path: '/', expires: favcount_date }); $.setVar('favcount', favcount); notice('<b>' + name + '</b> removed from your favourites', 4);
            }
            $(this).toggleClass('selb'); init_fav_update(); init_favcount_update(); e.preventDefault(); return false;
        });
    });
}
async function mobile_menu_wrapper_toggle_class(wrapper, state, remove, mode) {
    if (remove) { wrapper.removeClass(remove); }
    if (typeof (state) === typeof ('')) { state = state.split(','); }
    for (var i in state) { var s = state[i]; if (mode === 'hide') { if (wrapper.hasClass('show-' + s)) { wrapper.removeClass('show-' + s).addClass('hide-' + s); } } else { if (wrapper.hasClass('show-' + s)) { wrapper.removeClass('show-' + s).addClass('hide-' + s); } else { wrapper.addClass('show-' + s).removeClass('hide-' + s); } } }
    if (mode === 'hide') { for (var i in state) { wrapper.removeClass('hide-' + state[i]); } }
}
async function init_phone4digits() {
    $('.form-input-for-phone').each(function () { var $last = $(this).find('.phone4digit').last(); var maxindx = $last.attr('data-index'); maxindx = parseInt(maxindx); $(this).attr('data-maxindex', maxindx); }); $('.form-input-for-phone .phone4digit').bind('keyup keydown', function (e) {
        var $this = $(this); var $wrapper = $this.closest('.form-input-for-phone'); var maxindx = $wrapper.attr('data-maxindex'); maxindx = parseInt(maxindx); if ((e.keyCode >= 65 && e.keyCode <= 90)) { $this.val(''); }
        var fullinput = []; $wrapper.find('.phone4digit').each(function () { fullinput.push($(this).val()); }); fullinput = fullinput.join(''); var $input = $wrapper.find('[name="phone4digits"]'); $input.attr('value', fullinput); $input.val(fullinput); if ((e.keyCode >= 65 && e.keyCode <= 90)) { return false; }
        var indx = $this.attr('data-index'); indx = parseInt(indx); next = 1; if (indx > 0) { next = indx + 1; }
        if (next > maxindx) { next = maxindx; }
        var gotonext = false; if ((e.keyCode >= 48 && e.keyCode <= 57)) { gotonext = true; if ($this.val() == '') { gotonext = false; } } else if (e.keyCode == 39) { gotonext = true; } else if (e.keyCode == 37 || e.keyCode == 8) { if ($this.val() != '') { gotonext = false; } else { gotonext = true; next = indx - 1; if (next <= 0) { next = 1; } } }
        if (gotonext) { $('.form-input-for-phone .phone4digit[data-index="' + next + '"]').focus(); }
    });
}
async function init_form_mauth() { }
async function init_form_mauth_on_success() { modal_hide('#login-modal'); $('.cmd-mlogin').addClass('hide'); $('.cmd-mlogout').removeClass('hide'); }
async function init_membership() { $('.cmd-membership-form-start').click(function () { modal_show('#membership-modal', function () { init_form_validation('#form-membership'); $('#form-membership').removeClass('hide'); $('.form-membership-create').find('.block-success-message').addClass('hide'); }); return false; }); $('.cmd-close-membership-modal').click(function () { modal_hide('#membership-modal'); }); }
async function init_form_membership_on_success() { $('.form-membership-create').find('.block-success-message').removeClass('hide'); $('#form-membership').addClass('hide'); }
async function init_contactus() { $('.cmd-contactus-form-start').click(function () { modal_show('#contactus-modal', function () { init_form_validation('#form-contactus'); $('#form-contactus').removeClass('hide'); $('.form-contactus-create').find('.block-success-message').addClass('hide'); $('.cmd-close-contactus-modal').click(function () { modal_hide('#contactus-modal'); }); }, '#template-contactus-modal'); return false; }); }
async function init_form_contactus_on_success() { $('.form-contactus-create').find('.block-success-message').removeClass('hide'); $('#form-contactus').addClass('hide'); }
async function cmd_open_telegram_invite_modal(el) { var $this = $(el); modal_show('#telegraminvite-modal', function () { var href = $this.attr('data-href'); $('#telegraminvite-modal .cmd_telegram_invite').attr('href', href); $('#telegraminvite-modal .modal-close').click(function () { modal_hide('#telegraminvite-modal'); }); }, '#template-telegraminvite-modal'); }
async function init_subscription() {
    $('.cmd-subscription-form-start').click(function () {
        modal_show('#subscription-modal', function () {
            init_form_validation('#form-subscription'); $('#form-subscription').removeClass('hide'); $('.form-subscription-create').find('.block-success-message').addClass('hide'); var email = $('#subscription-email').val(); if (email) { $('#subscription-modal').find('[name="email"]').val(email); }
            $('#subscription-email').val('');
        }, '#template-subscription-modal'); return false;
    }); $('.cmd-close-subscription-modal').click(function () { modal_hide('#subscription-modal'); });
}
async function init_form_subscription_on_success() { $('.form-subscription-create').find('.block-success-message').removeClass('hide'); $('#form-subscription').addClass('hide'); }
async function init_desktop_menu() {
    $(document).keydown(function (e) { if (e.keyCode == 27) { toggle_popups(); } }).on('click', function (e) { if ($('#menu-item-galleries').hasClass('active') && $(e.target).closest('.submenu-gallery').length === 0) { $('#menu-item-galleries').trigger('click'); } }); $('.gbdrop').unbind('click').click(function () { toggle_popups(); }); $('#menu-item-galleries').click(function () {
        if ($('#template-submenu-gallery').length) { getFromTemplate('#template-submenu-gallery', true, true); }
        $(this).toggleClass('active'); if ($(this).hasClass('active')) { $('.submenu-gallery').removeClass('hide'); } else { $('.submenu-gallery').addClass('hide'); }
        return false;
    }); $('#menu-item-filters').click(function () {
        $(this).toggleClass('opened'); if ($(this).hasClass('opened')) { $('.page.page-profile .profile-filters').removeClass('hide'); } else { $('.page.page-profile .profile-filters').addClass('hide'); }
        return false;
    }); $('.cmd-open-gallery-menu').click(function () {
        if (!$('#menu-item-galleries').hasClass('active')) { $('#menu-item-galleries').trigger('click'); }
        return false;
    });
}
var xDown = null; var yDown = null; async function init_touches() { $('.top-header')[0].addEventListener('touchstart', handleTouchStartMenu, { passive: false }); $('.top-header')[0].addEventListener('touchmove', handleTouchMoveMenu, { passive: false }); $('.top-header')[0].addEventListener('touchend', handleTouchEndMenu, false); $('.top-header')[0].addEventListener('touchcancel', handleTouchEndMenu, false); }
function getTouchesMenu(e) { return e.touches || e.originalEvent.touches; }
function handleTouchStartMenu(e) { const firstTouch = getTouchesMenu(e)[0]; xDown = firstTouch.clientX; yDown = firstTouch.clientY; }; function handleTouchEndMenu(e) {
    xDown = null; yDown = null; if (!$(e.target).closest('.top-header').length) { return; }
    if ($(e.target).closest('.but').length) { return; }
    var cm = getCurrentTargetMenu(); if (cm == false) { return; }
    var $e = $(cm.element); var w = $e.width(); var xDiff = parseFloat($e.attr('data-xdiff')); $e.attr('data-xdiff', 0); $e.css({ left: '' }).removeClass('notrans'); if (cm.parent) { $p = $(cm.parent); $p.css({ left: '', right: '' }).removeClass('notrans'); }
    if (xDiff && Math.abs(xDiff) > 100) {
        if ($e.find('.but-close a').length) { $e.find('.but-close a').trigger('click'); }
        return;
    }
}
function handleTouchMoveMenu(e) {
    if (!xDown || !yDown) { return; }
    var xUp = e.touches[0].clientX; var yUp = e.touches[0].clientY; var xDiff = xDown - xUp; var yDiff = yDown - yUp; if (Math.abs(yDiff) > Math.abs(xDiff)) { return; }
    var cm = getCurrentTargetMenu(); if (cm == false) { return; }
    var $e = $(cm.element); $e.addClass('notrans'); if (-1 * xDiff <= 0) { e.preventDefault(); $e.css({ left: -1 * xDiff }); $e.attr('data-xdiff', -1 * xDiff); if (cm.parent) { var $p = $(cm.parent); $p.addClass('notrans'); $p.css({ left: -1 * xDiff + $e.width(), right: 'unset' }); $p.width($e.width()); } }
}
function getCurrentTargetMenu() {
    var c = false; var e = false; var p = false; if ($('body').hasClass('show-submenu-galleries')) { e = '.top-header .submenu-galleries'; c = 'galleries'; p = '.top-header .submenu'; } else if ($('body').hasClass('show-submenu-galleries-m')) { e = '.top-header .submenu-galleries'; c = 'galleries'; p = '.top-header .menu'; } else if ($('body').hasClass('show-submenu-filters-m')) { e = '.top-header .submenu-filters'; c = 'filters'; p = '.top-header .menu'; } else if ($('body').hasClass('show-submenu-filters')) { e = '.top-header .submenu-filters'; c = 'filters'; p = '.top-header .submenu'; } else if ($('body').hasClass('show-submenu')) { e = '.top-header .submenu'; c = 'submenu'; p = '.top-header .menu'; }
    return c === false ? false : { name: c, element: $(e), parent: p };
}
async function init_mobile_menu() {
    $('.gbdrop').unbind('click').click(function () { toggle_popups(); }); var $wrapper = $('body'); $('header').on('click', '.menu a.menu-item:not(.notmenu),.submenu-common a:not(.notmenu),#main-submenu-item-filter-show-results-bottom', function (e) {
        var $this = $(this); var id = $this.attr('id'); nohreflist = ['main-menu-item-search', 'main-menu-item-galleries', 'main-menu-item-mgalleries', 'main-menu-item-contacts', 'main-menu-item-filters', 'main-submenu-item-goto-menu', 'main-menu-item-menu', 'main-submenu-item-signin', 'main-submenu-item-signout', 'main-submenu-item-subscription',]; $('header .menu a.menu-item').not($this).removeClass('active'); $this.toggleClass('active'); var click = false; var upd_affix = false; switch (id) {
            case 'main-submenu-item-filter-show-results-bottom': case 'main-submenu-item-filter-show-results': click = true; $('#main-submenu-item-goto-submenu').trigger('click'); if (filtersModel !== false) { filtersModel.goToResults(); }
                break; case 'main-submenu-item-filter-clear': click = true; break; case 'main-submenu-item-goto-submenu-acount': mobile_menu_wrapper_toggle_class($wrapper, 'submenu-account-details', 'show-galleries show-search show-contacts', 'hide'); break; case 'main-submenu-item-account': mobile_menu_wrapper_toggle_class($wrapper, 'submenu-account', 'show-galleries show-search show-contacts'); break; case 'main-submenu-item-goto-submenu': mobile_menu_wrapper_toggle_class($wrapper, 'submenu-account,submenu-galleries-m,submenu-galleries,submenu-filters,submenu-filters-m', 'show-galleries show-search show-contacts', 'hide'); break; case 'main-submenu-item-search-by-filters-and-services': if (filtersModel) { filtersModel.setAllowFilters(true); }
                mobile_menu_wrapper_toggle_class($wrapper, 'submenu-filters', 'show-galleries show-search show-contacts'); break; case 'main-submenu-item-galleries': getFromTemplate('#template-submenu-galleries', true, true); mobile_menu_wrapper_toggle_class($wrapper, 'submenu-galleries', 'show-galleries show-search show-contacts'); break; case 'main-submenu-account-item-details': mobile_menu_wrapper_toggle_class($wrapper, 'submenu-account-details', 'show-galleries show-search show-contacts'); break; case 'main-submenu-item-subscription': $('.cmd-subscription-form-start').trigger('click'); break; case 'main-submenu-item-signout': break; case 'main-submenu-item-signin': modal_show('#login-modal', function () { init_form_validation('#form-mauth'); }, '#template-login-modal'); break; case 'main-menu-item-search': $wrapper.toggleClass('show-search').removeClass('show-contacts show-galleries'); upd_affix = true; if ($wrapper.hasClass('show-search')) { $('.menu-sub.menu-search').find('.searchbar').focus(); }
                break; case 'main-menu-item-galleries': getFromTemplate('#template-menu-galleries', true, true); $wrapper.toggleClass('show-galleries').removeClass('show-contacts show-search'); upd_affix = true; init_favcount_update(); break; case 'main-menu-item-contacts': getFromTemplate('#template-menu-contacts', true, true); $wrapper.toggleClass('show-contacts').removeClass('show-galleries show-search'); upd_affix = true; break; case 'main-menu-item-mgalleries': getFromTemplate('#template-submenu-common', true, true); getFromTemplate('#template-submenu-galleries', true, true); mobile_menu_wrapper_toggle_class($wrapper, 'submenu-galleries-m', 'show-galleries show-search show-contacts'); upd_affix = true; init_favcount_update(); break; case 'main-menu-item-filters': if (filtersModel) { filtersModel.setAllowFilters(true); }
                mobile_menu_wrapper_toggle_class($wrapper, 'submenu-filters-m', 'show-galleries show-search show-contacts'); affix_check(); break; case 'main-submenu-item-goto-menu': mobile_menu_wrapper_toggle_class($wrapper, 'submenu', 'show-galleries show-search show-contacts'); break; case 'main-menu-item-menu': getFromTemplate('#template-submenu-common', true, true); mobile_menu_wrapper_toggle_class($wrapper, 'submenu', 'show-galleries show-search show-contacts'); affix_check(); init_favcount_update(); init_updphones_template(); break; case 'main-menu-item-favourites': break;
        }
        if (nohreflist.indexOf(id) !== -1) { click = true; }
        e.stopPropagation(); if (upd_affix) { affix_check(); }
        if (click || $this.attr('href') === '#') { return false; }
    }); $('header').on('click', '.submenu-common .item:not(.ignore-row-click)', function (e) { var btn = $(this).find('a'); if (btn.length) { var href = btn.attr('href'); if (href && href !== '#') { window.location.href = href; } else { $(this).find('a').trigger('click'); } } }); init_profiles_menu_gallery(); $(document).on('click', function (event) { if ($('.menu-main .menu-item.active').length) { var id = $('.menu-main .menu-item.active').attr('id'); if (id == 'main-menu-item-contacts' || id == 'main-menu-item-search') { if (!$(event.target).closest('.menu-sub').length) { $('.menu-main .menu-item.active').trigger('click'); } } } }); init_touches();
}
async function init_profiles_menu_gallery() { return; if ($('.gallery-list a.active').length || ($('#data-infilters').length && $('#data-infilters').attr('data-filter-galleryid') !== undefined && parseInt($('#data-infilters').attr('data-filter-galleryid')) > 0)) { $('#main-menu-item-galleries').trigger('click'); var $item = $('.gallery-list a.active'); if ($item.length) { var $wrapper = $('.gallery-list-wrapper'); var w = $wrapper.innerWidth(); var left = $item.offset().left; var scroll = left - w / 2 + $item.width() / 2 - 10; if (scroll >= 0) { $wrapper.scrollLeft(scroll); } } } }
async function hide_filters() { $('.profile-filters').addClass('hide'); $('.profile-filters').closest('.filters-cell').addClass('hide'); }
var rotationPhones = {}; async function init_updphones() {
    var rnd = '&rand=' + Math.round((10000 * Math.random(0, 1000))); var relurl = '?relurl='; if ($('.page.page-profile-item').length) { relurl = relurl + $('.page.page-profile-item').attr('data-itemurl'); }
    var u = $.getVar('rooturlthis') + 'getphones' + relurl + rnd; if (ismobile) { if ($('.submenu.submenu-common').length) { $.get(u, function (data) { if (data && $.isStrJSONObj(data, '[', ']')) { data = jQuery.parseJSON(data); rotationPhones = data; init_updphones_template(); } }); } } else { if ($('.header .phones').length) { $.get(u, function (data) { if (data && $.isStrJSONObj(data, '[', ']')) { data = jQuery.parseJSON(data); rotationPhones = data; init_updphones_template(); } }); } }
}
async function init_updphones_template() {
    if (ismobile) {
        if (rotationPhones) {
            if (rotationPhones.main !== undefined) { $('#main-submenu-item-wrapper-contacts').html(rotationPhones.main); }
            if (rotationPhones.profile !== undefined) { $('.contact-us .phone-list').html(rotationPhones.profile); }
        }
    } else {
        if (rotationPhones.main !== undefined && rotationPhones.simple !== undefined) { $('.header .phones').html(rotationPhones.main); $('.menu-float .menu-phones').html(rotationPhones.simple); }
        if (rotationPhones.profile !== undefined) { $('.contact-us .phone-list').html(rotationPhones.profile); }
    }
}
async function init_fastnav() { $('.fast-nav li .icon').click(function () { $(this).closest('.fast-nav').find('input[type="search"]').blur(); if ($(this).closest('li').hasClass('active')) { $(this).closest('.fast-nav').find('li').removeClass('active'); } else { $(this).closest('.fast-nav').find('li').removeClass('active'); $(this).closest('li').addClass('active'); $(this).closest('li').find('input[type="search"]').focus(); } }); $(document).keydown(function (e) { if (e.keyCode == 27) { $('.fast-nav li').removeClass('active'); } }).on('click', function (e) { if ($(e.target).closest('.fast-nav').length === 0) { $('.fast-nav li').removeClass('active'); } }); }
async function init_reviews_list() {
    $('.cmd-bookadate-from-review').unbind('click').click(function () {
        if ($(this).attr('data-itemmultiids')) {
            var multiids = $(this).attr('data-itemmultiids'); multiids = multiids.split(',')
            var pid = multiids.shift(); var did = multiids.shift(); $('form[name="bookadate"] input[name="bookadate-profile"]').val(pid); $('form[name="bookadate"] input[name="bookadate-duo"]').val(did);
        } else { var pid = $(this).attr('data-pid'); $('form[name="bookadate"] input[name="bookadate-profile"]').val(pid); }
        $('form[name="bookadate"]').submit(); return false;
    }); var incprev = false; if (!$('.list.review-list').hasClass('review-list-filtered-profile')) { incprev = true; }
    var anch = window.location.hash.substr(1); var anch_src = anch; anch = anch.split('&'); var rid = false; for (var i in anch) { if (anch[i] && anch[i].substr(0, 7) === 'review-') { rid = anch[i]; rid = rid.split('=').shift(); anch.splice(i, 1); } else if (incprev && anch[i] && anch[i].substr(0, 5) === 'prev-') { rid = anch[i]; rid = rid.split('=').shift(); rid = 'review-' + rid.substr(5); anch.splice(i, 1); } }
    var newanch = anch.join('&'); if (rid) { if ($('.list.review-list').find('#' + rid).length) { var top = $('.list.review-list').find('#' + rid).offset().top; animScrollTo(top - 200, 600); if (anch_src != newanch) { window.location.hash = newanch; } } }
}
async function reviews_affix(type, top) { if (type === 'fixed') { $('.btnwrr-static').addClass('hidden'); $('.btnwrr-float').removeClass('hidden'); } else { $('.btnwrr-static').removeClass('hidden'); $('.btnwrr-float').addClass('hidden'); } }
var init_affix_win_handlers = false; async function init_affix() {
    $('.affix-check:not(.affix-inited)').each(function () {
        var $this = $(this); if (!$this.is(":visible")) { return; }
        $this.addClass('affix-inited'); var offset = $this.offset().top; var mt = parseInt($this.css('marginTop')); var mb = parseInt($this.css('marginBottom')); var h = $this.outerHeight() + mt + mb; $this.attr('data-offset', offset); $this.attr('data-width', $this.outerWidth()); $('<div></div>').insertAfter(this).addClass('under-fixed').css({ height: h }).addClass('hide');
    }); if (!init_affix_win_handlers) {
        $(window).resize(function () { $('.affix-check').each(function () { $(this).attr('data-width', $(this).parent().width()); }); }); $(window).scroll(function () { affix_check(); }); if ($(window).scrollTop()) { affix_check(); }
        init_affix_win_handlers = true;
    }
}
async function affix_check() {
    var top = $(window).scrollTop(); $('.affix-check.affix-inited').each(function () {
        var $this = $(this); if (!$this.is(":visible")) { return; }
        var stop = $this.attr('data-affix-stop'); var stopY = false; if ($(stop).length) { stopY = $(stop).offset().top; }
        var height = $this.outerHeight(); var callback = $this.attr('data-onaffix'); if (callback && typeof (window[callback]) === 'function') { } else { callback = false; }
        var offset = $this.attr('data-offset'); offset = typeof (offset) !== 'undefined' && offset !== false ? parseFloat(offset) : 0; var selfshift = $this.attr('data-selfshift'); selfshift = typeof (selfshift) !== 'undefined' && selfshift !== false ? parseFloat(selfshift) : 0; var width = $this.attr('data-width'); var mt = parseFloat($this.css('marginTop')); if (ismobile) { var ptop = $('header .menu').height() - mt; offset = offset - mt; } else { var ptop = $('header .menu-float .menu-section').height() - mt - 2; offset = offset - mt; }
        var inwh = ($(window).width() > 767 && $(window).height() > 500); if (ismobile) { inwh = $(window).height() > 400; }
        offset = offset + selfshift; var allowStop = (ismobile == false || $this.attr('data-affix-stop-mobile')); if (allowStop && top + ptop + height > stopY && inwh && stopY !== false) { $this.removeClass('fixed'); $this.css('width', ''); $this.css('top', ''); $this.parent().find('.under-fixed').addClass('hide'); if (callback) { window[callback].apply($this, ['', ptop]); } } else if (top + ptop > offset && inwh) {
            if (ismobile) { ptop = ptop - 1; }
            $this.addClass('fixed'); $this.css('top', ptop + 'px'); $this.css('width', width + 'px'); $this.parent().find('.under-fixed').removeClass('hide'); if (callback) { window[callback].apply($this, ['fixed', ptop]); }
        } else { $this.removeClass('fixed'); $this.css('width', ''); $this.css('top', ''); $this.parent().find('.under-fixed').addClass('hide'); if (callback) { window[callback].apply($this, ['', ptop]); } }
    });
}
async function init_affix_filters() {
    $filtersCell = $('.filters-cell-inner'); if (!$filtersCell.length) { return; }
    $('.filters-cell').css({ 'height': $('.filters-cell').height() }); if (!ismobile) { $(window).scroll(function () { affix_filters(); }); affix_filters(); }
    var $this = $('.filters-cell-inner'); var inwh = ($(window).width() > 767 && $(window).height() > 500 && $('.profiles-cell-inner').height() > $this.height()); var mt = -9; var ptop = $('header .menu').outerHeight() + $('.page-subnav').outerHeight(); if (inwh) { var h = $(window).height() - ptop + 2 * mt; h = h - 50; $this.find('.filter-list-name').css({ height: h }); } else { $this.find('.filter-list-name').css({ height: 'auto' }); }
}
async function affix_filters() {
    return; if (ismobile) { return; }
    var topMenuOffsetDiff = 0; var $this = $('.filters-cell-inner'); if (!$this.length) { return; }
    var $filtersCell = $('.filters-cell'); var height = $this.height(); var initheight = $this.attr('data-initheight'); if (!initheight) { $this.attr('data-initheight', (initheight = $this.height())); }
    initheight = parseFloat(initheight); var maxheight = $this.attr('data-maxheight'); if (!maxheight) { $this.attr('data-maxheight', (maxheight = $filtersCell.height())); }
    maxheight = parseFloat(maxheight); var $filtersMarginTop = $('.filters-cell').find('.filters-margin-top'); var filtersMarginTopHeight = $('.filters-cell').find('.filters-margin-top').height(); var top = $(window).scrollTop(); var topMenuOffset = $('header .menu').outerHeight() + $('.page-subnav').outerHeight(); topMenuOffset = topMenuOffset - topMenuOffsetDiff; var filtersCellTop = $filtersCell.offset().top - topMenuOffset; var filtersCellHeight = $filtersCell.height(); var diff = 0; var tdiff = 0; if (top >= filtersCellTop) { diff = top - filtersCellTop; tdiff = diff; if (diff - filtersMarginTopHeight + height >= filtersCellHeight) { diff = filtersMarginTopHeight; } else { } }
    $filtersMarginTop.css({ height: diff });
}
async function modal_show(element, callback, template) {
    if (!$(element).length && template) { getFromTemplate(template, 'body', true); }
    var $modal = $(element); if (!$modal.hasClass('inited')) { init_modal($modal); }
    $modal.css('display', 'block'); if ($modal.hasClass('modal-fullscreen')) { $('body').addClass('show-modal-fullscreen'); }
    if (callback) { callback.apply($modal, []); }
}
async function modal_content(element, content) { var $modal = $(element); $modal.find('.modal-body').html(content); }
async function modal_hide(element) { var $modal = $(element); $modal.css('display', 'none'); if ($modal.hasClass('modal-fullscreen')) { $('body').removeClass('show-modal-fullscreen'); } }
async function init_modal(element) {
    var $modal = $(element); if ($modal.hasClass('inited')) { return $modal; }
    var $closebtn = $modal.find('.modal-close'); $closebtn.click(function () { modal_hide($modal); return false; }); $(document).keydown(function (e) { if (e.keyCode == 27) { modal_hide($modal); } }); $(document).click(function (event) { if (event.target == $modal[0]) { modal_hide($modal); } }); return $modal;
}
async function init_login() { $('.cmd-mlogin').click(function () { modal_show('#login-modal', function () { init_form_validation('#form-mauth'); }, '#template-login-modal'); return false; }); }
async function init_input_rating() { $('.input-rating-wrapper').attr('data-rating', 0); $('.input-rating label').hover(function () { var inid = $(this).attr('for'); if (inid) { var v = $('.input-rating').find('#' + inid).val(); $('.input-rating-wrapper').find('.input-rating-value .val').html(v); } }, function () { $('.input-rating-wrapper').find('.input-rating-value .val').html($('.input-rating-wrapper').attr('data-rating')); }); $('.input-rating label').click(function () { var inid = $(this).attr('for'); if (inid) { var v = $('.input-rating').find('#' + inid).val(); $('.input-rating-wrapper').find('.input-rating-value .val').html(v); $('.input-rating-wrapper').attr('data-rating', v); $('.input-rating-wrapper').find('.input-rating-value .val').html($('.input-rating-wrapper').attr('data-rating')); } }); $('.input-rating input[type="radio"]').change(function () { var id = $(this).attr('id'); $('.input-rating').find('label[for="' + id + '"]').trigger('click'); }); }
async function init_accordion() { var duration = 300; var easing = 'linear'; $('.accordion').each(function () { var $this = $(this); $this.removeClass('accordion-nojs').find('.accordion-item .accordion-body').each(function () { var $this = $(this); $this.attr('data-height', $this.outerHeight()); var ischecked = $this.closest('.accordion-item').prev().prop('checked'); if (!ischecked) { $this.css({ height: 0 }); } else { $this.closest('.accordion-item').addClass('active'); } }); $this.find('.accordion-body-switcher').change(function () { var $this = $(this); var id = $this.attr('id'); var $accordion = $this.closest('.accordion'); if (id) { var $item = $accordion.find('label[for="' + id + '"]').closest('.accordion-item'); if ($item.length) { $accordion.find('.accordion-item.active').removeClass('active').find('.accordion-body').animate({ height: 0 }, duration, easing); if ($this.prop('checked')) { var toheight = $item.find('.accordion-body').attr('data-height'); $item.find('.accordion-body').animate({ height: toheight }, duration, easing, function () { $item.addClass('active'); var scrollto = $item.find('.accordion-head').offset().top; scrollto = scrollto - $item.find('.accordion-head').outerHeight() - 20; if ($('html').scrollTop() > scrollto) { animScrollTo(scrollto); } }); } } } }); $this.find('.accordion-body-switcher').each(function () { var $this = $(this); var $accordion = $this.closest('.accordion'); var id = $this.attr('id'); var $item = $accordion.find('label[for="' + id + '"]'); $item.click(function () { if ($(this).closest('.accordion-item').hasClass('active')) { $(this).closest('.accordion').find('#' + id + '.accordion-body-switcher').prop('checked', false).trigger('change'); return false; } }) }); }); }
async function init_tabs() {
    $('.tabs-body .tabs-body-switcher:checked').each(function () { var chk = $(this).attr('id'); $(this).closest('.tabs').find('.tabs-head-item label[for="' + chk + '"]').addClass('active'); }); $('.tabs .tabs-head-item label').click(function () {
        $(this).closest('.tabs-head').find('.tabs-head-item label').removeClass('active'); $(this).addClass('active'); var callback = $(this).attr('data-callback'); if (callback) { if (window[callback] && typeof (window[callback]) === 'function') { window[callback].apply(this, []); } }
        var label_for = $(this).attr('for'); var $tab_body = $('input#' + label_for).next(); if ($tab_body.length) { $tab_body.find('[data-tabexec]').each(function () { var func = $(this).attr('data-tabexec'); $(this).removeAttr('data-tabexec'); if (window[func] && typeof (window[func]) === 'function') { window[func].apply(this, []); } }); }
        init_affix(); setTimeout(function () { $.imageload(); init_affix(); }, 100);
    });
}
async function tabs_affix_top() { if ($('.tabs-info-head').hasClass('fixed')) { var t = $('.block-main.block-main-duo').offset().top + $('.block-main.block-main-duo').height(); animScrollTo(t - 55); } }
var init_anchgoto_timeout = false; async function init_anchgoto(gotoanchor) {
    if ($(window).scrollTop() > 0) {
        if (init_anchgoto_timeout) { clearTimeout(init_anchgoto_timeout); }
        return;
    }
    if (gotoanchor) { } else {
        var anch = window.location.hash.substr(1); var anch_src = anch; anch = anch.split('&'); for (var i in anch) { if (anch[i] && anch[i].substr(0, 5) === 'goto-') { gotoanchor = anch[i].substr(5); anch.splice(i, 1); } }
        var newanch = anch.join('&'); if (anch_src != newanch) { window.location.hash = newanch; }
    }
    if (!gotoanchor) {
        if (init_anchgoto_timeout) { clearTimeout(init_anchgoto_timeout); }
        return;
    }
    if ($('.item-maincarusel .owl-item .item-image.ui-img-loaded').length) {
        if ($(window).scrollTop() > 0) {
            if (init_anchgoto_timeout) { clearTimeout(init_anchgoto_timeout); }
            return;
        }
        if (gotoanchor && $('#' + gotoanchor).length) {
            if ($('#' + gotoanchor).closest('.tabs-body-item')) { var top = $('#' + gotoanchor).closest('.tabs').offset().top; } else { var top = $('#' + gotoanchor).offset().top; }
            if (top) { animScrollTo(top - 100, 600, function () { if ($('#' + gotoanchor).closest('.tabs-body-item')) { var $input = $('#' + gotoanchor).closest('.tabs-body-item').prev(); if ($input.prop('tagName') === 'INPUT' && $input.hasClass('tabs-body-switcher')) { var inputid = $input.attr('id'); var $label = $input.closest('.tabs').find('.tabs-head-item label[for="' + inputid + '"]'); $label.trigger('click'); } } }); }
        }
    } else { init_anchgoto_timeout = setTimeout(function () { init_anchgoto(gotoanchor); }, 100); }
}
function get_last_item_in_row(selector, addclass) {
    var t = -1; var prev = false; $(selector).removeClass(addclass); $(selector).each(function () {
        var $this = $(this); if (t != $this.offset().top) {
            if (t !== -1) { if (prev !== false) { prev.addClass(addclass); } }
            t = $this.offset().top;
        }
        prev = $this;
    });
}
async function init_footer_list() { get_last_item_in_row('.footer-menu ul li', 'last-item-in-row'); $(window).resize(function () { get_last_item_in_row('.footer-menu ul li', 'last-item-in-row'); }); }
async function upd_profile_reviews(initiatorType, args) {
    var args = []; var a = ''; if ($('.sorting-review .menu-sorting a.active').length) { a = $('.sorting-review .menu-sorting a.active').attr('data-args'); if (a) { args.push(a); } }
    if ($('.cmd-review-filter-xhr a.active').length) { a = $('.cmd-review-filter-xhr a.active').attr('data-args'); if (a && a !== 'filter-all=1') { args.push(a); } }
    var url = $('.all-reviews-wrapper').attr('data-requrl'); if (!url) { return false; }
    args = args.join('&'); url = url + (args.length ? '&' : '') + args; $('.all-reviews-wrapper').addClass('loading'); $.get(url, function (data) {
        if (data.indexOf('all-reviews-wrapper') === -1) { $('.all-reviews-wrapper').addClass('hide'); } else { $('.all-reviews-wrapper').removeClass('hide'); $('.all-reviews-wrapper').replaceWith(data); init_loadmore_reviews(); }
        $('.all-reviews-wrapper').removeClass('loading'); init_profile_page_review_scroll();
    });
}
async function init_booking_btn() { var $e = $('.bookadate-btn'); if ($e.length) { var offsettop = $e.offset().top; $e.attr('data-offset-top', offsettop); $(window).scroll(function () { float_booking_btn(); }); } }
async function upd_booking_btn() { var $e = $('.bookadate-btn'); if ($e.length) { var offsettop = $e.offset().top; console.log('booking_btn', offsettop); $e.attr('data-offset-top', offsettop); } }
async function float_booking_btn() {
    var $e = $('.bookadate-btn'); var st = $(window).scrollTop(); var ot = $e.attr('data-offset-top'); ot = parseFloat(ot); var p = $(window).height() - $e.height() - 50; p = 0; var tf = ot - p; var td = -50; var md = 47; if (st > tf) {
        var d = st - tf; if (d <= md) { $e.addClass('fixed').css({ bottom: td + d }); } else { $e.addClass('fixed').css({ bottom: td + md }); }
        $('.gototop').addClass('shift-up');
    } else { $e.removeClass('fixed').css({ bottom: 'none' }); $('.gototop').removeClass('shift-up'); }
}
async function init_profile_page_review_scroll() { $('.all-reviews-wrapper').scroll(function () { var s = $(this).scrollTop(); var t = $('.scroll-reviewloadmore')[0].offsetTop; if (s + 600 >= t) { $('.all-reviews-wrapper .cmd-reviewloadmore:not(:disabled)').trigger('click'); } }); }
async function init_profile_page() {
    init_tooltip(); init_booking_btn(); if ($('.tab-head-item-map label').length) { $('.cmd-goto-map-tab').click(function () { $('.tab-head-item-map label').trigger('click'); animScrollTo($('.tab-head-item-map').offset().top - 150); return false; }); } else { $('.cmd-goto-map-tab').closest('.on-block-expand').hide(); }
    $('.cmd-leave-review-copytoclipboard').click(function () { copytoclipboardcommon(this, $(this).attr('href')); return false; }); $('.cmd-rating-to-review').click(function () {
        if ($('.item-carusel.item-maincarusel').hasClass('full-screen')) { $('.cmd-carusel-shrink').trigger('click'); }
        $('.tab-head-item-reviews label').trigger('click'); animScrollTo($('.tab-head-item-reviews').offset().top - 150); return false;
    }); init_profile_page_review_scroll(); $('.cmd-review-filter a').unbind('click').click(function () {
        var $this = $(this); $('.cmd-review-filter a').removeClass('active'); $this.addClass('active'); var args = $this.attr('data-args'); var an = ''; var av = ''; if (args.indexOf('=') !== -1) { args = args.split('='); an = args.shift(); av = args.join('='); } else { an = args; }
        an = an.split('rfilter-').join(''); if (an) { if (an === 'all') { an = true; } else { an = 'data-review-' + an; } } else { an = true; }
        try { filter_html_list('.all-reviews-wrapper', '.review-item', an, av, function () { $('.all-reviews-wrapper').stop().animate({ scrollTop: 0 }, 300, 'swing'); }); } catch (e) { console.error(e); }
        return false;
    }); $('.cmd-review-filter-xhr a').unbind('click').click(function () { var $this = $(this); $this.closest('.cmd-review-filter-xhr').find('a').removeClass('active'); $this.addClass('active'); var args = $this.attr('data-args'); upd_profile_reviews('filter', args); return false; }); $('.cmd-popup-sorting-review').unbind('click').click(function () {
        var $this = $(this); var $sorting = $this.closest('.sorting-review'); $sorting.toggleClass('open'); if ($sorting.hasClass('open')) { $('.gbdrop').removeClass('hide'); $('.gbdrop').show(); } else { $('.gbdrop').addClass('hide'); $('.gbdrop').hide(); }
        var $btn = $(this); $('.page.page-profile.page-item .menu-sorting a').unbind('click').click(function () {
            var $this = $(this); $this.closest('.menu-sorting').find('a').removeClass('active'); $this.addClass('active'); var sname = $(this).text(); if (sname.indexOf(':') !== -1) { sname = sname.split(':'); sname.shift(); sname = sname.join('').trim(' '); }
            if (sname) { $btn.closest('.sorting-review').find('.sort-by-val').html(sname); $btn.closest('.sorting-review').find('.cmd-popup-sorting-review').trigger('click'); }
            var args = $this.attr('data-args'); if ($this.closest('.menu-sorting').hasClass('menu-sorting-xhr')) { upd_profile_reviews('sort', args); return false; }
            var an = ''; var av = ''; if (args.indexOf('=') !== -1) { args = args.split('='); an = args.shift(); av = args.join('='); } else { an = args; }
            an = an.split('sort-').join(''); if (an) { an = 'data-review-' + an; } else { an = 'data-review-ctime'; av = 'desc'; }
            try { sort_html_list('.all-reviews-wrapper', '.review-item', an, av, function () { $('.all-reviews-wrapper').stop().animate({ scrollTop: 0 }, 300, 'swing'); }); } catch (e) { console.error(e); }
            return false;
        });
    }); $('.cmd-detail-link').click(function () { var l = $(this).attr('data-link'); if (l) { window.location.href = l; return false; } });
}
function filter_html_list(wrapper, selector, name, value, callback) {
    if (name === true) { $(wrapper + ' ' + selector).each(function () { var $this = $(this); $this.css({ 'display': 'block' }); }); } else { var data = []; $(wrapper + ' ' + selector).each(function () { var $this = $(this); var value = $this.attr(name); data.push({ value: value, element: $this, }); }); for (var i in data) { if (data[i].value === value) { data[i].element.css({ 'display': 'block' }); } else { data[i].element.css({ 'display': 'none' }); } } }
    if (callback !== undefined && typeof (callback) === 'function') { callback(); }
}
function sort_html_list(wrapper, selector, name, method, callback) {
    var data = []; $(wrapper + ' ' + selector).each(function () { var $this = $(this); var value = $this.attr(name); data.push({ value: value, element: $this, }); }); data.sort(function (a, b) {
        if (method === 'asc') {
            if (a.value < b.value) { return -1; }
            if (a.value > b.value) { return 1; }
        } else {
            if (a.value > b.value) { return -1; }
            if (a.value < b.value) { return 1; }
        }
        return 0;
    }); for (var i in data) { data[i].element.clone().appendTo(wrapper); data[i].element.remove(); }
    if (callback !== undefined && typeof (callback) === 'function') { callback(); }
}
async function mk_footer() { return; var $script = $('.follow-us-twitter').find('script[data-src]'); var src = $script.attr('data-src'); $script.removeAttr('data-src'); if (src) { $script.attr('src', src); } }
async function create_carusel_load() { var $this = $(this); var c = $this.find('template').first().prop('content'); $this.html(c); $this.removeClass('wrapper-blank-min-size'); $this.find('template').remove(); var u = $this.attr('data-loadurl'); var loadto = $this.attr('data-loadto'); var afterload = $this.attr('data-afterload'); if (u && loadto) { $this.find(loadto).addClass('blank-min-size').addClass('blank-rel'); $this.find(loadto).html('<div class="abswh"><div class="align-vertical-center w100 text-center opacity-50 fs-lg"><i class="fa fa-refresh fa-spin fa-fw"></i> Loading...</div></div>'); u = $.getVar('appbaseurl') + u; $.get(u, function (data) { $this.find(loadto).html(data); if (afterload && typeof (window[afterload]) === 'function') { window[afterload].apply($this, []); init_slideimg(); init_availability(); init_availability_now(); init_fav(); $.imageload(); $this.find(loadto).removeClass('blank-min-size').removeClass('blank-rel'); } }); } }
async function create_carusel_ready(element) {
    if (!element) {
        var ignoreinitscroll = $(this).attr('data-carusel-ignoreinitscroll'); ignoreinitscroll = ignoreinitscroll ? true : false; var wrapper = $(this).attr('data-carusel-wrapper'); var carusel = $(this).find('.carusel:not(.rtid)'); if (wrapper && !carusel.find('.item-cell').length) { if ($(this).closest(wrapper).length) { $(this).closest(wrapper).addClass('hide'); return; } }
        if (carusel.length) { element = carusel; } else { return; }
    }
    if (ignoreinitscroll === true) { create_carusel(element); } else if (!$.isScrolled()) { setTimeout(function () { create_carusel_ready(element); }, 500); } else { create_carusel(element); }
}
async function create_carusel(element) { $.loadScript($.getVar('rooturljs') + 'owl-carousel/owl.carousel.min.js', function () { create_carusel_loaded(element); }); $.loadCSS($.getVar('rooturljs') + 'owl-carousel/assets/owl.carousel.min.css'); $.loadCSS($.getVar('rooturljs') + 'owl-carousel/assets/owl.theme.default.min.css'); }
async function create_carusel_loaded(element) {
    if (!element) { return; }
    var $this = $(element); $this.addClass('rtid'); var opt = { imageload: false, loop: false, responsive: { 0: { items: 4 } }, responsive_duo: { 0: { items: 3 } }, preloadurl: '', preloadcount: -1, preloadcountadd: 0, count: -1, margin: false, autoplayTimeout: 2000, autoplaySpeed: 1000, autoplay: false }; if (ismobile) { opt.responsive = { 0: { items: 2 }, 567: { items: 3 } }; opt.responsive_duo = { 0: { items: 1 } }; }
    if ($this.attr('data-carusel-autoplay') == 1) {
        opt.autoplay = true; opt.autoplayTimeout = 2000; opt.autoplaySpeed = 1000; if ($this.attr('data-carusel-autoplayTimeout')) { opt.autoplayTimeout = parseInt($this.attr('data-carusel-autoplayTimeout')); }
        if ($this.attr('data-carusel-autoplaySpeed')) { opt.autoplaySpeed = parseInt($this.attr('data-carusel-autoplaySpeed')); }
        autoplayMinItems = false; if ($this.attr('data-carusel-autoplayMinItems')) { autoplayMinItems = parseInt($this.attr('data-carusel-autoplayMinItems')); }
        if (autoplayMinItems !== false && autoplayMinItems > $this.find('.item-cell').length) { opt.autoplay = false; }
    }
    if ($this.attr('data-imageload')) { opt.imageload = $this.attr('data-imageload') ? true : false; }
    if ($this.attr('data-carusel-margin')) { opt.margin = parseInt($this.attr('data-carusel-margin')); }
    if ($this.attr('data-carusel-items')) { opt.responsive = { 0: { items: parseInt($this.attr('data-carusel-items')) } }; }
    if ($this.hasClass('profile-list-duo')) { opt.responsive = opt.responsive_duo; if ($this.closest('.block-tabs-promo').length && $this.closest('.block-tabs-promo').hasClass('with-promo-escort')) { opt.responsive = { 0: { items: 2 } }; } }
    if ($this.attr('data-carusel-loop') == '0') { opt.loop = false; } else { opt.loop = true; }
    if ($this.attr('data-carusel-preloadurl')) { opt.preloadurl = $this.attr('data-carusel-preloadurl'); }
    if ($this.attr('data-carusel-count')) { opt.count = $this.attr('data-carusel-count'); opt.count = parseInt(opt.count); }
    if ($this.attr('data-carusel-preloadcount')) { opt.preloadcount = $this.attr('data-carusel-preloadcount'); opt.preloadcount = parseInt(opt.preloadcount); }
    if ($this.attr('data-carusel-preloadcountadd')) { opt.preloadcountadd = $this.attr('data-carusel-preloadcountadd'); opt.preloadcountadd = parseInt(opt.preloadcountadd); }
    var timeoutid = false; var owlimageload = function () { if (opt.imageload) { setTimeout(function () { $.imageload(); }, 500); } }
    var carusel_opt = { loop: opt.loop, margin: opt.margin, nav: true, autoHeight: true, navText: ['<span aria-label="Previous"></span>', '<span aria-label="Next"></span>'], responsive: opt.responsive, merge: true, autoplayTimeout: opt.autoplayTimeout, autoplaySpeed: opt.autoplaySpeed, onInitialized: owlimageload, onTranslated: owlimageload, onTranslate: function () { hide_tooltip(); owlimageload(); if ($carusel.attr('data-carusel-preloaded') === undefined) { carusel_preloaded_data($carusel); } }, }; var $carusel = $this.owlCarousel(carusel_opt); if (opt.preloadurl && opt.preloadcount) {
        var current_count = $carusel.find('.item-cell').length; var diff = 0; if (opt.count >= 0 && opt.preloadcount >= 0) { diff = opt.count - opt.preloadcount; }
        if (diff >= 0 && diff > current_count) { preloaded = true; } else {
            var h = $carusel.find('.item-cell').first().height(); for (var i = 0; i < opt.preloadcount + opt.preloadcountadd; i++) { $carusel.trigger('add.owl.carousel', ['<div class="item-cell item-cell-preload"><div class="item rel" style="height:' + h + 'px; border:1px dashed #790003"><div class="abswh text-center" style="top:50%;"><i class="fa fa-refresh fa-spin fa-fw"></i> Loading...</div></div></div>']); }
            $carusel.trigger('refresh.owl.carousel');
        }
    }
    if ($('.cmd-carusel-filter').length) { create_carusel_ctrls(); }
    if (opt.autoplay) { $carusel.trigger('play.owl.autoplay'); }
}
async function carusel_preloaded_data(carusel, callback) {
    var $carusel = carusel; var $this = carusel; var url = $carusel.attr('data-carusel-preloadurl'); if (!url) { return; }
    $carusel.attr('data-carusel-preloaded', 1); $.get(url, function (data) {
        if (data) {
            $('body').append('<div id="pre-carusel" class="hide" style="display:none;">' + data + '</div>'); $('#pre-carusel').find('.item-cell').each(function () {
                var pid = $(this).attr('data-pid'); if (pid && !$this.find('[data-pid="' + pid + '"]').length) {
                    var swapitem = $this.find('.item-cell-preload').first(); if (!swapitem.length) { console.log($(this)); }
                    swapitem.removeClass('item-cell-preload'); swapitem.html($(this).html()); $.each(this.attributes, function () { swapitem.attr(this.name, this.value); }); swapitem.attr('data-swapped', 1);
                }
            }); if ($this.find('.item-cell-preload').length) { var caruseldata = $carusel.data('owl.carousel'); $carusel.find('.owl-stage .owl-item').each(function () { var $itemcell = $(this).find('.item-cell'); if ($itemcell.hasClass('item-cell-preload')) { var index_rel = caruseldata.relative($(this).index()); $carusel.trigger('remove.owl.carousel', [index_rel]); } }); $carusel.trigger('refresh.owl.carousel'); }
            $('#pre-carusel').remove(); $.imageload(); init_slideimg(); init_fav(); init_availability(); init_availability_now(); if (typeof (init_contextmenu) === 'function') { init_contextmenu(); }
            if (typeof (callback) === 'function') { callback.apply($carusel, []); }
        }
    });
}
function create_carusel_ctrls() {
    var removed_items = []; $('.cmd-carusel-filter:not(.inited)').each(function () {
        var $this = $(this); $this.addClass('inited'); $this.click(function () {
            var $this = $(this); var filterby = $this.attr('data-carusel-filterby'); var wrapper = $this.attr('data-carusel-wrapper'); var $carusel = $(wrapper + ' .list.profile-list.carusel'); if ($carusel.attr('data-carusel-preloaded') === undefined) {
                carusel_preloaded_data($carusel, function () { $this.trigger('click'); })
                return false;
            }
            $this.parent().find('.cmd-carusel-filter').removeClass('active'); $this.addClass('active'); if (!wrapper || !$carusel.length) { console.log('Error filterby'); return false; }
            var isNot = false; if (filterby && filterby.indexOf('!') === 0) { isNot = true; filterby = filterby.substring(1); }
            var added = 0; if (removed_items) {
                for (var i in removed_items) {
                    var ritem = removed_items[i]; if (ritem.wrapper != wrapper) { continue; }
                    $carusel.trigger('add.owl.carousel', [ritem.item, ritem.index]); delete removed_items[i]; added++;
                }
                if (added > 0) { $carusel.trigger('refresh.owl.carousel'); }
            }
            var toremove = []; if (filterby) {
                var baseindex = 0; var indx = 0; $carusel.find('.owl-stage .owl-item').each(function () {
                    var $itemcell = $(this).find('.item-cell'); if ((isNot === true && $itemcell.hasClass(filterby)) || (isNot === false && !$itemcell.hasClass(filterby))) { toremove.push(indx); if (!$(this).hasClass('cloned')) { removed_items.push({ wrapper: wrapper, index: baseindex, item: $itemcell }); } } else { indx++; }
                    baseindex++;
                });
            }
            for (var i in toremove) { $carusel.trigger('remove.owl.carousel', [toremove[i]]); }
            $carusel.trigger('refresh.owl.carousel'); $.imageload(); if (added > 0) { $(wrapper).find('.slideimg').removeClass('mover'); init_slideimg(); $(wrapper).find('.fav').removeClass('init'); init_fav(wrapper); }
            return false;
        });
    });
}
async function create_carusel_other(wrapper) { var $this = $(this); $.loadScript($.getVar('rooturljs') + 'owl-carousel/owl.carousel.min.js', function () { create_carusel_other_loaded(wrapper, $this); }); $.loadCSS($.getVar('rooturljs') + 'owl-carousel/assets/owl.carousel.min.css'); $.loadCSS($.getVar('rooturljs') + 'owl-carousel/assets/owl.theme.default.min.css'); }
var owlcarusels = {}; async function create_carusel_other_loaded(wrapper, element) {
    if (!wrapper) { return; }
    if (element) { var $this = element; } else { var $this = $(this); }
    var $element = $this.find(wrapper).not('.rtid'); if (!$element.length) { return; }
    if ($element.attr('data-clear-empty')) { var clearempty = $element.attr('data-clear-empty'); $element.find(clearempty).each(function () { if ($(this).html() === '') { $(this).remove(); } }); }
    $element.addClass('rtid').addClass('owl-carousel').addClass('owl-theme').addClass('owl-hide-nav'); var owlimageloadother = function () { setTimeout(function () { $.imageload(); }, 300); }
    var varname = $element.attr('data-carusel-vname'); var _carusel = $element.owlCarousel({ loop: true, margin: 0, nav: true, autoHeight: true, navText: ['<span aria-label="Previous"></span>', '<span aria-label="Next"></span>'], responsive: { 0: { items: 1 } }, onInitialized: owlimageloadother, onTranslated: owlimageloadother }); if (varname) { owlcarusels[varname] = _carusel; }
}
function create_carusel_suggested_galleries() { $.loadScript($.getVar('rooturljs') + 'owl-carousel/owl.carousel.min.js', function () { create_carusel_suggested_galleries_loaded(); $.loadCSS($.getVar('rooturljs') + 'owl-carousel/assets/owl.carousel.min.css'); $.loadCSS($.getVar('rooturljs') + 'owl-carousel/assets/owl.theme.default.min.css'); }); }
function create_carusel_suggested_galleries_loaded() {
    if ($('.suggested-galleries-body').length && !$('.suggested-galleries-body').closest('.suggested-galleries').hasClass('hide')) {
        var gotoGallery = false; if ($('.suggested-galleries-body .suggested-gallery-cell.selected').length) {
            var index = -1; var c = 0; $('.suggested-galleries-body .suggested-gallery-cell').each(function () {
                if ($(this).hasClass('selected')) { index = parseInt($(this).attr('data-index')); }
                c++;
            }); if (index >= 0) { gotoGallery = index; }
        }
        $('.suggested-galleries-body').addClass('owl-carousel').addClass('owl-theme'); var inprofile = ($('.suggested-galleries-body').closest('.profile-head-item-suggested-galleries').length); var suggestedGalleriesCarusel = $('.suggested-galleries-body').owlCarousel({ loop: true, margin: 0, nav: true, center: gotoGallery === false || inprofile === false ? false : true, autoHeight: inprofile ? false : true, startPosition: gotoGallery, navText: ['<span aria-label="Previous"></span>', '<span aria-label="Next"></span>'], responsive: { 0: { items: inprofile ? 4 : 7 } }, });
    }
}
function create_from_template() {
    var $this = $(this); var $t = $this.find('template'); if ($t.length) {
        var c = $t.prop('content'); $this.html(c); $t.remove(); if ($this.find('.list.review-list').length || $this.find('.list.profile-list').length) { $.imageload(); init_slideimg(); init_fav(); init_availability(); init_availability_now(); }
        if ($this.find('.ctrl-view-more').length) { init_content_with_max_height(); }
        if ($this.find('[data-imgsrc]').length) { $.imageload(); }
        $('.cmd-open-gallery-menu').unbind('click').click(function () {
            if (!$('#menu-item-galleries').hasClass('active')) { $('#menu-item-galleries').trigger('click'); }
            return false;
        });
    }
}
function init_form_write_review_on_success() { $('.profile-write-review-message').removeClass('hide'); $('.profile-write-review').addClass('hide'); $(this).find('.step-body').addClass('hide'); $(this).find('.step-body-1').removeClass('hide'); $('input[name="rating"]').prop('checked', false); }
function init_form_profile_write_review(targetForm) { return; }
function displayAvNowTime(dtime, time) {
    var r = []; var _time = dtime.split(':'); var hour = _time.shift(); var min = _time.shift(); var sec = _time.shift(); hour = parseInt(hour); min = parseInt(min); if (hour > 0) { r.push(hour + (hour > 1 ? ' hours' : ' hour') + ' '); }
    if (min > 0) { r.push(min + ' min'); }
    if (sec > 0 && !r.length) { r.push(sec + ' sec'); }
    return r.join('');
}
async function init_availability_now() {
    var check_is_available_now_id = []; $('.is-available-now:not(.inited)').each(function () { var pid = false; var $this = $(this); $this.addClass('inited'); pid = $this.attr('data-itemid'); if (pid && check_is_available_now_id.indexOf(pid) === -1) { check_is_available_now_id.push(pid); } }); if (check_is_available_now_id.length) {
        var rurl = $('body').data('rooturl'); rurl = rurl + $.getVar('rooturlver') + 'get_availability_now/?list=' + check_is_available_now_id.join(','); $.get(rurl, function (data) {
            if (data && $.isStrJSONObj(data, '[', ']')) {
                data = jQuery.parseJSON(data); for (var i in data) {
                    var item = data[i]; if (item.id) {
                        if (item.state !== undefined) {
                            if (item.state == 0) {
                                $('.is-available-now').each(function () {
                                    if ($(this).attr('data-itemid') == item.id) {
                                        $(this).addClass('is-available-now-no'); $(this).closest('.item-cell').removeClass('item-is-available-now'); if ($(this).hasClass('is-available-now-inline')) {
                                            if (ismobile && $(this).closest('.block-main.block-main-duo').length) { var txt = 'Upd. ' + displayAvNowTime(item.dtime) + ' ago'; } else { var txt = 'Updated ' + displayAvNowTime(item.dtime) + ' ago'; }
                                            $(this).removeClass('pon').find('.avnow-ribbon-time-text').html(txt);
                                        } else { var txt = 'Not available now.\nUpdated ' + displayAvNowTime(item.dtime) + ' ago'; $(this).removeClass('pon').attr('title', txt).attr('data-tooltip', txt); }
                                    }
                                });
                            } else if (item.state == 1) {
                                $('.is-available-now').each(function () {
                                    if ($(this).attr('data-itemid') == item.id) {
                                        $(this).addClass('is-available-now-yes'); $(this).closest('.item-cell').addClass('item-is-available-now'); if ($(this).hasClass('is-available-now-inline')) {
                                            if (ismobile && $(this).closest('.block-main.block-main-duo').length) { var txt = 'Upd. ' + displayAvNowTime(item.dtime) + ' ago'; } else { var txt = 'Updated ' + displayAvNowTime(item.dtime) + ' ago'; }
                                            $(this).removeClass('pon').find('.avnow-ribbon-time-text').html(txt);
                                        } else { var txt = 'Available now.\nUpdated ' + displayAvNowTime(item.dtime) + ' ago'; $(this).removeClass('pon').attr('title', txt).attr('data-tooltip', txt); }
                                    }
                                });
                            }
                        }
                    }
                }
            }
            init_tooltip();
        });
    }
    if (availability_now_interval === false) { availability_now_interval = true; var delay = 5 * 60 * 1000; setInterval(function () { $('.is-available-now.inited').removeClass('inited'); init_availability_now(); }, delay); }
}
var tooltipids = 1; async function hide_tooltip() { $('.tooltip').stop().animate({ opacity: 0 }, 300, function () { $(this).remove(); }); }
async function init_tooltip() {
    var init_tooltip_handler = function () {
        var $this = $(this); var id = $this.attr('data-tooltip-id'); var pos = $this.attr('data-tooltip-pos'); var isstatic = $this.attr('data-tooltip-static') ? true : false; var addclass = $this.attr('data-tooltip-addclass'); if (addclass == undefined || typeof (addclass) != typeof ('')) { addclass = ''; }
        if (pos == undefined || !pos) { pos = 'top'; }
        var text = $this.attr('data-tooltip'); text = text.replace('__', '<br>').replace('\n', '<br>'); var offset = $this.offset(); var top = offset.top; var left = offset.left; var width = $this.outerWidth(); var height = $this.outerHeight(); if (!$('#tooltip-' + id).length) { var tooltipHtml = []; tooltipHtml.push('<div class="tooltip tooltip-' + pos + ' ' + (isstatic ? 'tooltip-static' : '') + ' ' + addclass + ' fs-df" id="tooltip-' + id + '">'); tooltipHtml.push('<div class="tooltip-body">'); tooltipHtml.push(text); tooltipHtml.push('</div>'); tooltipHtml.push('</div>'); $('body').append(tooltipHtml.join('')); }
        var $tooltip = $('#tooltip-' + id + ''); var tooltip_width = $tooltip.outerWidth(); var tooltip_height = $tooltip.outerHeight(); var wpadding = 5; if (pos == 'bottom') {
            var _left = left - tooltip_width / 2 + width / 2; if (_left < 5) { _left = 5; }
            var _top = top + height + 20; $('#tooltip-' + id + '').css({ top: (_top + 10) + 'px', left: _left + 'px', opacity: 0, }).stop().animate({ opacity: 1, top: _top }, 300);
        } else {
            var _right = 'auto'; var _left = left - tooltip_width / 2 + width / 2; var _top = top - tooltip_height - 20; var s = 0; if (_left < wpadding) { _left = wpadding; s++; }
            if (_left + tooltip_width > $(window).innerWidth() - wpadding) { _left = $(window).innerWidth() - wpadding - tooltip_width; s++; }
            if (_left < wpadding && s > 0) { _left = wpadding; _right = wpadding + 'px'; }
            $('#tooltip-' + id + '').css({ top: (_top - 10) + 'px', left: _left + 'px', right: _right, opacity: 0, }).stop().animate({ opacity: 1, top: _top }, 300);
        }
    }
    $('[data-tooltip]').each(function () {
        var $this = $(this); if ($this.hasClass('inited-tooltip')) { return; }
        $this.addClass('inited-tooltip'); $this.attr('data-tooltip-id', tooltipids); tooltipids++; var text = $this.attr('data-tooltip'); $this.removeAttr('title'); if (!text) { return; }
        if ($this.attr('data-tooltip-method') === 'click') { $this.click(init_tooltip_handler).mouseout(function () { $('.tooltip:not(.tooltip-static)').stop().animate({ opacity: 0 }, 300, function () { $(this).remove(); }); }); } else { $this.mouseover(init_tooltip_handler).mouseout(function () { $('.tooltip:not(.tooltip-static)').stop().animate({ opacity: 0 }, 300, function () { $(this).remove(); }); }); }
    });
}
function init_tab_prices_for_item(item, item_services) {
    var $this = $(item); if ($this.hasClass('inited')) { return; }
    $this.addClass('inited'); var _html = []; var _html_row = []; if ($(item_services).length) {
        var services_list = $(item_services).attr('data-services-list'); if (services_list) { services_list = services_list.split('|'); } else { services_list = []; }
        if (services_list.length) {
            for (var i in services_list) { var sid = services_list[i]; var s = $(item_services).attr('data-service-' + sid); s = s.split('|'); var s_name = s.shift(); var s_price = s.shift(); if (s_price) { _html_row.push('<div class="tab-row">'); _html_row.push('<div class="tab-cell tab-cell-name">'); _html_row.push(s_name); _html_row.push('</div>'); _html_row.push('<div class="tab-cell tab-cell-value">'); _html_row.push('Â£' + s_price); _html_row.push('</div>'); _html_row.push('</div>'); } }
            if (_html_row.length) { _html_row = _html_row.join(''); $this.closest('.item-cell').find('.item-profile-services-table').html('<div class="fw-b vpd-5 hpd-5">Extra services</div><div class="tabfw">' + _html_row + '</div>'); } else { $this.closest('.item-cell').find('.item-profile-services-table').remove(); }
        } else { $this.closest('.item-cell').find('.item-profile-services-table').remove(); }
    }
    var _html = []; var _html_row = []; _html.push('<div class="tabfw color-main ' + (ismobile ? ($this.closest('.item').hasClass('item-partners') ? 'fs-df' : 'fs-sm') : 'fs-md') + ' tab-prices">'); _html.push('<div class="tab-row tab-row-head fw-b"><div class="tab-cell tab-cell-name">Duration</div><div class="tab-cell">Incall</div><div class="tab-cell">Outcall</div></div>'); var _listnames = $this.attr('data-price-list-names'); if (!_listnames) { return; }
    _listnames = _listnames.split(';'); for (var i in _listnames) {
        var ln = _listnames[i]; ln = ln.split('|'); var k = ln.shift(); var n = ln.shift(); var p_name = n; var p_in = $this.attr('data-price-' + k + '-in'); var p_out = $this.attr('data-price-' + k + '-out'); var p_in_secret = $this.attr('data-price-' + k + '-in-secret'); var p_out_secret = $this.attr('data-price-' + k + '-out-secret'); _html_row = []; if (p_in && p_out) {
            _html_row.push('<div class="tab-row">'); _html_row.push('<div class="tab-cell tab-cell-name">'); _html_row.push(p_name); _html_row.push('</div>'); _html_row.push('<div class="tab-cell rel">'); _html_row.push(p_in); if (p_in_secret) { _html_row.push('<span class="color-rose fs-xs abs1 mrgl-3">'); _html_row.push(p_in_secret); _html_row.push('</span>'); }
            _html_row.push('</div>'); _html_row.push('<div class="tab-cell rel">'); _html_row.push(p_out); if (p_out_secret) { _html_row.push('<span class="color-rose fs-xs abs1 mrgl-3">'); _html_row.push(p_out_secret); _html_row.push('</span>'); }
            _html_row.push('</div>'); _html_row.push('</div>');
        }
        _html.push(_html_row.join(' '));
    }
    _html.push('</div>'); $this.html(_html.join(''));
}
async function init_slideimg() {
    var doslide = true; $.imageload(false); init_tooltip(); if (ismobile) {
        $('.list:not(.recently-viewed-escorts) .item .item-head .price:not(.ignore-price-hover),.list:not(.recently-viewed-escorts) .item .item-partners-head .price:not(.ignore-price-hover)').unbind('click mouseout').click(function () {
            init_tab_prices_for_item($(this).closest('.item').find('.item-profile-prices'), $(this).closest('.item').find('.item-profile-services')); if ($(this).closest('.item').hasClass('show-prices')) { $(this).closest('.item').removeClass('show-prices'); $(this).closest('.item-cell').find('.item-profile-services-table').addClass('show-services'); } else { $(this).closest('.item').addClass('show-prices'); $(this).closest('.item-cell').find('.item-profile-services-table').removeClass('show-services'); }
            return false;
        }).mouseout(function () { $(this).closest('.item').removeClass('show-prices'); });
    } else { $('.list:not(.recently-viewed-escorts) .item .item-head .price:not(.ignore-price-hover),.list:not(.recently-viewed-escorts) .item .item-partners-head .price:not(.ignore-price-hover)').mouseover(function () { init_tab_prices_for_item($(this).closest('.item').find('.item-profile-prices'), $(this).closest('.item').find('.item-profile-services')); $(this).closest('.item').addClass('show-prices'); $(this).closest('.item-cell').find('.item-profile-services-table').addClass('show-services'); }).mouseout(function () { $(this).closest('.item').removeClass('show-prices'); $(this).closest('.item-cell').find('.item-profile-services-table').removeClass('show-services'); }); }
    if (doslide) {
        $('.list .item .slideimg:not(.mover)').each(function () {
            var $this = $(this); $this.addClass('mover'); if ($this.attr('data-thumb-host')) {
                var imageload_webppathes = $.getVar('jplugins.imageload_webppathes'); var iswebpsuport = $.getVar('jplugins.iswebpsuport'); var thumb_host = $this.attr('data-thumb-host'); if (iswebpsuport && typeof (imageload_webppathes[thumb_host]) === typeof ('')) { thumb_host = imageload_webppathes[thumb_host]; }
                $this.find('[data-thumb]').each(function () { var thumbimg = $(this).attr('data-thumb'); $(this).attr('data-thumb', thumb_host + thumbimg); });
            }
            var back_to_first = $(this).attr('data-slide-img-back-to-first'); back_to_first = true; $this.mouseenter(function () { slideimg(this, true, true, 500); }).mouseleave(function () { if (back_to_first) { slideimg(this, false, false, 500, true); } else { slideimg(this, false, false, 500); } }).click(function () { if (back_to_first) { slideimg(this, false, false, 500, true); } else { slideimg(this, false, false, 500); } })
            $this.getswipe(function (e, direction, offset) { if (offset.y > -5 && offset.y < 5) { slideimg(e, true, false, 0); } });
        });
    }
}
var slideimgtimeout = false; function slideimg(element, nextitem, play, timeout, gotofirst) {
    timeout = timeout === undefined ? 0 : timeout; var create_from_attr = true; var $thumbList = $(element).closest('[data-img-thumb-list]'); if ($thumbList.length) {
        $thumbList.removeAttr('data-img-thumb-list'); var mainimg = $thumbList.find('[data-thumb-slider="0"]').attr('data-imgsrc'); if (mainimg == undefined) { mainimg = $thumbList.find('[data-thumb-slider="0"]').attr('src'); }
        if (mainimg) { mainimg = mainimg.split('/').pop(); }
        var list = []; var indx = 0; var thumb = ''; while ((thumb = $thumbList.attr('data-img-thumb-' + indx)) !== undefined) { $thumbList.removeAttr('data-img-thumb-' + indx); list.push(thumb); indx++; }
        if (list.length) { var $slider = $(element).closest('.img-thumbs').find('[data-thumb-slider]'); var $sliderParent = $slider.parent(); var path = $thumbList.attr('data-thumb-host'); $thumbList.removeAttr('data-img-thumb-path'); indx = 0; for (var i in list) { var e = list[i]; var d = e.split('|'); var img = d.shift(); var w = d.shift(); var h = d.shift(); $sliderParent.append('<img aria-hidden="true" data-thumb="' + (img.indexOf('//') === -1 ? path + img : img) + '" width="' + w + '" height="' + h + '" class="hide thumb-slider thumb-slider-' + indx + '">'); indx++; } }
    }
    if (nextitem === false) {
        var slider = $(element).closest('.img-thumbs').find('[data-thumb-slider]'); if (gotofirst && slider.attr('data-thumb-play') == 1) { slider.attr('data-slidestop', 1); var curr = slider.attr('data-thumb-slider'); $(element).closest('.img-thumbs').find('.thumb-slider').stop().fadeTo(s1, 0, function () { slider.attr('data-thumb-slider', 0); }); }
        $(element).closest('.img-thumbs').find('[data-thumb-slider]').attr('data-thumb-play', 0); if (slider.setTimeoutId != undefined) { clearTimeout(slider.setTimeoutId); }
        if (slideimgtimeout) { clearTimeout(slideimgtimeout); slideimgtimeout = false; } else { slideimgtimeout = false; }
        return false;
    }
    if (timeout > 0) { if (slideimgtimeout === false) { slideimgtimeout = setTimeout(function () { slideimg(element, nextitem, play, timeout); slideimgtimeout = false; }, timeout); } else { return; } } else { if (slideimgtimeout) { clearTimeout(slideimgtimeout); slideimgtimeout = false; } }
    var self = element; var slider = $(element).closest('.img-thumbs').find('[data-thumb-slider]'); slider.attr('data-thumb-play', 1); var curr = slider.attr('data-thumb-slider'); curr = curr == undefined ? 0 : parseInt(curr); var next = curr + 1; if (next >= $(element).closest('.img-thumbs').find('.thumb-slider').length) { next = 0; }
    var item = $(element).closest('.img-thumbs').find('.thumb-slider-' + next); var s1 = 600; var s2 = 800; if (slider.setTimeoutId != undefined) { return; }
    if (item.length) {
        $(self).closest('.img-thumbs').find('.thumb-slider-' + curr).css('z-index', 1); $(self).closest('.img-thumbs').find('.thumb-slider-' + next).css('z-index', 2); if (item.attr('data-thumb') == undefined) { $(item).stop().fadeTo(s1, 1, function () { slider.attr('data-thumb-slider', next); $(self).closest('.img-thumbs').find('.thumb-slider-' + curr).css('opacity', 0); if (play === true) { slider.setTimeoutId = setTimeout(function () { if (slider.attr('data-thumb-play') == 1) { slideimg(element, nextitem, play, timeout); } }, s2); } }); } else {
            var thumb = item.attr('data-thumb'); var imageload_webppathes = $.getVar('jplugins.imageload_webppathes'); var iswebpsuport = $.getVar('jplugins.iswebpsuport'); if (iswebpsuport === true) { var srcpath = thumb.split('/'); var basename = srcpath.pop(); srcpath = srcpath.join('/') + '/'; if (typeof (imageload_webppathes[srcpath]) === typeof ('')) { thumb = imageload_webppathes[srcpath] + basename; } }
            item.attr('src', thumb).on('load', function () { $(this).removeClass('hide'); $(this).unbind('load'); $(this).css('opacity', 0); $(this).stop().fadeTo(s1, 1, function () { slider.attr('data-thumb-slider', next); $(self).closest('.img-thumbs').find('.thumb-slider-' + curr).css('opacity', 0); if (play === true) { slider.setTimeoutId = setTimeout(function () { if (slider.attr('data-thumb-play') == 1) { slideimg(element, nextitem, play, timeout); } }, s2); } }); }).on('error', function () { $(this).remove(); slideimg(element, nextitem, play, timeout); }); item.removeAttr('data-thumb');
        }
    }
}
var globtime = false; async function init_availability() { if ($('.availabilitydata').length || $('.is-returnholiday').length) { $.loadScript($.getVar('rooturljs') + 'jquery/moment-2.17.1.min.js', function () { if (globtime === false) { get_server_datetime(); } else { upd_availability(globtime); } }); } }
async function get_server_datetime() {
    var rurl = $.getVar('rooturlthis'); rurl = rurl.replace('/t2/', '/'); if (usecookiedifftime) {
        var gtd = $.cookie('gtd'); if (gtd !== undefined && gtd != null) {
            gtd = parseInt(gtd); if (gtd < 0) { globtime = moment(globnow).subtract(Math.abs(gtd), 'seconds').format('YYYY-MM-DD HH:mm:ss'); } else { globtime = moment(globnow).add(Math.abs(gtd), 'seconds').format('YYYY-MM-DD HH:mm:ss'); }
            upd_availability(globtime); return;
        }
    }
    $.ajax({
        cache: true, method: "get", url: rurl + 'getstime.php?nocache=' + Math.round(10000 * Math.random()), success: function (data) {
            if (data && data.length === 19) {
                globtime = data; if (usecookiedifftime) { var snow = moment(globtime, 'YYYY-MM-DD HH:mm:ss'); var now = moment(globnow); var diff = moment.duration(now.diff(snow)).asSeconds(); diff = Math.round(diff / 10) * 10; $.cookie('gtd', '' + diff, { path: '/' }); }
                upd_availability(globtime);
            }
        }
    });
}
async function upd_availability(date) {
    var now = moment(date, 'YYYY-MM-DD HH:mm:ss'); var isadmin = inadmin; var nowr = moment(date, 'YYYY-MM-DD'); $('.is-returnholiday').not('.init').each(function () {
        var $this = $(this); var item = $this.closest($this.attr('data-item')); var $item = $(item); var at = $this.attr('data-returnholiday'); if (at) {
            at = moment(at, 'YYYY-MM-DD'); var diff = nowr.diff(at, 'days'); if (diff <= 4 && diff >= 0) {
                var difftext = 'Returned ' + diff + ' day' + (diff > 1 ? 's' : '') + ' ago'; if (diff === 0) { difftext = 'Returned today'; }
                $this.attr('data-tooltip', difftext); $item.closest('.item-cell').addClass('item-is-returnholiday'); $this.addClass('is-returnholiday-yes');
            } else { $item.closest('.item-cell').removeClass('item-is-returnholiday'); $this.addClass('is-returnholiday-no'); }
        }
        $this.addClass('init');
    }); $('.availabilitydata').not('.init').each(function () {
        var $this = $(this); var attime = false; if ($this.attr('data-now')) { var d = $this.attr('data-now'); var pnow = now; now = moment(d, 'YYYY-MM-DD HH:mm:ss'); if (pnow.format('YYYY-MM-DD HH') !== now.format('YYYY-MM-DD HH')) { attime = true; } }
        var texttarget = $this.attr('data-target'); var item = $this.closest($this.attr('data-item')); var $item = $(item); var atext = ''; var atext_after = ''; var name = $this.attr('data-name'); var txtname = name == undefined || name == '' ? '' : '' + name + ''; var on = false; var find = false; $this.addClass('init'); $this.children().each(function () {
            if (!find) {
                $thisitem = $(this); var tf = 'YYYY-MM-DD HH:mm'; var type = $thisitem.attr('data-type'); type = parseInt(type); var datein = $thisitem.attr('data-datein'); var dateout = $thisitem.attr('data-dateout'); if (datein == undefined || dateout == undefined || datein == '' || dateout == '') { } else {
                    datein = moment(datein, 'YYYY-MM-DD HH:mm:ss'); dateout = moment(dateout, 'YYYY-MM-DD HH:mm:ss'); var _now = now.seconds(0); var _datein = datein.seconds(0); var _dateout = dateout.seconds(0); var daypart = ''; var daypart1 = ''; daypart = ' today after ' + dateout.format('hA'); daypart1 = ' ' + dateout.format('hA'); if (dateout.hours() < 11) { daypart = ' today after ' + dateout.format('hA') + '(morning)'; daypart1 = ' ' + dateout.format('hA') + '(morning)'; } else if (dateout.hours() < 14) { } else { }
                    if (_now + 0 > _datein + 0 && _now + 0 < _dateout + 0) { find = true; if (attime) { if (type === 0) { atext = avcalendar(dateout, { now: now, offset: 0, conv: [{ day: "*", text: ['is off ' + now.format('MMMM Do, HH:mm') + ', will be available ', '=MMMM Do, HH:mm'] },] }); } else if (type == 1) { atext = avcalendar(dateout, { now: now, offset: 0, conv: [{ day: "*", text: ['is on holiday ' + now.format('MMMM Do, HH:mm') + ', will be available ', '=MMMM Do, HH:mm'] },] }); } else if (type == 3) { atext = avcalendar(dateout, { now: now, offset: 0, conv: [{ day: "*", text: ['is fully booked ' + now.format('MMMM Do, HH:mm') + ', will be available ', '=MMMM Do, HH:mm'] },] }); } } else { if (type === 0) { atext = avcalendar(dateout, { now: now, offset: 0, conv: [{ day: 0, hour: 0, text: ['off now, till ', '=h:mmA'] }, { day: 0, text: 'is off now, will be available' + daypart }, { day: 1, text: 'is off today, will be available tomorrow' }, { day: 2, text: 'is off today, will be available the day after tomorrow' }, { day: 6, text: ['is off today, will be available on ', '=dddd'] }, { day: 7, text: ['is off today, will be available next ', '=dddd'] }, { day: 14, text: ['is off today, will be available ', '=dddd, MMMM Do'] }, { day: "*", text: ['is off today, will be available ', '=MMMM Do'] },] }); atext_after = ''; } else if (type === 3) { atext = avcalendar(dateout, { now: now, offset: 0, conv: [{ day: 0, hour: 0, text: ['is fully booked, till ', '=h:mmA'] }, { day: 0, text: 'is fully booked, will be available' + daypart }, { day: 1, text: 'is fully booked, will be available tomorrow' }, { day: 2, text: 'is fully booked, will be available the day after tomorrow' }, { day: 6, text: ['is fully booked, will be available on ', '=dddd'] }, { day: 7, text: ['is fully booked, will be available next ', '=dddd'] }, { day: 14, text: ['is fully booked, will be available ', '=dddd, MMMM Do'] }, { day: "*", text: ['is fully booked, will be available ', '=MMMM Do'] },] }); atext_after = '.<br>Prebooking is highly recommended'; } else if (type === 1) { atext = avcalendar(dateout, { now: now, offset: 0, conv: [{ day: 0, hour: 0, text: ['is on holiday, till ', '=h:mmA'] }, { day: 0, text: 'is on holiday, will be available' + daypart }, { day: 1, text: 'is on holiday, will be available tomorrow' }, { day: 2, text: 'is on holiday, will be available the day after tomorrow' }, { day: 6, text: ['is on holiday, will be available on ', '=dddd'] }, { day: 7, text: ['is on holiday, will be available next ', '=dddd'] }, { day: 14, text: ['is on holiday, will be available ', '=dddd, MMMM Do'] }, { day: "*", text: ['is on holiday, will be available ', '=MMMM Do'] },] }); atext_after = ''; } else if (type === 2) { on = true; } } }
                }
            }
        }); if (on == false) {
            if (atext != '') {
                var inpage = $this.attr('data-inpage'); var partnernumb = $this.attr('data-partnernumb'); var html_text = []; if (inpage) { if ($('.page .block-main.block-main-duo').length && ismobile) { html_text.push('<span class="fs-df color-secondary fw-i lh-df disp-iblock">'); } else { html_text.push('<span class="fs-lg color-secondary fw-i">'); } } else { html_text.push('<span class="fs-md color-secondary fw-i">'); }
                html_text.push(txtname); html_text.push(' '); if (inpage) { html_text.push(atext + atext_after); } else { html_text.push(atext); }
                html_text.push('</span>'); if (inpage) { $this.closest('.page.page-profile-item').find(texttarget).removeClass('hide').html(html_text.join('')); if (partnernumb) { $this.closest('.page.page-profile-item').addClass('item-partner-is-notavailable item-partner-' + partnernumb + '-is-notavailable'); } else { $this.closest('.page.page-profile-item').addClass('item-is-notavailable'); } } else {
                    var itemid = $this.attr('data-itemid'); $item.find('.item-image[data-itemid="' + itemid + '"]').find(texttarget).removeClass('hide').html(html_text.join('')); $item.closest('.item-cell:not(.item-cell-duo)').addClass('item-is-notavailable'); if ($item.closest('.item-cell').find('.availability-icon').length) { } else { $item.closest('.item-cell').addClass('item-hide-textover'); }
                    if ($item.find('.item-image[data-itemid="' + itemid + '"] .availability-icon.availability-icon-tooltip').length) { $item.find('.item-image[data-itemid="' + itemid + '"] .availability-icon').removeClass('hide'); $item.find('.item-image[data-itemid="' + itemid + '"] .availability-icon').attr('data-tooltip', atext.replace(', ', ',\n')); $item.find('.item-image[data-itemid="' + itemid + '"]').find(texttarget).remove(); $item.closest('.item-cell').addClass('item-show-textover'); } else if ($item.find('.item-image[data-itemid="' + itemid + '"] .availability-icon-text').length) { $item.find('.item-image[data-itemid="' + itemid + '"] .availability-icon').removeClass('hide'); $item.find('.item-image[data-itemid="' + itemid + '"]').find(texttarget).remove(); $item.find('.item-image[data-itemid="' + itemid + '"] .availability-icon-text').html(atext); } else if ($item.find('.item-image[data-itemid="' + itemid + '"] .availability-icon').length) { $item.find('.item-image[data-itemid="' + itemid + '"] .availability-icon').removeClass('hide'); $item.find('.item-image[data-itemid="' + itemid + '"] .availability-icon').attr('data-tooltip', atext.replace(', ', ',\n')); $item.find('.item-image[data-itemid="' + itemid + '"] .item-profile-secret-price').removeClass('item-profile-secret-price-up'); } else { }
                }
            } else { if (attime && $('.page.page-booking').length) { var itemid = $this.attr('data-itemid'); $item.find('.item-image[data-itemid="' + itemid + '"]').find(texttarget).addClass('hide').html(''); $item.closest('.item-cell').removeClass('item-is-notavailable'); } }
        }
    }); init_tooltip();
}
function avcalendar(date, opt) {
    opt = $.extend({}, { now: true, offset: true, trace: false, name: '', }, opt); var tf = 'YYYY-MM-DD HH:mm:ss'; var format = 'YYYY-MM-DD HH:mm:ss'; var start = false; var end = false; var now = false; var offset = true; var conv = []; if (opt.offset == true) { offset = moment().utcOffset(); } else if (opt.offset == false) { offset = 0; } else { offset = typeof (opt.offset) == typeof (1) ? opt.offset : parseInt(opt.offset); }
    if (typeof (date) == typeof ([]) && date[0] != undefined && date[1] != undefined) { start = date[0]; end = date[1]; } else if (typeof (date) == typeof ({})) { end = moment(date); } else if (typeof (date) == typeof ("")) { end = date; } else { return false; }
    for (var i in opt.conv) { opt.conv[i].text = opt.conv[i].text != undefined ? opt.conv[i].text : false; opt.conv[i].day = opt.conv[i].day != undefined ? opt.conv[i].day : false; opt.conv[i].hour = opt.conv[i].hour != undefined ? opt.conv[i].hour : "*"; if (opt.conv[i].day !== false && opt.conv[i].text != false) { conv.push(opt.conv[i]); } }
    conv.sort(function (a, b) { if (a.day == "*") return 1; if (a.day > b.day) return 1; if (a.day < b.day) return -1; if (a.hour > b.hour) return 1; if (a.hour < b.hour) return -1; return 0; }); if (opt.now == true) { now = moment().utcOffset(offset); } else { now = moment(opt.now).utcOffset(offset); }
    date_end = moment(end); var now_day = moment(now); var now_hour = moment(now); var end_day = moment(date_end); var end_hour = moment(date_end); now_day.seconds(0).minutes(0).hours(0); now_hour.seconds(0).minutes(0); end_day.seconds(0).minutes(0).hours(0); end_hour.seconds(0).minutes(0); var diff_day = end_day.diff(now_day, 'days', true); var diff_hour = end_hour.diff(now_hour, 'hours', true); diff_day = Math.round(diff_day); diff_hour = Math.round(diff_hour); var result = ""; for (var i in conv) {
        var text = conv[i].text; var day = conv[i].day; var hour = conv[i].hour; if (diff_hour >= 0 && day !== false && text != false) {
            if ((day >= diff_day || day == '*') && (hour >= diff_hour || hour == '*')) {
                if (typeof (text) == typeof (function () { })) { result = text.call(null, now, date_end); } else if (typeof (text) != typeof ("")) {
                    var _text = []; for (var t in text) { if (text[t].substring(0, 1) == "=") { var userformat = text[t].substring(1); text[t] = date_end.format(userformat); } }
                    result = text.join('');
                } else { result = text; }
                break;
            }
        }
    }
    return result;
}
function copytoclipboardcommon(el, content, name) {
    if (!$('#copytoclipboard').length) { $(el).parent().append('<input style="position:absolute; left:-9999px; top:0" id="copytoclipboard" value="' + content + '">'); }
    var s = $.copyToClipboard($('#copytoclipboard')[0]); if (s) { $('#copytoclipboard').remove(); if (name) { notice(name + ' copied to clipboard'); } else { notice('Copied to clipboard'); } }
}
function exec_test() { console.log('EXEC_TEST'); }
function getDataFromScript(id) { if (document.getElementById(id).textContent) { return JSON.parse(document.getElementById(id).textContent); } else { return {}; } }
function clearStorage(domain) { var type = 'localStorage'; var keys = []; if (domain) { keys = getAllStorageKeys(domain); for (var i in keys) { removeFromStorage(domain, keys[i]); } } else { } }
function getAllStorageKeys(domain) {
    var type = 'localStorage'; keys = Object.keys(window[type]); if (domain) {
        var _keys = []; var strlen = domain.length + 1; for (var i in keys) { var k = keys[i]; if (k.indexOf(domain + '-') === 0) { _keys.push(k.substring(strlen)); } }
        return _keys;
    } else { return keys; }
}
function removeFromStorage(domain, name) { var type = 'localStorage'; var _name = domain + '-' + name; return window[type].removeItem(_name); }
function getFromStorage(domain, name, defaultValue) { var type = 'localStorage'; var _name = domain + '-' + name; return window[type].getItem(_name); }
function addToStorage(domain, name, value) { var type = 'localStorage'; var _name = domain + '-' + name; return window[type].setItem(_name, value); }
function isStorageAvailable() {
    if (localStorageAvailable === 1) { return true; } else if (localStorageAvailable === 0) { return false; }
    var type = 'localStorage'; try { var storage = window[type], x = "__storage_test__"; storage.setItem(x, x); storage.removeItem(x); localStorageAvailable = 1; return true; } catch (e) { localStorageAvailable = 0; return false; }
}