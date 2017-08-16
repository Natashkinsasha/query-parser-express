const chai = require('chai');

const queryParser = require('../index');

const expect = chai.expect;

describe('', function () {

    it('', function (done) {
        const req = {
            query: {
                int: '103',
                double: '6.88',
                e: '6e1',
                booleanTrue: 'true',
                booleanFalse: 'false',
                string: '7d6fg6df9gsvs',
                object: {
                    int: '103',
                    double: '6.88',
                    e: '6e1',
                    booleanTrue: 'true',
                    booleanFalse: 'false',
                    string: '7d6fg6df9gsvs'
                }
            }
        };
        queryParser()(req, {}, function () {
            expect(req).to.have.property('query');
            expect(req.query).to.have.property('int', 103);
            expect(req.query).to.have.property('double', 6.88);
            expect(req.query).to.have.property('e', 60);
            expect(req.query).to.have.property('booleanTrue', true);
            expect(req.query).to.have.property('booleanFalse', false);
            expect(req.query).to.have.property('string', '7d6fg6df9gsvs');
            expect(req.query.object).to.have.property('int', 103);
            expect(req.query.object).to.have.property('double', 6.88);
            expect(req.query.object).to.have.property('e', 60);
            expect(req.query.object).to.have.property('booleanTrue', true);
            expect(req.query.object).to.have.property('booleanFalse', false);
            expect(req.query.object).to.have.property('string', '7d6fg6df9gsvs');
            done();
        });
    });

    it('', function (done) {
        const req = {
            query: {
                int: '103',
                double: '6.88',
                e: '6e1',
                booleanTrue: 'true',
                booleanFalse: 'false',
                string: '7d6fg6df9gsvs',
                object: {
                    int: '103',
                    double: '6.88',
                    e: '6e1',
                    booleanTrue: 'true',
                    booleanFalse: 'false',
                    string: '7d6fg6df9gsvs'
                }
            }
        };
        queryParser({parseBoolean: false})(req, {}, function () {
            expect(req).to.have.property('query');
            expect(req.query).to.have.property('int', 103);
            expect(req.query).to.have.property('double', 6.88);
            expect(req.query).to.have.property('e', 60);
            expect(req.query).to.have.property('booleanTrue', 'true');
            expect(req.query).to.have.property('booleanFalse', 'false');
            expect(req.query).to.have.property('string', '7d6fg6df9gsvs');
            expect(req.query.object).to.have.property('int', 103);
            expect(req.query.object).to.have.property('double', 6.88);
            expect(req.query.object).to.have.property('e', 60);
            expect(req.query.object).to.have.property('booleanTrue', 'true');
            expect(req.query.object).to.have.property('booleanFalse', 'false');
            expect(req.query.object).to.have.property('string', '7d6fg6df9gsvs');
            done();
        });
    });

    it('', function (done) {
        const req = {
            query: {
                int: '103',
                double: '6.88',
                e: '6e1',
                booleanTrue: 'true',
                booleanFalse: 'false',
                string: '7d6fg6df9gsvs',
                object: {
                    int: '103',
                    double: '6.88',
                    e: '6e1',
                    booleanTrue: 'true',
                    booleanFalse: 'false',
                    string: '7d6fg6df9gsvs'
                }
            }
        };
        queryParser({parseNumber: false})(req, {}, function () {
            expect(req).to.have.property('query');
            expect(req.query).to.have.property('int', '103');
            expect(req.query).to.have.property('double', '6.88');
            expect(req.query).to.have.property('e', '6e1');
            expect(req.query).to.have.property('booleanTrue', true);
            expect(req.query).to.have.property('booleanFalse', false);
            expect(req.query).to.have.property('string', '7d6fg6df9gsvs');
            expect(req.query.object).to.have.property('int', '103');
            expect(req.query.object).to.have.property('double', '6.88');
            expect(req.query.object).to.have.property('e', '6e1');
            expect(req.query.object).to.have.property('booleanTrue', true);
            expect(req.query.object).to.have.property('booleanFalse', false);
            expect(req.query.object).to.have.property('string', '7d6fg6df9gsvs');
            done();
        });
    });

    it('', function (done) {
        const req = {
            query: {
                int: '103',
                double: '6.88',
                e: '6e1',
                booleanTrue: 'true',
                booleanFalse: 'false',
                string: '7d6fg6df9gsvs',
                object: {
                    int: '103',
                    double: '6.88',
                    e: '6e1',
                    booleanTrue: 'true',
                    booleanFalse: 'false',
                    string: '7d6fg6df9gsvs'
                }
            }
        };
        queryParser({parseBoolean: false, parseNumber: false})(req, {}, function () {
            expect(req).to.have.property('query');
            expect(req.query).to.have.property('int', '103');
            expect(req.query).to.have.property('double', '6.88');
            expect(req.query).to.have.property('e', '6e1');
            expect(req.query).to.have.property('booleanTrue', 'true');
            expect(req.query).to.have.property('booleanFalse', 'false');
            expect(req.query).to.have.property('string', '7d6fg6df9gsvs');
            expect(req.query.object).to.have.property('int', '103');
            expect(req.query.object).to.have.property('double', '6.88');
            expect(req.query.object).to.have.property('e', '6e1');
            expect(req.query.object).to.have.property('booleanTrue', 'true');
            expect(req.query.object).to.have.property('booleanFalse', 'false');
            expect(req.query.object).to.have.property('string', '7d6fg6df9gsvs');
            done();
        });
    });

});
