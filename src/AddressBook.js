function AddressBook() {
    this.contacts = []; // Tühi massiiv
    this.initialComplete = false; // Massiiv mille väärtus on "false"
}

AddressBook.prototype.getInitialContacts = function(cb) { // Meetod "getInitialContacts"
    var self = this; // Muutuja, milleta test failiks

    setTimeout(function () { // Funktsioon, mis muudab objektis välja väärtust
        self.initialComplete = true;
        if (cb) {
            return cb();
        }
    }, 3);
}

AddressBook.prototype.addContact = function(contact) { // Lisatakse massiivi kontakt
    this.contacts.push(contact);
}

AddressBook.prototype.getContact= function(index) { // Tagastab masiivist kontakti
    return this.contacts[index];
}

AddressBook.prototype.deleteContact= function(index) { // Eemaldab defineeritud massiivi
    return this.contacts.splice(index, 1);
}
