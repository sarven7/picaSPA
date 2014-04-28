(function () {
    'use strict';

    var serviceId = 'services';

    // TODO: replace app with your module name
    angular.module('mainApp', ['ngResource']).factory(serviceId, ['$resource', services]);

    function services($resource) {
        // Define the functions and properties to reveal.
        var urlBase = "https://dstcontrols.pica.pipreview.com/piwebapi?callback=JSON_CALLBACK";
        var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlNnakxLVkNuRXVMRnd4VTluVDNoeVdtT2NjNCJ9.eyJhdWQiOiJ1cmk6ZHN0Y29udHJvbHMuUElDQSIsImlzcyI6Imh0dHBzOi8vb3Npc29mdGRlbW9pZGVudGl0eXNlcnZpY2UuYWNjZXNzY29udHJvbC53aW5kb3dzLm5ldC8iLCJuYmYiOjEzOTg0NzA3NDYsImV4cCI6MTM5ODQ3NDM0NiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9hdXRoZW50aWNhdGlvbmluc3RhbnQiOiIyMDE0LTA0LTI2VDAwOjA1OjQ2LjQ1MFoiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2F1dGhlbnRpY2F0aW9ubWV0aG9kIjoidXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFjOmNsYXNzZXM6UGFzc3dvcmRQcm90ZWN0ZWRUcmFuc3BvcnQiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3ByaW1hcnlzaWQiOiJTLTEtNS0yMS0zMjkwNjgxNTItMTA4NTAzMTIxNC04Mzk1MjIxMTUtNzc1NCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3VwbiI6ImV4dC1vc2lzb2Z0QGRzdGNvbnRyb2xzLmxvY2FsIiwiaHR0cDovL3NjaGVtYXMub3Npc29mdC5jb20vY2xhaW1zL3JlbHlpbmdwYXJ0eXRlbmFudGlkZW50aWZpZXIiOiJkc3Rjb250cm9scyIsImlkZW50aXR5cHJvdmlkZXIiOiJodHRwOi8vYWRmcy5kc3Rjb250cm9scy5jb20vYWRmcy9zZXJ2aWNlcy90cnVzdCJ9.JS4sKZabG-6GkBZ-gg4Bf0unO9GUxdW7uiHnLK_rB2zNnewAQfJRT8YR7p2K8DzQE6penD3jf-cKRDTsDvXZZbCZXs-PRCC5VC1_a19PhRL2Ehb9UJHKMQ8imnEro0zRjDm-zbvninSv0BS3jpzGO0HWfjOu4SDSBQs5PX5rGyx2NgNE2i1xg0AggBq5sm_TI_2Rs0y10Nwb6F3IVr2SwjqHG0nG0c0rg_b7WbPi0tYroEVvjJUCGNglcX6VMLm2N0kAkCTUrzAXNh7TxuIlKCE6ZVtUg0OB0izaZ5dcz4tes3SnucaA4boepcVtC1S2Dujk6mwoVkyblL9sFM1frw";

        var service = {
            getData: getData
        };

        return service;

        function getData() {
            return $resource(urlBase, {}, {
                get: {
                    method: 'GET',
                    crossDomain: true,
                    dataType: 'jsonp',
                    headers: {
                        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
                        , 'Authorization': "Bearer " + token
                    }
                }
            })
        }
    }
})();