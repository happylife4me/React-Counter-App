import {add} from "../add.js"
import { isTSAnyKeyword, exportAllDeclaration } from "@babel/types";

describe('add()', function(){
    it('adds two numbers', function(){
        expect(add(2,3)).toEqual(5);
    })
})

describe('add()', function(){
    it('dos not add the third number', function(){
        expect(add(2,3,5)).toEqual(add(2,3));
    })
})