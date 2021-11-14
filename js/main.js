const scrollElements = document.querySelectorAll(".js-scroll");
const hr = document.getElementById('hr')

var throttleTimer;

const throttle = (callback, time) => {

  throttleTimer = true;
  setTimeout(() => {
    callback();
    throttleTimer = false;
  }, time);
}

const elementInView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight)/1.25
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight) / 1.25
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");

};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}
function hand(name, id) {
  console.log(1)
  unhandle();
  handleClick(name, id)
  handle();
}
const unhandle = () => {
  scrollElements.forEach(item => {
    if (item.classList.contains('scrolled')) {
      hideScrollElement(item)
    }
  })
}
const handle = () => {
  scrollElements.forEach(item => {
    const height = window.innerHeight/1.25
    if(item.getBoundingClientRect().top < height) {
      displayScrollElement(item)
    }
  })
}

if(window.innerWidth >= 1200) {
  hr.addEventListener("scroll", () => { 
    throttle(() => {
      handleScrollAnimation();
    }, 250);
  });
}
else {
  window.addEventListener("scroll", () => { 
    throttle(() => {
      handleScrollAnimation();
    }, 250);
  });
}

