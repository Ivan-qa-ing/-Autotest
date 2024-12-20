describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); // зашел на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // верный логин
         cy.get('#pass').type('iLoveqastudio1') // верный пароль
         cy.get('#loginButton').click(); // нажал войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // вижу текст после авторизации
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // вижу крестик
         cy.get('#messageHeader').should('be.visible'); // текст виден пользователям
    })
    

        it('Восстановить пароль', function () {
             cy.visit('https://login.qa.studio/'); // зашел на сайт
             cy.get('#forgotEmailButton').click(); // нажал забыл пароль
             cy.get('#mailForgot').type('asd123@mail.ru') // ввел почту восстановления
             cy.get('#restoreEmailButton').click(); // нажал отправить код
             cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверка на совпадени текста
             cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // вижу крестик
             cy.get('#messageHeader').should('be.visible'); // текст виден пользователям
        })

        it('Верный логин и Неверный пароль', function () {
         cy.visit('https://login.qa.studio/'); // зашел на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // верный логин
         cy.get('#pass').type('iLoveqastudio') // НЕверный пароль
         cy.get('#loginButton').click(); // нажал войти
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // вижу текст после авторизации
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // вижу крестик
         cy.get('#messageHeader').should('be.visible'); // текст виден пользователям
    })
    it('Верный пароль и НЕверный логин', function () {
        cy.visit('https://login.qa.studio/'); // зашел на сайт
        cy.get('#mail').type('german@dolnikov1.ru'); // Неверный логин
        cy.get('#pass').type('iLoveqastudio1') // верный пароль
        cy.get('#loginButton').click(); // нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // вижу текст после авторизации
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // вижу крестик
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователям
   })
   it('Верный пароль и логин без @', function () {
    cy.visit('https://login.qa.studio/'); // зашел на сайт
    cy.get('#mail').type('germandolnikov1.ru'); // Логин без @
    cy.get('#pass').type('iLoveqastudio1') // верный пароль
    cy.get('#loginButton').click(); // нажал войти
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // вижу текст после авторизации
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // вижу крестик
    cy.get('#messageHeader').should('be.visible'); // текст виден пользователям
})
it('Верный пароль и верный логин+(капс)=БАГ ', function () {
    cy.visit('https://login.qa.studio/'); // зашел на сайт
    cy.get('#mail').type('GerMan@Dolnikov.ru'); // верный логин (капс)
    cy.get('#pass').type('iLoveqastudio1') // верный пароль
    cy.get('#loginButton').click(); // нажал войти
    cy.get('#messageHeader').contains('Авторизация прошла успешно'); // вижу текст после авторизации
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // вижу крестик
    cy.get('#messageHeader').should('be.visible'); // текст виден пользователям
})
    })

