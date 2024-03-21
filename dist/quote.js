"use strict";
{
    const quotes = [
        "행복은 쉽게 변하지만 명예는 늘 지속된다",
        "행복을 얻으려면 기술이 필요하다",
        "자신의 행복을 직접 헤아려라",
        "오래 사는 기술은 선하게 사는 것이다",
        "행복을 한 입 크게 물려면 커다란 위장을 지녀라",
        "평화로운 것이 사는 길이다",
        "소망할 만한 일을 반드시 남겨두라",
        "충족되지 않은 열망을 남겨두어야 한다",
        "한 번뿐인 인생은 즐거운 여행이어야 한다",
        "즐길 때는 천천히, 일할 때는 빨리 하라",
    ];
    const quote = document.querySelector("#quote");
    const selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quote.textContent = selectedQuote;
}
