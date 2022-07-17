import { Selector } from 'testcafe'

class InventoryPage {
    constructor() {
        this.appLogo = Selector('.app_logo')
        this.shoppingCartBadge = Selector('.shopping-cart-badge')

        //Side Menus
        this.buttonBurgerMenu = Selector('#react-burger-menu-btn')
        this.buttonCloseBurgerMenu = Selector('#react-burger-cross-btn')
        this.buttonAllItems = Selector('#inventory_sidebar_link')
        this.buttonAbout = Selector('#about_sidebar_link')
        this.buttonLogout = Selector('#logout_sidebar_link')
        this.buttonResetAppState = Selector('#reset_sidebar_link')

        this.buttonShoppingCart = Selector('#shopping_cart_link')
        this.buttonSort = Selector('.product_sort_container')

        //Backpack
        this.titleItemBackpack = Selector('#item_4_title_link')
        this.descItemBackpack = Selector(this.titleItemBackpack.sibling('div'))
        this.priceItemBackpack = Selector('.inventory_item_label').sibling('div').find('.inventory_item_price')
        this.buttonAddCartBackpack = Selector('#add-to-cart-sauce-labs-backpack')

        //Bike Light
        this.titleItemBikeLight = Selector('#item_0_title_link')
        this.descItemBikeLight = Selector(this.titleItemBikeLight.sibling('div'))
        this.priceItemBikeLight = Selector('.inventory_item_label').sibling('div').find('.inventory_item_price')
        this.buttonAddCartBikeLight = Selector('#add-to-cart-sauce-labs-bike-light')

        //Bolt T-Shirt
        this.titleItemBoltTShirt = Selector('#item_1_title_link')
        this.descItemBoltTShirt = Selector(this.titleItemBoltTShirt.sibling('div'))
        this.priceItemBoltTShirt = Selector('.inventory_item_label').sibling('div').find('.inventory_item_price')
        this.buttonAddCartBoltTShirt = Selector('#add-to-cart-sauce-labs-bolt-t-shirt')

        //Fleece Jacket
        this.titleItemFleeceJacket = Selector('#item_5_title_link')
        this.descItemFleeceJacket = Selector(this.titleItemFleeceJacket.sibling('div'))
        this.priceItemFleeceJacket = Selector('.inventory_item_label').sibling('div').find('.inventory_item_price')
        this.buttonAddCartFleeceJacket = Selector('#add-to-cart-sauce-labs-fleece-jacket')

        //Onesie
        this.titleItemOnesie = Selector('#item_2_title_link')
        this.descItemOnesie = Selector(this.titleItemOnesie.sibling('div'))
        this.priceItemOnesie = Selector('.inventory_item_label').sibling('div').find('.inventory_item_price')
        this.buttonAddCartOnesie = Selector('#add-to-cart-sauce-labs-onesie')

        //T-Shirt (Red)
        this.titleItemTShirtRed = Selector('#item_3_title_link')
        this.descItemTShirtRed = Selector(this.titleItemTShirtRed.sibling('div'))
        this.priceItemTShirtRed = Selector('.inventory_item_label').sibling('div').find('.inventory_item_price')
        this.buttonAddCartTShirtRed = Selector('#add-to-cart-test.allthethings()-t-shirt-(red)')
    }
}
export default InventoryPage