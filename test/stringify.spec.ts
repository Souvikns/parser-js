import { xParserSpecParsed, xParserSpecStringified } from '../src/constants';
import { AsyncAPIDocument, BaseModel } from '../src/models';
import { stringify, unstringify } from '../src/stringify';

describe('stringify & unstringify', function() {
  describe('stringify()', function() {
    it('should not stringify normal object', function() {
      expect(stringify({})).toEqual(undefined);
    });

    it('should not stringify null object', function() {
      expect(stringify(null)).toEqual(undefined);
    });

    it('should not stringify primitive', function() {
      expect(stringify('AsyncAPI rocks!')).toEqual(undefined);
    });

    it('should not stringify BaseModel instance', function() {
      expect(stringify(new BaseModel({}))).toEqual(undefined);
    });

    it('should stringify parsed document', function() {
      expect(typeof stringify({ [xParserSpecParsed]: true })).toEqual('string');
    });

    it('should stringify (skip) stringified document', function() {
      expect(typeof stringify({ [xParserSpecParsed]: true, [xParserSpecStringified]: true })).toEqual('string');
    });

    it('should stringify AsyncAPIDocument instance', function() {
      expect(typeof stringify(new AsyncAPIDocument({ asyncapi: '2.0.0' }))).toEqual('string');
    });
  });

  describe('unstringify()', function() {
    it('should not unstringify normal object', function() {
      expect(unstringify({})).toEqual(undefined);
    });

    it('should not unstringify null object', function() {
      expect(unstringify(null)).toEqual(undefined);
    });

    it('should not stringify primitive', function() {
      expect(unstringify('AsyncAPI rocks!')).toEqual(undefined);
    });

    it('should not stringify BaseModel instance', function() {
      expect(unstringify(new BaseModel({}))).toEqual(undefined);
    });

    it('should not unstringify parsed document', function() {
      expect(unstringify({ [xParserSpecParsed]: true })).toEqual(undefined);
    });

    it('should unstringify stringified document', function() {
      expect(unstringify({ [xParserSpecParsed]: true, [xParserSpecStringified]: true })).not.toEqual(undefined);
    });
  });
});