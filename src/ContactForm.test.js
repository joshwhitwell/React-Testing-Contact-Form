import React from 'react'
import * as rlt from '@testing-library/react'
import ContactForm from './components/ContactForm'

describe('ContactForm Tests', () => {
    test("renders ContactForm without crashing", () => {
      rlt.render(<ContactForm />);
    });

    test('can type in input files', () => {
        //Render Form
        rlt.render(<ContactForm />);
        
        //Grab Input Elements
        const fnInput = rlt.screen.getByLabelText(/First Name*/i)
        const lnInput = rlt.screen.getByLabelText(/Last Name*/i)
        const eInput = rlt.screen.getByLabelText(/Email*/i)
        const mInput = rlt.screen.getByLabelText(/Message/i)
        const button = rlt.screen.getByRole('button', {type: /submit/i})

        //Fire Input Events
        rlt.fireEvent.change(fnInput, {target: {name: 'firstName', value: 'Josh'}})
        rlt.fireEvent.change(lnInput, {target: {name: 'lastName', value: 'Whitwell'}})
        rlt.fireEvent.change(eInput, {target: {name: 'email', value: 'josh.whitwell@gmail.com'}})
        rlt.fireEvent.change(mInput, {target: {name: 'message', value: 'nothing much to say'}})

        //Assertions
        expect(fnInput.value === 'Josh').toBeTruthy()
        expect(lnInput.value === 'Whitwell').toBeTruthy()
        expect(eInput.value === 'josh.whitwell@gmail.com').toBeTruthy()
        expect(mInput.value === 'nothing much to say').toBeTruthy()
    })

    test('can submit form', async () => {
        //Render Form
        rlt.render(<ContactForm />)
        
        //Grab Input Elements
        const fnInput = rlt.screen.getByLabelText(/First Name*/i)
        const lnInput = rlt.screen.getByLabelText(/Last Name*/i)
        const eInput = rlt.screen.getByLabelText(/Email*/i)
        const mInput = rlt.screen.getByLabelText(/Message/i)
        const button = rlt.screen.getByRole('button', {type: /submit/i})

        //Test Cannot Submit Blank
        rlt.fireEvent.click(button)
        
        const newPerson = await rlt.screen.findByText(/required/i)
    }) 
})

    