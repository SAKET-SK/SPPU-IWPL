//IIFE hepls to maintain clean global namespace
(function() {
    var PaymentsController = function PaymentsController($scope) {
      var vm = this;
      vm.isFormHidden = true;
      vm.selectedPayment = null;
      vm.called = false;
      vm.newPayment = false;
      // vm.paymentformError = false
  
      //used to remove the highlighted class
      var removeClass = function() {
        $('div.list').find('div.customHighLight').removeClass('customHighLight');
      }
  
      vm.handleCancel = function handleCancel() {
        vm.isFormHidden = true;
        vm.selectedPayment = null;
        removeClass();
      };
      vm.handleNewPayment = function handleNewPayment() {
        vm.isFormHidden = false;
        vm.newPayment = true;
      }
      vm.handleDelete = function handleDelete() {
        var status = confirm("are you sure");
        if (status) {
          vm.payments = vm.payments.filter(function(obj) {
            return obj.id !== vm.selectedPayment.id;
          });
          vm.isFormHidden = true;
        }
      };
      vm.handleSave = function handleSave(isFormValid) {
        if (isFormValid) {
          if (vm.newPayment) {
            var ids = vm.payments.map(function(obj) {
              return obj.id
            });
            var maxId = Math.max.apply(Math, ids)
            vm.selectedPayment.id = ++maxId;
            vm.payments.push(vm.selectedPayment);
          } else {
            var idx = vm.payments.findIndex(function(obj) {
              return obj.id == vm.selectedPayment.id
            })
            if (idx > -1) {
              //angular.copy is used to avoid instant change on the list
              vm.payments[idx] = angular.copy(vm.selectedPayment);
            }
  
          }
  
  
        }else{
            vm.formError = true;
          }
      };
  
  
      vm.payments = [{
        id: 1,
        counterparty: "Test User1",
        amount: "2,240.00",
        currency: "GBP",
        valueDate: "22/10/2015",
        creditAccount: "68794832"
      }, {
        id: 2,
        counterparty: "Test User2",
        amount: "1,500.00",
        currency: "GBP",
        valueDate: "22/10/2015",
        creditAccount: "30921782"
      }, {
        id: 3,
        counterparty: "Test User3",
        amount: "22,000.00",
        currency: "USD",
        valueDate: "31/10/2015",
        creditAccount: "44236712"
      }];
    };
  
    var HighLightDirective = function() {
  
      return {
        restrict: 'AE',
        scope: false,
        controller: 'PaymentsController',
        controllerAs: 'vm',
        link: function($scope, elem, attr) {
  
          elem.bind("click", function() {
            event.preventDefault();
            var selectedItem = JSON.parse(attr.item);
            elem.parent().parent().find('div.customHighLight').removeClass('customHighLight');
            elem.addClass('customHighLight');
            $scope.$apply(function() {
              $scope.$parent.vm.selectedPayment = selectedItem;
              $scope.$parent.vm.isFormHidden = false;
              $scope.$parent.vm.newPayment = false
  
            });
          });
        }
      }
  
    }
  
    angular.module("paymentsApp", [])
      .controller("PaymentsController", PaymentsController)
      .directive('highLight', HighLightDirective)
  
  }())