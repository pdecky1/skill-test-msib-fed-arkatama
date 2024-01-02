const dtesti = "https://65938db61493b0116068afba.mockapi.io/testimoni";
const MContainer = document.querySelector('#TestiContainer');

const getListM = () => {
    fetch(dtesti)
    .then(response =>  {
        return response.json();
    }).then(responseJson => {
        console.log(responseJson);
        MContainer.innerHTML = "";
        let mkn = responseJson;
        mkn.forEach(item => {
            MContainer.innerHTML += `
          <div class="w-full py-10" style="background-color: #292929;" >
            <div class="container w-full mx-auto flex flex-col md:flex-row justify-between items-center gap-y-5">
            <div class=" md:w-1/2 flex justify-center" style="">
                <div class="bg-white flex justify-center rounded-full overflow-hidden md:w-[282px] md:h-[282px] w-[150px] h-[150px]" style="">
                <img src="${item.foto}" alt="" style="" class="bg-contain w-fit">
                </div>
            </div>
            <div class="md:w-1/2">
                <div class="flex flex-col gap-y-3 md:mx-0 mx-5">
                    <p class="text-[#999] text-lg line-clamp-4 text-justify">${item.testimoni}</p>
                    <h1 class="text-[#8F00FF] text-2xl font-bold">${item.name}</h1>
                    <div class="flex flex-col gap-y-2">
                        <p class="text-white text-base ">${item.email}</p>
                        <p class="text-white text-base ">${item.asalInstansi}</p>
                    </div>
                </div>
            </div>
            </div>
          </div>
            
            `
        });

    }).catch(error => {
        console.error(error);
    })
}

document.addEventListener('DOMContentLoaded', getListM);
