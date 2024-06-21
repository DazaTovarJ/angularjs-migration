angular
  .module("codecraft")
  .config(function (
    $httpProvider,
    $resourceProvider,
    laddaProvider,
    $datepickerProvider,
    cfpLoadingBarProvider
  ) {
    laddaProvider.setOption({
      style: "expand-right",
    });
    angular.extend($datepickerProvider.defaults, {
      dateFormat: "d/M/yyyy",
      autoclose: true,
    });
    cfpLoadingBarProvider.includeBar = false;
    cfpLoadingBarProvider.parentSelector = ".spinner";
  });
