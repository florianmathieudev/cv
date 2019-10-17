const ratio = .5
const ratioHR = .1
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        } 
    })
}
  
const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.reveal').forEach(function (r) {
    observer.observe(r)
})



const handleIntersectH = function (entries, observerH) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible-H')
            observerH.unobserve(entry.target)
        } 
    })
}
  
const observerH = new IntersectionObserver(handleIntersectH, options);
document.querySelectorAll('.reveal-H').forEach(function (rh) {
    observerH.observe(rh)
})

const handleIntersectHR = function (entries, observerHR) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratioHR) {
            entry.target.classList.add('reveal-visible-H-R')
            observerHR.unobserve(entry.target)
        } 
    })
}
  
const observerHR = new IntersectionObserver(handleIntersectHR, options);
document.querySelectorAll('.reveal-H-R').forEach(function (rhr) {
    observerHR.observe(rhr)
})


const handleIntersectV = function (entries, observerV) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('revealV-visible')
            observerV.unobserve(entry.target)
        } 
    })
}
  
const observerV = new IntersectionObserver(handleIntersectV, options);
document.querySelectorAll('[class*="revealV-"]').forEach(function (rV) {
    observerV.observe(rV)
})