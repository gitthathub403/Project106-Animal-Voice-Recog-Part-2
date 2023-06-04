function start(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ZGWoyQd2c/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResult);
}

var dog = 0;
var cat = 0;

function gotResult(error, results){
    if(error){
        console.log(error)
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById('result').innerHTML = 'voice detected! it is a wild - ' + results[0].label;
        document.getElementById('result_count').innerHTML = 'Detected Dog - '+dog+' Detected cat - '+cat;
        document.getElementById('result').style.color = 'rgb('+random_number_r+','+random_number_g+','+random_number_b+')';
        document.getElementById('result_count').style.color = 'rgb('+random_number_r+','+random_number_g+','+random_number_b+')';
img = document.getElementById('animal_img')
        if(results[0].label == 'Dog'){
            img.src = 'dog.gif';
            dog = dog + 1;
        }else if(results[0].label == 'Cat'){
            img.src = 'cat.gif';
            cat = cat + 1;
        }else{
            img.src = 'ear.jpg';
        }
    }
    }