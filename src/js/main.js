import { render } from "./common";
import { productList } from "./data";
// selector đến element product
// khai báo hàm show product
function showProducts(products) {
    // kiểm tra
    if (!Array.isArray(productList) || productList.length == 0) return [];

    // xử lý
    let result = "";
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        result += `
        <div class="column ">
            <a href=""><img src="${product.img}" alt="" /></a>
            <h3 class="text-[#F54748] py-10">
              <a href="">${product.name}</a>
            </h3>
            <div class="flex space-x-8">
              <span class="flex text-[#00000099]"
                ><img src="./img/Vector.png" alt="" class="mr-5" />30
                Minutes</span
              >
              <span class="flex text-[#00000099]"
                ><img
                  src="./img/ForkKnife.png"
                  alt=""
                  class="mr-5"
                />Snack</span
              >
            </div>
          </div>
        `;
    }
    // return
    return result;
}

render("product", showProducts(productList));