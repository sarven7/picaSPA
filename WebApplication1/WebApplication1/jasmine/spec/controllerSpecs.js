describe('Cards controllers', function () {
    beforeEach(module('mainApp'));
    beforeEach(module('cardsServices'));

    describe('cardsListController', function () {
        var scope, ctrl, $httpBackend;

        beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('all.json').respond([
                    {
                        expansions: [
                            {
                                cards: [
                                    {
                                        nameEn: "card01"
                                    },
                                    {
                                        nameEn: "card02"
                                    }
                                ]
                            }
                        ]
                    }]);

            scope = $rootScope.$new();
            ctrl = $controller('cardsListController', { $scope: scope });
        }));

        it('should return 2 cards', function () {
            expect(scope.cards).toBeUndefined();
            $httpBackend.flush();
            expect(scope.cards.length).toBe(2);

        });
    });
});
