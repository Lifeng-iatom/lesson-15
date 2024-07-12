import { formatCurrency } from "../../scripts/utils/money.js";

describe('test suite:formatCurrency',()=>{
      it('convert cents into dollars',()=>{
            expect(formatCurrency(2095)).toEqual('20.95');
      });

      it('works with 0',()=>{
            expect(formatCurrency(0)).toEqual('0.00');
      })

      it('works with negative number',()=>{
            expect(formatCurrency(-100)).toEqual('-1.00');
      })
      describe('rounding',()=>{
            it('round up',()=>{
                  expect(formatCurrency(2000.5)).toEqual('20.01');
            })
      
            it('round down',()=>{
                  expect(formatCurrency(2000.3)).toEqual('20.00');
            })
      
      })
      

})