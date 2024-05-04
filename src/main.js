const alphabets = "abcdefghijklmnopqrstuvwxyz";
const alphanum = "abcdefghijklmnopqrstuvwxyz1234567890";
const all = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";
const generateBtn = document.querySelector('.generate_btn');
const options = document.querySelectorAll('.option input');


let charset = () => {
    let selectedCharset = '';
    options.forEach(option => {
        if(option.checked){
            selectedCharset = option.id;
        }
    });
    return selectedCharset;
}

generateBtn.addEventListener("click", () => generatePass(charset()));

function generatePass(charset) {
    console.log(charset);
}