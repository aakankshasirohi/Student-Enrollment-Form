const deleteB = document.querySelector('.deleteB');
const submitB = document.getElementById('submitB');
const checkboxes = document.getElementsByName('skills');
submitB.addEventListener("click", function() {
    let inputTag = document.querySelectorAll('.form-control');
    let gender = document.querySelector('input[name="gender"]:checked');
    var genderVal;
    if (gender == '') {
        alert('Select Gender');
        return;
    } else {
        genderVal = gender.value;
    }
    // let skills = $('input[name="skills"]:checked').map();
    // let skills = document.querySelectorAll('input[type=checkbox]:checked');
    console.log(checkboxes);
    let skills = '';
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            if (skills == '') {
                skills += checkbox.value;
            } else {
                skills += ',' + checkbox.value;
            }
        }
    });
    console.log(skills);
    // let selectedskills = [...skills].map(function(prams) { return prams.value; }).get().join(', ');

    // console.log(selectedskills);
    if (inputTag[0].value == '') {
        alert("Name cannot left blank !");
    } else
        appenddata(inputTag, genderVal, skills);
});



let row = 1;

function appenddata(inputTag, gender, skills) {
    let name = inputTag[0].value;
    let emailAdd = inputTag[1].value;
    let webAdd = inputTag[2].value;
    let imageLink = inputTag[3].value;

    let tableSchema = document.getElementById("dataTable");
    let newRow = tableSchema.insertRow(row);
    let discriptionSection = newRow.insertCell(0);
    let imageKasection = newRow.insertCell(1);
    discriptionSection.innerHTML = `  
    <div class="descriptions">
    <span>${name}</span>
    <span>${emailAdd}</span>
    <span>${webAdd}</span>
    <span>${gender}</span>
    <span> ${skills}</span>
</div>`;
$("button").click(function(){
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
  });

    imageKasection.innerHTML = `                  
    <div class="imgsection">
        <img src="${imageLink}" alt="">
    </div>`;

    // imageKasection.innerHTML = ;
    row++;

}