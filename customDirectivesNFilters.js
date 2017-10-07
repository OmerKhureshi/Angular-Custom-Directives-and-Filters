var app = angular.module('app', []);

app.controller("ctrl", function ($scope) {
        $scope.name = 'omerKHURESHI';
    });

app.directive("lookAt", function () {
        return {
            restrict: 'EACM',
            replace: true,
            template: "<p>Hello, i'm your custom directive! </p>"
        };
    });


app.filter("manipulateString", function () {
    return function (input, option) {

        var res ='';
        if (!option) {
            return input;
        }
        if (option == "upper") {
            return input.toUpperCase();
        } else if (option == "lower") {
            return input.toLowerCase();
        } else if (option == "invert") {
            for (var i=0; i<input.length; i++) {
                res += (input.charAt(i) == input.charAt(i).toUpperCase()) ?
                    input.charAt(i).toLowerCase() :
                    input.charAt(i).toUpperCase();
            }

            return res;
        }

    };
});