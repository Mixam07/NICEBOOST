import "./nouislider.min.js";
"use strict";
window.addEventListener("DOMContentLoaded", function() {
    const btnsHeader = document.querySelectorAll(".header__burgerMenu"),
        popupHeader = document.querySelector(".popupMenu"),
        header = document.querySelector(".header"),
        rangeSlider = document.querySelector(".good__rangeSlider"),
        input = document.querySelector("[data-input]");
    
    if(document.querySelector("html").scrollTop > 0){
        header.classList.add("header_black");
    }

    btnsHeader.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            popupHeader.classList.add("popupMenu_active");
        });
    })

    popupHeader.addEventListener("click", (e) => {
        if(e.target.classList[0] === popup.classList[0]){
            popupHeader.classList.remove("popupMenu_active");
        }
    });

    document.addEventListener("scroll", () => {
        if(document.querySelector("html").scrollTop > 0){
            header.classList.add("header_black");
        }else{
            header.classList.remove("header_black");
        }
    })

    const addEvent = (btnSelector, popupSelector, classToggle) => {
        const btn = document.querySelector(btnSelector),
            popup = document.querySelector(popupSelector);


        btn.addEventListener("click", (e) => {
            e.preventDefault();
        })
    }

    addEvent(".aside__btn", ".aside__list", "aside__list_active");
    addEvent(".good__btn", ".good__list", "good__list_active");

    document.querySelector("[data-test]").addEventListener("click", (e) => {
        e.preventDefault();
    });

    noUiSlider.create(rangeSlider, {
        start: [0, 100],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        },
        tooltips: true,
        format: {
            from: function (value) {
                return Number(value);
            },
            to: function(value) {
                return Math.round(value);
            }
        }
    });

    rangeSlider.noUiSlider.on('update', (values) => {
        input.value = `${values[0]}-${values[1]}`;
    });
});