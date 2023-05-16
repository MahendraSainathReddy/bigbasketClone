function changeMode() {

    let myBody=document.body

    myBody.classList.toggle('bg-dark')
    myBody.classList.toggle('text-white')

    let spanELements = document.getElementsByTagName('span')

    let aELements = document.getElementsByTagName('a')

    let pELements = document.getElementsByTagName('p')

    let navbarscrollList = document.getElementById('navbarScroll')

    let navbarul = navbarscrollList.getElementsByTagName('ul')

    if(myBody.classList.contains("bg-dark")){

        document.getElementById('logoToggle').src = "https://i.ibb.co/XZVSChk/clipboard.png"

        document.getElementById("darkModeButton").classList.add('text-white')

        document.getElementById("navbar2List").classList.add('text-white')

        document.getElementById("navbar1List").classList.add('text-white')

        for (var i = 0 ;i < spanELements.length; i++) {
            
            spanELements[i].classList.remove("text-dark");
            spanELements[i].classList.add("text-white")

        }

        for (var i = 0 ;i < aELements.length; i++) {

            aELements[i].classList.remove("text-dark");
            aELements[i].classList.add("text-white")

        }

        for (var i = 0 ;i < pELements.length; i++) {

            pELements[i].classList.remove("text-dark");
            pELements[i].classList.add("text-white")

        }

        for (var i = 0 ;i < navbarul.length; i++) {

            navbarul[i].classList.add("bg-dark")

        }

    }
    else{

        document.getElementById('logoToggle').src = "https://i.ibb.co/GJTnmbz/image.png"

        document.getElementById("darkModeButton").classList.remove('text-white')

        document.getElementById("navbar2List").classList.remove('text-white')

        document.getElementById("navbar1List").classList.remove('text-white')

        for (var i = 0; i < spanELements.length; i++) {

            spanELements[i].classList.remove("text-white");
            spanELements[i].classList.add("text-dark")

        }

        for (var i = 0; i < aELements.length; i++) {

            aELements[i].classList.remove("text-white");
            aELements[i].classList.add("text-dark")

        }

        for (var i = 0; i < pELements.length; i++) {

            pELements[i].classList.remove("text-white");
            pELements[i].classList.add("text-dark")

        }

        for (var i = 0 ;i < navbarul.length; i++) {

            navbarul[i].classList.remove("bg-dark")

        }

    }

    let darkIcon = document.getElementById('darkModeButton')

    if(darkIcon.classList.contains('bi-toggle-off')){

        document.getElementById("darkModeButton").classList.add('bi-toggle-on')

        document.getElementById("darkModeButton").classList.remove('bi-toggle-off')

    }
    else{

        document.getElementById("darkModeButton").classList.add('bi-toggle-off')

        document.getElementById("darkModeButton").classList.remove('bi-toggle-on')

    }
}
