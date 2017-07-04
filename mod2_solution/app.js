(function(){
  'use strict';

  angular.module('ShoppingListCheckOff', [])
         .controller('ToBuyController', ToBuyController)
         .controller('AlreadyBoughtController', AlreadyBoughtController)
         .service ('ShoppingListCheckOffService', ShoppingListCheckOffService);

         ToBuyController.$inject = ['ShoppingListCheckOffService'];
         AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

/// First controller
         function ToBuyController(ShoppingListCheckOffService){
           var addItem = this;
           addItem.add_item = ShoppingListCheckOffService.addtoList;

           addItem.listofItem = ShoppingListCheckOffService.showbuyList();

           addItem.buytoBought_Item = function (item_index){
               ShoppingListCheckOffService.buytoBought(item_index);
           };
         }
/// second controller
         function AlreadyBoughtController(ShoppingListCheckOffService){
           var alreadyboughtItem = this;
           alreadyboughtItem.boughtitemList = ShoppingListCheckOffService.showboughtItem();
         }

// creating function constructor which is a service here.

         function ShoppingListCheckOffService(){
          var service = this;
          service.boughtItem = [];


          service.addtoList = [
              {
                name: "Milk",
                quantity: "2"
              },
              {
                name: "Pasta",
                quantity: "10"
              },
              {
                name: "Beer",
                quantity: "2"
              },
               {
                name: "Egg",
                quantity: "12"
              },
              {
                name: "Cookies!",
                quantity: "5"
              }
            ];

          service.showbuyList = function(){
              return service.addtoList;
          };

          service.buytoBought = function (itemIdex){
             service.boughtItem.push(service.addtoList[itemIdex]);
             service.addtoList.splice(itemIdex, 1);
          };

          service.showboughtItem = function(){
            return service.boughtItem;
          };
        }
})();
