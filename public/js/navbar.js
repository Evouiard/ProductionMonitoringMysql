



document.getElementById("navbar").innerHTML += '<nav class="items-baseline relative bg-black w-full flex flex-wrap items-center justify-between py-2">\n' +
    '    <div class="xs:justify-end justify-center sm:w-auto w-full flex flex-no-shrink items-stretch h-12">\n' +
    '           <img src="https://zupimages.net/up/20/05/cevd.png" class="flex-no-grow flex-no-shrink relative my-2 mx-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark text-3xl">' +
    '<a href="" class="flex-no-grow relative my-2 mx-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark text-3xl" id="dateheure"></a>\n' +
    '    </div>\n' +
    '    <div class="text-center text-white sm:w-auto w-full  rounded-lg flex-wrap">\n' +
    '        <div class="lg:flex lg:items-stretch lg:justify-end ml-auto">\n' +
    '            <a href="../statistique.html" class="text-center no-underline  border-b-4 border-white mx-3 py-2 m-2 sm:inline-block hover:bg-gray-800  hover:border-blue-600" href="../statistique.html">Statistique</a>\n' +
    '            <a href="/stockage.html" class="text-center no-underline  border-b-4 border-white mx-3 py-2 m-2 sm:inline-block hover:bg-gray-800  hover:border-blue-600" >stockage</a>\n' +
    '            <a href="/connexion.html" class="text-center no-underline  border-b-4 border-white mx-3 py-2 m-2 sm:inline-block hover:bg-gray-800  hover:border-blue-600" >Connexion</a>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</nav></div>';

function getDateTime() {
    var date = new Date().toLocaleString(); // dd:mm:y
    document.getElementById("dateheure").innerHTML = date;
    setTimeout(getDateTime, 1000); // mise à jour du contenu "getDateTime" toutes les secondes
}

getDateTime();






































//
  // document.getElementById("navbar").innerHTML += '<nav class="align-baseline items-center justify-between bg-teal-100 border border-black flex">\n' +
  //     '    <div class="sm:px-6 sm:mx-0 mx-auto flex">\n' +
  //     '        <a href="/" class="-pt-8 sm:h-26 h-24 w-auto justify-start mt-2 flex mr-8">\n' +
  //     '            <img src="https://i.imgur.com/Oh1nxQu.png" class="-pt-8 py-18 fill-current stroke-current sm:h-20 sm:w-26 h-24 w-auto">\n' +
  //     '        </a>\n' +
  //     '        <div class="text-xl ">\n' +
  //     '            <div class="border-l border-gray-800 pl-2">\n' +
  //     '            <p id="dateheure"></p>\n' +
  //     '            <p class="text-xl italic"> Status Connection Serveur</p></div>\n' +
  //     '            <div class="items-stretch border border-gray-800 w-full align-baseline flex rounded-b-lg">\n' +
  //     '                <div class="font-mono w-5/6 text-center justify-center items-center  flex text-lg text-green-800">\n' +
  //     '                    Connection ok\n' +
  //     '                </div>\n' +
  //     '                <div class="w-1/6 justify-center  justify-center border-l border-gray-800 ">\n' +
  //     '                    <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\n' +
  //     '                     <path d="M192 512a320 320 0 10640 0 320 320 0 10-640 0z" fill="#1afa29"/></svg>\n' +
  //     '                </div>\n' +
  //     '                <!--                <div class="w-1/6 justify-center  justify-center border-l border-gray-800">-->\n' +
  //     '                <!--                    <svg class="h-10 flex mx-auto" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" >-->\n' +
  //     '                <!--                    <path d="M192 512a320 320 0 10640 0 320 320 0 10-640 0z" fill="#d81e06"/></svg>-->\n' +
  //     '                <!--                </div>-->\n' +
  //     '            </div>\n' +
  //     '        </div>\n' +
  //     '    </div>\n' +
  //     '    <div class=" align-baseline flex justify-end  text-copy-primary sm:mx-0 mx-auto ">\n' +
  //     '        <a href="../statistique.html" class="text-center no-underline  border-b-4 border-black mx-3 py-2 m-2 sm:inline-block hover:bg-blue-300  hover:border-blue-600">Statistique</a>\n' +
  //     '        <a href="/stockage.html" class="text-center no-underline  border-b-4 border-black mx-3 py-2 m-2 sm:inline-block hover:bg-blue-300  hover:border-blue-600" >stockage</a>\n' +
  //     '        <a href="/connexion.html" class="text-center no-underline  border-b-4 border-black mx-3 py-2 m-2 sm:inline-block hover:bg-blue-300  hover:border-blue-600" >Connexion</a>\n' +
  //     '    </div>\n' +
  //     '</nav>';
  //
  // function getDateTime() {
  //   var date = new Date().toLocaleString(); // dd:mm:y
  //   document.getElementById("dateheure").innerHTML = date;
  //   setTimeout(getDateTime, 1000); // mise à jour du contenu "getDateTime" toutes les secondes
  // }
  //
  // getDateTime();
  //
