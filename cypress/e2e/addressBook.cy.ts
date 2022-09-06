/// <reference types="cypress" />


describe('Address Book', () => {   
    beforeEach(() => {
        cy.visit('https://bequest.netlify.app/') 
    })
    it('should have an Address1 column', () => { 
        cy.get('[tabindex="0"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer').should('contain.text','Address1')  
    }) 
    it('should have an Address2 column', () => { 
        cy.get('[aria-colindex="2"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer').should('contain.text','Address2')
    }) 
    it('should have an Address3 column', () => { 
        cy.get('[aria-colindex="3"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer').should('contain.text','Address3')
    }) 
    it('should have a Town column', () => { 
        cy.get('[aria-colindex="4"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer').should('contain.text','Town')
    }) 
    it('should have a Postcode column', () => { 
        cy.get('[aria-colindex="5"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer').should('contain.text','Postcode')
    }) 
    it('should have a Country column', () => { 
        cy.get('[aria-colindex="6"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer').should('contain.text','Country')
    }) 
})