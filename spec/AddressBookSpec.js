describe('Address Book', function() { // Funktsioon mis jooksutab Address Booki teste
    var addressBook, // Lisame muutujad, et neid kasutada beforeEach funktsioonis
        thisContact;

    beforeEach(function() { // Funktsioon, mis käivitatakse ennem igat testi
        addressBook = new AddressBook(); // Initsialiseeritakse  objektid, et järgmisel testil oleks algsed muutujad
        thisContact= new Contact();
    });

    it('should be able to add a contact', function() { // Mida funktsioon peaks tegema
        addressBook.addContact(thisContact); // Lisatakse kontakt "thisContact"
        expect(addressBook.getContact(0)).toBe(thisContact); // Siin eeldame, et addressBook.getContact(0) peaks olema "thisContact"
    });

    it('should be able to delete a contact', function() {
        addressBook.addContact(thisContact); // Kasutatakse objekti meetodit "addContact", mille parameetriks on beforeEach
        addressBook.deleteContact(0); //  Sseejärel kustutatakse kontakt Array esimeselt positsioonilt,
        expect(addressBook.getContact(0)).not.toBeDefined(); // Siin ei tohiks "deleteContact" esineda "0" positsioonil
    });
});

describe('Async Address Book', function() { // Funktsioon mis jooksutab Async Address Book'i
    var addressBook = new AddressBook(); // Defineeritakse ja Initsialiseeritakse  objekt

    beforeEach(function (done) {
        addressBook.getInitialContacts(function () { // Saadakse algsed kontaktid
            done();
        });
    });


    it('should grab initial contacts', function(done) {
        expect(addressBook.initialComplete).toBe(true); // Muudetakse objekti muutuja väärtus "false" -> "true"
        done(); // Meetod lõpetas oma töö
    });
});
