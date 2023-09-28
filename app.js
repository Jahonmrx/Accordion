//using selectors inside the element
// traversing the dom

const question = document.querySelectorAll(".question");

question.forEach((item, index)=>{
    let header = item.querySelector(".question-title");
    let plus = item.querySelector(".plus-icon");
    let minus = item.querySelector(".minus-icon");
    header.addEventListener('click', ()=>{
        item.classList.toggle('open')

        let questionText = item.querySelector(".question-text");
        console.log(questionText);
        if(item.classList.contains('open')){
            questionText.style.height = '120px';
            questionText.style.padding = '1.5rem 0';
            plus.style.display = 'none'
            minus.style.display = "block";
        }
        else{
            questionText.style.height = "0px";
            questionText.style.padding = "0rem";
            plus.style.display = "inline";
            minus.style.display = "none";
        }
        removeOpen(index)
    })
})

function removeOpen(index1) {
    question.forEach((item2, index2) => {
        if(index1 != index2){
            item2.classList.remove('open');

            let text = item2.querySelector(".question-text");
            let pilus = item2.querySelector(".plus-icon");
            let miinus = item2.querySelector(".minus-icon");

            text.style.height = '0px';
            text.style.padding = "0rem";
            pilus.style.display = "inline";
            miinus.style.display = "none";

        }
    })
}