import 'video.js/dist/video-js.css'
import '../css/main.scss'

import videojs from 'video.js'
// eslint-disable-next-line no-unused-expressions
!(function () {
    'use strict'
    const DOM = {
        root: document.querySelector('main'),
        el: document.querySelector('.videofy'),
    }

    const player = videojs(DOM.el, {
        controlBar: {
            children: ['playToggle', 'currentTimeDisplay', 'progressControl', 'DurationDisplay', 'muteToggle'],
        },
        fill: true,
        disablePictureInPicture: true,
    })

    player.ready(function () {
        document.querySelector('.preloader__').remove()
        DOM.root.style.opacity = '1'
        player.tech_.off('dblclick')
    })
})()
