import {getItems} from './mixin.js'
import { URL_PRODUCT,KEY_CART } from './variables.js'
export const loadProduct = async(idElement)=>{
    const data = await getItems(URL_PRODUCT)
    if(data != undefined){
      let html = data.map((item,index)=>{
          return(
            `<div class="card mr-4 mt-4 p-2 position-relative item-subprice">
              <div class="imgcard d-xl-block d-none"></div><img class="card-img-top" src="../../images/${item.img}" alt="Card image cap"/>
              <div class="card-body" style="text-align:center">
                <h5 class="card-title"><a class='toProductDetail' data-index= ${index} href="product-detail.html">${item.name}</a></h5>
                <div style="color :yellow ; font-size: 70%">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
                </div>
                  <span class="card-text mr-1" style="color:red;">${item.price}</span>
                  <span class="card-text-price" style="text-decoration: line-through; color:#706a6a;">${item.salePrice ? item.salePrice : ""}</span>
              </div>
              <div class="hoverShow position-absolute">
                <button class="btn addtocart btn-success" data-idProduct=${item.id}><i class="fas fa-shopping-cart"></i></button>
                <button class="btn btn-success " type="button"> <i class="fas fa-search"></i></button>
              </div>
            </div>`
          )
        })
    document.getElementById(idElement).innerHTML= html.slice('')
    let cart = localStorage.getItem(KEY_CART) ? JSON.parse(localStorage.getItem('cart')) : [];
    let addtocart = document.getElementsByClassName('addtocart');
    for(var i=0; i< addtocart.length;i++ ){
      addtocart[i].onclick= function(e){
        alert('')
        e.preventDefault();
        let index = data.findIndex((item) => {
          return item.id == this.getAttribute('data-idProduct')
        })
        let item 
        if(cart.length == 0){
          item = {
            // ...data[index],
            count : 1
          }
          cart[0]=item
        }
        else{
          let indexCart =cart.findIndex((item) => {
            return item.id == this.getAttribute('data-idProduct')
          })
          if(indexCart == -1)   {cart.push(data[index]) }
          else{
            cart[indexCart].count +=1;
          }
        }
        localStorage.setItem(KEY_CART,JSON.stringify(cart))
      }
    }

    let toProductDetail = document.getElementsByClassName('toProductDetail');
    for(var i=0; i< toProductDetail.length;i++ ){
      toProductDetail[i].onclick=function(){
        localStorage.setItem('productdetail',JSON.stringify(data[this.getAttribute("data-index")]))
      }
    }
    }
}
// loadProduct('product')