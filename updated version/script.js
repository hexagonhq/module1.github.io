"use strict";

// function validator() {
//   let inputs = document.forms[0].elements,
// 		  pattern  = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  
//   for (let i = 0; i < inputs.length; i++) {
//     let input = inputs[i];
    
//     if (input != null && input.getAttribute('type') === 'text') {
//       if (input.value === '') {
// 				createElement('Введите свой email');
				
// 				setTimeout( () => {
// 					removeElement();
//         }, 4000);
				
//         return false;
//       }
	
// 			if (input.value !== '' && !pattern.test(input.value)) {
// 				createElement('Не коректно заполнено');
				
// 				setTimeout( () => {
// 					removeElement();
// 				}, 4000);
// 				return false;
// 			}
			
// 			if (input.value !== '' && pattern.test(input.value)) {
// 				createElement('Вы подписались на новости');
				
// 				setTimeout( () => {
// 					removeElement();
// 				}, 4000);
//       }
//     }
//     return true;
    
//   }
// }

// function createElement(text) {
//     let create = document.createElement('span'),
//       pushEl = document.querySelector('form');
// 	    create.setAttribute('id', 'error');
    
//     if (document.getElementById('error') === null) {
// 			pushEl.appendChild(create);
//     }
    
//     if (document.getElementById('error').innerText !== text || document.getElementById('error').innerText === '') {
// 			document.getElementById('error').innerText = text;
//     }
    
// }

// function removeElement() {
//   if (document.getElementById('error') !== null && document.getElementById('error').innerText !== '') {
// 		document.getElementById('error').remove();
//   }
// }

// let fotmSend = document.getElementsByTagName('button')[0];
// fotmSend.addEventListener('click', function() {
	
//   if (validator() === true) {
// 		fotmSend.setAttribute('type', 'submit');
//   }
// });


// let list = document.querySelectorAll('.list');

// for (let i = 0; i < list.length; i++) {
//   let elements = list[i];

//   for (let j = 0; j < elements.children.length; j++) {
//     let element = elements.children[j];

//     if (element.childElementCount > 1) {
//        element.children[1].classList.add('is-hide');
//     }

//     console.log(element.children);

//    for (let k = 0; k < element.children.length; k++) {
//      let item = element.children[k];
//      if (item == item.getAttribute('href')) {
//       item.addEventListener('click', (e) => {

//         if (e.currentTarget && element.children.length > 1) {
//           console.log('opened');
//           element.classList.toggle('is-open');
  
//           if (element.classList.contains('is-open')) {
//             element.children[1].classList.remove('is-hide')
//           } else {
//             element.children[1].classList.add('is-hide')
//           }
//         } else {
//           console.log('stop');
//           e.stopPropagation();
//         }
//       });
//      }
//    }

//   }
// }

const linkElements = document.querySelectorAll('.navigation-link'),
			listItem = document.querySelector('.navigation-list');

for (let i = 0; i < linkElements.length; i++) {
  const
    x_pos = linkElements[i].offsetWidth / 2 + linkElements[i].offsetLeft,
    y_pos = linkElements[i].offsetTop + linkElements[i].offsetHeight / 2,
    translate = 'translate(' + x_pos + 'px, ' + y_pos + 'px)',
    scale = 'scale(' + linkElements[i].offsetWidth + ', ' + linkElements[i].offsetHeight / 8 + ')',
    underline = document.querySelector('.underline');
    // console.log(element.getBoundingClientRect());
    underline.style.transform = 'translate(446.5px, 27px) ' +  scale;

	linkElements[i].addEventListener('mouseenter', (e)=> {
    if (e.target || e.currentTarget === listItem) {
      underline.style.transform = translate + ' ' + scale;
      underline.classList.add('animation-outline');
      console.log(translate + ' ' + scale);
    }
  });

	linkElements[i].addEventListener('mouseleave', (e)=> {
	    underline.classList.remove('animation-outline');
  });
    
}

	const radioButtons = document.querySelectorAll('input[type="radio"]');

	for (let i = 0; i < radioButtons.length; i++) {
		radioButtons[2].checked = true;
}