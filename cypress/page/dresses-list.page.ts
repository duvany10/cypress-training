class DressesListPage {

    private dressItem: string;
    private dressName: string;

    constructor() {
        this.dressItem = ".product-container";
        this.dressName = `${this.dressItem} .product-name`;
    }
    
    validateItemsNumber(itemNumber: number){
        cy.get(this.dressItem).should("have.length", itemNumber);
    }

    validateItemsName(names: string[]){
        cy.get(this.dressName).each((item, index) =>{
            cy.wrap(item).should("contain.text", names[index]);
        }) 
    }

}

export { DressesListPage }
