var app = angular.module('codeEditorApp', []);

app.controller('CodeEditorController', function ($scope) {
    // Initialize code and lock state
    $scope.code = '';
    $scope.isLocked = false;

      

    // Function to copy code to clipboard
    $scope.copyCode = function () {
        if (!$scope.isLocked) {
            var codeArea = document.querySelector('.code-area');
            codeArea.select();
            document.execCommand('copy');
        }
    };

    // Function to save code to a text file
    $scope.saveCode = function () {
        var code = $scope.code;

        // Create a Blob with the code content
        var blob = new Blob([code], { type: 'text/plain' });

        // Create a temporary URL for the Blob
        var url = URL.createObjectURL(blob);

        // Create an anchor element for downloading
        var a = document.createElement('a');
        a.href = url;
        a.download = 'myCode.txt';

        // Trigger a click on the anchor to start the download
        a.click();

        // Revoke the URL to free up memory
        URL.revokeObjectURL(url);
    };

    // Function to toggle code editor lock state
    $scope.toggleLock = function () {
        $scope.isLocked = !$scope.isLocked;
    };
});
