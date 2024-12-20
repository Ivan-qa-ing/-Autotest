describe('Проверка покупки аватра', function () {

    it('e2e покупка аватара', function () {
         cy.visit('https://pokemonbattle.ru/login'); 
         cy.get(':nth-child(1) > .auth__input').type('yamakasi-1995@mail.ru') // ввел почту
         cy.get('#password').type('Niss1337') // ввел пароль
         cy.get('.auth__button').click({ force: true }) // нажал войти 
         cy.wait(2000);
         cy.get('.header__container > .header__id').click({ force: true }) // нажал на свой аватар
         cy.get('[href="/shop"] > .history-info').click({ force: true }) // нажал на смена автара
         cy.get('.available > button').first().click({ force: true }) // нажал купить аватар
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996') // номер карты
         cy.get(':nth-child(1) > .pay_base-input-v2').type('12/24') // срок
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125') // код
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('card holder') // имя
         cy.get('.pay-btn').click({ force: true }) // оплата
         cy.get('#cardnumber').type('56456') // смс код
         cy.get('.payment__submit-button').click({ force: true }) // подвердить оплату
         cy.contains('Покупка прошла успешно').should('be.visible') // вижу текст после оплаты
         cy.get('.payment__adv').click({ force: true }) // вернуться в магазин
         
    })
})