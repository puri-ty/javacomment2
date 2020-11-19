var dropdownButtons = document.getElementsByClassName("dropdown-btn"); /* ცვლადი
dropdownButtonsის კლასი დოკუმენტში არის dropdown-btn */

for (var i = 0; i < dropdownButtons.length; i++) { /* იწყება ლუპი. სადაც ინკრიმენტის საწყისი მნიშვნელობაა 0,
ნაკლებია ცვლადის მასივის სიგრძეზე და იზრდება ერთით */
    dropdownButtons[i].addEventListener("click", function (){/*ცვლადის ყოველ ინკრიმენტს ენიჭება ივენთი
    click ივენთების სიიდან */
    //dropdownList.style.display = "flex";
    this.parentElement.getElementsByClassName("dropdown-list")[0].style.display = "flex";
    }
) //იმ ელემენტის, რომელმაც გამოიწვია ივენთი, მშობელი ელემენტის კლასია dropdown-list და დისფლეი ფლექსი
}

var textCols = document.getElementsByClassName("col"); /* ცლადი textCols რომლის
კლასიც დოკუმენტში არის col*/
var dropdownItems = document.getElementsByClassName("dropdown-item");//ცვლადი dropdownItemsის კლასი dropdown-item
for (var i = 0; i < dropdownItems.length; i++) { //ლუპი სადაც ინკრიმენტის საწყისი მნიშვნელობაა 0, ნაკლებია მასივის სიგრძეზე
    //და იზრდება ერთით
    dropdownItems[i].addEventListener("click", function () {//ცლადს ენიჭება ივენთი click
        for (var j = 0; j < textCols.length; j++) { //ლუპი სადაც ცვლადი jს საწყისი მნიშვ. 0, ნაკლებია ცვლადის მასივის სიგრძეზე
            //და იზრდევა ერთით
            textCols[j].style.display = "none";//ცვლადი textColsის დისპლეია none
        }
        this.parentElement.parentElement.getElementsByClassName("dropdown-btn")[0].innerHTML = this.innerHTML;
        //ცვლადი dropdownItems, რომელსაც მიენიჭა ივენთი click, მშობელი ელემენტის, მშობელი ელემენტია dropwdown-btn
        //და ივენთის შესრულებისას დოკუმენტიდან გამოდის dropdownItemsის შიდა html
        this.parentElement.style.display = "none"; //ივენთის შემსრულებელი ცვლადის მშობელი ელემენტის დისპლეია none
        // ანუ clickის შესრულების შემდეგ ქრება
        document.getElementById(this.dataset.target).style.display = "flex";
        //დოკუმენტიდან ფლექს დისპლეით უნდა გამოჩნდეს ის ელემენტი, რომელზეც ხდება კლიკი
    });
}
