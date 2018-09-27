//TO DO: write tests after refactoring the table to use Async/Await functions.
import { waitUntil } from 'async-wait-until';
import { shallow } from 'enzyme';
import nock from 'nock';
import React from 'react';
import { RepsTable } from './RepsTable';



describe("When rendering the smart table", () => {
    
    beforeAll( () => {
        // Prepare nock to respond to a request
        nock('https://api-v3.mojepanstwo.pl')
            .get('/dane/poslowie.json?page=1&conditions[poslowie.kadencja]=8')
            .reply(200, {
                    Dataobject:[
                        "this is some mock data"
                    ]
                })
            .log(console.log);
        
        
    });

    it("fetches Data",  () => {
        
        const wrapper = shallow(<RepsTable/>)
        
        setTimeout(() => {
            wrapper.update();

            expect(wrapper.state("result").length).toBe(1)

            done()
        })
              

        

        
    });
});